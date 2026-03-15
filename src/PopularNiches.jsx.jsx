import { useState } from "react";

const niches = [
  {
    id: 1,
    name: "Knowledge Sharing (ဗဟုသုတ)",
    nameMM: "ဗဟုသုတ ချန်နယ်",
    icon: "🧠",
    growth: "10x",
    riskLevel: "Low",
    riskColor: "#10b981",
    cpmMM: "$0.50–$2.50",
    cpmGlobal: "$8–14 (Education niche)",
    rpm: "$0.30–$1.20",
    avgViews: "20K–200K",
    channels: "~80 Burmese channels (quality: ~15)",
    saturation: "အလယ်အလတ် (Medium)",
    faceless: true,
    demographics: {
      age: "16–35 နှစ်",
      gender: "55% အမျိုးသား / 45% အမျိုးသမီး",
      location: "တစ်နိုင်ငံလုံး + Diaspora",
      device: "95% Mobile",
      peakTime: "ည 8-11 နာရီ",
    },
    monetization: [
      { source: "Ad Revenue", pct: 55, note: "Education CPM အမြင့်ဆုံးထဲက" },
      { source: "Sponsorships", pct: 75, note: "EdTech, book brands" },
      { source: "Online Courses", pct: 90, note: "အဓိက ဝင်ငွေ channel" },
      { source: "Affiliate (Books/Tools)", pct: 65, note: "Amazon, app referrals" },
    ],
    copyrightRisk: "နိမ့် — ကိုယ်ပိုင် script + ကိုယ်ပိုင် visuals ဖြစ်လို့ copyright ပြဿနာ မရှိသလောက်ပါ။ Stock footage, Canva graphics သုံးလို့ရတယ်။",
    why: "Myanmar YouTube မှာ ဗဟုသုတ/education content က views အတော်ကောင်းတယ်။ Science, History, Psychology, Space စတဲ့ topics တွေကို မြန်မာလို ရှင်းပြတဲ့ channel အရည်အသွေးမြင့်တာ အရမ်းရှားတယ်။ Faceless format နဲ့ လုပ်လို့ရပြီး AI voiceover + Canva/After Effects animation သုံးနိုင်တယ်။ Education niche က CPM အမြင့်ဆုံးထဲက ဖြစ်ပြီး advertiser-friendly ဖြစ်တယ်။",
    pros: ["Copyright risk အနည်းဆုံး", "CPM အမြင့်ဆုံး niche", "Evergreen content (views မဆုံး)", "Faceless ဖြစ်နိုင်", "Course ရောင်းဖို့ အကောင်းဆုံး funnel"],
    cons: ["Research အချိန်ယူရ", "Animation/Visual quality လိုအပ်", "Script writing skill လိုအပ်"],
    contentIdeas: [
      "သိပ္ပံ — Black Hole ဆိုတာ ဘာလဲ? (5 min explainer)",
      "စိတ်ပညာ — ဘာကြောင့် လူတွေ အိပ်မက်မက်ရတာလဲ?",
      "သမိုင်း — ပုဂံခေတ် ပြိုကျပုံ (10 min documentary)",
      "ဗဟုသုတ — ကမ္ဘာ့ အချမ်းသာဆုံး လူ ၅ ဦး",
    ],
    exampleChannels: "Kurzgesagt (EN), OverSimplified (EN), Mythical Recap Myanmar",
    color: "#6366f1",
    accent: "#818cf8",
  },
  {
    id: 2,
    name: "Movie Recap (ရုပ်ရှင် အကျဉ်းချုပ်)",
    nameMM: "ရုပ်ရှင် Recap ချန်နယ်",
    icon: "🎬",
    growth: "8x",
    riskLevel: "High",
    riskColor: "#ef4444",
    cpmMM: "$0.30–$1.50",
    cpmGlobal: "$2–8 (Entertainment)",
    rpm: "$0.15–$0.80",
    avgViews: "50K–500K",
    channels: "~200+ Burmese channels (oversaturated)",
    saturation: "မြင့် (High)",
    faceless: true,
    demographics: {
      age: "15–30 နှစ်",
      gender: "50% / 50%",
      location: "တစ်နိုင်ငံလုံး + ထိုင်း/မလေးရှား diaspora",
      device: "98% Mobile",
      peakTime: "ည 9-12 နာရီ",
    },
    monetization: [
      { source: "Ad Revenue", pct: 40, note: "Copyright claim ကြောင့် ဆုံးရှုံးနိုင်" },
      { source: "Sponsorships", pct: 30, note: "Streaming apps (Netflix, Viu)" },
      { source: "Affiliate (VPN/Streaming)", pct: 50, note: "NordVPN, Surfshark" },
      { source: "Facebook Cross-post", pct: 60, note: "FB Stars + Reels" },
    ],
    copyrightRisk: "မြင့်မား — Movie clips သုံးတဲ့အတွက် Content ID claim ခံရနိုင်တယ်။ Revenue ကို copyright owner ဆီ သွားနိုင်တယ်။ Channel termination risk ရှိတယ်။ 2026 YouTube policy မှာ reused content policy ပိုတင်းကျပ်လာပြီး AI-generated recap channel တွေကို ပိုစစ်ဆေးနေတယ်။ Commentary မပါရင် monetization reject ခံရနိုင်တယ်။",
    why: "Myanmar YouTube မှာ movie recap channel တွေ အလွန်ခေတ်စားပေမယ့်၊ ပြိုင်ဆိုင်မှု အလွန်ပြင်းထန်ပြီး copyright risk အမြင့်ဆုံး niche ဖြစ်ပါတယ်။ Views ကောင်းပေမယ့် ad revenue ကို copyright owner ယူသွားနိုင်တယ်။ YouTube ရဲ့ 2026 'inauthentic content' policy အရ AI voice + movie clips ချည်းပဲသုံးတဲ့ channel တွေကို demonetize လုပ်နိုင်တယ်။ Unique commentary, own analysis ထည့်မှ အဆင်ပြေမယ်။",
    pros: ["Views အမြင့်ဆုံး potential", "Faceless ဖြစ်နိုင်", "Content ideas မကုန်", "Shorts viral potential"],
    cons: ["Copyright claim/strike risk အမြင့်ဆုံး", "Ad revenue ဆုံးရှုံးနိုင်", "Channel terminate risk", "2026 reused content policy risk", "Competition အပြင်းထန်ဆုံး"],
    contentIdeas: [
      "Parasite (2019) ရုပ်ရှင် အကျဉ်းချုပ် + Analysis",
      "Netflix Top 5 ဇာတ်ကား — ဒီတစ်ပတ်",
      "Ending Explained: Inception ရဲ့ နောက်ဆုံး Scene",
      "Korean Drama Recap — Squid Game Season 3",
    ],
    exampleChannels: "Mystery Recapped (EN), Recap Myanmar, Nyein Recap",
    color: "#ef4444",
    accent: "#f87171",
  },
  {
    id: 3,
    name: "Audiobook Channel",
    nameMM: "အသံစာအုပ် ချန်နယ်",
    icon: "🎧",
    growth: "6x",
    riskLevel: "Very High",
    riskColor: "#dc2626",
    cpmMM: "$0.30–$1.00",
    cpmGlobal: "$2–6 (Entertainment/Books)",
    rpm: "$0.15–$0.50",
    avgViews: "5K–80K",
    channels: "~60 Burmese channels",
    saturation: "အလယ်အလတ် (Medium)",
    faceless: true,
    demographics: {
      age: "20–45 နှစ်",
      gender: "45% အမျိုးသား / 55% အမျိုးသမီး",
      location: "ရန်ကုန်, မန္တလေး, overseas workers",
      device: "95% Mobile (background play)",
      peakTime: "ည 9 နာရီ - မနက် 1 နာရီ (အိပ်ရာဝင်ချိန်)",
    },
    monetization: [
      { source: "Ad Revenue", pct: 35, note: "Low CPM + copyright issues" },
      { source: "Membership/Patreon", pct: 70, note: "Exclusive audiobooks" },
      { source: "Own Book Sales", pct: 85, note: "ကိုယ်ပိုင်စာအုပ် ရောင်းခြင်း" },
      { source: "Sponsorships", pct: 40, note: "Publishing houses" },
    ],
    copyrightRisk: "အလွန်မြင့် — စာအုပ် ဟာ copyrighted material ဖြစ်ပါတယ်။ စာရေးသူ/ထုတ်ဝေသူ ခွင့်ပြုချက်မရဘဲ audiobook ဖတ်ခြင်းဟာ copyright infringement ဖြစ်ပါတယ်။ YouTube ကလည်း 2026 မှာ ebook/audiobook piracy ကို ပိုတင်းကျပ်လာပြီး channel terminate risk အမြင့်ဆုံး ဖြစ်ပါတယ်။ ကိုယ်ပိုင်ရေးတဲ့ content (book summaries, own stories) ဆိုရင် safe ပါတယ်။",
    why: "Myanmar မှာ audiobook ဝါသနာရှင် အတော်များပါတယ်၊ အထူးသဖြင့် ထိုင်း/မလေးရှားမှာ အလုပ်လုပ်နေတဲ့ Myanmar workers တွေက အိပ်ရာဝင်ချိန်မှာ နားထောင်လေ့ရှိတယ်။ ဒါပေမယ့် ဒီ niche က copyright risk အမြင့်ဆုံး ဖြစ်ပါတယ်။ တစ်ခြားသူ့ စာအုပ်ကို ခွင့်ပြုချက်မရဘဲ ဖတ်ခြင်းဟာ ဥပဒေချိုးဖောက်မှု ဖြစ်ပါတယ်။ Safe alternative: Book SUMMARY (15 min), ကိုယ်ပိုင်ရေးတဲ့ short stories, self-help paraphrasing + own commentary။",
    pros: ["ထိုင်း/မလေးရှား Myanmar diaspora demand", "Background play = long watch time", "Loyal audience", "Low production cost"],
    cons: ["Copyright risk အမြင့်ဆုံး niche", "Channel terminate risk", "Low CPM", "Monetization reject risk", "Legal liability"],
    contentIdeas: [
      "📖 Book Summary — Atomic Habits (15 min, ကိုယ်ပိုင်စကားနဲ့)",
      "📖 ကိုယ်ပိုင် Short Story — ရန်ကုန်ညမှာ",
      "📖 Self-Help Summary — Rich Dad Poor Dad အကျဉ်းချုပ်",
      "📖 Public Domain — ဂျာတကာဝတ္ထု (copyright free)",
    ],
    exampleChannels: "Myanmar Audio Book, စာအုပ်ဖတ် channels",
    color: "#8b5cf6",
    accent: "#a78bfa",
  },
  {
    id: 4,
    name: "Reaction Channel",
    nameMM: "Reaction ချန်နယ်",
    icon: "😱",
    growth: "7x",
    riskLevel: "Medium-High",
    riskColor: "#f59e0b",
    cpmMM: "$0.30–$1.20",
    cpmGlobal: "$2–6 (Entertainment)",
    rpm: "$0.15–$0.60",
    avgViews: "30K–300K",
    channels: "~100 Burmese channels",
    saturation: "မြင့် (High)",
    faceless: false,
    demographics: {
      age: "14–28 နှစ်",
      gender: "60% အမျိုးသား / 40% အမျိုးသမီး",
      location: "တစ်နိုင်ငံလုံး + diaspora",
      device: "95% Mobile",
      peakTime: "ည 7-11 နာရီ",
    },
    monetization: [
      { source: "Ad Revenue", pct: 40, note: "Copyright claims ကြောင့် ကျနိုင်" },
      { source: "Sponsorships", pct: 55, note: "Gaming, snack brands" },
      { source: "Super Chat / Live", pct: 65, note: "Live reaction streams" },
      { source: "Merch / Personal Brand", pct: 50, note: "Personality-driven" },
    ],
    copyrightRisk: "အလယ်-မြင့် — React လုပ်တဲ့ original content (music video, trailer) ရဲ့ copyright claim ခံရနိုင်တယ်။ YouTube policy အရ 'reaction with no significant commentary' ဆိုရင် reused content အဖြစ် သတ်မှတ်ခံရနိုင်တယ်။ Safe: Original content ရဲ့ 20-30% ထက်မပို ပြခြင်း + ကိုယ့်ရဲ့ commentary/analysis 60%+ ဖြစ်ခြင်း။ Music reaction ဆိုရင် full song ပြရင် claim ခံရမယ်။",
    why: "Reaction channel က Myanmar YouTube မှာ popular ဖြစ်ပေမယ့်၊ oversaturated ဖြစ်နေပြီ။ React လုပ်ရုံနဲ့ မလုံလောက်ဘဲ unique personality, deep analysis, educational value ထည့်မှ ထူးခြားမယ်။ Face cam လိုအပ်ပြီး faceless format အဆင်မပြေ။ Copyright risk ကလည်း original content ပေါ်မူတည်ပြီး အလယ်-မြင့် ရှိတယ်။ Personal branding ကောင်းရင်တော့ sponsorship + Super Chat ဝင်ငွေ ကောင်းနိုင်တယ်။",
    pros: ["Personality brand တည်ဆောက်နိုင်", "Live stream engagement ကောင်း", "Trending content ride လို့ရ", "Community building ကောင်း"],
    cons: ["Face cam လိုအပ်", "Copyright claim risk", "Competition အပြင်းထန်", "Reused content policy risk", "Commentary မပါရင် demonetize ခံရနိုင်"],
    contentIdeas: [
      "🎵 Myanmar New Song Reaction + Music Analysis",
      "🎬 Trailer Reaction — Marvel/DC + Prediction",
      "📱 Tech Product Reaction — iPhone 17 Keynote",
      "🌍 Foreigner Reacts to Myanmar Culture + Education",
    ],
    exampleChannels: "React channels, Korean React, Japan React to MM",
    color: "#f97316",
    accent: "#fb923c",
  },
];

