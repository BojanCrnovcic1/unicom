import '../../styles/sections/use-cases.scss';

const UseCases = () => {
  const cases = [
    {
      title: "Commercial & Industrial Optimization",
      desc: "Intelligent management of on-site generation, BESS, and loads to reduce energy costs and improve efficiency.",
      img: "public/assets/img/useCases/industry.png",
      num: "01"
    },
    {
      title: "Utility-Scale BESS & Hybrid Plants",
      desc: "Control of large-scale BESS and hybrid PV, wind, and hydro plants with full grid compliance.",
      img: "/images/utility.png",
      num: "02"
    },
    {
      title: "Microgrids & Island Operation",
      desc: "Reliable microgrid control with islanding and black-start capabilities for uninterrupted supply.",
      img: "/images/microgrid.png",
      num: "03"
    },
    {
      title: "EV Charging Infrastructure",
      desc: "Integrated control of EV charging stations with load balancing, peak shaving, and optimized usage.",
      img: "/images/ev.png",
      num: "04"
    },
    {
      title: "Retrofit & Asset Optimization",
      desc: "Modernization of existing PV plants to extend lifetime, improve performance, and increase ROI.",
      img: "/images/retrofit.png",
      num: "05"
    },
    {
      title: "Energy Trading & Grid Services",
      desc: "Preparation for electricity markets, price-based dispatch, and grid services (DSO/TSO).",
      img: "/images/trading.png",
      num: "06"
    }
  ];

  return (
    <section className="use-cases">
      <div className="custom-container">
        <div className="use-cases__header">
          <span className="subtitle">Real-World Applications</span>
          <h2>Use Cases</h2>
          <div className="header-line"></div>
          <p>
            The UNICOM EMS Platform is designed to support a wide range of energy
            applications, from commercial installations to utility-scale systems.
          </p>
        </div>

        <div className="use-cases__grid">
          {cases.map((item, index) => (
            <div className="use-case-card" key={index}>
              <div className="card-number">{item.num}</div>
              <div className="use-case-card__icon">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="use-case-card__content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="card-border-bottom"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;