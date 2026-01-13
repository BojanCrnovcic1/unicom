import '../../styles/sections/customer-benefits.scss';

const CustomerBenefits = () => {
  const benefits = [
    {
      title: "Reduced Energy Costs",
      desc: "Intelligent energy management optimizes consumption and generation, lowering operational expenses.",
      img: "/assets/img/CustomerBenefits/cb1.png"
    },
    {
      title: "Increased Energy Independence",
      desc: "Maximize self-consumption and minimize reliance on the grid, improving resilience.",
      img: "/assets/img/CustomerBenefits/cb2.png"
    },
    {
      title: "Higher Asset Utilization",
      desc: "Efficient coordination of generation and storage ensures maximum performance from all assets.",
      img: "/assets/img/CustomerBenefits/cb3.png"
    },
    {
      title: "Extended Battery Lifetime",
      desc: "Optimized charge/discharge cycles protect battery health and extend system longevity.",
      img: "/assets/img/CustomerBenefits/cb4.png"
    },
    {
      title: "Improved ROI",
      desc: "Enhanced efficiency and predictable performance increase financial returns and bankability.",
      img: "/assets/img/CustomerBenefits/cb5.png"
    },
    {
      title: "Future-Proof Architecture",
      desc: "Scalable and modular design ensures readiness for future energy market requirements.",
      img: "/assets/img/CustomerBenefits/cb6.png"
    }
  ];

  return (
    <section className="customer-benefits">
      <div className="custom-container">
        <div className="customer-benefits__header">
          <span className="subtitle">Value Proposition</span>
          <h2>Customer Benefits</h2>
          <p>
            UNICOM EMS delivers tangible benefits for every energy project, 
            ensuring efficiency, reliability, and strong returns.
          </p>
        </div>

        <div className="customer-benefits__grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-item__icon-wrapper">
                <div className="icon-circle">
                  <img src={benefit.img} alt={benefit.title} />
                </div>
              </div>
              <div className="benefit-item__text">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerBenefits;
  