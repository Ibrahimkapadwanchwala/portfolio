import "./Projects.css";

export default function Projects({ projects, onOpenProject }) {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            key={i}
            className="project-card"
            data-type={p.type} // Useful for the CSS styling
            onClick={() => onOpenProject(p)}
          >
            <div className="project-card-header">
              <p className="project-subtitle">{p.subtitle}</p>
              {p.type && <span className="project-category">{p.type}</span>}
            </div>

            <h3>{p.title}</h3>

            <p className="project-desc">{p.description}</p>

            {p.highlights && (
              <ul className="project-highlights">
                {p.highlights.slice(0, 3).map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}

            {p.tech && (
              <div className="tech-stack">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}