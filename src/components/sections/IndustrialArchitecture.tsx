import '../../styles/sections/industrial-architecture.scss';

const IndustrialArchitecture = () => {
  const features = [
    {
      title: "Modular & Scalable Design",
      desc: "Flexible software architecture allows deployment from single-site systems to multi-site portfolios, easily adapting to project growth.",
      img: "/images/modular.png"
    },
    {
      title: "Edge & Cloud Deployment",
      desc: "Supports both local edge installations and cloud-based platforms for centralized monitoring, control, and analytics.",
      img: "/images/edge-cloud.png"
    },
    {
      title: "Secure & Encrypted",
      desc: "All data transmissions are encrypted and follow best practices to ensure system integrity and cyber security compliance.",
      img: "/images/security.png"
    },
    {
      title: "Industry-Standard Protocols",
      desc: "Compatible with Modbus TCP/RTU, IEC 61850, OPC UA, MQTT, SunSpec, enabling seamless asset integration.",
      img: "/images/protocols.png"
    }
  ];

  return (
    <section className="industrial-architecture">
      <div className="custom-container">
        <div className="industrial-architecture__wrapper">
          <div className="industrial-architecture__header">
            <span className="subtitle">System Foundation</span>
            <h2>Industrial-Grade Architecture</h2>
            <p>
              The UNICOM EMS Platform is built for reliability, scalability, 
              and secure operation in demanding energy environments.
            </p>
          </div>
    
          <div className="industrial-architecture__grid">
            {features.map((feature, index) => (
              <div className="architecture-card" key={index}>
                <div className="architecture-card__icon">
                  <img src={feature.img} alt={feature.title} />
                </div>
                <div className="architecture-card__content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
                {/* Dekorativna linija koja se aktivira na hover */}
                <div className="glow-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialArchitecture;