// generate-may-notion.js
// Generates a Notion-paste-ready markdown file for May 2026 This Month tasks.
// Usage: node generate-may-notion.js
// Output: may-2026-notion-import.md

const fs = require('fs');
const path = require('path');

// Load PLAYBOOK + EVENTS by reading + evaling the data files
function loadData(file) {
  const src = fs.readFileSync(path.join(__dirname, file), 'utf-8');
  // Strip the leading `const X = ` and trailing `;`
  const m = src.match(/const\s+(\w+)\s*=\s*([\s\S]+?);\s*$/);
  if (!m) throw new Error('Cannot parse ' + file);
  const obj = eval('(' + m[2] + ')');
  return obj;
}
const PLAYBOOK = loadData('playbook-data.js');
const EVENTS = loadData('events-data.js');

// === Date helpers ===
const addDays = (date, days) => { const d = new Date(date); d.setDate(d.getDate() + days); return d; };
const isoDate = (date) => date.toISOString().slice(0, 10);
const fmt = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
const fmtRange = (s, e) => s === e ? fmt(s) : `${fmt(s)}–${fmt(e)}`;

function parseWhen(when, anchorDate) {
  if (!when) return null;
  const w = when.toLowerCase().trim();
  let m;
  if (m = w.match(/^days? \+(\d+) to \+(\d+)/)) return { start: isoDate(addDays(anchorDate, +m[1])), end: isoDate(addDays(anchorDate, +m[2])) };
  if (m = w.match(/^t-(\d+)w to t-(\d+)w/)) return { start: isoDate(addDays(anchorDate, -(+m[1]) * 7)), end: isoDate(addDays(anchorDate, -(+m[2]) * 7)) };
  if (m = w.match(/^t-(\d+)w/)) { const d = addDays(anchorDate, -(+m[1]) * 7); return { start: isoDate(d), end: isoDate(d) }; }
  if (m = w.match(/^t\+(\d+)w/)) { const d = addDays(anchorDate, (+m[1]) * 7); return { start: isoDate(d), end: isoDate(d) }; }
  if (m = w.match(/^day -(\d+)/)) { const d = addDays(anchorDate, -(+m[1])); return { start: isoDate(d), end: isoDate(d) }; }
  if (m = w.match(/^day \+(\d+)/)) { const d = addDays(anchorDate, +m[1]); return { start: isoDate(d), end: isoDate(d) }; }
  if (/^day 0/.test(w)) return { start: isoDate(anchorDate), end: isoDate(anchorDate) };
  return null;
}

// === Build task list (mirror renderThisMonth) ===
const allTasks = [];
function addTasks(eventName, eventIcon, tasks) {
  tasks.forEach(t => allTasks.push({ ...t, event: eventName, eventIcon }));
}

// Int'l Mast Day
addTasks("Int'l Masturbation Day Prep", '✨', [
  { dateStart: '2026-05-04', dateEnd: '2026-05-05', text: "Founder drafts + approves email + social post", channel: 'Email + Social' },
  { dateStart: '2026-05-06', dateEnd: '2026-05-06', text: 'Schedule email for May 7 9am ET + social scheduled', channel: 'Email + Social' },
  { dateStart: '2026-05-07', dateEnd: '2026-05-07', text: 'Email + social fire. Founder DM check.', channel: 'Email + Social' }
]);

// Splashy Sale
addTasks('Splashy Sale Prep', '🎯', [
  { dateStart: '2026-05-04', dateEnd: '2026-05-10', text: 'Homepage banner prep (design + stage)', channel: 'Website' },
  { dateStart: '2026-05-12', dateEnd: '2026-05-12', text: 'Homepage banner update — go live', channel: 'Website' },
  { dateStart: '2026-05-12', dateEnd: '2026-05-12', text: "Announcement banner update — switch from Mother's Day to Splashy Sale", channel: 'Website' },
  { dateStart: '2026-05-04', dateEnd: '2026-05-08', text: 'Prepare ads (sale winners duplicate + new concepts)', channel: 'Meta Ads' },
  { dateStart: '2026-05-09', dateEnd: '2026-05-11', text: 'Setup campaign (audiences, budgets, naming)', channel: 'Meta Ads' },
  { dateStart: '2026-05-12', dateEnd: '2026-05-12', text: 'Launch ads', channel: 'Meta Ads' },
  { dateStart: '2026-05-04', dateEnd: '2026-05-08', text: 'Prepare copy for Splashy Sale', channel: 'Google Ads' },
  { dateStart: '2026-05-09', dateEnd: '2026-05-11', text: 'Setup campaign', channel: 'Google Ads' },
  { dateStart: '2026-05-12', dateEnd: '2026-05-12', text: 'Launch ads', channel: 'Google Ads' },
  { dateStart: '2026-05-04', dateEnd: '2026-05-04', text: 'Splashy Sale teaser #1 (warm-up)', channel: 'Email' },
  { dateStart: '2026-05-06', dateEnd: '2026-05-06', text: 'Splashy Sale teaser #2: VIP early-access offer', channel: 'Email' },
  { dateStart: '2026-05-08', dateEnd: '2026-05-08', text: 'Final teaser email', channel: 'Email' },
  { dateStart: '2026-05-11', dateEnd: '2026-05-11', text: 'VIP early-access email + SMS fires (24-48hr window)', channel: 'Email' },
  { dateStart: '2026-05-12', dateEnd: '2026-05-12', text: 'Sale announcement email (start day)', channel: 'Email' },
  { dateStart: '2026-05-19', dateEnd: '2026-05-19', text: 'Mid-sale email #1 (social proof / customer reactions)', channel: 'Email' },
  { dateStart: '2026-05-27', dateEnd: '2026-05-27', text: 'Mid-sale email #2 (reviews / feature)', channel: 'Email' },
  { dateStart: '2026-06-02', dateEnd: '2026-06-02', text: 'Sale finale "last chance" email', channel: 'Email' },
  { dateStart: '2026-05-04', dateEnd: '2026-05-04', text: 'Content calendar locked: IG (3-5 feed + 5-10 stories) + TikTok (5+ teasers). Theme = Splashy / Wet.', channel: 'Social' },
  { dateStart: '2026-05-04', dateEnd: '2026-05-31', text: 'Daily 2x cadence (incl. stories) sustained through end of month', channel: 'Social' },
  { dateStart: '2026-05-12', dateEnd: '2026-05-12', text: 'Sale announcement post', channel: 'Social' },
  { dateStart: '2026-05-12', dateEnd: '2026-06-04', text: 'Sale running theme content (Splashy / Wet aesthetic)', channel: 'Social' },
  { dateStart: '2026-05-04', dateEnd: '2026-05-04', text: 'Splashy Sale press kit ready (one-pager + assets)', channel: 'PR / Press' },
  { dateStart: '2026-05-08', dateEnd: '2026-05-08', text: 'Press release wired (PR Newswire, fires May 12 6am ET)', channel: 'PR / Press' }
]);

// Dirty Jack
addTasks('Dirty Jack Content Drop', '🎬', [
  { dateStart: '2026-05-04', dateEnd: '2026-05-10', text: 'Finalize Dirty Jack creative (video / social / email asset)', channel: 'Creative' },
  { dateStart: '2026-05-11', dateEnd: '2026-05-13', text: 'Schedule across IG, TikTok, email — coordinated drop May 14', channel: 'Email + Social' },
  { dateStart: '2026-05-14', dateEnd: '2026-05-14', text: 'Drops on IG + TikTok + email same morning', channel: 'Email + Social' },
  { dateStart: '2026-05-14', dateEnd: '2026-05-17', text: 'Watch performance — if winning, amplify as paid ad creative', channel: 'Meta Ads' }
]);

// Waterproof Blanket Launch (from PLAYBOOK)
const blanketDate = new Date('2026-05-18');
PLAYBOOK.channels.forEach(channel => {
  ['pre', 'launch', 'post'].forEach(phase => {
    const ph = channel.phases[phase];
    if (!ph || !ph.tasks) return;
    ph.tasks.forEach(t => {
      const parsed = parseWhen(t.when, blanketDate);
      if (!parsed) return;
      allTasks.push({
        event: 'Waterproof Blanket Launch',
        eventIcon: '🚀',
        dateStart: parsed.start,
        dateEnd: parsed.end,
        text: t.text,
        channel: `${channel.icon} ${channel.name}`,
        owner: t.owner,
        phase
      });
    });
  });
});

