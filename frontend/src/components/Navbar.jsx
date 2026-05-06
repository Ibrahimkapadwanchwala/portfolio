import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-stack">
          <span className="logo-main">IBRAHIM</span>
          <span className="logo-sub">portfolio</span>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#terminal">Terminal</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
          
          <a href="#contact" className="contact-link-wrapper">
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