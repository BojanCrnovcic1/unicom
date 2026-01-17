import "../styles/about.scss"

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="custom-container">
          <span className="subtitle">About UNICOM</span>
          <h1>UNICOM BESS Systems</h1>
          <p>
            End-to-end Battery Energy Storage solutions for commercial,
            industrial, and energy infrastructure projects.
          </p>
        </div>
      </section>
      <section className="about-intro">
        <div className="custom-container">
          <p>
            UNICOM BESS Systems specializes in Battery Energy Storage Systems
            (BESS), providing a complete end-to-end solution — from system design
            and sales to full implementation and commissioning.
          </p>

          <p>
            Our core focus is the delivery of reliable, scalable, and efficient
            battery storage solutions for commercial, industrial, and energy
            infrastructure applications. We support our clients throughout the
            entire project lifecycle, ensuring seamless integration and
            long-term system performance.
          </p>
        </div>
      </section>
      <section className="about-section light">
        <div className="custom-container">
          <h2>What We Do</h2>

          <div className="about-cards">
            <div className="about-card">
              <h3>BESS System Sales</h3>
              <p>
                We supply high-quality battery energy storage systems tailored
                to specific project requirements, including capacity, power,
                and application needs.
              </p>
            </div>

            <div className="about-card">
              <h3>Full Project Implementation</h3>
              <p>
                Our services cover the complete implementation process —
                system engineering, integration, installation, testing, and
                commissioning — ensuring a turnkey solution for our clients.
              </p>
            </div>

            <div className="about-card">
              <h3>Energy Management Systems (EMS)</h3>
              <p>
                We offer custom-developed EMS solutions enabling advanced
                monitoring, control, and optimization of energy storage assets
                to maximize efficiency and operational reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="custom-container narrow">
          <h2>Our Approach</h2>

          <p>
            We combine technical expertise with a practical understanding of
            real-world energy challenges. By managing the full scope of BESS
            projects internally, we ensure high standards of quality,
            transparency, and performance at every stage.
          </p>

          <p>
            UNICOM BESS Systems is committed to supporting the transition toward
            smarter, more flexible, and sustainable energy systems.
          </p>
        </div>
      </section>
      <section className="about-section light">
        <div className="custom-container narrow">
          <h2>Manufacturing & Scale</h2>

          <p>
            Through our strategic partnership with a Tier-1 Chinese manufacturer,
            we are able to provide up to <strong>15 GWh of annual battery
            production capacity</strong>, covering all major battery types and
            chemistries.
          </p>

          <p>
            This partnership ensures high manufacturing standards, stable supply
            chains, and the ability to support projects at scale.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="custom-container narrow">
          <h2>Additional Services</h2>

          <p>
            In addition to battery systems, we offer professional charging
            solutions, including advanced charging stations with multiple
            dispensers and charging points, suitable for commercial,
            industrial, fleet, and public infrastructure applications.
          </p>

          <p>
            We provide comprehensive pre-sales support, including technical
            consulting, system sizing, and project feasibility analysis.
            Following project delivery, we offer professional training services,
            including on-site and technical training for client personnel.
          </p>

          <p>
            All our solutions are delivered in full compliance with international
            standards, required certifications, and applicable grid codes,
            enabling seamless integration with local and national power networks.
          </p>
        </div>
      </section>

    </main>
  )
}

export default About
