import '../../styles/sections/market-grid-readiness.scss';

const MarketGridReadiness = () => {
  const features = [
    {
      title: "Electricity Market Integration",
      desc: "Fully prepared for participation in electricity markets (Burse), enabling price-based dispatch and optimized energy trading.",
      img: "/assets/img/MarketGridReadiness/market.png"
    },
    {
      title: "Energy Trading & Dispatch",
      desc: "Intelligent EMS algorithms support trading strategies, market optimization, and real-time dispatch for maximum revenue.",
      img: "/assets/img/MarketGridReadiness/trading.png"
    },
    {
      title: "Grid Code & DSO/TSO Compliance",
      desc: "Ensures compliance with local and international grid codes and system operator requirements for safe operation.",
      img: "/assets/img/MarketGridReadiness/compliance.png"
    }
  ];

  return (
    <section className="market-grid-readiness">
      <div className="custom-container">
        <div className="market-grid-readiness__header">
          <span className="subtitle">Regulatory & Market</span>
          <h2>Market & Grid Readiness</h2>
          <p>
            UNICOM EMS is designed to operate seamlessly in modern electricity
            markets while ensuring full compliance with standards.
          </p>
        </div>

        <div className="market-grid-readiness__grid">
          {features.map((feature, index) => (
            <div className="readiness-card" key={index}>
              <div className="readiness-card__image-box">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="readiness-card__content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
              <div className="accent-blob"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketGridReadiness;