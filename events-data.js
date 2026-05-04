// =====================================================================
// HELLO NANCY — MERCHANDISING + SALES CALENDAR DATA
// =====================================================================
//
// HOW TO EDIT THIS FILE:
//   1. Open in any text editor — find the event you want to change
//   2. Edit text — keep structure (commas, brackets, quotes)
//   3. Save → refresh playbook page → changes show
//
// EVENT STRUCTURE:
//   {
//     id: "unique-id",
//     name: "Display Name",
//     type: "sale" | "launch" | "moment" | "sub-event",
//     startDate: "2026-MM-DD",
//     endDate: "2026-MM-DD",          // same as startDate for single-day
//     summary: "one-line description",
//     theme: "creative direction notes",
//     relatedEvents: ["other-event-id"],
//     channels: ["meta", "email", ...],
//     tasks: { pre: [], active: [], post: [] },
//     kpis: []
//   }
//
// EVENT TYPES:
//   sale     → multi-day discount/themed window (yellow)
//   launch   → product launch, typically 1 day (pink)
//   moment   → 1-day brand-presence moment, no sale (blue)
//   sub-event → smaller themed window inside a larger sale (teal)
// =====================================================================

const EVENTS = {
  // -------------------------------------------------------------------
  // EVENT TYPE COLORS — for calendar visual coding
  // -------------------------------------------------------------------
  types: {
    sale:        { color: "#fef3c7", border: "#f59e0b", label: "Sale",      icon: "🏷️" },
    launch:      { color: "#fce7f3", border: "#ec4899", label: "Launch",    icon: "🚀" },
    moment:      { color: "#dbeafe", border: "#3b82f6", label: "Moment",    icon: "✨" },
    "sub-event": { color: "#d1fae5", border: "#10b981", label: "Sub-event", icon: "🎯" }
  },

  // -------------------------------------------------------------------
  // 2026 EVENTS — APRIL through DECEMBER
  // -------------------------------------------------------------------
  events: [

    // ===== APRIL-MAY: Mother's Day Sale =====
    {
      id: "mothers-day-2026",
      name: "Mother's Day Sale",
      type: "sale",
      startDate: "2026-04-20",
      endDate: "2026-05-12",
      summary: "Already running. Wraps May 12 (handoff to Splashy Sale).",
      theme: "Mother's Day — gifting + self-gifting for moms",
      relatedEvents: [],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== MAY 7: Int'l Masturbation Day (moment, no sale) =====
    {
      id: "int-mast-day-2026",
      name: "Int'l Masturbation Day",
      type: "moment",
      startDate: "2026-05-07",
      endDate: "2026-05-07",
      summary: "Single-day brand presence moment. 1 email + 1 social post. No sale.",
      theme: "Celebrate self-pleasure as a holiday. Educational + founder-led.",
      relatedEvents: [],
      channels: ["email", "social"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== MAY 12 - JUN 4: Splashy Sale (renamed + extended) =====
    {
      id: "splashy-sale-2026",
      name: "Splashy Sale",
      type: "sale",
      startDate: "2026-05-12",
      endDate: "2026-06-04",
      summary: "Renamed from Splashy May Sale, extended through Jun 4. Masturbation Month + Waterproof Blanket + Snack Pack + Miami Swim Week embedded.",
      theme: "Get Wet. Splash season. Water + summer + freedom. Creative threads: Juicy Blanket (Waterproof Blanket) / Dirty Jack (Snack Pack) / Miami Swim energy.",
      relatedEvents: ["waterproof-blanket-launch", "snack-pack-launch", "miami-swim-week"],
      channels: ["meta", "email", "social", "press", "homepage", "creator", "influencer"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Waterproof Blanket launch — MOVED to May 18 (Monday — breaks Tue-Thu rule, flag)
    {
      id: "waterproof-blanket-launch",
      name: "🚀 Waterproof Blanket Launch",
      type: "launch",
      startDate: "2026-05-18",
      endDate: "2026-05-18",
      summary: "Inside Splashy Sale. Concept: 'Juicy Blanket' — wet/splashy positioning. Launches Mon May 18 (intentional exception to Tue-Thu rule, confirmed by founder).",
      theme: "Juicy Blanket. Wet/freedom angle. Pairs with all toys for mess-free play.",
      relatedEvents: ["splashy-sale-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Snack Pack launch — May 26 (Dirty Jack)
    {
      id: "snack-pack-launch",
      name: "🚀 Snack Pack Launch (Dirty Jack)",
      type: "launch",
      startDate: "2026-05-26",
      endDate: "2026-05-26",
      summary: "Mid-Splashy launch. Concept: 'Dirty Jack' — cheeky bundle pack. Cross-bundle with Waterproof Blanket as 'Snack & Splash.'",
      theme: "Dirty Jack. Bundle pack. Cheeky food-meets-pleasure energy.",
      relatedEvents: ["splashy-sale-2026"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Miami Swim Week (May 28-31)
    {
      id: "miami-swim-week",
      name: "Miami Swim Week",
      type: "sub-event",
      startDate: "2026-05-28",
      endDate: "2026-05-31",
      summary: "4-day overlap with Miami Swim Week. Tie campaign content to Miami swim aesthetic.",
      theme: "Miami swim energy: sun, pool, neon, bikini, tropical. Pair with Waterproof Blanket + Snack Pack content.",
      relatedEvents: ["splashy-sale-2026"],
      channels: ["meta", "social", "influencer", "creator", "press"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== JUNE 4: Lem Play Big Launch =====
    {
      id: "lem-play-launch",
      name: "🚀 Lem Play Big Launch (Bluetooth)",
      type: "launch",
      startDate: "2026-06-04",
      endDate: "2026-06-04",
      summary: "Big launch — Lem Play, Bluetooth-enabled couple toy. Kicks off Pair Play Sale. Final day of Splashy Sale.",
      theme: "Bluetooth couple play + partner exploration. Subtle Pride angle (inclusive couples). App-coded but emotional.",
      relatedEvents: ["pair-play-sale-2026"],
      channels: ["meta", "email", "social", "press", "influencer", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== JUN 4 - JUN 23: Pair Play Sale (renamed from Couple Sale) =====
    {
      id: "pair-play-sale-2026",
      name: "Pair Play Sale",
      type: "sale",
      startDate: "2026-06-04",
      endDate: "2026-06-23",
      summary: "Celebrate partner play + exploration. Bluetooth-toy themed. Wraps the Lem Play launch with a 3-week partner-focused window. Alt name: 'Tune In Sale' (Bluetooth tuning metaphor — swap if preferred).",
      theme: "Partners. Pairs. Exploration. Bluetooth = sync = tune in = connection. Pride angle subtle, inclusive imagery throughout.",
      relatedEvents: ["lem-play-launch"],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== JUN 23 - AUG 31: Vacay Sale (renamed from Travel Summer Sale) =====
    {
      id: "vacay-sale-2026",
      name: "Vacay Sale",
      type: "sale",
      startDate: "2026-06-23",
      endDate: "2026-08-31",
      summary: "10-week summer sale. Travel/vacation/playful theme. Embeds Jelly Pudding launch (Jul 30) + Poison Ivy launch (Aug 4). Alt name: 'Travel Summer Sale' (swap if preferred).",
      theme: "Vacation mode. Pack-friendly. Playful summer escape. Travel-coded everywhere.",
      relatedEvents: ["jelly-pudding-launch", "poison-ivy-launch"],
      channels: ["meta", "email", "social", "homepage", "creator"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Jelly Pudding launch (inside Out of Office)
    {
      id: "jelly-pudding-launch",
      name: "🚀 Jelly Pudding Launch",
      type: "launch",
      startDate: "2026-07-30",
      endDate: "2026-07-30",
      summary: "Jelly Pudding launches inside Vacay Sale. Jelly = summer-feeling product, fits the season.",
      theme: "Jiggle + summer + dessert. Squishy, soft, joyful. Bundle as 'Sweet Spot' with travel kit.",
      relatedEvents: ["vacay-sale-2026"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Poison Ivy launch (inside Out of Office) — "cheeky" removed from name
    {
      id: "poison-ivy-launch",
      name: "🚀 Poison Ivy Launch",
      type: "launch",
      startDate: "2026-08-04",
      endDate: "2026-08-04",
      summary: "Tongue toy launch inside Vacay Sale.",
      theme: "Look. Don't Touch. Lick. Garden noir / pretty poison / forbidden plant aesthetic.",
      relatedEvents: ["vacay-sale-2026"],
      channels: ["meta", "email", "social", "creator", "press", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== AUG 31: Tennis Launch + Smash Sale (extended through Sep 22) =====
    {
      id: "tennis-launch",
      name: "🚀 Tennis Ball Suction + Wand Launch",
      type: "launch",
      startDate: "2026-08-31",
      endDate: "2026-08-31",
      summary: "Sunday launch (exception to Tue-Thu rule). Times to start of US Open week. Kicks off Smash Sale.",
      theme: "Tennis everywhere. Smash, ace, serve. Sport energy + sex-positive playfulness.",
      relatedEvents: ["smash-sale-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "smash-sale-2026",
      name: "Smash Sale",
      type: "sale",
      startDate: "2026-08-31",
      endDate: "2026-09-22",
      summary: "Tennis-themed sale, runs through US Open + extends to Sep 22. NOT discount-focused — branding everywhere, sport energy. Embeds Lem Pro Play launch (Sep 10).",
      theme: "Smash. Tennis tournament energy. Cultural moment-tied. Tennis whites, courts, balls, US Open vibe.",
      relatedEvents: ["tennis-launch", "lem-pro-play-launch"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Lem Pro Play — MOVED to Sep 10 (Thu) inside Smash Sale
    {
      id: "lem-pro-play-launch",
      name: "🚀 Lem Pro Play Launch (premium upgrade)",
      type: "launch",
      startDate: "2026-09-10",
      endDate: "2026-09-10",
      summary: "Premium Bluetooth Lem upgrade. MOVED to Sep 10 inside Smash Sale.",
      theme: "Lem, Levelled Up. The pro version. Sequel narrative. Premium positioning.",
      relatedEvents: ["smash-sale-2026"],
      channels: ["meta", "email", "social", "press", "influencer", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== SEP 22 - OCT 8: Reawakening Sale (NEW — replaces Pleasure Sale) =====
    {
      id: "reawakening-sale-2026",
      name: "Reawakening Sale",
      type: "sale",
      startDate: "2026-09-22",
      endDate: "2026-10-08",
      summary: "Replaces Pleasure Sale. Reawakening / reignite / rediscover theme. Embeds Flower 2.0 launch (Sep 24).",
      theme: "Reawakening. Reignite. Rediscover pleasure. Fall transition energy. Pairs with Flower 2.0 (new tech) launch.",
      relatedEvents: ["flower-2-launch"],
      channels: ["meta", "email", "social", "press", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // Flower 2.0 — MOVED to Sep 24 (Thu) inside Reawakening Sale
    {
      id: "flower-2-launch",
      name: "🚀 Flower 2.0 Launch (new tech)",
      type: "launch",
      startDate: "2026-09-24",
      endDate: "2026-09-24",
      summary: "Premium upgrade with new tech. MOVED to Sep 24 inside Reawakening Sale.",
      theme: "Bloom Better. Sequel/upgrade. Premium feel. Focus on the new tech in marketing.",
      relatedEvents: ["reawakening-sale-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== OCT 8 - NOV 2: Halloween Sale (NEW — replaces Prime Sale) =====
    {
      id: "halloween-sale-2026",
      name: "Halloween Sale",
      type: "sale",
      startDate: "2026-10-08",
      endDate: "2026-11-02",
      summary: "Replaces Prime Sale. Halloween-themed sale ~4 weeks. Pumpkin launch (Oct 8) kicks off.",
      theme: "Halloween. Spooky season. Treat yourself. Witchy + cozy fall. Costumes, candles, pumpkin spice energy.",
      relatedEvents: ["pumpkin-launch"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "pumpkin-launch",
      name: "🚀 Pumpkin Launch (Halloween)",
      type: "launch",
      startDate: "2026-10-08",
      endDate: "2026-10-08",
      summary: "Halloween-tied launch. Kicks off Halloween Sale.",
      theme: "Treat Yourself. Halloween + gifting + cozy fall ritual.",
      relatedEvents: ["halloween-sale-2026"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== NOV 2 - NOV 9: Early Black Friday Sale =====
    {
      id: "early-bf-sale-2026",
      name: "Early Black Friday Sale",
      type: "sale",
      startDate: "2026-11-02",
      endDate: "2026-11-09",
      summary: "First week of November. Early-bird BF discount before main BFCM.",
      theme: "Early bird. Get in before the noise. 'Skip the chaos, save now.'",
      relatedEvents: [],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== NOV 9 - NOV 12: 11.11 Sale (now a 3-day sale, not just a moment) =====
    {
      id: "1111-sale-2026",
      name: "11.11 Sale",
      type: "sale",
      startDate: "2026-11-09",
      endDate: "2026-11-12",
      summary: "3-day Singles Day sale (was previously a 1-email moment, now upgraded to a full sale).",
      theme: "Singles Day. Self-celebration. Pair with self-pleasure / solo-life messaging. 1.1.1 numerical hook.",
      relatedEvents: [],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== NOV 12 - DEC 3: BFCM Sale =====
    {
      id: "bfcm-sale-2026",
      name: "BFCM Sale",
      type: "sale",
      startDate: "2026-11-12",
      endDate: "2026-12-03",
      summary: "Main BFCM mega-sale. ~3-week window. Black Friday Nov 27, Cyber Monday Nov 30. Christmas-related toy launch (Nov 17) embedded.",
      theme: "Black Friday Big O. Save big, climax bigger. Biggest sale of year.",
      relatedEvents: ["christmas-toy-launch"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "christmas-toy-launch",
      name: "🚀 Christmas-related Toy Launch (concept TBD)",
      type: "launch",
      startDate: "2026-11-17",
      endDate: "2026-11-17",
      summary: "Inside BFCM Sale. Featured product. Concept TBD: Tannenbaum / Mistletoe / Pine / Star.",
      theme: "Christmas-themed limited edition. Cheeky-playful in HN's fruit-product lineage.",
      relatedEvents: ["bfcm-sale-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== DEC 3 - DEC 31: Holiday Sale =====
    {
      id: "holiday-sale-2026",
      name: "Holiday Sale",
      type: "sale",
      startDate: "2026-12-03",
      endDate: "2026-12-31",
      summary: "Post-BFCM holiday gifting through end of year. Gift cards, partner gifting, NYE angle.",
      theme: "Self-gifting + partner gifting. 'Some gifts vibrate.' Holiday wraps + bundles + NYE kits.",
      relatedEvents: [],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    }

    // -------------------------------------------------------------------
    // END OF EVENTS
    // -------------------------------------------------------------------
  ]
};
