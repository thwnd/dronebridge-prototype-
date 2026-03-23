import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   DRONEBRIDGE — Bright & Friendly O2O Platform
   Design: Warm white base · Sky blue accent · Coral CTA
   Font: Nunito (rounded, friendly) + DM Sans (body)
   Vibe: 당근마켓 + 에어비앤비 → 드론 플랫폼
═══════════════════════════════════════════════════════════════ */

const G = {
  // surfaces
  white:    "#FFFFFF",
  bg:       "#F7F9FC",
  bgWarm:   "#FFF8F5",
  card:     "#FFFFFF",
  // primary - sky blue
  sky:      "#3B9EFF",
  skyLight: "#EBF4FF",
  skyMid:   "#C2DEFF",
  skyDark:  "#1A7DE8",
  // coral / CTA
  coral:    "#FF6B4A",
  coralLight:"#FFF0EC",
  coralDark: "#E8521F",
  // neutral
  ink:      "#1A2332",
  sub:      "#4A5D72",
  muted:    "#8FA3B8",
  line:     "#E4EBF2",
  lineLight:"#F0F5FA",
  // accents
  mint:     "#00C896",
  mintLight:"#E6FAF5",
  amber:    "#FF9F1C",
  amberLight:"#FFF5E0",
  violet:   "#7C5CFC",
  violetLight:"#F0ECFF",
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; }
body {
  font-family: 'DM Sans', sans-serif;
  background: ${G.bg};
  color: ${G.ink};
  -webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: ${G.lineLight}; }
::-webkit-scrollbar-thumb { background: ${G.skyMid}; border-radius: 10px; }

/* ── Typography ── */
.display { font-family: 'Nunito', sans-serif; font-weight: 900; letter-spacing: -0.5px; }
.heading  { font-family: 'Nunito', sans-serif; font-weight: 800; }
.label    { font-family: 'Nunito', sans-serif; font-weight: 700; }

