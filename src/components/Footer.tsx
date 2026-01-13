import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP INFO BAR */}
      <div className="footer-top">
        <div className="footer-top__item">
          <span className="footer-top__label">Call us 24/7</span>
          <strong>+208-555-0112</strong>
        </div>

        <div className="footer-top__item">
          <span className="footer-top__label">Make a quote</span>
          <strong>solar@gmail.com</strong>
        </div>

        <div className="footer-top__item">
          <span className="footer-top__label">Location</span>
          <strong>4517 Washington Ave.</strong>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* COLUMN 1 */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">UNICOM</div>
          <p>
            Intelligent energy management solutions for automated,
            reliable and optimized energy systems.
          </p>

          <div className="footer-socials">
            <a href="#">Fb</a>
            <a href="#">X</a>
            <a href="#">In</a>
            <a href="#">Yt</a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Energy Management</li>
            <li>Battery Optimization</li>
            <li>Solar Systems</li>
            <li>Microgrids</li>
            <li>Licensing</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Recent Posts</h4>

          <div className="footer-post">
            <span className="footer-post__date">20 Feb, 2025</span>
            <p>Energy storage systems and future grids</p>
          </div>

          <div className="footer-post">
            <span className="footer-post__date">15 Dec, 2024</span>
            <p>How EMS improves battery lifetime</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 UNICOM Energy Systems. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