const RiskBadge = ({ level, color }) => (
  <span style={{
    display: "inline-block",
    background: `${color}20`,
    color,
    border: `1px solid ${color}44`,
    borderRadius: 6,
    padding: "2px 10px",
    fontSize: 11,
    fontWeight: 700,
  }}>
    {level === "Low" ? "⬇" : level === "Very High" ? "⬆⬆" : level === "High" ? "⬆" : "↗"} {level}
  </span>
);

const Bar = ({ pct, color, label, note }) => (
  <div style={{ marginBottom: 8 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
      <span style={{ fontSize: 11.5, color: "#d1d5db" }}>{label}</span>
      <span style={{ fontSize: 10, color: "#9ca3af" }}>{note}</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ flex: 1, height: 7, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}88)`, borderRadius: 4 }} />
      </div>
      <span style={{ fontSize: 11, color, fontWeight: 700, minWidth: 28 }}>{pct}%</span>
    </div>
  </div>
);

const Tag = ({ text, color }) => (
  <span style={{
    display: "inline-block", fontSize: 10.5, color: "#d1d5db",
    background: `${color}0c`, border: `1px solid ${color}22`,
    borderRadius: 5, padding: "3px 8px", margin: "0 4px 4px 0",
  }}>
    {text}
  </span>
);

export default function MyanmarNicheAnalysis() {
  const [sel, setSel] = useState(1);
  const n = niches.find((x) => x.id === sel);

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0e1a",
      fontFamily: "'DM Sans', 'Padauk', system-ui, sans-serif",
      color: "#e5e7eb", padding: "28px 20px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@700&family=Padauk:wght@400;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ maxWidth: 1100, margin: "0 auto 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 18 }}>🎬</span>
          <span style={{ fontSize: 10, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>
            KO THET PAING · Content Creation & Monetization Master Class
          </span>
        </div>
        <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(18px, 3.5vw, 28px)", fontWeight: 700, color: "#f9fafb", margin: "0 0 4px" }}>
          Myanmar Popular YouTube Niches · Deep Analysis
        </h1>
        <p style={{ fontSize: 12.5, color: "#6b7280", margin: 0, fontFamily: "'Padauk', sans-serif" }}>
          မြန်မာမှာ လူကြိုက်များတဲ့ YouTube Niche ၄ ခု · Copyright Risk, Monetization & Strategy
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 18, flexWrap: "wrap" }}>

        {/* Left Panel */}
        <div style={{ flex: "0 0 300px", minWidth: 260, display: "flex", flexDirection: "column", gap: 8 }}>
          {niches.map((x) => {
            const on = sel === x.id;
            return (
              <button key={x.id} onClick={() => setSel(x.id)} style={{
                width: "100%", textAlign: "left", cursor: "pointer",
                background: on ? `${x.color}14` : "rgba(255,255,255,0.02)",
                border: on ? `1.5px solid ${x.color}55` : "1.5px solid rgba(255,255,255,0.05)",
                borderRadius: 10, padding: "12px 14px",
                display: "flex", alignItems: "center", gap: 10,
                transition: "all 0.25s",
              }}>
                <span style={{ fontSize: 24 }}>{x.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: on ? x.color : "#d1d5db", marginBottom: 1 }}>{x.name}</div>
                  <div style={{ fontSize: 10, color: "#9ca3af" }}>
                    Copyright Risk: <RiskBadge level={x.riskLevel} color={x.riskColor} />
                  </div>
                </div>
                <div style={{
                  background: `linear-gradient(135deg, ${x.color}, ${x.accent})`,
                  borderRadius: 5, padding: "2px 7px",
                  fontSize: 10, fontWeight: 700, color: "#fff",
                }}>{x.growth}</div>
              </button>
            );
          })}

          {/* Comparison */}
          <div style={{
            marginTop: 8, padding: 14,
            background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 10,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#f59e0b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              📊 Quick Comparison
            </div>
            <table style={{ width: "100%", fontSize: 10, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ color: "#9ca3af" }}>
                  <td style={{ padding: "3px 0" }}>Niche</td>
                  <td>Risk</td>
                  <td>CPM</td>
                  <td>Views</td>
                </tr>
              </thead>
              <tbody>
                {niches.map((x) => (
                  <tr key={x.id} style={{ color: "#d1d5db", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "4px 0" }}>{x.icon}</td>
                    <td><span style={{ color: x.riskColor, fontWeight: 600 }}>{x.riskLevel}</span></td>
                    <td>{x.cpmMM.split("–")[1]}</td>
                    <td>{x.avgViews.split("–")[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Verdict */}
          <div style={{
            padding: 14,
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.15)",
            borderRadius: 10,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981", marginBottom: 4 }}>
              ✅ အကြံပြုချက်
            </div>
            <p style={{ fontSize: 10.5, color: "#d1d5db", lineHeight: 1.6, margin: 0, fontFamily: "'Padauk', sans-serif" }}>
              <strong style={{ color: "#10b981" }}>ဗဟုသုတ channel</strong> က copyright risk အနည်းဆုံး + CPM အမြင့်ဆုံး + course ရောင်းဖို့ အကောင်းဆုံး ဖြစ်ပါတယ်။ Movie Recap နဲ့ Audiobook channel တွေက views ကောင်းပေမယ့် <strong style={{ color: "#ef4444" }}>copyright risk အလွန်မြင့်</strong>ပါတယ်။
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ flex: 1, minWidth: 300 }}>
          {/* Hero */}
          <div style={{
            background: `linear-gradient(135deg, ${n.color}, ${n.accent})`,
            borderRadius: 14, padding: "22px 24px 18px",
            marginBottom: 14, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -16, right: -6, fontSize: 90, opacity: 0.12 }}>{n.icon}</div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: 0, fontFamily: "'Space Mono', monospace" }}>{n.name}</h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontFamily: "'Padauk'" }}>{n.nameMM}</span>
                {n.faceless && <span style={{ fontSize: 10, background: "rgba(255,255,255,0.2)", borderRadius: 4, padding: "1px 6px", color: "#fff" }}>Faceless OK</span>}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8, marginBottom: 14 }}>
            {[
              { l: "Growth", v: n.growth },
              { l: "CPM (Myanmar)", v: n.cpmMM },
              { l: "CPM (Global)", v: n.cpmGlobal },
              { l: "Avg Views", v: n.avgViews },
              { l: "Competition", v: n.channels },
              { l: "Copyright Risk", v: n.riskLevel },
            ].map((m, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 8,
                padding: "9px 12px", borderLeft: `3px solid ${i === 5 ? n.riskColor : n.color}`,
              }}>
                <div style={{ fontSize: 9.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: i === 5 ? n.riskColor : "#f3f4f6" }}>{m.v}</div>
              </div>
            ))}
          </div>

          {/* Copyright Risk Box */}
          <div style={{
            background: `${n.riskColor}0a`,
            border: `1px solid ${n.riskColor}25`,
            borderRadius: 12, padding: 16, marginBottom: 14,
          }}>
            <h3 style={{ fontSize: 12, color: n.riskColor, margin: "0 0 6px", fontWeight: 700 }}>
              ⚠️ Copyright Risk Assessment
            </h3>
            <p style={{ fontSize: 12, lineHeight: 1.75, color: "#d1d5db", margin: 0, fontFamily: "'Padauk', 'DM Sans'" }}>
              {n.copyrightRisk}
            </p>
          </div>

          {/* Analysis */}
          <div style={{
            background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12, padding: 16, marginBottom: 14,
          }}>
            <h3 style={{ fontSize: 11, color: n.color, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px", fontWeight: 700 }}>
              Analysis / သုံးသပ်ချက်
            </h3>
            <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#d1d5db", margin: 0, fontFamily: "'Padauk', 'DM Sans'" }}>
              {n.why}
            </p>
          </div>

          {/* Pros & Cons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.12)", borderRadius: 10, padding: 14 }}>
              <h3 style={{ fontSize: 11, color: "#10b981", margin: "0 0 8px", fontWeight: 700 }}>✅ Pros / အားသာချက်</h3>
              {n.pros.map((p, i) => (
                <div key={i} style={{ fontSize: 11.5, color: "#d1d5db", marginBottom: 4, fontFamily: "'Padauk', sans-serif" }}>
                  • {p}
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 10, padding: 14 }}>
              <h3 style={{ fontSize: 11, color: "#ef4444", margin: "0 0 8px", fontWeight: 700 }}>❌ Cons / အားနည်းချက်</h3>
              {n.cons.map((c, i) => (
                <div key={i} style={{ fontSize: 11.5, color: "#d1d5db", marginBottom: 4, fontFamily: "'Padauk', sans-serif" }}>
                  • {c}
                </div>
              ))}
            </div>
          </div>

          {/* Demographics + Monetization */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: 16 }}>
              <h3 style={{ fontSize: 11, color: n.color, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px", fontWeight: 700 }}>Audience</h3>
              {Object.entries(n.demographics).map(([k, v]) => (
                <div key={k} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 9.5, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>
                    {k === "age" ? "အသက်" : k === "gender" ? "ကျား/မ" : k === "location" ? "နေရာ" : k === "device" ? "Device" : "Peak Time"}
                  </div>
                  <div style={{ fontSize: 12, color: "#e5e7eb", fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: 16 }}>
              <h3 style={{ fontSize: 11, color: n.color, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px", fontWeight: 700 }}>Monetization</h3>
              {n.monetization.map((m, i) => (
                <Bar key={i} pct={m.pct} color={n.color} label={m.source} note={m.note} />
              ))}
            </div>
          </div>

          {/* Content Ideas */}
          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: 16 }}>
            <h3 style={{ fontSize: 11, color: n.color, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px", fontWeight: 700 }}>
              Video Ideas / ဗီဒီယို အိုင်ဒီယာ
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {n.contentIdeas.map((idea, i) => (
                <div key={i} style={{
                  background: `${n.color}08`, border: `1px solid ${n.color}18`,
                  borderRadius: 7, padding: "8px 10px", fontSize: 11.5, color: "#d1d5db",
                  lineHeight: 1.5, fontFamily: "'Padauk', 'DM Sans'",
                }}>
                  {idea}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, fontSize: 10.5, color: "#9ca3af" }}>
              Reference channels: {n.exampleChannels}
            </div>
          </div>

          <div style={{ marginTop: 12, fontSize: 10, color: "#4b5563", textAlign: "center" }}>
            Data: YouTube Analytics, SocialBlade, Creator Reports, YouTube Policy 2026 · KO THET PAING Master Class
          </div>
        </div>
      </div>
    </div>
  );
}
