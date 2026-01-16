import "../styles/contact.scss";

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="custom-container">
        <div className="contact-grid">
          <div className="contact-left">

            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <span>Call Us 7/24</span>
                <strong>+381652839962</strong>
              </div>
            </div>

            <div className="divider" />

            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span>Make a Quote</span>
                <strong>info@unicom-bess-systems.com</strong>
              </div>
            </div>

            <div className="divider" />

            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <span>Location</span>
                <strong>4517 Washington Ave.</strong>
              </div>
            </div>

            <div className="contact-image">
              <img src="/assets/img/contact.png" alt="Contact support" />
            </div>

          </div>

          <div className="contact-right">
            <h1>We'd Love To Hear From You!</h1>
            <p>
               Whether you are planning a utility-scale energy storage project,
               upgrading an industrial facility, or exploring advanced EMS solutions,
               our team is ready to support you. Contact us for product details,
               technical documentation, project consultations, or custom energy solutions
               tailored to your requirements.
            </p>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name*</label>
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="form-group">
                  <label>Your Email*</label>
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>

              <div className="form-group">
                <label>Write message*</label>
                <textarea placeholder="Write your message"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <span>→</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
