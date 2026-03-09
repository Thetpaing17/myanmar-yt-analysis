import { useState } from "react";

const niches = [
  {
    id: 1,
    name: "English in Burmese",
    nameMM: "မြန်မာလို အင်္ဂလိပ်စာ သင်ကြားရေး",
    icon: "📚",
    growth: "21x",
    cpm: "$0.50–$2.00",
    cpmNote: "Myanmar viewers",
    cpmGlobal: "$10–16 (if targeting global learners)",
    rpm: "$0.30–$1.20",
    avgViews: "30K–200K",
    channels: "~50 quality Burmese channels",
    saturation: "အလွန်နည်း (Very Low)",
    demographics: {
      age: "16–30 နှစ်",
      gender: "55% အမျိုးသမီး / 45% အမျိုးသား",
      location: "ရန်ကုန်၊ မန္တလေး၊ ထိုင်း/မလေးရှားရှိ မြန်မာများ",
      device: "98% Mobile (Android dominant)",
      income: "လစာ ၃-၈ သိန်းကြား (အများစု)",
    },
    monetization: [
      { source: "Online Course ရောင်းခြင်း", potential: 95, note: "အဓိက ဝင်ငွေ" },
      { source: "Facebook Group / Membership", potential: 85, note: "ထပ်ဆောင်း ဝင်ငွေ" },
      { source: "Ad Revenue (YouTube)", potential: 40, note: "Myanmar CPM နိမ့်" },
      { source: "Sponsorship (Language Apps)", potential: 70, note: "Duolingo, Cambly etc." },
    ],
    why: "မြန်မာနိုင်ငံမှာ အင်္ဂလိပ်စာ သင်ယူလိုသူ သန်းနဲ့ချီရှိပေမယ့်၊ YouTube မှာ အရည်အသွေးမြင့်တဲ့ Burmese-English channel အရေအတွက် အလွန်နည်းပါသေးတယ်။ English in Burmese channel က follower 500K+ ရှိပြီး ဒီ niche ရဲ့ demand ကို သက်သေပြနေပါတယ်။ ထိုင်းနဲ့ မလေးရှားမှာရှိတဲ့ မြန်မာအလုပ်သမားတွေအတွက်လည်း အလွန်လိုအပ်ပါတယ်။",
    contentIdeas: [
      "အလုပ်ခွင်သုံး အင်္ဂလိပ်စာ (Job Interview English)",
      "ထိုင်းမှာသုံးမယ့် English Phrases",
      "IELTS/TOEFL Prep - မြန်မာလို ရှင်းပြခြင်း",
      "Daily English Podcast (Beginner Level)",
    ],
    strategy: "Bilingual format: မြန်မာလို ရှင်းပြပြီး English practice ပေးရင် engagement အမြင့်ဆုံးရတယ်။ Course ရောင်းခြင်းက ad revenue ထက် 10-50x ပိုရတယ်။",
    color: "#10b981",
    accent: "#34d399",
  },
  {
    id: 2,
    name: "Tech & AI Tutorials (Burmese)",
    nameMM: "နည်းပညာ & AI Tutorial မြန်မာလို",
    icon: "🤖",
    growth: "15x",
    cpm: "$0.80–$3.00",
    cpmNote: "Myanmar viewers",
    cpmGlobal: "$15–22 (English content)",
    rpm: "$0.40–$1.50",
    avgViews: "10K–80K",
    channels: "~20 quality channels",
    saturation: "အလွန်နည်း (Very Low)",
    demographics: {
      age: "18–35 နှစ်",
      gender: "70% အမျိုးသား / 30% အမျိုးသမီး",
      location: "ရန်ကုန်၊ မန္တလေး၊ overseas Myanmar",
      device: "80% Mobile / 20% Desktop",
      income: "လစာ ၅-၁၅ သိန်းကြား",
    },
    monetization: [
      { source: "Affiliate Links (Software/Apps)", potential: 90, note: "Canva, Notion, AI tools" },
      { source: "Freelancing Course ရောင်းခြင်း", potential: 95, note: "Fiverr/Upwork guide" },
      { source: "Ad Revenue", potential: 50, note: "Tech CPM အမြင့်ဆုံးထဲက" },
      { source: "Consulting / Coaching", potential: 75, note: "1-on-1 sessions" },
    ],
    why: "AI tools တွေ ChatGPT, Canva AI, CapCut AI စတာတွေကို မြန်မာလို ရှင်းပြတဲ့ channel အရမ်းရှားပါတယ်။ Myanmar မှာ freelancing နဲ့ online earning ကို စိတ်ဝင်စားသူ အရမ်းများပြီး၊ AI ကို အသုံးချပြီး ဝင်ငွေရှာနည်းတွေကို လူတိုင်းရှာနေပါတယ်။ Tech niche က Myanmar CPM ထဲမှာ အမြင့်ဆုံး category ထဲက ဖြစ်ပါတယ်။",
    contentIdeas: [
      "ChatGPT နဲ့ Content Writing လုပ်နည်း (မြန်မာလို)",
      "Canva AI ဒီဇိုင်း - ဘာမှမကုန်ဘဲ ပရော်ဖက်ရှင်နယ်",
      "Fiverr မှာ AI Service ရောင်းပြီး $/လ ၅သိန်း+ ရှာနည်း",
      "CapCut AI Edit - 5 မိနစ်နဲ့ Pro Video ဖန်တီးခြင်း",
    ],
    strategy: "Faceless format ဖြစ်နိုင်တယ်။ Screen recording + Burmese voiceover။ Affiliate link တွေက Myanmar audience ဆိုပေမယ့် international product တွေဆိုတော့ commission ကောင်းတယ်။",
    color: "#6366f1",
    accent: "#818cf8",
  },
  {
    id: 3,
    name: "Personal Finance Myanmar",
    nameMM: "ငွေကြေးစီမံခန့်ခွဲမှု မြန်မာ",
    icon: "💰",
    growth: "12x",
    cpm: "$1.00–$4.00",
    cpmNote: "Myanmar (highest local CPM)",
    cpmGlobal: "$15–50 (US finance)",
    rpm: "$0.50–$2.00",
    avgViews: "15K–100K",
    channels: "~15 quality channels",
    saturation: "နည်း (Low)",
    demographics: {
      age: "22–40 နှစ်",
      gender: "55% အမျိုးသား / 45% အမျိုးသမီး",
      location: "ရန်ကုန်၊ မန္တလေး (urban professionals)",
      device: "90% Mobile",
      income: "လစာ ၅-၂၀ သိန်းကြား",
    },
    monetization: [
      { source: "Financial Product Partnerships", potential: 80, note: "KBZPay, WavePay, AYA" },
      { source: "E-book / Course ရောင်းခြင်း", potential: 90, note: "Budgeting guides" },
      { source: "Ad Revenue", potential: 55, note: "Finance CPM အမြင့်ဆုံး" },
      { source: "Consulting & Workshops", potential: 85, note: "Corporate workshops" },
    ],
    why: "မြန်မာနိုင်ငံမှာ financial literacy content မြန်မာလို ထုတ်ပေးသူ အလွန်ရှားပါတယ်။ Mobile banking (KBZPay, WavePay) user base က ကြီးထွားနေပြီး၊ ရွှေ/မြေ ရင်းနှီးမြှုပ်နှံမှု၊ ဈေးဆိုင်/လုပ်ငန်းငယ် ငွေစီမံခန့်ခွဲမှု စတာတွေအတွက် demand အမြင့်ဆုံးပါ။ Finance niche က CPM အမြင့်ဆုံး niche ဖြစ်ပါတယ်။",
    contentIdeas: [
      "လစာ ၃ သိန်းနဲ့ ငွေစုနည်း (50/30/20 Rule)",
      "ရွှေ ဝယ်သင့်လား? ၂၀၂၆ ရင်းနှီးမြှုပ်နှံမှု Guide",
      "KBZPay/WavePay အသုံးပြု ငွေစီမံခန့်ခွဲနည်း",
      "လုပ်ငန်းငယ် စာရင်းကိုင်နည်း (Excel Template ပါ)",
    ],
    strategy: "Trust building အရေးကြီးဆုံး။ Real numbers, real examples သုံးရတယ်။ Myanmar-specific scenarios (ရွှေ, မြေ, ဆိုင်ဖွင့်) ကို focus လုပ်ရင် engagement အကောင်းဆုံး။",
    color: "#f59e0b",
    accent: "#fbbf24",
  },
  {
    id: 4,
    name: "Cooking & Street Food",
    nameMM: "ချက်ပြုတ်နည်း & လမ်းဘေးစာ",
    icon: "🍜",
    growth: "8x",
    cpm: "$0.40–$1.50",
    cpmNote: "Myanmar viewers",
    cpmGlobal: "$4–8 (food niche global)",
    rpm: "$0.20–$0.80",
    avgViews: "50K–500K",
    channels: "~100 channels (but quality gap)",
    saturation: "အလယ်အလတ် (Medium)",
    demographics: {
      age: "18–45 နှစ်",
      gender: "65% အမျိုးသမီး / 35% အမျိုးသား",
      location: "တစ်နိုင်ငံလုံး + overseas Myanmar diaspora",
      device: "95% Mobile",
      income: "အဆင့်အတန်းမျိုးစုံ",
    },
    monetization: [
      { source: "Brand Sponsorships (FMCG)", potential: 85, note: "Ajinomoto, Nestle MM" },
      { source: "Facebook Monetization (Cross-post)", potential: 75, note: "FB Stars, Reels bonus" },
      { source: "Recipe E-book", potential: 60, note: "PDF download" },
      { source: "Ad Revenue", potential: 45, note: "High views, low CPM" },
    ],
    why: "Food content က Myanmar YouTube မှာ views အများဆုံး category ထဲက ဖြစ်ပါတယ်။ Street food tours, traditional recipes, budget meals စတာတွေ demand အရမ်းကောင်းပါတယ်။ Channel တွေ ရှိပေမယ့် production quality မြင့်တဲ့ channel အရမ်းရှားပါတယ်။ ASMR cooking format က global audience ကိုပါ ဆွဲနိုင်တယ်။ Diaspora (ထိုင်း/မလေးရှား/စင်ကာပူ) ကနေ nostalgia views များတယ်။",
    contentIdeas: [
      "ရန်ကုန် Street Food Tour - ၅၀၀၀ ကျပ်နဲ့ တစ်နေ့စာ",
      "အမေ့ ရိုးရာဟင်းလျာ - မုန့်ဟင်းခါး Recipe",
      "Budget Meal Prep - တစ်ပတ်စာ ၁သိန်းနဲ့",
      "ASMR Myanmar Cooking - ခေါက်ဆွဲသုပ် (No Talking)",
    ],
    strategy: "Dual-language titles (Myanmar + English) သုံးရင် diaspora + curious international audience ပါ ရနိုင်တယ်။ ASMR/visual-first format က language barrier ဖြတ်ကျော်ပြီး global views ရနိုင်တယ်။",
    color: "#ef4444",
    accent: "#f87171",
  },
  {
    id: 5,
    name: "Life in Thailand (for Myanmar)",
    nameMM: "ထိုင်းမှာ နေထိုင်ခြင်း လမ်းညွှန်",
    icon: "🇹🇭",
    growth: "14x",
    cpm: "$0.60–$2.50",
    cpmNote: "Myanmar + Thai audience mix",
    cpmGlobal: "$3–6 (lifestyle/expat)",
    rpm: "$0.30–$1.30",
    avgViews: "20K–150K",
    channels: "~30 active channels",
    saturation: "နည်း (Low)",
    demographics: {
      age: "20–40 နှစ်",
      gender: "50% / 50%",
      location: "ထိုင်းရှိ မြန်မာ ၄ သန်း+ & planning to go",
      device: "95% Mobile",
      income: "ထိုင်းလစာ ၁၅,၀၀၀–၃၀,၀၀၀ Baht",
    },
    monetization: [
      { source: "Service Referral Fees", potential: 90, note: "Money transfer, visa agents" },
      { source: "Sponsorships (Thai brands)", potential: 80, note: "AIS, TrueMove, 7-11" },
      { source: "Consulting / Guide ရောင်းခြင်း", potential: 85, note: "Visa process guides" },
      { source: "Ad Revenue", potential: 50, note: "Mixed geo = mid CPM" },
    ],
    why: "ထိုင်းမှာ Myanmar migrant workers ၄ သန်းကျော်ရှိပြီး၊ visa, အလုပ်ရှာ, နေထိုင်မှု guide တွေကို YouTube မှာ ရှာနေကြပါတယ်။ ဒါပေမယ့် reliable information ပေးတဲ့ channel အရမ်းရှားပါတယ်။ ထိုင်းဘာသာစကား သင်ကြားရေး၊ အလုပ်သမားအခွင့်အရေး၊ ငွေလွှဲနည်း စတဲ့ practical content တွေ demand အရမ်းကောင်းပါတယ်။",
    contentIdeas: [
      "ထိုင်းမှာ Work Permit လုပ်နည်း ၂၀၂၆ (Updated)",
      "ဘန်ကောက်မှာ အခန်းငှားနည်း - Budget Guide",
      "ထိုင်းဘာသာစကား အခြေခံ ၁၀၀ ဝါကျ",
      "ထိုင်းမှာ ငွေစုပြီး Myanmar ပြန်ပို့နည်း (အကောင်းဆုံးနည်းလမ်းများ)",
    ],
    strategy: "ဒီ niche က very practical + emotionally resonant ဖြစ်တယ်။ Trust ရပြီးရင် community အလွန်ခိုင်မာတယ်။ Telegram/Facebook Group နဲ့ တွဲပြီး service referral ဝင်ငွေရှာနိုင်တယ်။",
    color: "#8b5cf6",
    accent: "#a78bfa",
  },
];

