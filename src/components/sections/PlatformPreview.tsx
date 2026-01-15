import { Link } from 'react-router-dom';
import '../../styles/sections/platform-preview.scss';

const PlatformPreview = () => {
  return (
    <section className="platform-preview">
      <div className="custom-container">
        <div className="platform-preview__wrapper">
          
          <div className="platform-preview__content" data-animate="fade-left">
            <span className="subtitle">Digital Brain of Energy</span>
            <h2>UNICOM EMS Platform</h2>
            <p className="main-description">
              The UNICOM EMS Platform is a powerful and scalable energy management
              system that monitors, controls, optimizes, and automates complex
              energy infrastructures in real time.
            </p>

            <ul className="platform-preview__features">
              <li>
                <span className="icon-check"></span>
                Real-time monitoring and control of PV, BESS, loads, and EV charging
              </li>
              <li>
                <span className="icon-check"></span>
                Intelligent energy flow optimization and automated dispatch
              </li>
              <li>
                <span className="icon-check"></span>
                Forecast-based control for generation, load, and price signals
              </li>
              <li>
                <span className="icon-check"></span>
                Grid interaction, microgrid, islanding, and black-start readiness
              </li>
              <li>
                <span className="icon-check"></span>
                Fail-safe operation with secure fallback logic
              </li>
            </ul>

            <Link to="/platform" className="platform-preview__btn">
              <span>Explore the EMS Platform</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="platform-preview__visual" data-animate="fade-right">
            <div className="image-wrapper">
              <img
                src="/assets/img/platformD.png" 
                alt="UNICOM EMS Platform dashboard"
              />
              <div className="blob-decoration"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PlatformPreview;
