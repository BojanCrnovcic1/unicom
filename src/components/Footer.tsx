import { Link } from "react-router-dom"
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-top__item">
          <span className="footer-top__label">Call us 24/7</span>
          <strong>+381652839962</strong>
        </div>

        <div className="footer-top__item">
          <span className="footer-top__label">Make a quote</span>
          <strong>unicom.bess.systems@outlook.com</strong>
        </div>

        <div className="footer-top__item">
          <span className="footer-top__label">Location</span>
          <strong>4517 Washington Ave.</strong>
        </div>
      </div>

      <div className="footer-main">

        <div className="footer-col footer-brand">
          <div className="footer-logo">UNICOM</div>
          <p>
            End-to-end Battery Energy Storage Systems and intelligent
            energy solutions for commercial and industrial applications.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="YouTube">Yt</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/catalogs">Catalogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li>Battery Energy Storage Systems (BESS)</li>
            <li>Energy Management Systems (EMS)</li>
            <li>Grid & Industrial Storage</li>
            <li>Charging Infrastructure</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p>
            Looking for a reliable energy storage solution or project
            consultation?
          </p>

          <Link to="/contact" className="footer-cta">
            Request a Quote →
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 UNICOM BESS Systems. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