/* ── Buttons ── */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  border: none; border-radius: 50px; cursor: pointer;
  font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 15px;
  padding: 13px 26px; transition: all 0.18s ease; white-space: nowrap;
}
.btn-sky  { background: ${G.sky}; color: #fff; box-shadow: 0 4px 14px rgba(59,158,255,0.35); }
.btn-sky:hover  { background: ${G.skyDark}; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(59,158,255,0.45); }
.btn-coral{ background: ${G.coral}; color: #fff; box-shadow: 0 4px 14px rgba(255,107,74,0.35); }
.btn-coral:hover{ background: ${G.coralDark}; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(255,107,74,0.45); }
.btn-outline { background: #fff; color: ${G.sky}; border: 2px solid ${G.sky}; box-shadow: none; }
.btn-outline:hover { background: ${G.skyLight}; transform: translateY(-1px); }
.btn-ghost { background: ${G.lineLight}; color: ${G.sub}; }
.btn-ghost:hover { background: ${G.line}; color: ${G.ink}; }
.btn-sm { padding: 8px 18px; font-size: 13px; }
.btn-xs { padding: 6px 14px; font-size: 12px; }

/* ── Cards ── */
.card {
  background: ${G.white}; border-radius: 18px;
  border: 1.5px solid ${G.line};
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
}
.card-hover:hover {
  box-shadow: 0 8px 28px rgba(59,158,255,0.12);
  transform: translateY(-2px);
  border-color: ${G.skyMid};
}
.card-p { padding: 24px; }
.card-p-lg { padding: 32px; }

/* ── Badges ── */
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 11px; border-radius: 50px;
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 12px;
}
.badge-sky    { background: ${G.skyLight};    color: ${G.sky};   }
.badge-coral  { background: ${G.coralLight};  color: ${G.coral}; }
.badge-mint   { background: ${G.mintLight};   color: ${G.mint};  }
.badge-amber  { background: ${G.amberLight};  color: ${G.amber}; }
.badge-violet { background: ${G.violetLight}; color: ${G.violet};}
.badge-gray   { background: ${G.lineLight};   color: ${G.sub};   }

/* ── Form ── */
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 13px; color: ${G.sub}; }
.input {
  background: ${G.bg}; border: 1.5px solid ${G.line};
  border-radius: 12px; padding: 11px 15px;
  font-family: 'DM Sans', sans-serif; font-size: 14px; color: ${G.ink};
  outline: none; transition: border-color 0.18s, box-shadow 0.18s; width: 100%;
}
.input:focus { border-color: ${G.sky}; box-shadow: 0 0 0 3px rgba(59,158,255,0.12); }
.input::placeholder { color: ${G.muted}; }
select.input { cursor: pointer; }
textarea.input { resize: vertical; }
select option { background: #fff; }

/* ── Layout helpers ── */
.flex { display: flex; }
.flex-col { display: flex; flex-direction: column; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap4 { gap: 4px; } .gap6 { gap: 6px; } .gap8 { gap: 8px; }
.gap12 { gap: 12px; } .gap16 { gap: 16px; } .gap20 { gap: 20px; }
.gap24 { gap: 24px; } .gap32 { gap: 32px; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
.grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.w-full { width: 100%; }
.text-center { text-align: center; }

/* ══════════════════════════════════════
   RESPONSIVE — 모바일 반응형
══════════════════════════════════════ */
@media (max-width: 768px) {
  /* 그리드 → 전부 1열 */
  .grid2, .grid3, .grid4 { grid-template-columns: 1fr !important; gap: 12px !important; }

  /* 카드 패딩 축소 */
  .card-p { padding: 16px !important; }
  .card-p-lg { padding: 20px !important; }

  /* 랜딩 NAV */
  .topnav { padding: 0 16px !important; height: 56px !important; }
  .nav-center { display: none !important; }

  /* 탭바 스크롤 */
  .tabbar { overflow-x: auto !important; white-space: nowrap !important; -webkit-overflow-scrolling: touch !important; }
  .tab { padding: 7px 12px !important; font-size: 12px !important; flex-shrink: 0 !important; }

  /* 사이드바 → 하단 고정 탭바 */
  .shell-wrap { flex-direction: column !important; }
  .sidebar {
    width: 100% !important;
    height: 60px !important;
    flex-direction: row !important;
    padding: 0 4px !important;
    border-right: none !important;
    border-top: 1.5px solid ${G.line} !important;
    position: fixed !important;
    bottom: 0 !important; left: 0 !important; right: 0 !important;
    z-index: 200 !important;
    overflow-x: auto !important;
    gap: 0 !important;
    box-shadow: 0 -3px 16px rgba(0,0,0,0.07) !important;
    justify-content: space-around !important;
    align-items: center !important;
    background: ${G.white} !important;
  }
  .sidebar-logo  { display: none !important; }
  .sidebar-role  { display: none !important; }
  .sidebar-bottom{ display: none !important; }
  .sidebar-link {
    flex-direction: column !important;
    gap: 2px !important;
    padding: 6px 4px !important;
    font-size: 10px !important;
    border-radius: 8px !important;
    min-width: 52px !important;
    flex: 1 !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .sidebar-link.active {
    background: transparent !important;
    color: ${G.sky} !important;
    box-shadow: none !important;
    border-top: 2.5px solid ${G.sky} !important;
    border-radius: 0 !important;
  }

  /* 앱 콘텐츠 — 하단 탭바 높이만큼 패딩 */
  .shell-content { padding: 16px 16px 76px !important; }

  /* 앱바 */
  .appbar { padding: 0 14px !important; height: 52px !important; }
  .appbar-home-btn { font-size: 12px !important; padding: 6px 10px !important; }

  /* 스텝 트랙 축소 */
  .step-track { width: 20px !important; }
  .step-node  { width: 28px !important; height: 28px !important; font-size: 12px !important; }

  /* 모달 → 하단 시트 */
  .overlay { align-items: flex-end !important; padding: 0 !important; }
  .modal {
    border-radius: 20px 20px 0 0 !important;
    padding: 24px 20px 36px !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  /* 버튼 그룹 세로 배치 */
  .btn-row { flex-direction: column !important; gap: 8px !important; }
  .btn-row .btn { width: 100% !important; }

  /* 의뢰 상세 레이아웃 */
  .detail-wrap { flex-direction: column !important; }
  .detail-right { width: 100% !important; }

  /* 채팅 */
  .chat-wrap { flex-direction: column !important; height: calc(100vh - 130px) !important; }
  .chat-list-panel { width: 100% !important; height: 180px !important; flex-shrink: 0 !important; }

  /* 통계 카드 */
  .stat { padding: 14px 16px !important; }

  /* 히어로 플로팅 카드 숨김 */
  .hero-float { display: none !important; }

  /* 랜딩 섹션 패딩 */
  .landing-section { padding: 48px 20px !important; }

  /* CTA 배너 */
  .cta-inner { flex-direction: column !important; gap: 12px !important; }
  .cta-inner .btn { width: 100% !important; }
}

/* ── Nav ── */
.topnav {
  position: sticky; top: 0; z-index: 200;
  background: rgba(255,255,255,0.92); backdrop-filter: blur(12px);
  border-bottom: 1.5px solid ${G.line};
  height: 66px; display: flex; align-items: center;
  padding: 0 48px; justify-content: space-between;
}
.nav-link {
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 14px;
  color: ${G.sub}; cursor: pointer; background: none; border: none;
  padding: 8px 14px; border-radius: 10px; transition: all 0.15s;
}
.nav-link:hover { color: ${G.sky}; background: ${G.skyLight}; }

/* ── Sidebar ── */
.sidebar {
  width: 230px; flex-shrink: 0;
  background: ${G.white}; border-right: 1.5px solid ${G.line};
  padding: 24px 14px; display: flex; flex-direction: column; gap: 4px;
  box-shadow: 2px 0 12px rgba(0,0,0,0.03);
}
.sidebar-link {
  display: flex; align-items: center; gap: 11px;
  padding: 11px 14px; border-radius: 14px; cursor: pointer;
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 14px;
  color: ${G.sub}; background: none; border: none; width: 100%; text-align: left;
  transition: all 0.15s;
}
.sidebar-link:hover { background: ${G.skyLight}; color: ${G.sky}; }
.sidebar-link.active { background: ${G.sky}; color: #fff; box-shadow: 0 4px 12px rgba(59,158,255,0.3); }

/* ── Topbar (app) ── */
.appbar {
  height: 64px; background: ${G.white}; border-bottom: 1.5px solid ${G.line};
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 28px; flex-shrink: 0;
}

/* ── Stat cards ── */
.stat {
  background: ${G.white}; border-radius: 18px; padding: 22px 24px;
  border: 1.5px solid ${G.line}; box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}

/* ── Avatar ── */
.avatar {
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: 'Nunito', sans-serif; font-weight: 800; flex-shrink: 0;
}

/* ── Tabs ── */
.tabbar { display: flex; gap: 4px; background: ${G.lineLight}; border-radius: 12px; padding: 4px; }
.tab {
  padding: 8px 18px; border-radius: 9px; cursor: pointer;
  font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 13px;
  color: ${G.sub}; background: none; border: none; transition: all 0.15s;
}
.tab.active { background: ${G.white}; color: ${G.sky}; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.tab:not(.active):hover { color: ${G.ink}; }

/* ── Progress steps ── */
.step-row { display: flex; align-items: center; justify-content: center; gap: 0; margin-bottom: 36px; }
.step-node {
  width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 14px; border: 2.5px solid; transition: all 0.3s;
}
.step-node.done   { background: ${G.mint};   border-color: ${G.mint};   color: #fff; }
.step-node.active { background: ${G.sky};    border-color: ${G.sky};    color: #fff; box-shadow: 0 0 0 5px rgba(59,158,255,0.15); }
.step-node.todo   { background: ${G.white};  border-color: ${G.line};   color: ${G.muted}; }
.step-track { width: 50px; height: 3px; background: ${G.line}; border-radius: 3px; }
.step-track.done  { background: ${G.mint}; }

/* ── Map placeholder ── */
.map-box {
  border-radius: 14px; overflow: hidden; position: relative;
  background: linear-gradient(135deg, #e8f4ff 0%, #d4ebff 50%, #c2e0ff 100%);
  border: 1.5px solid ${G.skyMid}; display: flex; align-items: center; justify-content: center;
}
.map-grid {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(59,158,255,0.08) 28px,rgba(59,158,255,0.08) 29px),
              repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(59,158,255,0.08) 28px,rgba(59,158,255,0.08) 29px);
}

/* ── Divider ── */
.divider { height: 1.5px; background: ${G.line}; border-radius: 2px; }

/* ── Animations ── */
@keyframes fadeUp   { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
@keyframes popIn    { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
@keyframes float    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
@keyframes spin     { to { transform: rotate(360deg); } }
.anim-up   { animation: fadeUp  0.4s cubic-bezier(.22,.68,0,1.2) forwards; }
.anim-in   { animation: fadeIn  0.35s ease forwards; }
.anim-pop  { animation: popIn   0.3s cubic-bezier(.22,.68,0,1.2) forwards; }
.float     { animation: float   3.5s ease-in-out infinite; }

/* ── Chat ── */
.bubble-me    { background: ${G.sky};    color: #fff;     border-radius: 18px 18px 4px 18px; padding: 11px 16px; max-width:68%; align-self:flex-end; font-size:14px; line-height:1.5; }
.bubble-other { background: ${G.lineLight}; color:${G.ink}; border-radius: 18px 18px 18px 4px; padding: 11px 16px; max-width:68%; align-self:flex-start; font-size:14px; line-height:1.5; }

/* ── Modal ── */
.overlay { position:fixed; inset:0; background:rgba(26,35,50,0.45); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; z-index:999; padding:20px; }
.modal { background:#fff; border-radius:24px; padding:32px; width:100%; max-width:460px; box-shadow:0 20px 60px rgba(0,0,0,0.15); animation: popIn 0.3s cubic-bezier(.22,.68,0,1.2); }

/* ── Misc ── */
.pill { border-radius: 50px; }
.rounded-xl { border-radius: 16px; }
.shadow-sm  { box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.star { color: #FFBA00; }
`;

// ── Tiny icon set ─────────────────────────────────────────────────────────────
const Ico = ({ n, s=16, c="currentColor" }) => {
  const d = {
    drone:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M6 6h.01M18 6h.01M6 18h.01M18 18h.01"/><path d="M6 6l6 6m6-6l-6 6M6 18l6-6m6 6l-6-6"/></svg>,
    home:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    list:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
    plus:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    user:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    users:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    chat:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    check:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    star:     <svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    map:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    calendar: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    clock:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    arrow:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    x:        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    chart:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
    shield:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    send:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    alert:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    camera:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    tag:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    logout:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    settings: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  };
  return d[n] ?? null;
};

// ── Mock Data ─────────────────────────────────────────────────────────────────
const REQS = [
  { id:1, title:"야외 축제 항공 촬영", cat:"촬영", date:"3월 25일(화)", time:"오후 2시", loc:"성남시 분당구", budget:"30~50만원", status:"견적대기", apps:4, desc:"약 3시간 야외 행사 항공 촬영. 4K 영상 및 사진 100장 이상 납품.", color:G.violet },
  { id:2, title:"건설현장 외벽 점검", cat:"점검", date:"3월 28일(금)", time:"오전 9시", loc:"강남구 삼성동", budget:"50~80만원", status:"진행중", apps:1, desc:"신축 아파트 외벽 크랙 점검. 열화상 센서 보유 필수.", color:G.coral },
  { id:3, title:"농경지 정밀 측량", cat:"측량", date:"4월 2일(수)", time:"오전 10시", loc:"공주시 의당면", budget:"80~120만원", status:"완료", apps:5, desc:"20헥타르 농경지 정밀 측량 및 3D 지형 데이터.", color:G.mint },
  { id:4, title:"펜션 홍보 영상 촬영", cat:"촬영", date:"4월 10일(목)", time:"오후 4시", loc:"인천 연수구", budget:"20~35만원", status:"견적대기", apps:2, desc:"펜션 단지 홍보 드론 영상 촬영. 골든아워 시간대 선호.", color:G.sky },
];

const PILOTS = [
  { id:1, name:"김민준", rating:4.9, cnt:87, loc:"서울·경기", eq:"DJI Mavic 3 Pro", rate:"25만원/건", tag:"슈퍼파일럿", jobs:134, init:"민", bg:G.sky },
  { id:2, name:"이서연", rating:4.7, cnt:52, loc:"경기·인천", eq:"DJI Air 3", rate:"18만원/건", tag:"인증완료", jobs:89, init:"서", bg:G.violet },
  { id:3, name:"박준혁", rating:4.8, cnt:113, loc:"서울 전역", eq:"Phantom 4 RTK", rate:"35만원/건", tag:"측량전문", jobs:201, init:"준", bg:G.coral },
  { id:4, name:"최유진", rating:4.6, cnt:34, loc:"수도권", eq:"Mavic 3T", rate:"15만원/건", tag:"검토중", jobs:41, init:"유", bg:G.amber },
];

const STATUS_STYLE = {
  "견적대기": { cls:"badge-amber", emoji:"💬" },
  "진행중":   { cls:"badge-sky",   emoji:"✈️" },
  "완료":     { cls:"badge-mint",  emoji:"✅" },
};

// ── Logo ──────────────────────────────────────────────────────────────────────
const Logo = ({ size=22 }) => (
  <div className="flex items-center gap8">
    <div style={{ width:size+12, height:size+12, background:`linear-gradient(135deg, ${G.sky}, ${G.violet})`, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 3px 10px rgba(59,158,255,0.35)` }}>
      <Ico n="drone" s={size-2} c="#fff" />
    </div>
    <span className="display" style={{ fontSize:size, color:G.ink }}>Drone<span style={{ color:G.sky }}>Bridge</span></span>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// LANDING PAGE
// ══════════════════════════════════════════════════════════════════════════════
function Landing({ go }) {
  return (
    <div style={{ background:G.white, minHeight:"100vh" }}>
      {/* ── NAV ── */}
      <nav className="topnav">
        <Logo />
        <div className="flex items-center gap8 nav-center">
          {["서비스 소개","이용 방법","파일럿 찾기"].map(t => (
            <button key={t} className="nav-link">{t}</button>
          ))}
        </div>
        <div className="flex items-center gap8">
          <button className="btn btn-ghost btn-sm" onClick={() => go("login")}>로그인</button>
          <button className="btn btn-sky btn-sm" onClick={() => go("signup")}>무료 시작하기</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ background:`linear-gradient(160deg, ${G.skyLight} 0%, ${G.white} 55%, ${G.coralLight} 100%)`, padding:"80px 48px 0", position:"relative", overflow:"hidden" }}>
        {/* decorative blobs */}
        <div style={{ position:"absolute", top:-60, right:80, width:320, height:320, borderRadius:"50%", background:`radial-gradient(circle, rgba(59,158,255,0.12), transparent 70%)`, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-40, left:100, width:240, height:240, borderRadius:"50%", background:`radial-gradient(circle, rgba(255,107,74,0.1), transparent 70%)`, pointerEvents:"none" }} />

        <div className="hero-grid-wrap" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end" }}>
          {/* LEFT */}
          <div className="anim-up" style={{ paddingBottom:80 }}>
            <div className="badge badge-sky" style={{ marginBottom:20, fontSize:13 }}>
              🚁 드론 매칭 플랫폼 #1
            </div>
            <h1 className="display hero-title" style={{ fontSize:52, lineHeight:1.15, marginBottom:22, color:G.ink }}>
              드론이 필요할 때,<br />
              <span style={{ color:G.sky }}>가장 가까운 파일럿</span><br />과 연결해 드려요
            </h1>
            <p className="hero-sub" style={{ fontSize:17, color:G.sub, lineHeight:1.7, marginBottom:36 }}>
              촬영부터 측량·점검까지.<br />
              인증된 파일럿을 간편하게 매칭하세요.
            </p>
            <div className="flex gap12 hero-btns" style={{ flexWrap:"wrap" }}>
              <button className="btn btn-sky" style={{ fontSize:16, padding:"15px 30px" }} onClick={() => go("signup")}>
                🛸 드론 의뢰하기
              </button>
              <button className="btn btn-outline" style={{ fontSize:16, padding:"15px 30px" }} onClick={() => go("signup-pilot")}>
                ✈️ 파일럿으로 일하기
              </button>
            </div>
            <div className="flex gap24 hero-stats" style={{ marginTop:36 }}>
              {[["1,247명","등록 파일럿"],["8,903건","완료 의뢰"],["4.9점","평균 만족도"]].map(([v,l]) => (
                <div key={l}>
                  <div className="label" style={{ fontSize:22, color:G.ink }}>{v}</div>
                  <div style={{ fontSize:13, color:G.muted }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – floating card illustration */}
          <div className="hero-float" style={{ position:"relative", height:420, display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
            {/* main card */}
            <div className="card float hero-float" style={{ padding:24, width:300, position:"absolute", bottom:60, right:20, zIndex:2, boxShadow:"0 12px 40px rgba(59,158,255,0.18)" }}>
              <div className="flex items-center gap12" style={{ marginBottom:14 }}>
                <div className="avatar" style={{ width:44, height:44, background:`linear-gradient(135deg,${G.sky},${G.violet})`, fontSize:18 }}>😊</div>
                <div>
                  <div className="label" style={{ fontSize:14 }}>김민준 파일럿</div>
                  <div style={{ fontSize:12, color:G.muted }}>서울·경기 전역</div>
                </div>
                <div className="badge badge-mint" style={{ marginLeft:"auto" }}>✓ 인증</div>
              </div>
              <div style={{ background:G.skyLight, borderRadius:10, padding:"10px 14px", fontSize:13, color:G.sky, marginBottom:12 }}>
                📸 DJI Mavic 3 Pro · 4K/120fps
              </div>
              <div className="flex justify-between items-center">
                <div style={{ fontSize:18, fontWeight:800, color:G.ink }}>25만원 <span style={{ fontSize:13, color:G.muted, fontWeight:500 }}>/건</span></div>
                <div style={{ color:"#FFBA00", fontSize:13 }}>★ 4.9 (87)</div>
              </div>
            </div>
            {/* mini ping card */}
            <div className="card shadow-sm" style={{ padding:"12px 16px", position:"absolute", top:80, left:20, zIndex:3, fontSize:13, boxShadow:"0 6px 20px rgba(0,0,0,0.08)" }}>
              <div className="label" style={{ fontSize:12, color:G.muted, marginBottom:4 }}>새 의뢰 매칭! 🎉</div>
              <div style={{ fontWeight:700, color:G.ink }}>행사 항공 촬영</div>
              <div style={{ fontSize:12, color:G.sky }}>성남시 · 30~50만원</div>
            </div>
            {/* review chip */}
            <div className="card shadow-sm" style={{ padding:"10px 16px", position:"absolute", top:200, right:0, zIndex:3 }}>
              <div style={{ color:"#FFBA00", fontSize:14 }}>★★★★★</div>
              <div style={{ fontSize:12, color:G.sub, marginTop:2 }}>"완벽한 촬영이었어요!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="landing-section" style={{ padding:"80px 48px", background:G.bg }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div className="text-center" style={{ marginBottom:48 }}>
            <div className="badge badge-sky" style={{ marginBottom:12 }}>이용 방법</div>
            <h2 className="heading" style={{ fontSize:36 }}>3단계로 끝나는 간편 의뢰</h2>
          </div>
          <div className="grid3">
            {[
              { n:"01", ico:"list",  title:"의뢰 등록",   desc:"목적·날짜·위치·예산 입력. 5분이면 충분해요.", bg:G.skyLight, ac:G.sky, emoji:"📋" },
              { n:"02", ico:"users", title:"견적 비교",   desc:"인증 파일럿들의 제안을 비교하고 채팅으로 소통하세요.", bg:G.coralLight, ac:G.coral, emoji:"💬" },
              { n:"03", ico:"check", title:"촬영·점검 완료", desc:"작업 완료 후 결과물을 전달받고 리뷰를 남겨요.", bg:G.mintLight, ac:G.mint, emoji:"🎉" },
            ].map(s => (
              <div key={s.n} className="card card-hover card-p" style={{ textAlign:"center" }}>
                <div style={{ width:64, height:64, borderRadius:20, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:28 }}>
                  {s.emoji}
                </div>
                <div className="label" style={{ fontSize:12, color:s.ac, letterSpacing:1, marginBottom:8 }}>STEP {s.n}</div>
                <h3 className="heading" style={{ fontSize:18, marginBottom:10 }}>{s.title}</h3>
                <p style={{ fontSize:14, color:G.sub, lineHeight:1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="landing-section" style={{ padding:"80px 48px", background:G.white }}>
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <div className="text-center" style={{ marginBottom:48 }}>
            <div className="badge badge-coral" style={{ marginBottom:12 }}>활용 사례</div>
            <h2 className="heading" style={{ fontSize:36 }}>어떤 일에 쓸 수 있을까요?</h2>
          </div>
          <div className="grid4">
            {[
              { emoji:"🎪", title:"행사 촬영", desc:"축제·결혼식·기업 행사 항공 촬영", color:G.violet, bg:G.violetLight },
              { emoji:"🏗️", title:"건설 현장", desc:"공정 모니터링·외벽 점검·3D 모델링", color:G.coral, bg:G.coralLight },
              { emoji:"🔭", title:"시설 점검", desc:"태양광·철탑·교량 인프라 점검", color:G.sky, bg:G.skyLight },
              { emoji:"🌾", title:"농업 방제", desc:"정밀 농약 살포·작황 모니터링", color:G.mint, bg:G.mintLight },
            ].map(u => (
              <div key={u.title} className="card card-hover" style={{ padding:24, textAlign:"center" }}>
                <div style={{ width:56, height:56, borderRadius:16, background:u.bg, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", fontSize:26 }}>{u.emoji}</div>
                <h3 className="heading" style={{ fontSize:15, marginBottom:8, color:u.color }}>{u.title}</h3>
                <p style={{ fontSize:13, color:G.sub, lineHeight:1.5 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding:"70px 48px", background:`linear-gradient(135deg, ${G.sky} 0%, ${G.violet} 100%)` }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <div style={{ fontSize:40, marginBottom:16 }}>🚁</div>
          <h2 className="display" style={{ fontSize:36, color:"#fff", marginBottom:14 }}>지금 바로 시작하세요</h2>
          <p style={{ color:"rgba(255,255,255,0.8)", fontSize:16, marginBottom:32 }}>회원가입 후 즉시 의뢰 등록 또는 일감 수주가 가능합니다</p>
          <div className="flex gap12 justify-center cta-inner">
            <button className="btn" style={{ background:"#fff", color:G.sky, fontSize:15, padding:"14px 28px", boxShadow:"0 4px 14px rgba(0,0,0,0.15)" }} onClick={() => go("signup")}>의뢰 등록하러 가기</button>
            <button className="btn" style={{ background:"rgba(255,255,255,0.2)", color:"#fff", border:"2px solid rgba(255,255,255,0.4)", fontSize:15, padding:"14px 28px" }} onClick={() => go("signup-pilot")}>파일럿 등록하기</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:G.ink, color:"rgba(255,255,255,0.5)", padding:"32px 48px", textAlign:"center", fontSize:13 }}>
        <Logo size={18} /> 
        <div style={{ marginTop:12 }}>© 2026 DroneBridge · 이용약관 · 개인정보처리방침 · 문의하기</div>
      </footer>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// AUTH PAGES
// ══════════════════════════════════════════════════════════════════════════════
function AuthPage({ go, mode }) {
  const [role, setRole] = useState(mode === "signup-pilot" ? "pilot" : null);
  const [step, setStep] = useState(mode === "signup" ? 0 : 1); // 0=pick role

  const AuthWrap = ({ children }) => (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg,${G.skyLight} 0%,${G.white} 60%,${G.coralLight} 100%)`, display:"flex", alignItems:"center", justifyContent:"center", padding:20, position:"relative" }}>
      <div style={{ position:"absolute", top:24, left:48 }}><Logo /></div>
      <div style={{ width:"100%", maxWidth: step===0 ? 660 : 480, zIndex:1 }} className="anim-up">
        {children}
      </div>
    </div>
  );

  if (mode === "login") return (
    <AuthWrap>
      <div className="card card-p-lg">
        <h2 className="heading" style={{ fontSize:26, marginBottom:4 }}>다시 만나서 반가워요! 👋</h2>
        <p style={{ color:G.sub, fontSize:14, marginBottom:28 }}>DroneBridge에 로그인하세요</p>
        <div className="flex-col gap16">
          <div className="field"><label>이메일 주소</label><input className="input" placeholder="hello@dronebridge.kr" /></div>
          <div className="field"><label>비밀번호</label><input className="input" type="password" placeholder="••••••••" /></div>
          <div className="flex justify-between items-center">
            <label style={{ display:"flex", alignItems:"center", gap:6, cursor:"pointer", fontSize:13, color:G.sub }}>
              <input type="checkbox" /> 자동 로그인
            </label>
            <button style={{ background:"none", border:"none", fontSize:13, color:G.sky, cursor:"pointer", fontFamily:"'Nunito',sans-serif", fontWeight:700 }}>비밀번호 찾기</button>
          </div>
          <button className="btn btn-sky w-full" style={{ marginTop:4 }} onClick={() => go("client-dashboard")}>로그인</button>
          <div className="divider" />
          <p style={{ textAlign:"center", fontSize:14, color:G.sub }}>
            계정이 없으신가요? <button style={{ background:"none", border:"none", color:G.coral, fontWeight:800, cursor:"pointer", fontFamily:"'Nunito',sans-serif" }} onClick={() => go("signup")}>회원가입</button>
          </p>
        </div>
      </div>
    </AuthWrap>
  );

  // SIGNUP step 0 – role pick
  if (step === 0) return (
    <AuthWrap>
      <div style={{ textAlign:"center", marginBottom:36 }}>
        <h2 className="heading" style={{ fontSize:30 }}>어떻게 이용하시겠어요? 🤔</h2>
        <p style={{ color:G.sub, marginTop:8 }}>역할을 선택해 주세요</p>
      </div>
      <div className="grid2 role-grid" style={{ gap:20 }}>
        {[
          { key:"client", emoji:"🛸", title:"드론이 필요해요", desc:"행사 촬영·현장 점검·측량 등을 의뢰하고 싶을 때", cta:"클라이언트로 시작하기", cls:"btn-sky", border:G.sky },
          { key:"pilot",  emoji:"🎮", title:"드론으로 일하고 싶어요", desc:"드론 실력을 활용해 수익을 만들고 싶을 때", cta:"파일럿으로 시작하기", cls:"btn-coral", border:G.coral },
        ].map(r => (
          <div key={r.key} className="card" style={{ padding:32, textAlign:"center", cursor:"pointer", border:`2px solid ${G.line}`, transition:"all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = r.border; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.1)`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = G.line; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            onClick={() => { setRole(r.key); setStep(1); }}>
            <div style={{ fontSize:52, marginBottom:16 }}>{r.emoji}</div>
            <h3 className="heading" style={{ fontSize:19, marginBottom:10 }}>{r.title}</h3>
            <p style={{ fontSize:14, color:G.sub, lineHeight:1.6, marginBottom:24 }}>{r.desc}</p>
            <button className={`btn ${r.cls} w-full`}>{r.cta}</button>
          </div>
        ))}
      </div>
      <p style={{ textAlign:"center", marginTop:20, fontSize:14, color:G.sub }}>
        이미 계정이 있으신가요? <button style={{ background:"none", border:"none", color:G.sky, fontWeight:800, cursor:"pointer", fontFamily:"'Nunito',sans-serif" }} onClick={() => go("login")}>로그인</button>
      </p>
    </AuthWrap>
  );

  // SIGNUP step 1 – form
  return (
    <AuthWrap>
      <div className="card card-p-lg">
        <div className="flex items-center gap12" style={{ marginBottom:24 }}>
          <div style={{ fontSize:32 }}>{role === "pilot" ? "✈️" : "🛸"}</div>
          <div>
            <h2 className="heading" style={{ fontSize:22 }}>{role === "pilot" ? "파일럿" : "클라이언트"} 회원가입</h2>
            <p style={{ fontSize:13, color:G.muted }}>정보를 입력해 주세요</p>
          </div>
          <button style={{ marginLeft:"auto", background:"none", border:"none", cursor:"pointer", color:G.muted }} onClick={() => setStep(0)}><Ico n="x" s={18} /></button>
        </div>
        <div className="flex-col gap14">
          <div className="grid2 form-grid2">
            <div className="field"><label>이름</label><input className="input" placeholder="홍길동" /></div>
            <div className="field"><label>휴대폰</label><input className="input" placeholder="010-0000-0000" /></div>
          </div>
          <div className="field"><label>이메일</label><input className="input" type="email" placeholder="hello@example.com" /></div>
          <div className="field"><label>비밀번호</label><input className="input" type="password" placeholder="8자 이상 입력" /></div>

          {role === "pilot" && (
            <>
              <div style={{ height:1, background:G.line, margin:"4px 0" }} />
              <div style={{ fontSize:13, color:G.sky, fontWeight:700 }}>✈️ 파일럿 추가 정보</div>
              <div className="field"><label>보유 드론 기체명</label><input className="input" placeholder="예: DJI Mavic 3 Pro" /></div>
              <div className="grid2">
                <div className="field"><label>주요 활동 지역</label><input className="input" placeholder="서울·경기" /></div>
                <div className="field"><label>건당 단가</label><input className="input" placeholder="25만원" /></div>
              </div>
              <div className="field">
                <label>자격증 업로드</label>
                <div style={{ border:`2px dashed ${G.skyMid}`, borderRadius:12, padding:20, textAlign:"center", color:G.muted, fontSize:14, cursor:"pointer", background:G.skyLight }}>
                  📄 자격증 이미지를 클릭하여 업로드
                </div>
              </div>
            </>
          )}
          <button className={`btn ${role === "pilot" ? "btn-coral" : "btn-sky"} w-full`} style={{ marginTop:6 }}
            onClick={() => go(role === "pilot" ? "pilot-dashboard" : "client-dashboard")}>
            가입 완료하기 🎉
          </button>
        </div>
      </div>
    </AuthWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// APP SHELL
// ══════════════════════════════════════════════════════════════════════════════
const NAV_CLIENT = [
  { k:"dashboard", label:"홈", ico:"home" },
  { k:"new",       label:"의뢰 등록", ico:"plus" },
  { k:"list",      label:"내 의뢰 목록", ico:"list" },
  { k:"chat",      label:"채팅", ico:"chat" },
  { k:"profile",   label:"내 프로필", ico:"user" },
];
const NAV_PILOT = [
  { k:"dashboard", label:"추천 일감", ico:"home" },
  { k:"schedule",  label:"내 일정", ico:"calendar" },
  { k:"chat",      label:"채팅", ico:"chat" },
  { k:"profile",   label:"프로필 관리", ico:"user" },
];
const NAV_ADMIN = [
  { k:"dashboard", label:"대시보드", ico:"home" },
  { k:"members",   label:"회원 관리", ico:"users" },
  { k:"requests",  label:"의뢰 관리", ico:"list" },
  { k:"reports",   label:"신고·분쟁", ico:"alert" },
  { k:"stats",     label:"통계", ico:"chart" },
];

function Shell({ role, sec, setSec, go, children }) {
  const nav = role === "admin" ? NAV_ADMIN : role === "pilot" ? NAV_PILOT : NAV_CLIENT;
  const roleColor = role === "pilot" ? G.coral : role === "admin" ? G.violet : G.sky;
  const roleLabel = role === "pilot" ? "파일럿" : role === "admin" ? "관리자" : "클라이언트";
  const roleName  = role === "pilot" ? "김민준" : role === "admin" ? "관리자" : "홍길동";
  const roleEmoji = role === "pilot" ? "✈️" : role === "admin" ? "⚙️" : "🛸";

  return (
    <div className="shell-wrap" style={{ display:"flex", height:"100vh", overflow:"hidden", background:G.bg }}>
      {/* SIDEBAR — 데스크탑: 좌측 | 모바일: 하단 탭바 */}
      <div className="sidebar">
        {/* 로고 — 모바일에서 숨김 */}
        <div className="sidebar-logo" style={{ padding:"4px 6px 20px", cursor:"pointer" }} onClick={() => go("landing")}>
          <Logo size={18} />
        </div>
        {/* 역할 칩 — 모바일에서 숨김 */}
        <div className="sidebar-role" style={{ background:roleColor+"15", border:`1.5px solid ${roleColor}30`, borderRadius:12, padding:"8px 12px", marginBottom:16, display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:18 }}>{roleEmoji}</span>
          <div>
            <div style={{ fontSize:11, color:G.muted, fontWeight:600 }}>{roleLabel} 계정</div>
            <div className="label" style={{ fontSize:13, color:G.ink }}>{roleName}</div>
          </div>
        </div>
        {/* 네비 링크 */}
        {nav.map(n => (
          <button key={n.k} className={`sidebar-link ${sec === n.k ? "active" : ""}`} onClick={() => setSec(n.k)}>
            <Ico n={n.ico} s={18} c={sec === n.k ? G.sky : G.muted} />
            {n.label}
          </button>
        ))}
        {/* 하단 뷰 전환 — 모바일에서 숨김 */}
        <div className="sidebar-bottom" style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
          <div style={{ borderTop:`1.5px solid ${G.line}`, paddingTop:12 }}>
            <div style={{ fontSize:11, color:G.muted, fontWeight:600, padding:"6px 14px 8px" }}>다른 뷰 보기</div>
            {[["client-dashboard","🛸 클라이언트"],["pilot-dashboard","✈️ 파일럿"],["admin-dashboard","⚙️ 관리자"]].map(([p,l]) => (
              <button key={p} className="sidebar-link" style={{ fontSize:12, padding:"8px 14px" }} onClick={() => go(p)}>{l}</button>
            ))}
            <button className="sidebar-link" style={{ marginTop:8, color:G.coral }} onClick={() => go("landing")}>
              <Ico n="logout" s={15} c={G.coral} /> 로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="app-main" style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        {/* APPBAR */}
        <div className="appbar">
          <div className="heading appbar-title" style={{ fontSize:17 }}>{nav.find(n=>n.k===sec)?.label}</div>
          <div className="flex items-center gap12">
            <button onClick={() => go("landing")} className="btn btn-ghost btn-sm appbar-home-btn" style={{ fontSize:12 }}>
              🏠 메인으로
            </button>
            <div style={{ width:9, height:9, borderRadius:"50%", background:G.mint, boxShadow:`0 0 0 3px ${G.mintLight}` }} />
            <div className="avatar" style={{ width:34, height:34, background:`${roleColor}20`, border:`2px solid ${roleColor}30`, fontSize:13, color:roleColor }}>{roleName[0]}</div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="shell-content" style={{ flex:1, overflowY:"auto", padding:28 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CLIENT DASHBOARD
// ══════════════════════════════════════════════════════════════════════════════
function ClientDash({ go, setSec }) {
  const [filter, setFilter] = useState("전체");
  const tabs = ["전체","견적대기","진행중","완료"];
  const visible = filter === "전체" ? REQS : REQS.filter(r => r.status === filter);

  return (
    <div className="anim-in">
      {/* welcome */}
      <div style={{ background:`linear-gradient(120deg,${G.sky},${G.violet})`, borderRadius:20, padding:"28px 32px", marginBottom:24, color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-20, top:-20, fontSize:100, opacity:0.12 }}>🛸</div>
        <div style={{ fontSize:22, fontWeight:800, fontFamily:"'Nunito',sans-serif" }}>안녕하세요, 홍길동 님! 👋</div>
        <div style={{ opacity:0.85, marginTop:6, fontSize:15 }}>오늘도 드론브릿지에 오신 걸 환영해요.</div>
        <button className="btn" style={{ marginTop:18, background:"rgba(255,255,255,0.25)", color:"#fff", fontSize:14, padding:"10px 20px", backdropFilter:"blur(4px)" }} onClick={() => setSec("new")}>
          <Ico n="plus" s={14} c="#fff" /> 새 의뢰 등록하기
        </button>
      </div>

      {/* stats */}
      <div className="grid4" style={{ marginBottom:24 }}>
        {[
          { label:"전체 의뢰",  val:"4건",  emoji:"📋", bg:G.skyLight,    ac:G.sky },
          { label:"견적 대기",  val:"2건",  emoji:"💬", bg:G.amberLight,  ac:G.amber },
          { label:"진행 중",    val:"1건",  emoji:"✈️", bg:G.coralLight,  ac:G.coral },
          { label:"완료",       val:"1건",  emoji:"✅", bg:G.mintLight,   ac:G.mint },
        ].map(s => (
          <div key={s.label} className="stat" style={{ borderLeft:`4px solid ${s.ac}` }}>
            <div style={{ fontSize:24, marginBottom:6 }}>{s.emoji}</div>
            <div className="label" style={{ fontSize:28, color:s.ac }}>{s.val}</div>
            <div style={{ fontSize:13, color:G.sub, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* filter + list */}
      <div className="flex justify-between items-center" style={{ marginBottom:16 }}>
        <div className="tabbar">
          {tabs.map(t => <button key={t} className={`tab ${filter===t?"active":""}`} onClick={() => setFilter(t)}>{t}</button>)}
        </div>
      </div>

      <div className="flex-col gap12">
        {visible.map(r => {
          const st = STATUS_STYLE[r.status];
          return (
            <div key={r.id} className="card card-hover" style={{ padding:"20px 24px", cursor:"pointer", borderLeft:`4px solid ${r.color}` }}
              onClick={() => go("request-detail")}>
              <div className="flex justify-between items-center" style={{ marginBottom:10 }}>
                <div className="flex items-center gap10">
                  <span className={`badge ${st.cls}`}>{st.emoji} {r.status}</span>
                  <span className="badge badge-gray">{r.cat}</span>
                </div>
                <div className="flex items-center gap12">
                  <span style={{ fontSize:16, fontWeight:800, color:G.sky }}>{r.budget}</span>
                  <Ico n="arrow" s={14} c={G.muted} />
                </div>
              </div>
              <div className="label" style={{ fontSize:16, marginBottom:8 }}>{r.title}</div>
              <div className="flex gap16" style={{ flexWrap:"wrap" }}>
                {[
                  { ico:"calendar", t:r.date+" "+r.time },
                  { ico:"map",      t:r.loc },
                  { ico:"users",    t:`지원자 ${r.apps}명` },
                ].map(i => (
                  <span key={i.t} className="flex items-center gap6" style={{ fontSize:13, color:G.sub }}>
                    <Ico n={i.ico} s={13} c={G.muted} />{i.t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// NEW REQUEST (4-step form)
// ══════════════════════════════════════════════════════════════════════════════
function NewRequest({ setSec }) {
  const [step, setStep] = useState(1);
  const [cat, setCat] = useState("촬영");
  const CATS = ["촬영","측량","점검","기타"];
  const EQUIP = ["4K 카메라","열화상 센서","LiDAR","RTK GPS","멀티스펙트럴"];
  const LABELS = ["기본 정보","일정·장소","예산·조건","확인"];

  return (
    <div className="anim-in" style={{ maxWidth:660, margin:"0 auto" }}>
      {/* progress */}
      <div className="step-row">
        {LABELS.map((l,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center" }}>
            <div style={{ textAlign:"center" }}>
              <div className={`step-node ${i+1 < step ? "done" : i+1===step ? "active" : "todo"}`}>
                {i+1 < step ? <Ico n="check" s={15} c="#fff" /> : i+1}
              </div>
              <div style={{ fontSize:11, marginTop:5, fontWeight:700, color:i+1<=step?G.ink:G.muted }}>{l}</div>
            </div>
            {i < LABELS.length-1 && <div className={`step-track ${i+1<step?"done":""}`} style={{ marginBottom:16, marginLeft:0, marginRight:0 }} />}
          </div>
        ))}
      </div>

      <div className="card card-p-lg">
        {step===1 && (
          <div className="flex-col gap18 anim-in" style={{ gap:18 }}>
            <h3 className="heading" style={{ fontSize:20 }}>어떤 의뢰인가요? 📋</h3>
            <div className="field"><label>의뢰 제목</label><input className="input" placeholder="예: 행사 항공 촬영 (야외 축제)" /></div>
            <div className="field">
              <label>카테고리</label>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginTop:4 }}>
                {CATS.map(c => (
                  <button key={c} onClick={() => setCat(c)} style={{ padding:"12px 0", border:`2px solid ${cat===c?G.sky:G.line}`, borderRadius:12, background:cat===c?G.skyLight:"#fff", color:cat===c?G.sky:G.sub, fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, cursor:"pointer", transition:"all 0.15s" }}>{c}</button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>공개 여부</label>
              <div className="flex gap16" style={{ marginTop:4 }}>
                {["공개 의뢰","특정 파일럿 초대"].map(o => (
                  <label key={o} style={{ display:"flex", alignItems:"center", gap:7, cursor:"pointer", fontSize:14, color:G.sub }}>
                    <input type="radio" name="vis" defaultChecked={o==="공개 의뢰"} /> {o}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
        {step===2 && (
          <div className="flex-col anim-in" style={{ gap:18 }}>
            <h3 className="heading" style={{ fontSize:20 }}>언제, 어디서 진행하나요? 📍</h3>
            <div className="grid2">
              <div className="field"><label>날짜</label><input className="input" type="date" /></div>
              <div className="field"><label>시간</label><input className="input" type="time" /></div>
            </div>
            <div className="field"><label>위치 주소</label><input className="input" placeholder="주소를 검색하거나 직접 입력하세요" /></div>
            <div className="map-box" style={{ height:180 }}>
              <div className="map-grid" />
              <div style={{ zIndex:1, textAlign:"center" }}>
                <div style={{ width:48, height:48, background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 8px", boxShadow:"0 4px 14px rgba(59,158,255,0.2)" }}>
                  <Ico n="map" s={22} c={G.sky} />
                </div>
                <div style={{ fontSize:14, color:G.sub, fontWeight:600 }}>지도에서 위치를 선택하세요</div>
              </div>
            </div>
          </div>
        )}
        {step===3 && (
          <div className="flex-col anim-in" style={{ gap:18 }}>
            <h3 className="heading" style={{ fontSize:20 }}>예산과 필요 조건을 알려주세요 💰</h3>
            <div className="grid2">
              <div className="field"><label>최소 예산</label><input className="input" placeholder="300,000원" /></div>
              <div className="field"><label>최대 예산</label><input className="input" placeholder="500,000원" /></div>
            </div>
            <div className="field">
              <label>필요 장비 (복수 선택 가능)</label>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:6 }}>
                {EQUIP.map(e => (
                  <label key={e} style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 14px", border:`2px solid ${G.line}`, borderRadius:50, cursor:"pointer", fontSize:13, fontWeight:600, color:G.sub, background:G.white }}>
                    <input type="checkbox" style={{ width:"auto" }} /> {e}
                  </label>
                ))}
              </div>
            </div>
            <div className="field"><label>요구 자격</label><input className="input" placeholder="예: 초경량비행장치 자격증 보유자 우대" /></div>
          </div>
        )}
        {step===4 && (
          <div className="flex-col anim-in" style={{ gap:18 }}>
            <h3 className="heading" style={{ fontSize:20 }}>마지막 단계예요! ✨</h3>
            <div className="field"><label>상세 설명</label><textarea className="input" rows={4} placeholder="의뢰 내용, 특이 사항, 원하는 결과물 형식 등을 적어주세요..." /></div>
            <div className="field">
              <label>참고 이미지 업로드 (선택)</label>
              <div style={{ border:`2px dashed ${G.skyMid}`, borderRadius:14, padding:28, textAlign:"center", color:G.muted, fontSize:14, cursor:"pointer", background:G.skyLight }}>
                🖼️ 이미지를 드래그하거나 클릭하여 업로드
              </div>
            </div>
            <div style={{ background:G.skyLight, borderRadius:14, padding:18, border:`1.5px solid ${G.skyMid}` }}>
              <div className="label" style={{ fontSize:13, color:G.sky, marginBottom:8 }}>📋 의뢰 요약</div>
              <div style={{ fontSize:14, color:G.sub, lineHeight:1.9 }}>
                카테고리: {cat} · 공개 의뢰<br/>
                날짜: 2026년 3월 25일 오후 2:00<br/>
                예산: 30~50만원
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between btn-row" style={{ marginTop:20 }}>
        <button className="btn btn-ghost" onClick={() => step > 1 ? setStep(s=>s-1) : setSec("dashboard")}>
          {step > 1 ? "← 이전 단계" : "취소"}
        </button>
        <div className="flex gap10">
          {step < 4
            ? <button className="btn btn-sky" onClick={() => setStep(s=>s+1)}>다음 단계 →</button>
            : <>
                <button className="btn btn-ghost">임시 저장</button>
                <button className="btn btn-coral" onClick={() => setSec("list")}>의뢰 등록하기 🚀</button>
              </>
          }
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// REQUEST DETAIL
// ══════════════════════════════════════════════════════════════════════════════
function RequestDetail({ go }) {
  const [chatPilot, setChatPilot] = useState(null);
  const [msg, setMsg] = useState("");
  const r = REQS[0];

  return (
    <div className="anim-in" style={{ maxWidth:860, margin:"0 auto" }}>
      <div className="flex gap20 detail-wrap" style={{ alignItems:"flex-start" }}>
        {/* LEFT */}
        <div style={{ flex:1 }} className="flex-col gap16">
          <div className="card card-p-lg">
            <div className="flex items-center gap10" style={{ marginBottom:14 }}>
              <span className={`badge ${STATUS_STYLE[r.status].cls}`}>{STATUS_STYLE[r.status].emoji} {r.status}</span>
              <span className="badge badge-gray">{r.cat}</span>
            </div>
            <h2 className="heading" style={{ fontSize:22, marginBottom:16 }}>{r.title}</h2>
            {[
              { ico:"calendar", label:"일정",  val:`${r.date} ${r.time}` },
              { ico:"map",      label:"위치",  val:r.loc },
              { ico:"tag",      label:"예산",  val:r.budget },
            ].map(i => (
              <div key={i.label} className="flex items-center gap12" style={{ marginBottom:10 }}>
                <div style={{ width:34, height:34, borderRadius:10, background:G.skyLight, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Ico n={i.ico} s={15} c={G.sky} />
                </div>
                <span style={{ fontSize:13, color:G.muted, width:36 }}>{i.label}</span>
                <span style={{ fontSize:14, color:G.ink, fontWeight:600 }}>{i.val}</span>
              </div>
            ))}
            <div className="divider" style={{ margin:"18px 0" }} />
            <p style={{ fontSize:14, color:G.sub, lineHeight:1.7 }}>{r.desc}</p>
            <div className="map-box" style={{ height:150, marginTop:18 }}>
              <div className="map-grid" />
              <div style={{ zIndex:1, fontSize:13, color:G.sky, fontWeight:700 }}>📍 {r.loc}</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-col gap12 detail-right" style={{ width:290, flexShrink:0 }}>
          <div className="label" style={{ fontSize:14, color:G.sub }}>지원한 파일럿 ({r.apps}명)</div>
          {PILOTS.slice(0, r.apps).map(p => (
            <div key={p.id} className="card card-hover card-p" style={{ padding:18 }}>
              <div className="flex items-center gap10" style={{ marginBottom:12 }}>
                <div className="avatar" style={{ width:42, height:42, background:p.bg+"25", border:`2px solid ${p.bg}40`, fontSize:16, color:p.bg }}>{p.init}</div>
                <div>
                  <div className="label" style={{ fontSize:14 }}>{p.name}</div>
                  <div style={{ fontSize:12, color:"#FFBA00" }}>{"★".repeat(Math.floor(p.rating))} <span style={{ color:G.muted }}>{p.rating}</span></div>
                </div>
              </div>
              <div style={{ fontSize:13, color:G.sub, marginBottom:6 }}>🚁 {p.eq}</div>
              <div className="flex justify-between items-center" style={{ marginBottom:12 }}>
                <span style={{ fontWeight:800, color:G.sky, fontSize:16 }}>{p.rate}</span>
                <span className={`badge ${p.tag==="슈퍼파일럿"?"badge-violet":p.tag==="인증완료"?"badge-mint":p.tag==="측량전문"?"badge-sky":"badge-amber"}`}>{p.tag}</span>
              </div>
              <div className="flex gap8 pilot-btns">
                <button className="btn btn-outline btn-sm w-full" onClick={() => setChatPilot(p)}>💬 채팅</button>
                <button className="btn btn-sky btn-sm w-full">선택하기</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT MODAL */}
      {chatPilot && (
        <div className="overlay" onClick={() => setChatPilot(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center" style={{ marginBottom:20 }}>
              <div className="flex items-center gap10">
                <div className="avatar" style={{ width:40, height:40, background:chatPilot.bg+"25", border:`2px solid ${chatPilot.bg}40`, fontSize:15, color:chatPilot.bg }}>{chatPilot.init}</div>
                <div>
                  <div className="label" style={{ fontSize:15 }}>{chatPilot.name} 파일럿</div>
                  <div style={{ fontSize:12, color:G.mint }}>● 온라인</div>
                </div>
              </div>
              <button style={{ background:"none", border:"none", cursor:"pointer" }} onClick={() => setChatPilot(null)}><Ico n="x" s={18} c={G.muted} /></button>
            </div>
            <div className="flex-col gap10" style={{ height:210, overflowY:"auto", padding:"4px 0" }}>
              <div className="bubble-other">안녕하세요! 의뢰 확인했습니다. 해당 날짜 비행 가능합니다 ✈️</div>
              <div className="bubble-me">DJI Mavic 3 Pro로 4K 촬영 가능하신가요?</div>
              <div className="bubble-other">네! 4K/60fps 영상 납품 가능하고 RAW 파일도 드릴 수 있어요. 원하시는 구도나 컷이 있으시면 알려주세요 😊</div>
              <div className="bubble-me">전체 행사장 와이드샷 + 하이라이트 클로즈업 위주로 부탁드려요.</div>
            </div>
            <div className="flex gap8" style={{ marginTop:16 }}>
              <input className="input" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="메시지를 입력하세요..." style={{ flex:1 }} />
              <button className="btn btn-sky" style={{ padding:"11px 16px" }} onClick={() => setMsg("")}><Ico n="send" s={15} c="#fff" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PILOT DASHBOARD
// ══════════════════════════════════════════════════════════════════════════════
function PilotDash() {
  const [sort, setSort] = useState("거리순");
  const [bidReq, setBidReq] = useState(null);
  const sorts = ["거리순","최신순","예산순"];

  return (
    <div className="anim-in">
      {/* greeting */}
      <div style={{ background:`linear-gradient(120deg,${G.coral},${G.amber})`, borderRadius:20, padding:"24px 30px", marginBottom:24, color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-10, top:-10, fontSize:90, opacity:0.15 }}>✈️</div>
        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:20, fontWeight:800 }}>안녕하세요, 김민준 파일럿님! 🎯</div>
        <div style={{ opacity:0.85, marginTop:6, fontSize:14 }}>오늘 추천 일감 4건이 있어요.</div>
        <div className="flex gap20" style={{ marginTop:16 }}>
          {[["이달 수주","3건"],["평균 평점","★ 4.9"],["이달 수익","87만원"]].map(([l,v]) => (
            <div key={l}>
              <div style={{ fontWeight:800, fontFamily:"'Nunito',sans-serif", fontSize:20 }}>{v}</div>
              <div style={{ opacity:0.75, fontSize:12 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center" style={{ marginBottom:16 }}>
        <div className="heading" style={{ fontSize:16 }}>추천 일감</div>
        <div className="tabbar">
          {sorts.map(s => <button key={s} className={`tab ${sort===s?"active":""}`} onClick={() => setSort(s)}>{s}</button>)}
        </div>
      </div>

      <div className="flex-col gap12">
        {REQS.map(r => (
          <div key={r.id} className="card card-hover" style={{ padding:"20px 24px", cursor:"pointer" }}>
            <div className="flex justify-between items-center" style={{ marginBottom:10 }}>
              <div className="flex items-center gap8">
                <span className="badge badge-gray">{r.cat}</span>
                <span style={{ fontWeight:800, fontFamily:"'Nunito',sans-serif", fontSize:16 }}>{r.title}</span>
              </div>
              <span style={{ fontWeight:900, color:G.coral, fontSize:17, fontFamily:"'Nunito',sans-serif" }}>{r.budget}</span>
            </div>
            <div className="flex gap16" style={{ marginBottom:14, flexWrap:"wrap" }}>
              <span className="flex items-center gap6" style={{ fontSize:13, color:G.sub }}><Ico n="map" s={13} c={G.muted} />{r.loc} · {r.apps}km</span>
              <span className="flex items-center gap6" style={{ fontSize:13, color:G.sub }}><Ico n="calendar" s={13} c={G.muted} />{r.date} {r.time}</span>
              <span className="flex items-center gap6" style={{ fontSize:13, color:G.sub }}><Ico n="users" s={13} c={G.muted} />경쟁 {r.apps}명</span>
            </div>
            <p style={{ fontSize:13, color:G.sub, lineHeight:1.6, marginBottom:16 }}>{r.desc}</p>
            <div className="flex gap10">
              <button className="btn btn-ghost btn-sm" style={{ flex:1 }}>상세 보기</button>
              <button className="btn btn-coral" style={{ flex:2, fontSize:14, padding:"10px 0" }} onClick={e => { e.stopPropagation(); setBidReq(r); }}>견적 제안하기 →</button>
            </div>
          </div>
        ))}
      </div>

      {/* BID MODAL */}
      {bidReq && (
        <div className="overlay" onClick={() => setBidReq(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center" style={{ marginBottom:20 }}>
              <h3 className="heading" style={{ fontSize:19 }}>견적 제안하기 ✉️</h3>
              <button style={{ background:"none", border:"none", cursor:"pointer" }} onClick={() => setBidReq(null)}><Ico n="x" s={18} c={G.muted} /></button>
            </div>
            <div style={{ background:G.coralLight, borderRadius:12, padding:14, marginBottom:20, border:`1.5px solid ${G.coral}30` }}>
              <div className="label" style={{ fontSize:14 }}>{bidReq.title}</div>
              <div style={{ fontSize:13, color:G.sub, marginTop:4 }}>{bidReq.date} · {bidReq.loc}</div>
            </div>
            <div className="flex-col gap14">
              <div className="field"><label>제안 금액</label><input className="input" placeholder="예: 350,000원" /></div>
              <div className="field"><label>파일럿 소개 메시지</label><textarea className="input" rows={3} placeholder="보유 장비, 경험, 특기 사항을 간략히 소개해 주세요 😊" /></div>
              <button className="btn btn-coral w-full" style={{ marginTop:4 }} onClick={() => setBidReq(null)}>견적 제출하기 🚀</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PILOT PROFILE
// ══════════════════════════════════════════════════════════════════════════════
function PilotProfile() {
  return (
    <div className="anim-in" style={{ maxWidth:660, margin:"0 auto" }}>
      <div className="card card-p-lg" style={{ marginBottom:20 }}>
        {/* top */}
        <div className="flex items-center gap16" style={{ marginBottom:28 }}>
          <div className="avatar" style={{ width:80, height:80, background:`linear-gradient(135deg,${G.coral},${G.amber})`, fontSize:32, color:"#fff" }}>민</div>
          <div>
            <div className="heading" style={{ fontSize:22 }}>김민준</div>
            <div style={{ color:"#FFBA00", fontSize:15, marginTop:4 }}>★ 4.9 <span style={{ color:G.muted, fontSize:13 }}>(87 리뷰)</span></div>
            <div className="flex gap8" style={{ marginTop:8 }}>
              <span className="badge badge-mint"><Ico n="shield" s={11} c={G.mint} />인증 완료</span>
              <span className="badge badge-violet">슈퍼파일럿</span>
            </div>
          </div>
          <div style={{ marginLeft:"auto", textAlign:"right" }}>
            <div className="label" style={{ fontSize:22, color:G.coral }}>134건</div>
            <div style={{ fontSize:13, color:G.muted }}>총 완료 의뢰</div>
          </div>
        </div>

        <div className="flex-col gap16">
          <div className="field"><label>소개 글</label>
            <textarea className="input" rows={3} defaultValue="드론 파일럿 경력 5년. DJI Mavic 3 Pro / Phantom 4 RTK 보유. 항공 촬영부터 정밀 측량까지 경험 풍부합니다." />
          </div>
          <div className="grid2">
            <div className="field"><label>주요 활동 지역</label><input className="input" defaultValue="서울·경기 전역" /></div>
            <div className="field"><label>건당 단가</label><input className="input" defaultValue="25만원~" /></div>
          </div>

          <div className="field">
            <label>보유 장비</label>
            <div className="flex-col gap8" style={{ marginTop:4 }}>
              {[
                { name:"DJI Mavic 3 Pro", note:"4K/120fps 영상·사진 촬영" },
                { name:"Phantom 4 RTK",  note:"정밀 측량·매핑·3D 모델링" },
              ].map(e => (
                <div key={e.name} style={{ background:G.skyLight, border:`1.5px solid ${G.skyMid}`, borderRadius:12, padding:"12px 16px" }}>
                  <div className="label" style={{ fontSize:14, color:G.sky }}>🚁 {e.name}</div>
                  <div style={{ fontSize:13, color:G.sub, marginTop:2 }}>{e.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="field">
            <label>보유 자격증</label>
            <div className="flex gap10" style={{ flexWrap:"wrap", marginTop:4 }}>
              {["초경량비행장치 조종자","드론국가자격증 1종"].map(cert => (
                <span key={cert} className="badge badge-mint" style={{ padding:"8px 14px", fontSize:12 }}>
                  <Ico n="shield" s={12} c={G.mint} /> {cert}
                </span>
              ))}
            </div>
          </div>
          <button className="btn btn-coral w-full" style={{ marginTop:8 }}>프로필 저장하기</button>
        </div>
      </div>

      {/* reviews */}
      <div className="card card-p">
        <div className="heading" style={{ fontSize:16, marginBottom:16 }}>최근 리뷰</div>
        {[
          { name:"박** 님", rating:5, text:"매우 전문적이고 결과물이 정말 훌륭했습니다. 다음에도 꼭 다시 의뢰하고 싶어요!", date:"2026.03.10" },
          { name:"이** 님", rating:5, text:"시간 약속을 잘 지키고 커뮤니케이션이 원활했어요. 강추합니다 👍", date:"2026.02.28" },
        ].map((rv, i) => (
          <div key={i} style={{ paddingBottom:16, marginBottom: i===0?16:0, borderBottom: i===0?`1.5px solid ${G.line}`:"none" }}>
            <div className="flex justify-between items-center" style={{ marginBottom:8 }}>
              <div className="label" style={{ fontSize:14 }}>{rv.name}</div>
              <div className="flex items-center gap8">
                <span style={{ color:"#FFBA00" }}>{"★".repeat(rv.rating)}</span>
                <span style={{ fontSize:12, color:G.muted }}>{rv.date}</span>
              </div>
            </div>
            <p style={{ fontSize:14, color:G.sub, lineHeight:1.6 }}>{rv.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ADMIN DASHBOARD
// ══════════════════════════════════════════════════════════════════════════════
function AdminDash() {
  const barData = [
    { label:"촬영",  val:68, color:G.sky },
    { label:"측량",  val:45, color:G.violet },
    { label:"점검",  val:37, color:G.coral },
    { label:"기타",  val:22, color:G.mint },
  ];
  const maxVal = 68;

  return (
    <div className="anim-in">
      {/* kpi */}
      <div className="grid4" style={{ marginBottom:24 }}>
        {[
          { emoji:"📋", label:"오늘 신규 의뢰", val:"12건",  delta:"+3", color:G.sky },
          { emoji:"👤", label:"신규 가입자",   val:"8명",   delta:"+2", color:G.violet },
          { emoji:"✈️", label:"활성 파일럿",   val:"247명", delta:"+5", color:G.mint },
          { emoji:"🚨", label:"미처리 신고",   val:"2건",   delta:"!",  color:G.coral },
        ].map(s => (
          <div key={s.label} className="stat" style={{ borderTop:`4px solid ${s.color}` }}>
            <div style={{ fontSize:26, marginBottom:6 }}>{s.emoji}</div>
            <div className="label" style={{ fontSize:30, color:s.color }}>{s.val}</div>
            <div style={{ fontSize:12, color:G.muted, marginTop:4 }}>{s.label}</div>
            <div className="badge badge-mint" style={{ marginTop:10, fontSize:11 }}>전일 대비 {s.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid2" style={{ gap:20, marginBottom:20 }}>
        {/* bar chart */}
        <div className="card card-p">
          <div className="heading" style={{ fontSize:16, marginBottom:20 }}>카테고리별 의뢰 건수</div>
          <div className="flex items-end gap12" style={{ height:140, paddingBottom:24, position:"relative" }}>
            {barData.map(d => (
              <div key={d.label} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
                <span className="label" style={{ fontSize:13, color:d.color }}>{d.val}</span>
                <div style={{ width:"100%", borderRadius:"8px 8px 0 0", height: Math.round((d.val/maxVal)*100), background:`linear-gradient(to top, ${d.color}, ${d.color}bb)`, transition:"height 0.5s", boxShadow:`0 4px 14px ${d.color}40` }} />
                <span style={{ fontSize:12, color:G.sub, fontWeight:600 }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* line chart */}
        <div className="card card-p">
          <div className="heading" style={{ fontSize:16, marginBottom:20 }}>월별 거래액 추이</div>
          <div style={{ position:"relative", height:120 }}>
            <svg width="100%" height="100%" viewBox="0 0 280 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={G.sky} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={G.sky} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M10,82 L52,68 L94,58 L136,44 L178,36 L220,22 L260,14" fill="none" stroke={G.sky} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10,82 L52,68 L94,58 L136,44 L178,36 L220,22 L260,14 L260,100 L10,100Z" fill="url(#gr)" />
              {[[10,82],[94,58],[178,36],[260,14]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="5" fill={G.sky} stroke="#fff" strokeWidth="2" />
              ))}
            </svg>
          </div>
          <div className="flex justify-between" style={{ marginTop:8 }}>
            {["10월","11월","12월","1월","2월","3월"].map(m => <span key={m} style={{ fontSize:11, color:G.muted }}>{m}</span>)}
          </div>
        </div>
      </div>

      {/* recent activity */}
      <div className="grid2" style={{ gap:20 }}>
        {/* members */}
        <div className="card card-p">
          <div className="heading" style={{ fontSize:15, marginBottom:14 }}>신규 회원 (오늘)</div>
          {PILOTS.map(p => (
            <div key={p.id} className="flex justify-between items-center" style={{ padding:"10px 0", borderBottom:`1.5px solid ${G.line}` }}>
              <div className="flex items-center gap10">
                <div className="avatar" style={{ width:36, height:36, background:p.bg+"25", color:p.bg, fontSize:13, border:`2px solid ${p.bg}30`, fontWeight:800 }}>{p.init}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:13 }}>{p.name}</div>
                  <div style={{ fontSize:12, color:G.muted }}>파일럿 · {p.loc}</div>
                </div>
              </div>
              <span className={`badge ${p.tag==="검토중"?"badge-amber":"badge-mint"}`} style={{ fontSize:11 }}>{p.tag}</span>
            </div>
          ))}
        </div>

        {/* reports */}
        <div className="card card-p">
          <div className="heading" style={{ fontSize:15, marginBottom:14 }}>신고·문의 현황</div>
          {[
            { type:"🚨 신고",  msg:"파일럿 미연락·노쇼 신고",    user:"이** 님",  st:"처리중", cls:"badge-sky" },
            { type:"💬 문의",  msg:"자격증 인증 재신청 요청",    user:"김** 파일럿", st:"대기", cls:"badge-amber" },
            { type:"⚖️ 분쟁",  msg:"결과물 품질 분쟁 조정 요청", user:"박** 님",  st:"대기", cls:"badge-amber" },
          ].map((r,i) => (
            <div key={i} style={{ padding:"12px 0", borderBottom: i<2?`1.5px solid ${G.line}`:"none" }}>
              <div className="flex justify-between items-center" style={{ marginBottom:4 }}>
                <span style={{ fontWeight:700, fontSize:12, color:G.sub }}>{r.type}</span>
                <span className={`badge ${r.cls}`} style={{ fontSize:11 }}>{r.st}</span>
              </div>
              <div style={{ fontSize:14, fontWeight:600, marginBottom:2 }}>{r.msg}</div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize:12, color:G.muted }}>{r.user}</span>
                <button className="btn btn-ghost btn-xs">처리하기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ADMIN STATS (detailed)
// ══════════════════════════════════════════════════════════════════════════════
function AdminStats() {
  const regions = [
    { name:"서울", val:203, pct:82, color:G.sky },
    { name:"경기", val:156, pct:63, color:G.violet },
    { name:"인천", val:87,  pct:35, color:G.coral },
    { name:"부산", val:64,  pct:26, color:G.mint },
    { name:"대구", val:41,  pct:17, color:G.amber },
  ];
  return (
    <div className="anim-in flex-col gap20">
      <div className="grid2">
        <div className="card card-p">
          <div className="heading" style={{ fontSize:16, marginBottom:20 }}>지역별 의뢰 분포</div>
          <div className="flex-col gap14">
            {regions.map(r => (
              <div key={r.name}>
                <div className="flex justify-between" style={{ marginBottom:6 }}>
                  <span style={{ fontWeight:700, fontSize:13 }}>{r.name}</span>
                  <span style={{ fontSize:13, color:G.sub }}>{r.val}건</span>
                </div>
                <div style={{ height:8, background:G.lineLight, borderRadius:50, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${r.pct}%`, background:r.color, borderRadius:50, transition:"width 0.5s" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card card-p">
          <div className="heading" style={{ fontSize:16, marginBottom:20 }}>핵심 지표</div>
          <div className="flex-col gap16">
            {[
              { label:"평균 매칭 시간", val:"2.3시간", delta:"▼ 0.4시간", good:true },
              { label:"의뢰 완료율",    val:"91.2%",  delta:"▲ 2.1%",   good:true },
              { label:"파일럿 재등록률",val:"78.5%",  delta:"▲ 5.3%",   good:true },
              { label:"클라 재의뢰율",  val:"64.1%",  delta:"▲ 8.7%",   good:true },
            ].map(m => (
              <div key={m.label} className="flex justify-between items-center" style={{ padding:"10px 14px", background:G.bg, borderRadius:12 }}>
                <div>
                  <div style={{ fontWeight:600, fontSize:14 }}>{m.label}</div>
                  <div style={{ fontSize:12, color:G.mint, fontWeight:700 }}>{m.delta}</div>
                </div>
                <div className="heading" style={{ fontSize:22, color:G.sky }}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CHAT PAGE
// ══════════════════════════════════════════════════════════════════════════════
function ChatPage() {
  const [sel, setSel] = useState(0);
  const [msg, setMsg] = useState("");
  const convos = [
    { name:"김민준 파일럿", last:"4K/60fps 납품 가능합니다", time:"14:23", unread:2, init:"민", bg:G.sky },
    { name:"이서연 파일럿", last:"날짜 확인 부탁드립니다",   time:"어제",  unread:0, init:"서", bg:G.violet },
    { name:"박준혁 파일럿", last:"계약서 검토 완료했습니다", time:"월요일",unread:0, init:"준", bg:G.coral },
  ];
  const msgs = [
    { me:false, t:"안녕하세요! 의뢰 확인했습니다. 해당 날짜 비행 가능합니다 ✈️" },
    { me:true,  t:"DJI Mavic 3 Pro로 4K 촬영 가능하신가요?" },
    { me:false, t:"네, 4K/60fps 영상 납품 가능하고 RAW 파일도 드릴 수 있어요 😊" },
    { me:true,  t:"전체 행사장 와이드샷 + 하이라이트 클로즈업 위주로 부탁드려요." },
  ];
  return (
    <div className="anim-in flex chat-wrap" style={{ gap:16, height:"calc(100vh - 130px)" }}>
      {/* list */}
      <div className="chat-list-panel" style={{ width:270, background:G.white, borderRadius:18, border:`1.5px solid ${G.line}`, overflow:"hidden", display:"flex", flexDirection:"column" }}>
        <div style={{ padding:"14px 16px", borderBottom:`1.5px solid ${G.line}` }} className="heading" >채팅 목록</div>
        {convos.map((c,i) => (
          <div key={i} onClick={() => setSel(i)} style={{ padding:"14px 16px", borderBottom:`1.5px solid ${G.line}`, cursor:"pointer", background:sel===i?G.skyLight:"#fff", borderLeft:sel===i?`3px solid ${G.sky}`:"3px solid transparent", transition:"all 0.15s" }}>
            <div className="flex justify-between items-center" style={{ marginBottom:5 }}>
              <div className="flex items-center gap8">
                <div className="avatar" style={{ width:34, height:34, background:c.bg+"25", color:c.bg, fontSize:12, fontWeight:800, border:`2px solid ${c.bg}30` }}>{c.init}</div>
                <span className="label" style={{ fontSize:13 }}>{c.name}</span>
              </div>
              <div className="flex items-center gap6">
                <span style={{ fontSize:11, color:G.muted }}>{c.time}</span>
                {c.unread > 0 && <div style={{ width:18, height:18, borderRadius:"50%", background:G.sky, color:"#fff", fontSize:11, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center" }}>{c.unread}</div>}
              </div>
            </div>
            <p style={{ fontSize:12, color:G.sub, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", paddingLeft:42 }}>{c.last}</p>
          </div>
        ))}
      </div>
      {/* chat */}
      <div style={{ flex:1, background:G.white, borderRadius:18, border:`1.5px solid ${G.line}`, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <div style={{ padding:"14px 20px", borderBottom:`1.5px solid ${G.line}`, display:"flex", alignItems:"center", gap:12 }}>
          <div className="avatar" style={{ width:38, height:38, background:convos[sel].bg+"25", color:convos[sel].bg, fontSize:14, fontWeight:800, border:`2px solid ${convos[sel].bg}30` }}>{convos[sel].init}</div>
          <div>
            <div className="label" style={{ fontSize:14 }}>{convos[sel].name}</div>
            <div style={{ fontSize:12, color:G.mint, fontWeight:600 }}>● 온라인</div>
          </div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:20, display:"flex", flexDirection:"column", gap:10 }}>
          {msgs.map((m,i) => <div key={i} className={m.me?"bubble-me":"bubble-other"}>{m.t}</div>)}
        </div>
        <div style={{ padding:"12px 16px", borderTop:`1.5px solid ${G.line}`, display:"flex", gap:8 }}>
          <input className="input" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="메시지를 입력하세요..." style={{ flex:1, borderRadius:50 }} />
          <button className="btn btn-sky" style={{ borderRadius:50, padding:"10px 18px" }} onClick={() => setMsg("")}><Ico n="send" s={15} c="#fff" /></button>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("landing");
  const [cSec, setCsec] = useState("dashboard");
  const [pSec, setPsec] = useState("dashboard");
  const [aSec, setAsec] = useState("dashboard");

  const go = p => {
    setPage(p);
    if (p === "client-dashboard") setCsec("dashboard");
    if (p === "pilot-dashboard")  setPsec("dashboard");
    if (p === "admin-dashboard")  setAsec("dashboard");
  };

  // render client section
  const clientContent = () => {
    if (cSec === "new")          return <NewRequest setSec={setCsec} />;
    if (cSec === "list")         return <ClientDash go={go} setSec={setCsec} />;
    if (cSec === "request-detail") return <RequestDetail go={go} />;
    if (cSec === "chat")         return <ChatPage />;
    if (cSec === "profile")      return <PilotProfile />;
    return <ClientDash go={go} setSec={setCsec} />;
  };
  const pilotContent = () => {
    if (pSec === "profile")  return <PilotProfile />;
    if (pSec === "chat")     return <ChatPage />;
    if (pSec === "schedule") return (
      <div className="anim-in">
        <div className="card card-p" style={{ maxWidth:600 }}>
          <div className="heading" style={{ fontSize:16, marginBottom:16 }}>📅 2026년 3월 일정</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:6, textAlign:"center" }}>
            {["일","월","화","수","목","금","토"].map(d => <div key={d} style={{ fontSize:12, color:G.muted, padding:"6px 0", fontWeight:700 }}>{d}</div>)}
            {Array.from({length:31},(_,i) => {
              const job = [10,15,25,28].includes(i+1);
              return <div key={i} style={{ padding:"8px 4px", borderRadius:10, background:job?G.skyLight:"transparent", color:job?G.sky:G.sub, fontWeight:job?800:400, fontSize:14, cursor:job?"pointer":"default", border:job?`1.5px solid ${G.skyMid}`:"none" }}>
                {i+1}
              </div>;
            })}
          </div>
          <div style={{ marginTop:20, borderTop:`1.5px solid ${G.line}`, paddingTop:16 }}>
            <div className="label" style={{ fontSize:13, color:G.sub, marginBottom:10 }}>이번 달 예정 작업</div>
            {[{d:"3월 10일",t:"농경지 측량 (공주)",c:G.mint},{d:"3월 15일",t:"행사 촬영 (분당)",c:G.sky},{d:"3월 25일",t:"건설현장 점검 (강남)",c:G.coral},{d:"3월 28일",t:"홍보 영상 촬영 (인천)",c:G.violet}].map(w => (
              <div key={w.d} className="flex items-center gap12" style={{ padding:"10px 0", borderBottom:`1px solid ${G.lineLight}` }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:w.c, flexShrink:0 }} />
                <span style={{ fontSize:13, color:G.muted, width:80 }}>{w.d}</span>
                <span style={{ fontSize:14, fontWeight:600 }}>{w.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    return <PilotDash />;
  };
  const adminContent = () => {
    if (aSec === "stats")   return <AdminStats />;
    if (aSec === "members") return (
      <div className="anim-in card card-p">
        <div className="heading" style={{ fontSize:16, marginBottom:16 }}>회원 목록</div>
        {PILOTS.map(p => (
          <div key={p.id} className="flex justify-between items-center" style={{ padding:"12px 0", borderBottom:`1.5px solid ${G.line}` }}>
            <div className="flex items-center gap12">
              <div className="avatar" style={{ width:40, height:40, background:p.bg+"25", color:p.bg, fontWeight:800, border:`2px solid ${p.bg}30` }}>{p.init}</div>
              <div><div style={{ fontWeight:700 }}>{p.name}</div><div style={{ fontSize:12, color:G.muted }}>파일럿 · {p.eq}</div></div>
            </div>
            <div className="flex items-center gap10">
              <span className={`badge ${p.tag==="검토중"?"badge-amber":"badge-mint"}`}>{p.tag}</span>
              <button className="btn btn-ghost btn-xs">상세</button>
              <button className="btn btn-outline btn-xs">승인</button>
            </div>
          </div>
        ))}
      </div>
    );
    if (aSec === "reports") return (
      <div className="anim-in card card-p">
        <div className="heading" style={{ fontSize:16, marginBottom:16 }}>신고·분쟁 목록</div>
        {[
          { type:"🚨 신고",  msg:"파일럿 미연락·노쇼",    user:"이** 님",  st:"처리중" },
          { type:"⚖️ 분쟁",  msg:"결과물 품질 분쟁",      user:"박** 님",  st:"대기" },
          { type:"💬 문의",  msg:"자격증 인증 재신청",    user:"김** 파일럿", st:"완료" },
        ].map((r,i) => (
          <div key={i} style={{ padding:"16px 0", borderBottom:i<2?`1.5px solid ${G.line}`:"none" }}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap10">
                <div style={{ width:40, height:40, background:G.coralLight, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>⚠️</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:14 }}>{r.msg}</div>
                  <div style={{ fontSize:12, color:G.muted }}>{r.type} · {r.user}</div>
                </div>
              </div>
              <div className="flex items-center gap8">
                <span className={`badge ${r.st==="처리중"?"badge-sky":r.st==="완료"?"badge-mint":"badge-amber"}`}>{r.st}</span>
                <button className="btn btn-coral btn-xs">처리</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    if (aSec === "requests") return (
      <div className="anim-in card card-p">
        <div className="heading" style={{ fontSize:16, marginBottom:16 }}>의뢰 관리</div>
        {REQS.map(r => {
          const st = STATUS_STYLE[r.status];
          return (
            <div key={r.id} className="flex justify-between items-center" style={{ padding:"12px 0", borderBottom:`1.5px solid ${G.line}` }}>
              <div className="flex items-center gap10">
                <span className={`badge ${st.cls}`}>{st.emoji}</span>
                <div>
                  <div style={{ fontWeight:700, fontSize:14 }}>{r.title}</div>
                  <div style={{ fontSize:12, color:G.muted }}>{r.loc} · {r.budget}</div>
                </div>
              </div>
              <div className="flex items-center gap8">
                <span className="badge badge-gray">{r.apps}명 지원</span>
                <button className="btn btn-ghost btn-xs">상세</button>
              </div>
            </div>
          );
        })}
      </div>
    );
    return <AdminDash />;
  };

  // ── Page router ──
  if (page === "landing")       return <><style>{CSS}</style><Landing go={go} /></>;
  if (page === "login")         return <><style>{CSS}</style><AuthPage go={go} mode="login" /></>;
  if (page === "signup")        return <><style>{CSS}</style><AuthPage go={go} mode="signup" /></>;
  if (page === "signup-pilot")  return <><style>{CSS}</style><AuthPage go={go} mode="signup-pilot" /></>;
  if (page === "request-detail") return (
    <><style>{CSS}</style>
    <Shell role="client" sec="list" setSec={setCsec} go={go}><RequestDetail go={go} /></Shell></>
  );

  if (page === "client-dashboard") return (
    <><style>{CSS}</style>
    <Shell role="client" sec={cSec} setSec={s => { setCsec(s); }} go={go}>
      {clientContent()}
    </Shell></>
  );
  if (page === "pilot-dashboard") return (
    <><style>{CSS}</style>
    <Shell role="pilot" sec={pSec} setSec={setPsec} go={go}>
      {pilotContent()}
    </Shell></>
  );
  if (page === "admin-dashboard") return (
    <><style>{CSS}</style>
    <Shell role="admin" sec={aSec} setSec={setAsec} go={go}>
      {adminContent()}
    </Shell></>
  );
  return <><style>{CSS}</style><Landing go={go} /></>;
}
