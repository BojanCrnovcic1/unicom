import { Link } from 'react-router-dom';
import '../../styles/sections/contact-financing.scss';

const ContactFinancing = () => {
  const options = [
    {
      title: "Maintenance & Service",
      desc: "Long-term support to ensure system reliability, performance, and extended lifetime of your energy assets.",
      img: "/images/maintenance.png"
    },
    {
      title: "Consulting & Optimization",
      desc: "Expert guidance for new installations or optimization of existing systems to maximize ROI and efficiency.",
      img: "/images/consulting.png"
    },
    {
      title: "Flexible Financing",
      desc: "Collaborations with investment funds enable BESS models with convenient monthly payment plans.",
      img: "/images/financing.png"
    }
  ];

  return (
    <section className="contact-financing">
      <div className="custom-container">
        <div className="contact-financing__header">
          <span className="subtitle">Take the Next Step</span>
          <h2>Partner with UNICOM</h2>
          <p>
            UNICOM offers full project management, maintenance, and service,
            along with consulting and flexible financing options to make BESS investments accessible.
          </p>
        </div>

        <div className="contact-financing__options">
          {options.map((option, index) => (
            <div className="option-card" key={index}>
              <div className="option-card__icon">
                <img src={option.img} alt={option.title} />
              </div>
              <h3>{option.title}</h3>
              <p>{option.desc}</p>
            </div>
          ))}
        </div>

        <div className="contact-financing__cta-box">
          <div className="cta-inner">
            <h3>Ready to start your energy transformation?</h3>
            <p>Our experts are here to help you design the perfect system.</p>
            <Link to="/contact" className="btn-main-cta">
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFinancing;
