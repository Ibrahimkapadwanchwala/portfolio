import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT SIDE: Heading & Interaction */}
        <div className="hero-left">
          <span className="hero-tag">hello world</span>

              <h1>
            I design and build backend systems
            <br />
            focused on <span>scalability</span>,
            <br />
            consistency, and performance
          </h1>

          <div className="hero-buttons">
           <a href="#projects"> <button className="btn-primary">View Projects</button></a>
            <a href="/resume.pdf"target="_blank" 
    rel="noopener noreferrer"><button className="btn-secondary">Resume</button></a>
          </div>
        </div>

        {/* RIGHT SIDE: Narrative Bio */}
        <div className="hero-right">
          <p>
            Hi, I'm Ibrahim — a Backend-focused Developer.
          </p>

          <p>
            I specialize in building high-performance, real-time systems 
            with strong focus on scalability, concurrency, and reliability.
          </p>

          <p>
            Currently pursuing Computer Engineering and actively building 
            production-grade backend systems.
          </p>
        </div>

      </div>
    </section>
  );
}