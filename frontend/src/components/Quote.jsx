import "./Quote.css";

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        {/* Left Side: The Hook */}
        <div className="quote-hook">
          <h2>
            First, solve the problem. <br />
            <span>Then, write the code. —</span>
          </h2>
          <div className="quote-attribution">
            <span className="quote-author">John Johnson</span>
            <span className="quote-title">Software Engineering Manifesto</span>
          </div>
        </div>

        {/* Right Side: The Manifesto */}
        <div className="quote-manifesto">
          <p>
            Programming is not about typing; it is about thinking. It is the art of 
            organizing complexity and mastering the logic of the invisible. 
            The best code is often the code you never had to write. 
          </p>
          <p>
            It is a dare to build something out of nothing. It is the relentless 
            pursuit of efficiency and the courage to refactor the status quo. 
            Code is potential. Code is temporary. Solving is everything.
          </p>
        </div>
      </div>
    </section>
  );
}