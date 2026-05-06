import "./Navbar.css";
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-stack">
          <span className="logo-main">IBRAHIM</span>
          <span className="logo-sub">portfolio</span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#terminal" onClick={() => setMenuOpen(false)}>
              Terminal
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </div>

          <a
            href="#contact"
            className="contact-link-wrapper"
            onClick={() => setMenuOpen(false)}
          >
            <button className="contact-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="chat-icon"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