const marketContext = {
  users: "12 million",
  population: "54.9 million",
  internetPenetration: "61%",
  socialMediaUsers: "21 million",
  mobileFirst: "98%+",
  avgCPM: "$0.30–$1.50",
  topPlatform: "Facebook (21M)",
  ytPosition: "#3 platform",
};

const BarViz = ({ data, color }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {data.map((item, i) => (
      <div key={i}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
          <span style={{ fontSize: 12, color: "#d1d5db", fontWeight: 500 }}>{item.source}</span>
          <span style={{ fontSize: 10, color: "#9ca3af" }}>{item.note}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${item.potential}%`,
              background: `linear-gradient(90deg, ${color}, ${color}88)`,
              borderRadius: 4,
            }} />
          </div>
          <span style={{ fontSize: 12, color, fontWeight: 700, minWidth: 32 }}>{item.potential}%</span>
        </div>
      </div>
    ))}
  </div>
);

const InfoRow = ({ label, value }) => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
    <span style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</span>
    <span style={{ fontSize: 12.5, color: "#e5e7eb", fontWeight: 600, textAlign: "right", maxWidth: "60%" }}>{value}</span>
  </div>
);

export default function MyanmarYouTubeAnalysis() {
  const [selectedId, setSelectedId] = useState(1);
  const niche = niches.find((n) => n.id === selectedId);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0e1a",
      fontFamily: "'DM Sans', 'Padauk', system-ui, sans-serif",
      color: "#e5e7eb",
      padding: "28px 20px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@700&family=Padauk:wght@400;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ maxWidth: 1100, margin: "0 auto 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 22 }}>🇲🇲</span>
          <span style={{ fontSize: 10, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>
            Myanmar Market Intelligence · 2026
          </span>
        </div>
        <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 700, color: "#f9fafb", margin: "0 0 4px", lineHeight: 1.2 }}>
          YouTube Niche Analysis for Myanmar
        </h1>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 16px" }}>
          မြန်မာ audience အတွက် ရည်ရွယ်ထားတဲ့ profitable niche ၅ ခု · CPM/RPM data, demographics & monetization strategy
        </p>

        {/* Market Overview Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 8,
          marginBottom: 24,
          padding: 16,
          background: "rgba(245, 158, 11, 0.06)",
          border: "1px solid rgba(245, 158, 11, 0.15)",
          borderRadius: 12,
        }}>
          {[
            { label: "YouTube Users", val: marketContext.users },
            { label: "Internet Users", val: "33.4M (61%)" },
            { label: "Mobile-First", val: marketContext.mobileFirst },
            { label: "Avg CPM (MM)", val: marketContext.avgCPM },
            { label: "Social Users", val: marketContext.socialMediaUsers },
            { label: "YT Rank", val: "#3 Platform" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{item.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#f9fafb" }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, flexWrap: "wrap" }}>

        {/* Left: Niche Tabs */}
        <div style={{ flex: "0 0 300px", minWidth: 260, display: "flex", flexDirection: "column", gap: 8 }}>
          {niches.map((n) => {
            const active = selectedId === n.id;
            return (
              <button key={n.id} onClick={() => setSelectedId(n.id)} style={{
                width: "100%", textAlign: "left", cursor: "pointer",
                background: active ? `${n.color}15` : "rgba(255,255,255,0.02)",
                border: active ? `1.5px solid ${n.color}55` : "1.5px solid rgba(255,255,255,0.05)",
                borderRadius: 10, padding: "14px 16px",
                display: "flex", alignItems: "center", gap: 12,
                transition: "all 0.25s ease",
              }}>
                <span style={{ fontSize: 24 }}>{n.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: active ? n.color : "#d1d5db", marginBottom: 1 }}>{n.name}</div>
                  <div style={{ fontSize: 10.5, color: "#9ca3af", fontFamily: "'Padauk', sans-serif" }}>{n.nameMM}</div>
                </div>
                <div style={{
                  background: `linear-gradient(135deg, ${n.color}, ${n.accent})`,
                  borderRadius: 5, padding: "2px 7px",
                  fontSize: 10, fontWeight: 700, color: "#fff", whiteSpace: "nowrap",
                }}>{n.growth}</div>
              </button>
            );
          })}

          {/* CPM Reality Check Box */}
          <div style={{
            marginTop: 8, padding: 16,
            background: "rgba(239, 68, 68, 0.06)",
            border: "1px solid rgba(239, 68, 68, 0.15)",
            borderRadius: 10,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#ef4444", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              ⚠ CPM Reality Check
            </div>
            <p style={{ fontSize: 11.5, color: "#d1d5db", lineHeight: 1.6, margin: 0, fontFamily: "'Padauk', sans-serif" }}>
              Myanmar CPM က ကမ္ဘာ့ပျမ်းမျှ ($3.50) ထက် အများကြီးနိမ့်ပါတယ်။ US CPM $32 ရှိတဲ့နေရာမှာ Myanmar CPM က $0.30–$1.50 ပဲ ရှိပါတယ်။ ဒါကြောင့် <strong style={{color: "#fbbf24"}}>Ad revenue တစ်ခုထဲအပေါ် မမှီခိုပါနဲ့</strong>။ Course, affiliate, sponsorship, service referral တို့ကို ပဓာန ဝင်ငွေအဖြစ် ချိတ်ဆက်ပါ။
            </p>
          </div>
        </div>

        {/* Right: Detail Panel */}
        <div style={{ flex: 1, minWidth: 300 }}>
          {/* Hero */}
          <div style={{
            background: `linear-gradient(135deg, ${niche.color}, ${niche.accent})`,
            borderRadius: 14, padding: "24px 26px 20px",
            marginBottom: 16, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -20, right: -10, fontSize: 100, opacity: 0.1, lineHeight: 1 }}>{niche.icon}</div>
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 2px", fontFamily: "'Space Mono', monospace" }}>{niche.name}</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", margin: 0, fontFamily: "'Padauk', sans-serif" }}>{niche.nameMM}</p>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8, marginBottom: 16 }}>
            {[
              { label: "YoY Growth", val: niche.growth },
              { label: "CPM (Myanmar)", val: niche.cpm },
              { label: "CPM (Global)", val: niche.cpmGlobal },
              { label: "Avg Views/Video", val: niche.avgViews },
              { label: "Competing Channels", val: niche.channels },
              { label: "Saturation", val: niche.saturation },
            ].map((m, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: 8, padding: "10px 14px",
                borderLeft: `3px solid ${niche.color}`,
              }}>
                <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3 }}>{m.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#f3f4f6" }}>{m.val}</div>
              </div>
            ))}
          </div>

          {/* Why */}
          <div style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12, padding: 20, marginBottom: 16,
          }}>
            <h3 style={{ fontSize: 12, color: niche.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px", fontWeight: 700 }}>
              ဘာကြောင့် ဒီ Niche လုပ်သင့်သလဲ
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "#d1d5db", margin: 0, fontFamily: "'Padauk', 'DM Sans', sans-serif" }}>
              {niche.why}
            </p>
          </div>

          {/* Two Col: Demographics + Monetization */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 12, padding: 18,
            }}>
              <h3 style={{ fontSize: 12, color: niche.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontWeight: 700 }}>
                Audience Profile
              </h3>
              {Object.entries(niche.demographics).map(([key, val]) => (
                <InfoRow key={key} label={
                  key === "age" ? "အသက်" : key === "gender" ? "ကျား/မ" : key === "location" ? "နေရာ" : key === "device" ? "Device" : "ဝင်ငွေ"
                } value={val} />
              ))}
            </div>

            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 12, padding: 18,
            }}>
              <h3 style={{ fontSize: 12, color: niche.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontWeight: 700 }}>
                Monetization Channels
              </h3>
              <BarViz data={niche.monetization} color={niche.color} />
            </div>
          </div>

          {/* Strategy */}
          <div style={{
            background: `${niche.color}0a`,
            border: `1px solid ${niche.color}20`,
            borderRadius: 12, padding: 18, marginBottom: 16,
          }}>
            <h3 style={{ fontSize: 12, color: niche.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px", fontWeight: 700 }}>
              💡 Strategy Note
            </h3>
            <p style={{ fontSize: 12.5, lineHeight: 1.7, color: "#d1d5db", margin: 0, fontFamily: "'Padauk', 'DM Sans', sans-serif" }}>
              {niche.strategy}
            </p>
          </div>

          {/* Content Ideas */}
          <div style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12, padding: 18,
          }}>
            <h3 style={{ fontSize: 12, color: niche.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontWeight: 700 }}>
              Video Ideas / ဗီဒီယို အိုင်ဒီယာများ
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {niche.contentIdeas.map((idea, i) => (
                <div key={i} style={{
                  background: `${niche.color}08`,
                  border: `1px solid ${niche.color}18`,
                  borderRadius: 8, padding: "10px 12px",
                  fontSize: 12, color: "#d1d5db", lineHeight: 1.5,
                  display: "flex", alignItems: "flex-start", gap: 7,
                  fontFamily: "'Padauk', 'DM Sans', sans-serif",
                }}>
                  <span style={{ color: niche.color, fontWeight: 700, fontSize: 10, marginTop: 2 }}>▶</span>
                  {idea}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, fontSize: 10, color: "#4b5563", textAlign: "center" }}>
            Data: DataReportal Digital 2026 Myanmar, OutlierKit, VidIQ, NanooMarketing, creator dashboards · March 2026
          </div>
        </div>
      </div>
    </div>
  );
}