// Snack Pack Launch (from PLAYBOOK)
const snackDate = new Date('2026-05-26');
PLAYBOOK.channels.forEach(channel => {
  ['pre', 'launch', 'post'].forEach(phase => {
    const ph = channel.phases[phase];
    if (!ph || !ph.tasks) return;
    ph.tasks.forEach(t => {
      const parsed = parseWhen(t.when, snackDate);
      if (!parsed) return;
      allTasks.push({
        event: 'Snack Pack Launch',
        eventIcon: '🚀',
        dateStart: parsed.start,
        dateEnd: parsed.end,
        text: t.text,
        channel: `${channel.icon} ${channel.name}`,
        owner: t.owner,
        phase
      });
    });
  });
});

// Miami Swim Week
addTasks('Miami Swim Week Event Prep', '🎉', [
  { dateStart: '2026-05-14', dateEnd: '2026-05-14', text: '⭐ Confirm venue (location + date + capacity)', channel: 'Events' },
  { dateStart: '2026-05-14', dateEnd: '2026-05-14', text: '⭐ Confirm event theme (creative direction, mood, color palette)', channel: 'Events' },
  { dateStart: '2026-05-14', dateEnd: '2026-05-14', text: 'Guest list finalized (press + influencers + key contacts)', channel: 'Events' },
  { dateStart: '2026-05-14', dateEnd: '2026-05-14', text: 'Invitations sent + RSVP tracking active', channel: 'Events' },
  { dateStart: '2026-05-14', dateEnd: '2026-05-14', text: 'Photo + video crew booked', channel: 'Events' },
  { dateStart: '2026-05-18', dateEnd: '2026-05-25', text: 'Press / influencer outreach for swim-week-attending partners', channel: 'PR + Influencer' },
  { dateStart: '2026-05-21', dateEnd: '2026-05-21', text: '⭐ Confirm gift bags + props (contents, quantities, packaging)', channel: 'Events' },
  { dateStart: '2026-05-21', dateEnd: '2026-05-21', text: 'Catering / food + drink confirmed', channel: 'Events' },
  { dateStart: '2026-05-21', dateEnd: '2026-05-21', text: 'AV / sound / lighting / music playlist locked', channel: 'Events' },
  { dateStart: '2026-05-21', dateEnd: '2026-05-21', text: 'Run-of-show locked (founder talk, photo moment, timing)', channel: 'Events' },
  { dateStart: '2026-05-25', dateEnd: '2026-05-25', text: 'Final RSVPs + headcount confirmed', channel: 'Events' },
  { dateStart: '2026-05-25', dateEnd: '2026-05-25', text: 'Press kits + take-aways prepped', channel: 'Events' },
  { dateStart: '2026-05-28', dateEnd: '2026-05-28', text: '"Pool Pack" or swim-themed bundle goes live', channel: 'Web' },
  { dateStart: '2026-05-28', dateEnd: '2026-05-31', text: 'Event days: execute + capture content', channel: 'Events' },
  { dateStart: '2026-06-01', dateEnd: '2026-06-01', text: 'Founder thank-you to attendees + team thank-you with tag-asks', channel: 'Founder + Team' },
  { dateStart: '2026-06-07', dateEnd: '2026-06-07', text: 'Calculate organic CPM (cost / earned impressions × 1000)', channel: 'Events' }
]);

// Sort by date
allTasks.sort((a, b) => a.dateStart.localeCompare(b.dateStart));

// === Generate Markdown ===
let md = `# 🚨 May 2026 — Hello Nancy This Month

> **Today:** Mon May 4, 2026
> **Total tasks:** ${allTasks.length}
> **Auto-generated** from playbook app — paste into Notion, edit freely.
> **Live source:** https://momokoashi.github.io/hello-nancy-playbook/

---

`;

