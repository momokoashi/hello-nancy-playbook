// notion-create-page.js
// Creates a Notion page from may-2026-notion-import.md under "Team Home" parent.
// Uses NOTION_TOKEN env var.

const fs = require('fs');
const https = require('https');

const TOKEN = process.env.NOTION_TOKEN;
if (!TOKEN) { console.error('Missing NOTION_TOKEN env'); process.exit(1); }

const PARENT_PAGE_ID = process.env.PARENT_PAGE_ID || '6033ed74-4a09-46eb-95f9-838f3c9ea9b8'; // Team Home
const MD_FILE = process.env.MD_FILE || '/root/may-2026-notion-import.md';
const PAGE_TITLE = process.env.PAGE_TITLE || 'May 2026 — Hello Nancy This Month';

// === Markdown → Notion blocks parser ===
function parseRichText(text) {
  // Truncate to 1900 chars (Notion limit 2000)
  text = text.substring(0, 1900);
  const segments = [];

  // Handle **bold**, *italic*, `code` in order. Simple regex (no nesting).
  // Walk through text, building rich_text array.
  let remaining = text;
  while (remaining.length > 0) {
    const boldMatch = remaining.match(/^(.*?)\*\*([^*]+)\*\*(.*)$/);
    const italicMatch = remaining.match(/^(.*?)\*([^*]+)\*(.*)$/);
    const codeMatch = remaining.match(/^(.*?)`([^`]+)`(.*)$/);

    // Pick whichever comes first
    const candidates = [
      { type: 'bold', match: boldMatch },
      { type: 'code', match: codeMatch },
      { type: 'italic', match: italicMatch }
    ].filter(c => c.match).sort((a, b) => a.match[1].length - b.match[1].length);

    if (candidates.length === 0) {
      if (remaining) segments.push({ type: 'text', text: { content: remaining } });
      break;
    }

    const c = candidates[0];
    const [, before, content, after] = c.match;
    if (before) segments.push({ type: 'text', text: { content: before } });
    const annotations = {};
    if (c.type === 'bold') annotations.bold = true;
    if (c.type === 'italic') annotations.italic = true;
    if (c.type === 'code') annotations.code = true;
    segments.push({ type: 'text', text: { content }, annotations });
    remaining = after;
  }

  if (segments.length === 0) segments.push({ type: 'text', text: { content: ' ' } });
  return segments;
}

function parseMd(md) {
  const lines = md.split('\n');
  const blocks = [];
  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');
    if (!line.trim()) continue;

    let m;
    if (m = line.match(/^# (.+)$/)) {
      blocks.push({ object: 'block', type: 'heading_1', heading_1: { rich_text: parseRichText(m[1]) } });
    } else if (m = line.match(/^## (.+)$/)) {
      blocks.push({ object: 'block', type: 'heading_2', heading_2: { rich_text: parseRichText(m[1]) } });
    } else if (m = line.match(/^### (.+)$/)) {
      blocks.push({ object: 'block', type: 'heading_3', heading_3: { rich_text: parseRichText(m[1]) } });
    } else if (line.match(/^-{3,}$/)) {
      blocks.push({ object: 'block', type: 'divider', divider: {} });
    } else if (m = line.match(/^> (.+)$/)) {
      blocks.push({ object: 'block', type: 'quote', quote: { rich_text: parseRichText(m[1]) } });
    } else if (m = line.match(/^- \[([ x])\] (.+)$/)) {
      blocks.push({ object: 'block', type: 'to_do', to_do: { rich_text: parseRichText(m[2]), checked: m[1] === 'x' } });
    } else if (m = line.match(/^- (.+)$/)) {
      blocks.push({ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: parseRichText(m[1]) } });
    } else {
      blocks.push({ object: 'block', type: 'paragraph', paragraph: { rich_text: parseRichText(line) } });
    }
  }
  return blocks;
}

// === Notion API helper ===
function notionRequest(method, endpoint, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : '';
    const req = https.request({
      method,
      hostname: 'api.notion.com',
      path: endpoint,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let chunks = '';
      res.on('data', c => chunks += c);
      res.on('end', () => {
        try { resolve(JSON.parse(chunks)); } catch (e) { reject({ raw: chunks, status: res.statusCode }); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

// === Main ===
(async () => {
  const md = fs.readFileSync(MD_FILE, 'utf-8');
  const blocks = parseMd(md);
  console.log('Parsed', blocks.length, 'blocks from', MD_FILE);

  // Create page with first 100 blocks
  const firstBatch = blocks.slice(0, 100);
  const remaining = blocks.slice(100);

  const createBody = {
    parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
    icon: { type: 'emoji', emoji: '🚨' },
    properties: {
      title: { title: [{ type: 'text', text: { content: PAGE_TITLE } }] }
    },
    children: firstBatch
  };

  const createRes = await notionRequest('POST', '/v1/pages', createBody);
  if (!createRes.id) {
    console.error('FAILED to create page:', JSON.stringify(createRes, null, 2));
    process.exit(1);
  }

  const pageId = createRes.id;
  console.log('Created page:', pageId);
  console.log('URL:', createRes.url);

  // Append remaining blocks in chunks of 100
  for (let i = 0; i < remaining.length; i += 100) {
    const chunk = remaining.slice(i, i + 100);
    const appendRes = await notionRequest('PATCH', `/v1/blocks/${pageId}/children`, {
      children: chunk
    });
    if (!appendRes.results) {
      console.error('FAILED to append batch starting at', i + 100, ':', JSON.stringify(appendRes, null, 2));
      // Continue with remaining batches anyway
      continue;
    }
    console.log(`Appended chunk ${Math.floor(i / 100) + 2} (${chunk.length} blocks, total now ${Math.min(i + 100 + 100, blocks.length)})`);
  }

  console.log('');
  console.log('🎉 DONE!');
  console.log('Page URL:', createRes.url);
})().catch(e => { console.error('FATAL:', e); process.exit(1); });
