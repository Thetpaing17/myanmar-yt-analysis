import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PopularNiches from './PopularNiches.jsx'

function NavBar() {
  return (
    <nav style={{
      background: "#0f172a",
      padding: "10px 24px",
      display: "flex",
      alignItems: "center",
      gap: 20,
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 700, letterSpacing: "0.05em" }}>
        KO THET PAING
      </span>
      <Link to="/" style={{
        color: "#94a3b8", textDecoration: "none", fontSize: 13, fontWeight: 500,
        padding: "4px 12px", borderRadius: 6,
      }}>
        Niche Analysis
      </Link>
      <Link to="/popular" style={{
        color: "#94a3b8", textDecoration: "none", fontSize: 13, fontWeight: 500,
        padding: "4px 12px", borderRadius: 6,
      }}>
        Popular Niches
      </Link>
    </nav>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/popular" element={<PopularNiches />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)