// === Weekly View ===
const weekStarts = [
  { label: 'May 4-10 (THIS WEEK)',   start: '2026-05-04', end: '2026-05-10' },
  { label: 'May 11-17',  start: '2026-05-11', end: '2026-05-17' },
  { label: 'May 18-24',  start: '2026-05-18', end: '2026-05-24' },
  { label: 'May 25-31',  start: '2026-05-25', end: '2026-05-31' },
  { label: 'Jun 1-7',    start: '2026-06-01', end: '2026-06-07' }
];

md += `## 📅 Weekly View — sorted by date

`;
weekStarts.forEach(w => {
  const wTasks = allTasks.filter(t => t.dateStart >= w.start && t.dateStart <= w.end).sort((a, b) => a.dateStart.localeCompare(b.dateStart));
  md += `### 📅 ${w.label} — ${wTasks.length} tasks\n\n`;
  if (wTasks.length === 0) {
    md += `*No tasks this week.*\n\n`;
  } else {
    wTasks.forEach(t => {
      const dateLabel = fmtRange(t.dateStart, t.dateEnd);
      const ownerStr = t.owner ? ` · Owner: ${t.owner}` : '';
      md += `- [ ] **${dateLabel}** · ${t.eventIcon} ${t.event} — ${t.text} *(${t.channel}${ownerStr})*\n`;
    });
    md += `\n`;
  }
});

md += `---

## 🗂️ Per-Event Full Checklists — sorted by start date

`;

// Group by event, sort by earliest task date
const eventGroups = {};
allTasks.forEach(t => {
  if (!eventGroups[t.event]) eventGroups[t.event] = { name: t.event, icon: t.eventIcon, tasks: [] };
  eventGroups[t.event].tasks.push(t);
});
const sortedEventGroups = Object.values(eventGroups).sort((a, b) => a.tasks[0].dateStart.localeCompare(b.tasks[0].dateStart));

sortedEventGroups.forEach(group => {
  const tasks = group.tasks.sort((a, b) => a.dateStart.localeCompare(b.dateStart));
  const earliest = tasks[0].dateStart;
  const latest = tasks.reduce((max, t) => t.dateEnd > max ? t.dateEnd : max, tasks[0].dateEnd);
  md += `### ${group.icon} ${group.name} — ${tasks.length} tasks · ${fmtRange(earliest, latest)}\n\n`;

  // Group by channel within event
  const byChannel = {};
  tasks.forEach(t => {
    const ch = t.channel || 'General';
    if (!byChannel[ch]) byChannel[ch] = [];
    byChannel[ch].push(t);
  });
  Object.entries(byChannel).forEach(([ch, chTasks]) => {
    md += `**${ch}**\n\n`;
    chTasks.forEach(t => {
      const dateLabel = fmtRange(t.dateStart, t.dateEnd);
      const ownerStr = t.owner ? ` · Owner: ${t.owner}` : '';
      md += `- [ ] **${dateLabel}** — ${t.text}${ownerStr}\n`;
    });
    md += `\n`;
  });
});

md += `---

## How to use this in Notion

1. Open Notion → create a **new page** (any workspace)
2. Title it: **May 2026 — Hello Nancy This Month**
3. Click in the page body, paste this entire file (Cmd/Ctrl+V)
4. Notion auto-converts:
   - \`## ## ###\` headings → page sections
   - \`- [ ]\` → checkbox to-dos
   - \`**bold**\` → bold text
5. Edit, reorder, add owners, add notes — it's yours.

**Tip:** To turn this into a database (filterable, sortable), create a Notion database, set columns: Task / Date / Event / Channel / Status / Owner. Copy each row from this doc into the database.

**Sync back:** This doc is a snapshot. To re-pull from the live app, run \`node generate-may-notion.js\` again — it overwrites this file with the latest state.
`;

const outFile = path.join(__dirname, 'may-2026-notion-import.md');
fs.writeFileSync(outFile, md, 'utf-8');
console.log('OK Wrote:', outFile);
console.log('Tasks:', allTasks.length);
console.log('Events:', sortedEventGroups.length);
console.log('Size:', (fs.statSync(outFile).size / 1024).toFixed(1), 'KB');
