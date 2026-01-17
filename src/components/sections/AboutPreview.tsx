import { Link } from "react-router-dom"
import '../../styles/sections/about-preview.scss'

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="custom-container">

        <div className="about-preview-grid">

          <div className="about-preview-content">
            <span className="eyebrow">About UNICOM</span>

            <h2>
              End-to-End <br />
              Battery Energy Storage Solutions
            </h2>

            <p>
              UNICOM BESS Systems specializes in advanced Battery Energy Storage
              Systems, delivering complete solutions from system design and sales
              to full implementation and commissioning.
            </p>

            <p className="secondary-text">
              We support commercial, industrial, and energy infrastructure
              projects with reliable, scalable, and grid-compliant energy storage
              technologies.
            </p>

            <Link to="/about" className="about-btn">
              Learn More About Us <span>→</span>
            </Link>
          </div>

          <div className="about-preview-visual">
            <img
              src="/assets/img/about-preview.png"
              alt="Battery Energy Storage Systems"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutPreview
