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
//     relatedEvents: ["other-event-id"], // launches inside a sale, etc.
//     channels: ["meta", "email", ...],   // active channels for this event
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
  // 2026 EVENTS — MAY through DECEMBER
  // Locked per the merch + sales calendar plan.
  // -------------------------------------------------------------------
  events: [

    // ===== APRIL-MAY: Mother's Day Sale (already running) =====
    {
      id: "mothers-day-2026",
      name: "Mother's Day Sale",
      type: "sale",
      startDate: "2026-04-20",
      endDate: "2026-05-12",
      summary: "Already running. Wraps May 12 (handoff to Splashy May Sale).",
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

    // ===== MAY 12-31: Splashy May Sale (umbrella) =====
    {
      id: "splashy-may-2026",
      name: "Splashy May Sale",
      type: "sale",
      startDate: "2026-05-12",
      endDate: "2026-05-31",
      summary: "Masturbation Month. 50% off. 2 launches embedded (Waterproof Blanket + Snack Pack) + Miami Swim Week sub-event.",
      theme: "Get Wet. Splash season. Water + summer + freedom. Creative threads: Juicy Blanket (Waterproof Blanket) / Dirty Jack (Snack Pack) / Miami Swim energy.",
      relatedEvents: ["waterproof-blanket-launch", "snack-pack-launch", "miami-swim-week"],
      channels: ["meta", "email", "social", "press", "homepage", "creator", "influencer"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    // Waterproof Blanket launch (inside Splashy May)
    {
      id: "waterproof-blanket-launch",
      name: "🚀 Waterproof Blanket Launch",
      type: "launch",
      startDate: "2026-05-12",
      endDate: "2026-05-12",
      summary: "Launches Day 1 of Splashy May Sale. Concept: 'Juicy Blanket' — wet/splashy positioning.",
      theme: "Juicy Blanket. Wet/freedom angle. Pairs with all toys for mess-free play.",
      relatedEvents: ["splashy-may-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    // Snack Pack launch (inside Splashy May)
    {
      id: "snack-pack-launch",
      name: "🚀 Snack Pack Launch",
      type: "launch",
      startDate: "2026-05-26",
      endDate: "2026-05-26",
      summary: "Mid-Splashy-May launch. Concept: 'Dirty Jack' — cheeky snack-pack positioning.",
      theme: "Dirty Jack. Bundle pack. Cheeky food-meets-pleasure energy. Cross-bundle with Waterproof Blanket as 'Snack & Splash.'",
      relatedEvents: ["splashy-may-2026"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    // Lube launch — NEW per user, date TBD
    {
      id: "lube-launch",
      name: "🚀 Lube Launch (date TBD)",
      type: "launch",
      startDate: "2026-05-19",
      endDate: "2026-05-19",
      summary: "Date TBD — placeholder set to May 19 (Tue) inside Splashy May Sale, between Waterproof Blanket (May 12) and Snack Pack (May 26). Confirm date.",
      theme: "Lube + water + Splashy May = natural fit. Cross-bundle with Waterproof Blanket as 'Wet Set' or 'Splash Pack'.",
      relatedEvents: ["splashy-may-2026"],
      channels: ["meta", "email", "social", "press", "creator", "influencer", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    // Miami Swim Week (NEW, sub-event inside Splashy May)
    {
      id: "miami-swim-week",
      name: "Miami Swim Week",
      type: "sub-event",
      startDate: "2026-05-28",
      endDate: "2026-05-31",
      summary: "Last 4 days of Splashy May overlap with Miami Swim Week. Tie campaign content to Miami swim aesthetic.",
      theme: "Miami swim energy: sun, pool, neon, bikini, tropical. Pair with Waterproof Blanket + Snack Pack content. Influencer/creator content riding the swim-week cultural moment.",
      relatedEvents: ["splashy-may-2026"],
      channels: ["meta", "social", "influencer", "creator", "press"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== JUNE: Lem Play Launch + Couple Sale =====
    {
      id: "lem-play-launch",
      name: "🚀 Lem Play Big Launch (Bluetooth)",
      type: "launch",
      startDate: "2026-06-04",
      endDate: "2026-06-04",
      summary: "Big launch — Lem Play, Bluetooth-enabled couple toy. Kicks off Couple Sale window.",
      theme: "Couple play + Bluetooth tech. Subtle Pride angle (inclusive couples). App-coded but emotional.",
      relatedEvents: ["couple-sale-2026"],
      channels: ["meta", "email", "social", "press", "influencer", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "couple-sale-2026",
      name: "Couple Sale",
      type: "sale",
      startDate: "2026-06-04",
      endDate: "2026-06-14",
      summary: "10-day sub-campaign celebrating couples + Bluetooth app. Wraps the Lem Play launch with a couple-focused sale window.",
      theme: "Couples first. App-driven intimacy. Pride angle subtle, inclusive imagery throughout.",
      relatedEvents: ["lem-play-launch"],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== JUNE-AUGUST: Travel Summer Sale (long evergreen) =====
    {
      id: "travel-summer-sale-2026",
      name: "Travel Summer Sale",
      type: "sale",
      startDate: "2026-06-16",
      endDate: "2026-08-27",
      summary: "10-week evergreen summer sale. Travel/vacation theme. Embeds Jelly Pudding launch (Jul 30) + Poison Ivy launch (Aug 4 cheeky).",
      theme: "Travel mode. Vacation. Off-duty energy. Pack-friendly. Out-of-office vibes. Layer with Jelly (summer-feeling product) + Ivy (50% off cheeky moment).",
      relatedEvents: ["jelly-pudding-launch", "poison-ivy-launch"],
      channels: ["meta", "email", "social", "homepage", "creator"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    // Jelly Pudding launch (inside Travel Summer Sale)
    {
      id: "jelly-pudding-launch",
      name: "🚀 Jelly Pudding Launch",
      type: "launch",
      startDate: "2026-07-30",
      endDate: "2026-07-30",
      summary: "Jelly Pudding launches inside Travel Summer Sale. Jelly = summer-feeling product, fits the season.",
      theme: "Jiggle + summer + dessert. Squishy, soft, joyful. Bundle as 'Sweet Spot' with travel kit.",
      relatedEvents: ["travel-summer-sale-2026"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    // Poison Ivy launch (inside Travel Summer Sale, cheeky)
    {
      id: "poison-ivy-launch",
      name: "🚀 Poison Ivy Launch (cheeky)",
      type: "launch",
      startDate: "2026-08-04",
      endDate: "2026-08-04",
      summary: "Tongue toy launch. Cheeky positioning. Featured at 50% off inside Travel Summer Sale.",
      theme: "Look. Don't Touch. Lick. Garden noir / pretty poison / forbidden plant aesthetic. Cheeky bad-girl energy.",
      relatedEvents: ["travel-summer-sale-2026"],
      channels: ["meta", "email", "social", "creator", "press", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== AUG-SEP: Tennis Launch + Smash Sale (US Open window) =====
    {
      id: "tennis-launch",
      name: "🚀 Tennis Ball Suction + Wand Launch",
      type: "launch",
      startDate: "2026-08-31",
      endDate: "2026-08-31",
      summary: "Sunday launch (exception to Tue-Thu rule). Times to start of US Open week.",
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
      endDate: "2026-09-07",
      summary: "Tennis-themed sale window, runs concurrent with US Open (Aug 25-Sep 7). NOT discount-focused — branding everywhere, sport energy.",
      theme: "Smash. Tennis tournament energy. Cultural moment-tied. Tennis whites, courts, balls, US Open vibe.",
      relatedEvents: ["tennis-launch"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== SEPTEMBER: Flower 2.0 + Pleasure Sale =====
    {
      id: "flower-2-launch",
      name: "🚀 Flower 2.0 Launch (new tech)",
      type: "launch",
      startDate: "2026-09-17",
      endDate: "2026-09-17",
      summary: "Premium upgrade with new tech. Launches inside Pleasure Sale window.",
      theme: "Bloom Better. Sequel/upgrade. Premium feel. Focus on the new tech in marketing.",
      relatedEvents: ["pleasure-sale-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "pleasure-sale-2026",
      name: "Pleasure Sale",
      type: "sale",
      startDate: "2026-09-15",
      endDate: "2026-09-30",
      summary: "Evergreen September sale. Focus on new tech (Flower 2.0). NOT promo-language driven — wellness/self-pleasure positioning.",
      theme: "Pleasure. Self-pleasure. Wellness-coded evergreen. Recurs every September. New-tech showcase.",
      relatedEvents: ["flower-2-launch"],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== OCTOBER: Prime Sale (month-long) + 2 launches =====
    {
      id: "prime-sale-2026",
      name: "Prime Sale",
      type: "sale",
      startDate: "2026-10-01",
      endDate: "2026-10-31",
      summary: "Month-long sale for Menopause Awareness. Motivating, age-positive. NOT symptom-coded — 'you're in your prime.' Embeds Pumpkin (Oct 8) + Lem Pro Play (Oct 15) launches.",
      theme: "Prime. Peak years, peak power, peak pleasure. Motivating menopause-aged audience without saying menopause. Age-positive.",
      relatedEvents: ["pumpkin-launch", "lem-pro-play-launch"],
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
      summary: "Halloween-tied launch inside Prime Sale.",
      theme: "Treat Yourself. Halloween + gifting + cozy fall ritual.",
      relatedEvents: ["prime-sale-2026"],
      channels: ["meta", "email", "social", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "lem-pro-play-launch",
      name: "🚀 Lem Pro Play Launch (premium upgrade)",
      type: "launch",
      startDate: "2026-10-15",
      endDate: "2026-10-15",
      summary: "Premium Bluetooth Lem upgrade. Launches inside Prime Sale.",
      theme: "Lem, Levelled Up. The pro version. Sequel narrative. Premium positioning.",
      relatedEvents: ["prime-sale-2026"],
      channels: ["meta", "email", "social", "press", "influencer", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== NOVEMBER: Early BF + 11.11 + Christmas Toy + BFCM =====
    {
      id: "early-bf-sale-2026",
      name: "Early Black Friday Sale",
      type: "sale",
      startDate: "2026-11-03",
      endDate: "2026-11-09",
      summary: "First week of November. Early-bird BF discount before main BFCM.",
      theme: "Early bird. Get in before the noise. 'Skip the chaos, save now.'",
      relatedEvents: [],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "1111-moment-2026",
      name: "11.11 Moment",
      type: "moment",
      startDate: "2026-11-11",
      endDate: "2026-11-11",
      summary: "Singles Day acknowledgment. 1 email + 1 social post. NOT a sale.",
      theme: "Singles Day. Self-celebration. Pair with self-pleasure / solo-life messaging.",
      relatedEvents: [],
      channels: ["email", "social"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "christmas-toy-launch",
      name: "🚀 Christmas-related Toy Launch (concept TBD)",
      type: "launch",
      startDate: "2026-11-17",
      endDate: "2026-11-17",
      summary: "Day before BFCM. Launches with momentum, becomes featured product in BFCM Sale through Dec 1.",
      theme: "Christmas-themed limited edition. Concept TBD: Tannenbaum (literal tree) / Mistletoe (kiss) / Pine (abstract) / Star (top of tree). Cheeky-playful in HN's fruit-product lineage.",
      relatedEvents: ["bfcm-sale-2026"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },
    {
      id: "bfcm-sale-2026",
      name: "BFCM Sale",
      type: "sale",
      startDate: "2026-11-18",
      endDate: "2026-12-01",
      summary: "Main BFCM mega-sale. 2-week window. Black Friday Nov 27, Cyber Monday Nov 30. Christmas toy featured throughout.",
      theme: "Black Friday Big O. Save big, climax bigger. Biggest sale of year. Bold typography.",
      relatedEvents: ["christmas-toy-launch"],
      channels: ["meta", "email", "social", "press", "creator", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    },

    // ===== DECEMBER: Holiday Gifting (TBD name) =====
    {
      id: "holiday-gifting-2026",
      name: "Holiday Gifting (name TBD)",
      type: "sale",
      startDate: "2026-12-02",
      endDate: "2026-12-25",
      summary: "Post-BFCM holiday gifting window. Name pending. Gift cards, last-minute gifting, partner gifting.",
      theme: "Self-gifting + partner gifting. 'Some gifts vibrate.' Holiday wraps + bundles.",
      relatedEvents: [],
      channels: ["meta", "email", "social", "homepage"],
      tasks: { pre: [], active: [], post: [] },
      kpis: []
    }

    // -------------------------------------------------------------------
    // END OF EVENTS — copy any block above to add a new event.
    // -------------------------------------------------------------------
  ]
};
