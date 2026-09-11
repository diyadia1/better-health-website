import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      <nav>
        <h2>♥ BetterHealth</h2>

        <div className="links">
          <a href="#preparedness">Preparedness</a>
          <a href="#firstaid">First Aid</a>
          <a href="#services">Services</a>
        </div>

        <a className="emergency" href="tel:112">
          Emergency: 112
        </a>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">BE READY. STAY INFORMED.</p>

          <h1>
            Better decisions.
            <br />
            <i>Better health.</i>
          </h1>

          <p className="intro">
            Practical health information and emergency-preparedness
            resources designed to help people act calmly when it matters most.
          </p>

          <a className="button" href="#preparedness">
            Explore preparedness →
          </a>
        </div>

        <div className="hero-card">
          <div className="icon">+</div>
          <p>Emergency readiness</p>
          <h2>Small preparation can make a big difference.</h2>
          <hr />
          <strong>24/7</strong>
          <small>Preparedness mindset</small>
        </div>
      </section>

      <section className="section" id="preparedness">
        <p className="eyebrow">PREPARE BEFORE YOU NEED IT</p>
        <h2>Emergency preparedness, made simple.</h2>

        <div className="cards">
          <article>
            <span>01</span>
            <h3>Build an emergency kit</h3>
            <p>
              Keep essential medicines, first-aid supplies, water and
              emergency contacts together.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Know emergency numbers</h3>
            <p>
              Save local emergency and hospital contacts before an emergency
              happens.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Learn basic first aid</h3>
            <p>
              Basic first-aid knowledge can help you respond while professional
              help is on the way.
            </p>
          </article>
        </div>
      </section>

      <section className="band" id="firstaid">
        <div>
          <p className="eyebrow">FIRST-AID BASICS</p>
          <h2>Stay calm. Check the situation. Get help.</h2>
          <p>
            In a serious emergency, contact professional emergency services.
            First-aid information is educational and does not replace medical
            care.
          </p>
        </div>

        <div className="checks">
          <p>✓ Check for immediate danger</p>
          <p>✓ Call emergency services when needed</p>
          <p>✓ Keep the person comfortable and monitored</p>
        </div>
      </section>

      <section className="section services" id="services">
        <div>
          <p className="eyebrow">HEALTH SERVICES</p>
          <h2>Tell us what you need.</h2>
          <p>
            Send a request and a health-service representative can follow up
            with you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input required placeholder="Full name" />
          <input required type="email" placeholder="Email address" />

          <select>
            <option>General enquiry</option>
            <option>Emergency preparedness</option>
            <option>Health service information</option>
            <option>First-aid resources</option>
          </select>

          <textarea required placeholder="How can we help?" rows="5" />

          <button type="submit">Submit request →</button>

          {submitted && (
            <p className="success">
              Request received. Thank you!
            </p>
          )}
        </form>
      </section>

      <footer>
        <strong>BetterHealth</strong>
        <span>Health awareness & emergency preparedness</span>
      </footer>
    </div>
  );
}

export default App;
