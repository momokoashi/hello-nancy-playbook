// =====================================================================
// HELLO NANCY — LAUNCH PLAYBOOK DATA
// =====================================================================
//
// HOW TO EDIT THIS FILE:
//   1. Open in any text editor (VS Code, Notepad, Sublime, anything)
//   2. Find the channel you want to change (search by id or name)
//   3. Edit the text — keep the structure (commas, brackets, quotes)
//   4. Save the file
//   5. Refresh the playbook page in your browser → your changes show
//
// STRUCTURE OF EACH CHANNEL:
//   {
//     id: "unique-id",            ← lowercase, no spaces, used internally
//     name: "Display Name",       ← shown in UI
//     tier: 1-5,                  ← which tier (1 = Demand Gen, etc.)
//     icon: "📱",                 ← any emoji
//     summary: "One sentence",    ← shown under channel name in matrix
//     phases: {
//       pre:    { ... },          ← pre-launch
//       launch: { ... },          ← launch day + week
//       post:   { ... }           ← post-launch + retro
//     }
//   }
//
// EACH PHASE HAS:
//   summary:     "shown in matrix cell"
//   howToThink:  "longer explanation, shown in drawer 'how to think about it' box"
//   tasks:       [{ when: "T-Xw", text: "do this", owner: "..." }]
//   kpis:        [{ metric: "name", floor: "kill bar", good: "...", great: "..." }]
//   examples:    [{ type: "...", title: "...", text: "details" }]
//
// COMMON `when` VALUES:
//   "T-12w" / "T-8w" / "T-4w" / "T-2w" / "T-1w Mon" / "T-1w Fri"
//   "Day -1" / "Day 0 9am" / "Day +1" / "Days +1 to +4"
//   "T+1w" / "T+2w" / "T+4w" / "T+6w"
//
// =====================================================================
//   QUICK REFERENCE — STANDARD ROAS BAR (PAID CHANNELS):
//     Floor <1.3x   |   Good 1.3-1.8x   |   Great 1.8x+    (target 1.5x)
//   META RETARGETING (warmer audience, higher bar):
//     Floor <1.5x   |   Good 1.5-2x     |   Great >2x
// =====================================================================

const PLAYBOOK = {
  // -------------------------------------------------------------------
  // TIER DEFINITIONS — color-codes the section dividers in matrix
  // -------------------------------------------------------------------
  tiers: [
    { id: 1, name: "Demand Generation", color: "#fef3c7" },
    { id: 2, name: "Capture & Convert", color: "#dbeafe" },
    { id: 3, name: "Trust & Seeding",   color: "#fce7f3" },
    { id: 4, name: "Amplification",     color: "#d1fae5" },
    { id: 5, name: "Foundation",        color: "#e0e7ff" }
  ],

  // -------------------------------------------------------------------
  // FUTURE / DEFERRED CHANNELS — not active now, may revisit later
  // Shown in a small section at the bottom of the matrix.
  // -------------------------------------------------------------------
  future: [
    { name: "Native Ads (Taboola/Outbrain)", reason: "Advertorial is now its own active channel — skip Native paid as separate channel" },
    { name: "Pinterest Paid",                reason: "Not currently in HN spend mix" },
    { name: "Reddit Paid",                   reason: "Reddit organic seeding optional under Social; paid not in mix" },
    { name: "Podcast (Founder Guesting)",    reason: "Dropped — revisit when founder bandwidth allows" },
    { name: "SMS",                           reason: "Dropped — folded into Email channel where relevant" },
    { name: "Affiliate / Publisher",         reason: "Killed — publisher affiliate not in mix; customer-driven Affiliate (renamed from Loyalty) replaces it as optional" },
    { name: "Internal RACI",                 reason: "Killed as a channel — RACI lives in launch ops, not in this playbook" }
  ],

  // -------------------------------------------------------------------
  // CHANNELS — the meat. Add/edit/reorder freely.
  // -------------------------------------------------------------------
  channels: [

    // ===================================================================
    // TIER 1 — DEMAND GENERATION
    // ===================================================================

    // ===== META ADS =====
    // Largest spend channel. Volume engine. ROAS split by audience type.
    // Creative strategy: 5-10 winning duplicates + 5-10 new concepts = 10-20 at launch.
    {
      id: "meta",
      name: "Meta Ads",
      tier: 1,
      icon: "📱",
      summary: "Largest spend channel. Volume engine. Creative mix: 5-10 winning duplicates + 5-10 new concepts.",
      phases: {
        pre: {
          summary: "T-6w brief creative → T-4w teaser ads to waitlist → T-2w prep launch creative.",
          howToThink: "Pre-launch Meta has TWO jobs: (1) teaser ads that drive WAITLIST signups, NOT PDP traffic. (2) Build the launch creative library. Source creative from any of: Eyeball Factory creators, influencers, self-shot, or AI-generated art+video. Don't cap variants at 5 — at launch you want 10-20 (5-10 winning concepts duplicated from existing campaigns + 5-10 new concepts).",
          tasks: [
            { when: "T-6w", text: "Brief creative team for teaser ads (static + video). Source: Eyeball Factory / influencers / self-shot / AI-generated.", owner: "Creative" },
            { when: "T-4w", text: "Teaser ads GO LIVE → drive traffic to WAITLIST (not PDP)", owner: "Paid" },
            { when: "T-2w", text: "Prep launch creative library: 5-10 winning duplicates + 5-10 new concepts (10-20 total)", owner: "Creative" },
            { when: "T-1w Mon", text: "Submit launch creative to Meta for review (72hr buffer)", owner: "Paid" },
            { when: "T-1w Fri", text: "Verify creative approved + queued; backups for any rejected", owner: "Paid" },
            { when: "T-1w Fri", text: "Test purchase: pixel + CAPI fires with NEW SKU's product_id", owner: "Paid" }
          ],
          kpis: [
            { metric: "Teaser ROAS (waitlist signups)", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: [
            { type: "creative_mix", title: "Launch creative library composition", text: "Take all winning variations from existing campaigns → DUPLICATE them (5-10 winners). Add 5-10 NEW concepts (fresh angles). Launch with 10-20 total. Don't cap at 5." },
            { type: "screenshot", title: "Example launch creative" }
          ]
        },
        launch: {
          summary: "Launch TOF + bundled MOF/BOF retargeting (page visitors + cart abandoners + waitlist).",
          howToThink: "TOF (top-of-funnel) for cold prospecting. MOF/BOF bundle: retargeting page visitors + cart abandoners + waitlist non-buyers as one combined audience set. Track ROAS by audience type — TOF should hit 1.3-1.8x, MOF/BOF should hit 1.5-2x (warmer audience, higher bar).",
          tasks: [
            { when: "Day 0", text: "Launch TOF campaign (cold prospecting)", owner: "Paid" },
            { when: "Day 0", text: "Launch retargeting (MOF + BOF bundle: page visitors + cart abandoners + waitlist non-buyers)", owner: "Paid" }
          ],
          kpis: [
            { metric: "ROAS — TOF (cold)", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" },
            { metric: "ROAS — MOF/BOF (retargeting)", floor: "<1.5x", good: "1.5-2x", great: ">2x" }
          ],
          examples: []
        },
        post: {
          summary: "Cut losers. Double down on winners. Test advertorials. Refresh with creator content.",
          howToThink: "Week 1 produces winners and losers. Cut bottom performers, scale top by 50%+. Now test the advertorial funnel: send traffic to listicle/review LP (not PDP). Send new product to content creators → they make organic-style content → run those as ads.",
          tasks: [
            { when: "T+1w", text: "Score launch-week ROAS; cut losers (bottom 50%)", owner: "Paid" },
            { when: "T+1w", text: "Scale winners (top 20%) by 50%+ budget", owner: "Paid" },
            { when: "T+2w", text: "Test new creative ideas continuously (refresh batch)", owner: "Creative + Paid" },
            { when: "T+2w", text: "TEST ADVERTORIAL FUNNEL: route traffic to listicle/review LP (see Advertorial channel)", owner: "Paid" },
            { when: "T+2w", text: "Send new product to content creators → make ad-able content → run as ads", owner: "Influencer + Paid" },
            { when: "T+4w", text: "Final Meta launch retro: what worked, what didn't", owner: "Paid" }
          ],
          kpis: [
            { metric: "Always-on ROAS (T+2w onwards)", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: [
            { type: "decision_rule", title: "Kill rule for creative", text: "Cut a creative if: spent ≥ 3x AOV with no purchase, OR ROAS < 1.0 after meaningful spend." }
          ]
        }
      }
    },

    // ===== GOOGLE ADS =====
    {
      id: "google",
      name: "Google Ads",
      tier: 1,
      icon: "🔍",
      summary: "Mostly post-launch channel. Brand search already always-on. Non-brand + YouTube + PMax + Demand Gen as launch fires.",
      phases: {
        pre: {
          summary: "Mostly skip. Optional: build YouTube ad / PMax / non-brand search if useful for the product.",
          howToThink: "Brand search is already running always-on (don't touch it). Pre-launch Google work is optional and product-dependent.",
          tasks: [
            { when: "T-2w (optional)", text: "Build YouTube ad (how-to / product video)", owner: "Paid" },
            { when: "T-1w (optional)", text: "Build PMax campaign + product listing", owner: "Paid" },
            { when: "T-1w (optional)", text: "Set up non-brand keyword search (ready for Day 0)", owner: "Paid" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "Day 0: non-brand search + YouTube + PMax + Demand Gen go live (depending on product).",
          howToThink: "Google ramps slower than Meta — give it 3-5 days to find rhythm before judging. Brand search will spike from PR + influencer mentions; budget for it.",
          tasks: [
            { when: "Day 0 7am", text: "Non-brand search + YouTube + PMax + Demand Gen live", owner: "Paid" }
          ],
          kpis: [
            { metric: "ROAS", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: []
        },
        post: {
          summary: "Monitor and optimize every 3-5 days. One task, fast cadence.",
          howToThink: "Don't wait 2 weeks. Revisit every 3-5 days: audit search terms for negatives, add new converting keywords, pause non-profitable ones.",
          tasks: [
            { when: "Every 3-5 days", text: "Monitor and optimize: negative keyword audit, add new keywords based on search terms, pause non-profitable keywords", owner: "Paid" }
          ],
          kpis: [
            { metric: "ROAS", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: []
        }
      }
    },

    // ===== PR / PRESS =====
    {
      id: "press",
      name: "PR / Press",
      tier: 1,
      icon: "📰",
      summary: "Compressed 4-week timeline. Press kit + samples → coverage drops Day 0. Don't pressure post-launch.",
      phases: {
        pre: {
          summary: "T-4w prepare press kit + one-pager + pitches. Coverage publishes Day 0 (or after).",
          howToThink: "HN moves fast — no 12w runway. PR agency handles sample shipping based on the kit shared. Pitch the founder's STORY, not the spec sheet. Wellness/intimate has 5-10 sharp angles — pick one.",
          tasks: [
            { when: "T-4w", text: "Prepare one-page story (hook + brand voice + founder bio + product summary — used in every pitch)", owner: "PR" },
            { when: "T-4w", text: "Prepare press kit assets (high-res images, videos, product description, product explanation, FAQ, expert quotes, contact + embargo terms)", owner: "PR" },
            { when: "T-4w", text: "Long-lead pitch drafted (tier-1 print/long-lead pubs — 4-6w lead time)", owner: "PR" },
            { when: "T-4w", text: "Short-lead pitch drafted (digital-first pubs — 1-3w lead time)", owner: "PR" },
            { when: "T-4w to T-3w", text: "Send press kit to PR agency (only if product is available; otherwise wait until after launch)", owner: "PR" },
            { when: "T-1w", text: "Press release wired (PR Newswire, scheduled Day 0 6am ET)", owner: "PR" }
          ],
          kpis: [
            { metric: "Press samples delivered", floor: "<5", good: "10-15", great: "20+" },
            { metric: "Press agreed to feature (confirmed embargo / commitment)", floor: "<3", good: "3-10", great: "10+" }
          ],
          examples: [
            { type: "pitch_difference", title: "1-page story vs long-lead vs short-lead pitch — what's the difference?", text: "ONE-PAGE STORY = brand's foundational launch narrative (hook + founder voice + why now + product summary). Same content for everyone. The 'executive summary' attached to every pitch. LONG-LEAD PITCH = customized email to print + long-lead digital pubs (Vogue, NYT print, Elle — 4-6+ week publishing lead time). Deeper angle, exclusive offer if possible. Sent T-6w to T-8w. SHORT-LEAD PITCH = customized email to digital-first pubs (Cosmo digital, Bustle, Refinery29, The Cut — 1-3 week publishing lead time). Tighter: hook + product + sample offer + quick yes/no ask. Sent T-3w to T-4w. PRESS KIT = bundle of assets attached to every pitch (high-res images, videos, product description, FAQ, expert quotes, contact, embargo terms)." },
            { type: "pitch_angle", title: "Sharp pitch angles for HN", text: "1. 'Why women's pleasure is a public health issue.' 2. 'The wellness category VCs forgot.' 3. 'What 100 pelvic floor PTs told us.' 4. 'The body-safe certification crisis.' Lead with one, backup with the rest." },
            { type: "press_kit_contents", title: "What goes in the press kit", text: "One-page story + high-res images (lifestyle, product, founder portrait) + videos (how-to, brand story) + product description (technical specs) + product explanation (consumer-friendly) + FAQ + founder bio + expert quotes + contact info + embargo terms." },
            { type: "screenshot", title: "Sample press kit page" }
          ]
        },
        launch: {
          summary: "Coverage drops Day 0 (ideal) or Day +1 to +21 (acceptable second wave).",
          howToThink: "Reality: embargoes prevent EARLY publish, they don't compel SAME-DAY publish. Long-lead pubs publish on their editorial calendar. Expect 1-2 hits Day 0, the rest land Days +1 to +21. Press CPM (cost ÷ earned impressions) is the lead success metric.",
          tasks: [
            { when: "Day 0 6am", text: "Embargo lifts. Confirmed Day-0 placements go live.", owner: "PR" },
            { when: "Day 0 → +21d", text: "Track second-wave placements + amplify each", owner: "PR" }
          ],
          kpis: [
            { metric: "Press CPM (PR cost ÷ earned impressions × 1000)", floor: ">$5", good: "$0.50-3", great: "<$0.50" },
            { metric: "Backlinks from coverage", floor: "<5", good: "10-25", great: "30+" },
            { metric: "Brand search volume lift (coverage week)", floor: "<10%", good: "+20-50%", great: "+100%+" },
            { metric: "Traffic to landing pages from press", floor: "<500 visits", good: "2-5K visits", great: "10K+ visits" },
            { metric: "Clicks on links inside articles", floor: "<200", good: "1-3K", great: "5K+" }
          ],
          examples: []
        },
        post: {
          summary: "Don't pressure. Let press relationships breathe. Build for next launch.",
          howToThink: "Each placement = 6 months of relationship value. After launch: thank, share their work, but DON'T keep pushing the same contacts for more coverage.",
          tasks: [
            { when: "T+1w", text: "Thank journalists who placed coverage; share their work", owner: "PR + Founder" },
            { when: "T+4w", text: "Pitch list updated for next launch (no follow-up pressure on this launch's contacts)", owner: "PR" }
          ],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== INFLUENCER (PAID) =====
    {
      id: "influencer",
      name: "Influencer (Paid)",
      tier: 1,
      icon: "📸",
      summary: "Conditional channel. Run only if product fits + we want to. Whitelisting non-negotiable.",
      phases: {
        pre: {
          summary: "Identify, sign, brief, ship, get content shot. Whitelisting + 6mo usage rights in every contract.",
          howToThink: "Optional channel — only run if product warrants it AND HN wants influencer in the mix. When running: whitelisting (creator's handle running brand ads) is non-negotiable, typically 1.5-2x ROAS lift over brand-direct creative. Mid-tier (200-500K) outperforms macro for conversion in this category.",
          tasks: [
            { when: "T-8w", text: "Influencer identification + outreach list (30+)", owner: "Influencer" },
            { when: "T-6w", text: "Outreach sent (20+ pitches)", owner: "Influencer" },
            { when: "T-5w", text: "Contracts signed (rates + 6mo usage rights + whitelisting)", owner: "Influencer" },
            { when: "T-4w", text: "Briefs delivered + products shipped", owner: "Influencer" },
            { when: "T-3w to T-1w", text: "Content shot + approved", owner: "Influencer" },
            { when: "T-1w", text: "Whitelisting / Spark Ads access granted by creators", owner: "Paid" }
          ],
          kpis: [],
          examples: [
            { type: "brief_template", title: "Influencer brief structure", text: "1. The why (1 sentence). 2. The product (3 features). 3. The audience. 4. The format. 5. CTA (your code). 6. What NOT to say (claims, comparisons). 7. Approval timeline (48hr review)." }
          ]
        },
        launch: {
          summary: "Coordinated drops Day 0 11am-2pm. Whitelisting active.",
          howToThink: "Stagger drops to avoid feed fatigue. Brand whitelists creator content + runs as ads same day. Whitelisting + 6mo usage rights are 100% non-negotiable in every contract — no need to track as KPI.",
          tasks: [
            { when: "Day 0 11am-2pm", text: "Coordinated creator content drops", owner: "Influencer" },
            { when: "Day 0", text: "Whitelisting ads pulled from approved creator content", owner: "Paid" },
            { when: "Day +1 to +3", text: "Late-delivery posts go live (~20% of pool)", owner: "Influencer" }
          ],
          kpis: [
            { metric: "Organic View CPM (cost / views × 1000)", floor: ">$30", good: "$15-20", great: "<$10" },
            { metric: "ROAS with whitelisting", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: []
        },
        post: {
          summary: "Find good + great creators (per launch KPI thresholds). Re-book for next launch.",
          howToThink: "Don't pick a fixed number. Re-book ALL creators who hit Good or Great on launch KPIs (CPM ≤$20 OR ROAS ≥1.3x). The launch KPIs do the qualifying — no separate post-launch KPI needed.",
          tasks: [
            { when: "T+2w", text: "Score per-creator: identify good + great creators (hit launch KPI thresholds)", owner: "Paid" },
            { when: "T+4w", text: "Lock re-book list for next launch (all good + great creators, not a fixed number)", owner: "Influencer" }
          ],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== CREATOR / UGC (Sideshift) =====
    {
      id: "creator",
      name: "Creator / UGC (Sideshift)",
      tier: 1,
      icon: "🎥",
      summary: "Sideshift creators. 4-week prep. Post on launch, not before. Paid by CPM.",
      phases: {
        pre: {
          summary: "T-4w share creator-tailored one-pager. T-4w to T-3w ship product. Creators DON'T post pre-launch.",
          howToThink: "4-week window. Share a creator-tailored one-pager (very similar to press kit, but tailored for creators — focused on product features, content format, CTA/code, and claim guardrails — not just story angles). Ship product to selected creators if available. Creators hold all content for Day 0 — no pre-launch posting. Pay model is CPM-based, not per-asset.",
          tasks: [
            { when: "T-4w", text: "Share creator-tailored one-pager (very similar to press kit, but with content format guidance + CTA + claim guardrails)", owner: "Creative" },
            { when: "T-4w to T-3w", text: "Ship product to selected creators (if available)", owner: "Ops" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "All creators go live Day 0. Whitelist + run as ads.",
          howToThink: "Realistic compliance: 80% post on Day 0, 20% land Days +1-3. Brand whitelists their content same day. Track whitelisted-ad ROAS using same scale as Meta/Google.",
          tasks: [
            { when: "Day 0", text: "Creators go live", owner: "Creative" },
            { when: "Day 0", text: "Brand whitelists creator content + runs as ads", owner: "Paid" },
            { when: "Day +1 to +3", text: "Late-delivery posts land (~20% of pool)", owner: "Creative" }
          ],
          kpis: [
            { metric: "Organic View CPM (cost / views × 1000)", floor: ">$10", good: "$3-5", great: "<$1" },
            { metric: "Whitelisting ROAS", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: []
        },
        post: {
          summary: "Identify good + great creators. Re-engage for more content. Whitelist + run as ads.",
          howToThink: "Product was already shipped pre-launch — so post-launch is about re-engaging the creators who hit Good or Great on launch KPIs. Workflow: (1) Identify good + great creators from launch performance. (2) Re-engage them for MORE content. (3) If product wasn't ready at T-4w (manufacturing delay), ship now. (4) Brand whitelists their new content + runs as paid ads. (5) Lock recurring relationships with all good + great creators (no fixed number — if they're good, they're in).",
          tasks: [
            { when: "T+1w", text: "Score per-creator: identify good + great creators from launch performance", owner: "Paid" },
            { when: "T+2w", text: "Ship product NOW if it wasn't ready pre-launch (manufacturing delay fallback)", owner: "Ops" },
            { when: "T+2w to T+3w", text: "Re-engage good + great creators for more content", owner: "Creative" },
            { when: "T+3w", text: "Brand whitelists new creator content + runs as paid ads", owner: "Paid" },
            { when: "T+4w", text: "Lock recurring relationships with ALL good + great creators (no fixed number)", owner: "Creative" }
          ],
          kpis: [
            { metric: "Whitelisting ROAS on creator-as-ads loop", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: [
            { type: "workflow", title: "The creator-as-ads loop (post-launch)", text: "1. Identify good + great creators from launch ROAS / CPM. 2. Re-engage for more content (product already shipped pre-launch — only ship now if there was a delay). 3. They shoot more content (organic-feel, low-production). 4. Brand whitelists + runs as paid ads. 5. All good + great creators move to recurring relationship — no top-5 cap." }
          ]
        }
      }
    },

    // ===== SOCIAL ORGANIC =====
    {
      id: "social",
      name: "Social Organic",
      tier: 1,
      icon: "📲",
      summary: "IG (3-5 feed + 5-10 stories) + TikTok (5+ teasers). Optional: Reddit, Twitter, others.",
      phases: {
        pre: {
          summary: "IG: 3-5 feed posts + 5-10 stories. TikTok: 5+ teasers. Optional channels added per launch.",
          howToThink: "Good AI content is good — but quality > quantity. We need to NAIL the content, not just produce more of it. AI helps with volume but doesn't replace creative direction. Split by surface: IG feed (3-5 deeper posts) + IG stories (5-10 lighter / countdown / behind-scenes) + TikTok (5+ teasers, native vertical format). Optional channels (Reddit, Twitter, others) added per launch if audience-fit. Education topics tied to product (e.g., 'why edging matters' for a tapping toy, 'why lube matters' for Lube). Countdown content folded into the calendar, not a separate task.",
          tasks: [
            { when: "T-4w", text: "Content calendar locked: IG (3-5 feed + 5-10 stories) + TikTok (5+ teasers). Countdown content folded in.", owner: "Social" },
            { when: "T-4w", text: "Topic plan: education tied to product (e.g., why edging matters / why lube matters)", owner: "Social" },
            { when: "T-4w", text: "Optional channels decision: Reddit / Twitter / others — in scope for this launch?", owner: "Social" }
          ],
          kpis: [
            { metric: "Organic views per post", floor: "<5K", good: "20-50K", great: "100K+" },
            { metric: "Engagement rate per post", floor: "<2%", good: "3-6%", great: "6%+" }
          ],
          examples: [
            { type: "post_plan", title: "Pre-launch content mix", text: "IG feed (3-5): mix educational + teaser + founder POV + product peek. IG stories (5-10): countdown / behind-scenes / lighter content. TikTok (5+): native-vertical teasers. Optional (per launch): Reddit, Twitter, etc. Reuse winners as paid ad creative." }
          ]
        },
        launch: {
          summary: "Day 0: announcement bar live + founder launch post. 5+ posts across first 7 days (including stories). IG Live optional.",
          howToThink: "The big launch post is THE post. Watch which content forms work — amplify those as ads. IG Live is optional, not required.",
          tasks: [
            { when: "Day 0", text: "Announcement bar updated on social channels to feature the launch", owner: "Social" },
            { when: "Day 0 8am", text: "Founder personal launch post (the big one)", owner: "Founder" },
            { when: "Day 0 evening", text: "Founder IG Live (optional)", owner: "Founder" },
            { when: "Day 0 to Day +7", text: "Maintain 5+ posts across first 7 days (including stories)", owner: "Social" }
          ],
          kpis: [
            { metric: "Organic views per post", floor: "<5K", good: "20-50K", great: "100K+" },
            { metric: "Engagement rate per post", floor: "<2%", good: "3-6%", great: "6%+" }
          ],
          examples: []
        },
        post: {
          summary: "3 follow-up posts. Customer voice content. Identify winners → amplify as paid ads.",
          howToThink: "Don't drop cadence post-launch — algorithm penalty lasts 4-6 weeks. Customer voice content (UGC reposts, review screenshots) sustains the moment. Whatever works organically → amplify as paid ad. Make more of what's working (e.g., more education content if education resonated).",
          tasks: [
            { when: "T+1w", text: "3 follow-up posts (social proof + customer reactions + retrospective)", owner: "Social" },
            { when: "T+1w", text: "Identify top-performing organic posts → amplify as paid ads", owner: "Social + Paid" },
            { when: "T+2w", text: "Make more of what's working (e.g., more education content if it resonates)", owner: "Social" },
            { when: "T+4w", text: "Score post performance, identify recurring winners", owner: "Social" }
          ],
          kpis: [
            { metric: "Sustained engagement rate (T+4w avg)", floor: "<2%", good: "3-6%", great: "6%+" }
          ],
          examples: []
        }
      }
    },

    // ===== BLOG / SEO =====
    {
      id: "blog",
      name: "Blog / SEO",
      tier: 1,
      icon: "📝",
      summary: "10+ educational blogs (no product) publish T-2w to start ranking. Product-tied blogs go live Day 0.",
      phases: {
        pre: {
          summary: "T-3w keyword research → T-2w publish 10+ educational blogs (NO product mention) → draft product-tied blogs.",
          howToThink: "Two waves. (1) Educational blogs — published T-2w, NO product mention. Topics like 'How to do edging?' / 'Why is lube important?' Goal: start ranking organically before launch. (2) Product-tied blogs — drafted pre-launch, published Day 0. Topics: review, comparison, how to use the tool for X.",
          tasks: [
            { when: "T-3w", text: "Keyword research: identify 10+ keywords (educational + product-tied)", owner: "Content" },
            { when: "T-3w to T-2w", text: "Draft 10+ educational blog posts (NO product mention — e.g., 'How to do edging?' / 'Why is lube important?')", owner: "Content" },
            { when: "T-2w", text: "Publish 10+ educational blogs to start ranking organically", owner: "Content" },
            { when: "T-2w to T-1w", text: "Draft product-tied blogs (review, comparison, how to use the tool for X) — DON'T publish yet", owner: "Content" }
          ],
          kpis: [
            { metric: "Blog traffic (monthly organic visits, measured T+30d — calibrate with HN data)", floor: "<500", good: "1K-5K", great: "10K+" }
          ],
          examples: [
            { type: "topic_examples", title: "Topic patterns (educational vs product-tied)", text: "Educational (no product, publish T-2w): 'How to do edging' / 'Why is lube important' / '[Body part] 101' / 'The science of [outcome]'. Product-tied (drafted pre-launch, publish Day 0): '[New product] vs [Lem]' / 'How to use [new product]' / 'Review: [new product] for [use case]' / 'Which Hello Nancy is right for you?'" }
          ]
        },
        launch: {
          summary: "Day 0: publish product-tied blogs. Feature in launch email.",
          howToThink: "Product-tied blogs go live Day 0. Email cross-links to them so subscribers get deeper content, not just the sales pitch.",
          tasks: [
            { when: "Day 0", text: "Publish product-tied blogs (review, comparison, how-to-use)", owner: "Content" },
            { when: "Day 0", text: "Feature product blogs in launch email", owner: "Content + Email" }
          ],
          kpis: [],
          examples: []
        },
        post: {
          summary: "Score page visits per post. Iterate winners. Continue feeding into email retention.",
          howToThink: "Track page visits per post. Top posts become evergreen content for retention emails + future launches.",
          tasks: [
            { when: "T+2w", text: "Score page visits per post; identify winners", owner: "Content" },
            { when: "T+4w", text: "Repurpose winning blog content into evergreen email retention", owner: "Content + Email" }
          ],
          kpis: [
            { metric: "Page visits per post", floor: "<100", good: "500-2K", great: "5K+" }
          ],
          examples: []
        }
      }
    },

    // ===== EMAIL (moved from Tier 2 to Tier 1 — demand gen + conversion) =====
    {
      id: "email",
      name: "Email",
      tier: 1,
      icon: "✉️",
      summary: "Most reliable revenue driver. Multi-wave launch sends. Waitlist flow critical if running waitlist ads.",
      phases: {
        pre: {
          summary: "Setup waitlist flow (if running waitlist ads). Email teasers T-2w through T-1w.",
          howToThink: "Pre-launch email is about WARMTH not URGENCY. Build anticipation. CRITICAL: if running paid ads to waitlist, the waitlist email flow MUST be live BEFORE ads turn on — otherwise signups go nowhere.",
          tasks: [
            { when: "T-4w (optional)", text: "Setup waitlist email flow — only if running waitlist ads. Must be live BEFORE ads turn on.", owner: "Email" },
            { when: "T-2w", text: "Email teaser #1 sends (warm-up)", owner: "Email" },
            { when: "T-1w Mon", text: "Email teaser #2 sends", owner: "Email" },
            { when: "T-1w Wed", text: "Email teaser #3 + VIP early-access offer", owner: "Email" },
            { when: "T-1w Fri", text: "Final teaser email", owner: "Email" }
          ],
          kpis: [
            { metric: "Open rate (teaser sends)", floor: "<25%", good: "30-40%", great: "45%+" }
          ],
          examples: [
            { type: "subject_line", title: "Pre-launch teaser SLs", text: "Tier A: 'Something's coming.' / 'Mark your calendar.' Tier B: 'I made you something.' Tier C (VIP): 'Early access starts tomorrow.'" }
          ]
        },
        launch: {
          summary: "Multi-wave: VIP / full / non-openers / follow-up. Track sales attribution.",
          howToThink: "4+ distinct sends across the launch window. Each wave has a different angle. Track total email-attributed sales as the lead KPI (revenue, not opens). Email timing follows what works for email (ET-based schedule), not synced to website launch time.",
          tasks: [
            { when: "Day -1 9am", text: "VIP early-access email fires", owner: "Email" },
            { when: "Day 0 9am", text: "Email launch wave 1 (VIP + recent openers)", owner: "Email" },
            { when: "Day 0 12pm", text: "Email launch wave 2 (full list)", owner: "Email" },
            { when: "Day 0 6pm", text: "Non-openers resend", owner: "Email" },
            { when: "Day +2", text: "Follow-up #1 (social proof)", owner: "Email" },
            { when: "Day +4", text: "Follow-up #2 (reviews + UGC)", owner: "Email" }
          ],
          kpis: [
            { metric: "Email-attributed sales (launch period)", floor: "<$1,000", good: "$3,000-5,000", great: "$10K+" }
          ],
          examples: [
            { type: "screenshot", title: "Example launch wave email" }
          ]
        },
        post: {
          summary: "Educational + product-detail emails. Subscription upsell (if applicable).",
          howToThink: "Post-launch email shifts from spike to sustained engagement. Educational emails (blog cross-links + UGC reviews) drive higher engagement than pure sales pitches.",
          tasks: [
            { when: "T+2w", text: "More product detail emails (educational tied to blog + UGC reviews)", owner: "Email" },
            { when: "T+2w", text: "Subscription upsell email (only if applicable to product)", owner: "Email" }
          ],
          kpis: [
            { metric: "Unsubscribe rate", floor: ">0.5%", good: "<0.3%", great: "<0.15%" },
            { metric: "Email-attributed revenue (post-launch ongoing)", floor: "<$1,000", good: "$1,500-2,000", great: "$3,000+" }
          ],
          examples: []
        }
      }
    },

    // ===================================================================
    // TIER 2 — CAPTURE & CONVERT
    // ===================================================================

    // ===== WAITLIST =====
    {
      id: "waitlist",
      name: "Waitlist",
      tier: 2,
      icon: "📋",
      summary: "Pre-launch capture. T-5w design → T-4w live. Waitlist subscribers get early access at launch.",
      phases: {
        pre: {
          summary: "T-5w design → T-4w live + capture.",
          howToThink: "Waitlist is the only PUBLIC pre-launch channel. The LP is your single-purpose conversion surface — minimal, clear value prop, signup form. Goes live T-4w, in time for paid Meta teaser ads (W-4) to drive traffic.",
          tasks: [
            { when: "T-5w", text: "Waitlist landing page designed + built", owner: "Web" },
            { when: "T-4w", text: "Waitlist live, capturing leads", owner: "Web" }
          ],
          kpis: [
            { metric: "List size at launch", floor: "<500", good: "2-5K", great: "10K+" },
            { metric: "Cost per signup (organic)", floor: ">$5", good: "$1-3", great: "<$1" }
          ],
          examples: []
        },
        launch: {
          summary: "Waitlist subscribers get early access Day -1. Public launch Day 0.",
          howToThink: "Waitlist subscribers convert 2-3x higher than cold traffic. Give all waitlist subscribers a 24-48hr early access window.",
          tasks: [
            { when: "Day -1 9am", text: "Waitlist subscribers get early access (24-48hr window)", owner: "Email" },
            { when: "Day 0", text: "Public launch — waitlist email fires", owner: "Email" }
          ],
          kpis: [
            { metric: "Waitlist → Launch buyer CVR", floor: "<15%", good: "25-40%", great: "50%+" }
          ],
          examples: []
        },
        post: {
          summary: "Convert non-buyers. Migrate to retention flows.",
          howToThink: "Non-purchasers from waitlist are highest-intent leads. Bridge flow → retention.",
          tasks: [
            { when: "T+1w", text: "Score waitlist → buyer CVR; segment non-buyers", owner: "Email" },
            { when: "T+2w", text: "Non-buyer bridge flow (launch retro + softer offer)", owner: "Email" }
          ],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== PDP =====
    {
      id: "pdp",
      name: "PDP",
      tier: 2,
      icon: "🛒",
      summary: "The conversion surface. Reviews live here. The 3.5★ gate is rendered here. (Updates pending.)",
      phases: {
        pre: {
          summary: "Build it tight. Test. Seed reviews for social proof.",
          howToThink: "PDP CVR is the single most important conversion metric. Mobile CVR matters more than desktop. Reviews seeded count for social proof, NOT for the 3.5★ verified-buyer gate.",
          tasks: [
            { when: "T-4w", text: "PDP copy written", owner: "Content" },
            { when: "T-3w", text: "PDP gallery assets delivered (8-12 images + 1-2 videos)", owner: "Creative" },
            { when: "T-3w", text: "PDP designed in Shopify", owner: "Web" },
            { when: "T-2w", text: "Reviews section seeded (50+ from Sideshift, social-proof tag)", owner: "Reviews" },
            { when: "T-2w", text: "Mobile load time tested (<2s on 4G)", owner: "Web" },
            { when: "T-1w", text: "Test purchase: pixel + CAPI fires with NEW product_id", owner: "Paid" }
          ],
          kpis: [
            { metric: "Mobile load time", floor: ">3s", good: "<2s", great: "<1s" }
          ],
          examples: [
            { type: "screenshot", title: "Example PDP layout" }
          ]
        },
        launch: {
          summary: "Launch swap. All traffic routes here.",
          howToThink: "Day 0 spike means traffic 5-10x baseline. Verify CVR doesn't drop under load.",
          tasks: [
            { when: "Day 0", text: "PDP set as canonical, indexed", owner: "Web" },
            { when: "Day 0", text: "Monitor PDP CVR hour-by-hour for first 8 hours", owner: "Web + Paid" }
          ],
          kpis: [
            { metric: "CVR (sessions → orders)", floor: "<1.5%", good: "3-5%", great: "6-8%" },
            { metric: "Add-to-cart rate", floor: "<5%", good: "8-12%", great: "15%+" }
          ],
          examples: []
        },
        post: {
          summary: "Iterate based on data. Pin best reviews. A/B test.",
          howToThink: "Real reviews start landing T+1w. Pin best to top.",
          tasks: [
            { when: "T+2w", text: "Pin best verified reviews to top of section", owner: "Reviews" },
            { when: "T+2w", text: "A/B test hero image / headline (1 test at a time)", owner: "Web" }
          ],
          kpis: [
            { metric: "Reviews count at T+6w (verified buyer)", floor: "<30", good: "50-150", great: "200+" }
          ],
          examples: []
        }
      }
    },

    // ===== HOMEPAGE =====
    {
      id: "homepage",
      name: "Homepage",
      tier: 2,
      icon: "🏠",
      summary: "Hero swap + announcement bar. Always launch at 2pm HKT for QC buffer.",
      phases: {
        pre: {
          summary: "Design swap. Test. Stage for 2pm HKT launch.",
          howToThink: "Homepage is the second-most-important conversion surface. Always launch at 2pm HKT (= 2am ET) — sales are slow at this time, giving the team a QC buffer before US wakes up to find the launch live.",
          tasks: [
            { when: "T-2w", text: "Hero swap design ready (launch creative)", owner: "Web" },
            { when: "T-2w", text: "Announcement bar copy + scheduling for 2pm HKT", owner: "Web" },
            { when: "T-1w", text: "Pop-up designed (welcome offer)", owner: "Web" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "All swaps live at 2pm HKT (= 2am ET). QC buffer before US wakes up.",
          howToThink: "2pm HKT is HN's launch standard — slow-sales window for QC, then US customers wake up to a live + verified site.",
          tasks: [
            { when: "Day 0 2pm HKT", text: "Hero swap + announcement bar live (= 2am ET)", owner: "Web" },
            { when: "Day 0 2pm HKT", text: "QC pass: verify all links, images, CTAs work", owner: "Web" },
            { when: "Day 0", text: "Pop-up active (1-2 weeks runtime)", owner: "Web" }
          ],
          kpis: [
            { metric: "Homepage → PDP CTR", floor: "<15%", good: "25-40%", great: "50%+" },
            { metric: "Pop-up email capture rate", floor: "<1%", good: "3-7%", great: "10%+" }
          ],
          examples: []
        },
        post: {
          summary: "Performance review. Iterate.",
          howToThink: "Pop-up usually retires after 2 weeks (fatigue).",
          tasks: [
            { when: "T+2w", text: "Pop-up performance review", owner: "Web" }
          ],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== QUIZ FUNNEL =====
    {
      id: "quiz",
      name: "Quiz Funnel",
      tier: 2,
      icon: "❓",
      summary: "'Find your match' funnel. Recommends new SKU. (Updates pending.)",
      phases: {
        pre: {
          summary: "Update logic. Test paths.",
          howToThink: "Test EVERY answer combination — broken quiz on launch day = lost sales.",
          tasks: [
            { when: "T-3w", text: "Quiz updated to recommend new SKU appropriately", owner: "Web" },
            { when: "T-2w", text: "Quiz tested across all answer paths", owner: "Web" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "Featured in nav.",
          howToThink: "",
          tasks: [{ when: "Day 0", text: "Quiz featured on homepage nav", owner: "Web" }],
          kpis: [
            { metric: "Quiz completion rate", floor: "<30%", good: "50-70%", great: "80%+" }
          ],
          examples: []
        },
        post: {
          summary: "Score. Iterate.",
          howToThink: "",
          tasks: [{ when: "T+4w", text: "Quiz performance review", owner: "Web" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== ADVERTORIAL (renamed from Dedicated Landing Page) =====
    {
      id: "advertorial",
      name: "Advertorial",
      tier: 2,
      icon: "📄",
      summary: "Build advertorial funnel for paid traffic. Listicle / review LP. KPI = same Meta ROAS scale.",
      phases: {
        pre: {
          summary: "Brief + write + design + build advertorial. Ready to receive paid traffic Day 0.",
          howToThink: "Advertorial is its own paid funnel — separate from PDP. Format: listicle / review / story-driven LP that warms cold traffic before pushing to PDP. We're not A/B testing vs PDP — we're building MORE funnels. As long as the advertorial scales at the standard Meta ROAS bar, it's working.",
          tasks: [
            { when: "T-4w", text: "Brief advertorial (angle, story arc, listicle vs review format)", owner: "Content" },
            { when: "T-3w", text: "Write + design advertorial article", owner: "Content + Web" },
            { when: "T-2w", text: "Advertorial LP built + tested", owner: "Web" },
            { when: "T-1w", text: "Native creative (headlines + thumbs) submitted to Meta + Native ad networks", owner: "Paid" }
          ],
          kpis: [],
          examples: [
            { type: "format_options", title: "Advertorial format options", text: "(1) Listicle — '5 things to know about [product]' / '3 reasons women love [product]'. (2) Review — long-form 'I tried [product] for 30 days' style. (3) Story — founder's why, problem narrative, product as solution. Pick one format per advertorial; A/B test angles within format." }
          ]
        },
        launch: {
          summary: "Live as paid-traffic destination. Track ROAS at standard bar.",
          howToThink: "Advertorial = funnel. As long as the funnel scales at the Meta ROAS bar (1.3-1.8x or better), keep scaling. If ROAS underperforms, refresh angle or kill.",
          tasks: [
            { when: "Day 0", text: "Advertorial live for Meta + Native paid traffic", owner: "Paid" }
          ],
          kpis: [
            { metric: "Advertorial ROAS", floor: "<1.3x", good: "1.3-1.8x", great: ">1.8x" }
          ],
          examples: []
        },
        post: {
          summary: "Score. Build more funnels (variants, angles).",
          howToThink: "If advertorial scales: build more variants (different angles, formats). If it doesn't: refresh or kill. The point is to build a STABLE of funnels that scale, not optimize one perfect LP.",
          tasks: [
            { when: "T+2w", text: "Score advertorial ROAS vs Meta bar; decide scale / refresh / kill", owner: "Paid" },
            { when: "T+4w", text: "Build 1-2 advertorial variants (different angles)", owner: "Content + Paid" }
          ],
          kpis: [
            { metric: "Number of scaling advertorial funnels", floor: "0", good: "1-2", great: "3+" }
          ],
          examples: []
        }
      }
    },

    // ===================================================================
    // TIER 3 — TRUST & SEEDING
    // ===================================================================

    // ===== VIP SEEDING =====
    {
      id: "vip",
      name: "VIP Seeding",
      tier: 3,
      icon: "👑",
      summary: "Hand-delivered to 3 sub-tiers: Celeb / Investor (incl. doctors) / Top Creators. Story-led.",
      phases: {
        pre: {
          summary: "Lock list. Pack premium kits. Ship. T-2w founder thank-you + ask for feedback / share.",
          howToThink: "Three sub-tiers: (1) Celeb (cultural reach). (2) Investor (includes doctors / PT / therapists / actual investors — anyone whose endorsement equals trust currency). (3) Top Creators (creators we already have strong relationships with). Hand-written founder note non-negotiable. NEVER prompt for posts — but DO ask for feedback at T-2w, and if they like it, ask if they'd share on social or send content we can use.",
          tasks: [
            { when: "T-8w", text: "VIP list locked across 3 sub-tiers (Celeb / Investor / Top Creators)", owner: "Founder + PR" },
            { when: "T-6w", text: "Personalized founder notes drafted per VIP", owner: "Founder" },
            { when: "T-4w", text: "VIP kits packed (premium presentation)", owner: "Ops" },
            { when: "T-3w", text: "Kits ship", owner: "Ops" },
            { when: "T-2w", text: "Kits land in hands", owner: "Ops" },
            { when: "T-2w", text: "Founder sends thank-you message + asks for feedback. If positive, asks if they'd share on social OR send content for HN to use.", owner: "Founder" }
          ],
          kpis: [
            { metric: "Organic post rate (any tier)", floor: "<20%", good: "40-60%", great: "70%+" }
          ],
          examples: []
        },
        launch: {
          summary: "Founder sends 'we launched, excited!' message to all VIPs.",
          howToThink: "Day 0 message keeps relationship warm + signals momentum. NOT a request — a personal share-the-moment message.",
          tasks: [
            { when: "Day 0", text: "Founder sends 'we launched today, excited!' message to all VIPs", owner: "Founder" },
            { when: "Day 0", text: "Ship product NOW to any VIP whose product wasn't ready pre-launch", owner: "Ops" }
          ],
          kpis: [],
          examples: []
        },
        post: {
          summary: "Convert short-term to long-term ambassadors.",
          howToThink: "10-30% of engaged VIPs become long-term ambassadors.",
          tasks: [
            { when: "T+4w", text: "Identify long-term ambassador candidates from engaged VIPs", owner: "PR" },
            { when: "T+6w", text: "Long-term ambassador conversations with top engaged VIPs", owner: "Founder + PR" }
          ],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== EVENT / IRL =====
    {
      id: "event",
      name: "Event / IRL",
      tier: 3,
      icon: "🎉",
      summary: "Compressed 2-month timeline. Best CPM in marketing if executed well. Lead metric: organic CPM + earned views.",
      phases: {
        pre: {
          summary: "T-8w concept → T-6w venue → T-4w guest list → T-2-4w gift bags + props.",
          howToThink: "HN doesn't have 12+ weeks for events — compressed 8-week timeline. Lead metric is organic CPM + earned content views, NOT attendance count. Get the right 100 people, not the most people.",
          tasks: [
            { when: "T-8w", text: "Event concept locked (dinner / popup / partner activation)", owner: "Events" },
            { when: "T-6w", text: "Venue secured", owner: "Events" },
            { when: "T-4w", text: "Guest list finalized (PR + Influencers + key contacts)", owner: "Events" },
            { when: "T-3w", text: "Invitations sent + RSVP tracking active", owner: "Events" },
            { when: "T-3w", text: "Photo + video crew booked", owner: "Events" },
            { when: "T-2w to T-4w", text: "Gift bags + props finalized", owner: "Events" },
            { when: "T-1w", text: "Final RSVPs + headcount confirmed", owner: "Events" },
            { when: "T-1w", text: "Run-of-show locked (founder talk, expert speaker, music, AV)", owner: "Events" }
          ],
          kpis: [],
          examples: [
            { type: "format", title: "Launch dinner — proven format", text: "30-50 person seated dinner. Founder welcome (5min). Surprise + delight: VIP gift bag. Photo moment with product. Optional: expert speaks (10min). Walk-aways: high-quality kit. End early enough that posts go up that night." }
          ]
        },
        launch: {
          summary: "Event runs in T-1w to T+1w window. Track posts. Founder + team thank-you wave.",
          howToThink: "Event itself is logistics. Post-event: Founder personally thanks main attendees (high-touch). Britt or Crystal sends thank-you to others + asks for tags. Track every organic post that mentions the brand.",
          tasks: [
            { when: "Event day", text: "Execute event smoothly", owner: "Events" },
            { when: "Event +1d", text: "Founder sends personal thank-you to main attendees", owner: "Founder" },
            { when: "Event +1d", text: "Britt / Crystal send thank-you to other attendees + ask for tags", owner: "Team" },
            { when: "Event +1d to +7d", text: "Track organic posts from attendees", owner: "Social" }
          ],
          kpis: [
            { metric: "Organic CPM (cost / earned impressions × 1000)", floor: ">$5", good: "$1-3", great: "<$1" },
            { metric: "Total earned content views (sum across all attendee posts)", floor: "<100K", good: "500K-2M", great: "5M+" },
            { metric: "Press / influencer attendance", floor: "<3", good: "5-15", great: "20+" }
          ],
          examples: []
        },
        post: {
          summary: "Calculate CPM. Decide if recurring.",
          howToThink: "CPM beat $3 → always-on. CPM > $5 → format needs work.",
          tasks: [{ when: "T+2w", text: "Calculate organic CPM; decide if event becomes recurring", owner: "Events" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== EXPERT / CLINICAL CONTENT =====
    {
      id: "expert",
      name: "Expert / Clinical Content",
      tier: 3,
      icon: "👩‍⚕️",
      summary: "Doctor / PT / therapist content. Highest-trust voice. Ongoing relationships, not per-launch onboarding.",
      phases: {
        pre: {
          summary: "Ongoing identification → T-6w product heads-up → T-4w products land + reviews + shoot + seed in PR.",
          howToThink: "Expert partner identification is ONGOING — relationships built over months, not per-launch. Per launch: tell experts at T-6w that products are coming. T-4w products land in their hands; ask for reviews + shoot content + seed in PR. Goal: 3-5 videos per doctor + their review available for launch.",
          tasks: [
            { when: "Ongoing", text: "Expert partner identification + relationship building (not launch-bound)", owner: "PR + Founder" },
            { when: "T-6w", text: "Tell experts products are coming (overlap with VIP seeding)", owner: "PR" },
            { when: "T-4w", text: "Products in experts' hands → ask for reviews", owner: "PR" },
            { when: "T-4w", text: "Content shooting for launch + reviews (3-5 videos per doctor)", owner: "Creative" },
            { when: "T-4w", text: "Seed expert content + reviews on PR (feed pitch + press kit)", owner: "PR" }
          ],
          kpis: [
            { metric: "Videos secured per expert", floor: "<2", good: "3-5", great: "6+" },
            { metric: "Expert reviews secured", floor: "<2", good: "3-5", great: "6+" }
          ],
          examples: [
            { type: "content_uses", title: "Where expert content gets deployed at launch", text: "Press: quotes + video clips embedded in coverage. Ads: video reviews as ad creative. Website: PDP testimonials section + dedicated expert page. Email: featured in launch wave + retention sequence. Social: clips amplified across IG + TikTok." }
          ]
        },
        launch: {
          summary: "Deploy expert reviews + videos across ads, website, emails.",
          howToThink: "Expert content is the highest-trust signal in the launch. Use it everywhere it can be used.",
          tasks: [
            { when: "Day 0", text: "Launch expert reviews + videos in ads (Meta + advertorial)", owner: "Paid" },
            { when: "Day 0", text: "Launch expert content on website (PDP + dedicated page)", owner: "Web" },
            { when: "Day 0", text: "Feature expert content in launch email + social", owner: "Email + Social" }
          ],
          kpis: [],
          examples: []
        },
        post: {
          summary: "Long-term clinical partnerships.",
          howToThink: "Best experts become recurring clinical advisors.",
          tasks: [{ when: "T+4w", text: "Top 2 experts moved to retainer", owner: "PR + Founder" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== FOUNDER POV =====
    {
      id: "founder",
      name: "Founder POV",
      tier: 3,
      icon: "🎤",
      summary: "Founder POV video shot at T-2w. (Founder presence at launch covered in Social Organic.)",
      phases: {
        pre: {
          summary: "T-2w founder POV shot — that's the only deliverable for this channel.",
          howToThink: "Founder is the brand, but the operational work in this channel is just the brand-story video shoot. Founder presence at launch (DMs, IG Live, retrospective content) lives under Social Organic — don't duplicate.",
          tasks: [
            { when: "T-2w", text: "Founder POV / brand-story video shot", owner: "Creative + Founder" }
          ],
          kpis: [],
          examples: [
            { type: "video_structure", title: "Founder POV video — 3-5min structure", text: "1. Hook: the moment you knew (15s). 2. The problem you saw (45s). 3. What you tried first that didn't work (30s). 4. The breakthrough (45s). 5. Why this product (45s). 6. What you hope for the customer (30s). End on customer outcome, not product features." }
          ]
        },
        launch: {
          summary: "Covered in Social Organic — see that channel.",
          howToThink: "",
          tasks: [],
          kpis: [],
          examples: []
        },
        post: {
          summary: "Covered in Social Organic — see that channel.",
          howToThink: "",
          tasks: [],
          kpis: [],
          examples: []
        }
      }
    },

    // ===================================================================
    // TIER 4 — AMPLIFICATION
    // ===================================================================

    // ===== REVIEWS ENGINE =====
    {
      id: "reviews",
      name: "Reviews Engine",
      tier: 4,
      icon: "⭐",
      summary: "LOAD-BEARING for 3.5★ gate. Verified-buyer filter ON.",
      phases: {
        pre: {
          summary: "Setup review follow-up email (post-purchase trigger, 4-7d after delivery).",
          howToThink: "Pre-launch this channel is just one thing: the review follow-up email is set up correctly (post-purchase trigger, 4-7 days after delivery, verified-buyer filter ON). Everything else for this channel happens post-launch (when the 3.5★ gate gets scored).",
          tasks: [
            { when: "T-3w", text: "Review follow-up email setup: post-purchase trigger 4-7d after delivery, verified-buyer filter ON", owner: "Email + Reviews" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "Trigger fires Day +1.",
          howToThink: "Wait until they've received and used.",
          tasks: [{ when: "Day +1", text: "Post-purchase trigger fires for Day-0 buyers", owner: "Email" }],
          kpis: [
            { metric: "Review request open rate", floor: "<30%", good: "45-60%", great: "70%+" }
          ],
          examples: []
        },
        post: {
          summary: "3.5★ GATE SCORED at T+6w. PROVEN / MARGINAL / FAIL / INCONCLUSIVE.",
          howToThink: "Most important deliverable in the entire playbook. Mid-window check at T+4w. Final scoring at T+6w with operational signals as co-equal gates.",
          tasks: [
            { when: "T+1w", text: "First verified reviews land (target 15-25)", owner: "Reviews" },
            { when: "T+4w", text: "MID-WINDOW CHECK: 3.5★ trajectory healthy?", owner: "Founder + Reviews" },
            { when: "T+6w", text: "FINAL 3.5★ GATE SCORED: PROVEN / MARGINAL / FAIL / INCONCLUSIVE", owner: "Founder" }
          ],
          kpis: [
            { metric: "Verified-buyer reviews count by T+6w", floor: "<30 (INCONCLUSIVE)", good: "50-150", great: "200+" },
            { metric: "Verified-buyer review average", floor: "<3.0 (FAIL)", good: "3.5-4.4 (PROVEN)", great: "4.5+" },
            { metric: "Return rate (operational gate)", floor: ">12%", good: "5-8%", great: "<5%" }
          ],
          examples: []
        }
      }
    },

    // ===== REFERRAL PROGRAM (OPTIONAL) =====
    {
      id: "referral",
      name: "Referral Program (optional)",
      tier: 4,
      icon: "🔗",
      summary: "OPTIONAL / DEFER — not for kickstart. Customer-to-customer referral, bonus during launch.",
      phases: {
        pre: {
          summary: "OPTIONAL: configure launch-window bonus.",
          howToThink: "Defer to a later launch — not required for kickstart. If running: existing customers get bonus rewards for referring during launch. Friend gets launch incentive.",
          tasks: [
            { when: "T-3w (optional)", text: "Launch-window bonus logic configured (2x reward)", owner: "Email" },
            { when: "T-2w (optional)", text: "Email to existing buyers re: launch + referral bonus", owner: "Email" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "OPTIONAL: featured in launch comms.",
          howToThink: "",
          tasks: [{ when: "Day 0 (optional)", text: "Referral mechanic featured in launch comms", owner: "Email" }],
          kpis: [
            { metric: "Referral revenue (% of launch revenue)", floor: "<2%", good: "5-10%", great: "15%+" }
          ],
          examples: []
        },
        post: {
          summary: "OPTIONAL: retire bonus.",
          howToThink: "",
          tasks: [{ when: "T+2w (optional)", text: "End launch-window bonus", owner: "Email" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== SUBSCRIPTION / REPLENISHMENT (OPTIONAL) =====
    {
      id: "subscription",
      name: "Subscription / Replenishment (optional)",
      tier: 4,
      icon: "🔄",
      summary: "OPTIONAL — only if product is replenishable. Convert launch buyers within 30d.",
      phases: {
        pre: {
          summary: "OPTIONAL: configure on PDP. Build upsell flow.",
          howToThink: "Optional channel. Only relevant if the product is naturally replenishable (e.g., Lube). Convert within 30 days = 'first impression' window.",
          tasks: [
            { when: "T-4w (optional)", text: "Subscription option configured on PDP", owner: "Web" },
            { when: "T-2w (optional)", text: "Subscribe-and-save discount locked (10-15% off)", owner: "Web" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "OPTIONAL: pushed in PDP + post-purchase flow.",
          howToThink: "",
          tasks: [{ when: "Day 0 (optional)", text: "Subscription pushed in PDP + post-purchase flow", owner: "Web + Email" }],
          kpis: [
            { metric: "Subscription % of launch orders", floor: "<5%", good: "15-25%", great: "35%+" }
          ],
          examples: []
        },
        post: {
          summary: "OPTIONAL: score. Test save flow.",
          howToThink: "",
          tasks: [{ when: "T+2w (optional)", text: "First subscription conversion data scored", owner: "Email" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== AFFILIATE (renamed from Loyalty Program — customer-driven) =====
    {
      id: "affiliate",
      name: "Affiliate (optional)",
      tier: 4,
      icon: "💎",
      summary: "OPTIONAL — customer-driven affiliate (renamed from Loyalty). Bonus points / commission for repeat customers who refer or promote.",
      phases: {
        pre: {
          summary: "OPTIONAL: configure 2x bonus / commission for new launch.",
          howToThink: "Optional. Customer-driven affiliate model — repeat customers earn points or commission for referring or promoting. Different from publisher-affiliate (zenify, bestadulttoys) which we've killed.",
          tasks: [{ when: "T-3w (optional)", text: "Affiliate / loyalty bonus configured for new launch", owner: "Email" }],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "OPTIONAL: bonus live.",
          howToThink: "",
          tasks: [{ when: "Day 0 (optional)", text: "Affiliate bonus live", owner: "Email" }],
          kpis: [],
          examples: []
        },
        post: {
          summary: "OPTIONAL: retire bonus.",
          howToThink: "",
          tasks: [{ when: "T+2w (optional)", text: "End bonus, transition to always-on", owner: "Email" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===================================================================
    // TIER 5 — FOUNDATION
    // ===================================================================

    // ===== INVENTORY & 3PL =====
    {
      id: "inventory",
      name: "Inventory & 3PL",
      tier: 5,
      icon: "📦",
      summary: "Forecast. Manufacture. Confirm shipping + allocation. Land at 3PL with 7-day buffer.",
      phases: {
        pre: {
          summary: "Forecast → PO → confirm shipping method + allocation → ship to 3PL.",
          howToThink: "Stockout on launch day kills momentum. 7-day buffer minimum. Confirming shipping method + inventory allocation is non-negotiable before kits/samples ship anywhere.",
          tasks: [
            { when: "T-12w", text: "Demand forecast (small / medium / big scenarios)", owner: "Ops" },
            { when: "T-10w", text: "Manufacturing PO placed", owner: "Ops" },
            { when: "T-6w", text: "Confirm shipping method + inventory allocation (which units go where: 3PL / VIP kits / press / creators / retail)", owner: "Ops" },
            { when: "T-4w", text: "Inventory landed at 3PL", owner: "Ops" },
            { when: "T-2w", text: "7-day buffer confirmed", owner: "Ops" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "Live tracking. Daily stock checks.",
          howToThink: "",
          tasks: [{ when: "Days 0-14", text: "Daily stock check (alert if <14-day cover)", owner: "Ops" }],
          kpis: [
            { metric: "Stockout days (launch + 30d)", floor: ">0", good: "0", great: "0" }
          ],
          examples: []
        },
        post: {
          summary: "Re-order trigger. Reconciliation.",
          howToThink: "",
          tasks: [{ when: "T+2w", text: "Re-order trigger if velocity > forecast", owner: "Ops" }],
          kpis: [],
          examples: []
        }
      }
    },

    // ===== CUSTOMER SERVICE =====
    {
      id: "cs",
      name: "Customer Service",
      tier: 5,
      icon: "💬",
      summary: "FAQ. Macros. Training. Daily digest to founder.",
      phases: {
        pre: {
          summary: "Train. Load macros.",
          howToThink: "CS team is front line for sentiment.",
          tasks: [
            { when: "T-3w", text: "FAQ for new SKU drafted", owner: "CS" },
            { when: "T-2w", text: "Macros loaded into Gorgias / Zendesk", owner: "CS" },
            { when: "T-1w", text: "CS team training session", owner: "CS" }
          ],
          kpis: [],
          examples: []
        },
        launch: {
          summary: "Extended hours. Daily digest.",
          howToThink: "",
          tasks: [
            { when: "Day 0", text: "Extended CS hours (9am-9pm ET)", owner: "CS" },
            { when: "Days 0-7", text: "Daily CS digest to founder (top 5 issues + sentiment)", owner: "CS" }
          ],
          kpis: [
            { metric: "First-response time", floor: ">4hr", good: "<2hr", great: "<30min" }
          ],
          examples: []
        },
        post: { summary: "Retro. Macro updates.", howToThink: "", tasks: [{ when: "T+2w", text: "CS retro; macro updates for next launch", owner: "CS" }], kpis: [], examples: [] }
      }
    }

    // -------------------------------------------------------------------
    // END OF CHANNELS — to add a new one, copy any block above and edit.
    // -------------------------------------------------------------------
  ]
};
