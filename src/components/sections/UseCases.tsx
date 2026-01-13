import '../../styles/sections/use-cases.scss';

const UseCases = () => {
  const cases = [
    {
      title: "Commercial & Industrial",
      desc: "Intelligent management of on-site generation, BESS, and loads to reduce energy costs.",
      img: "/assets/img/useCases/useCases1.png",
      num: "01"
    },
    {
      title: "Utility-Scale BESS",
      desc: "Control of large-scale BESS and hybrid PV, wind, and hydro plants.",
      img: "/assets/img/useCases/useCases2.png",
      num: "02"
    },
    {
      title: "Microgrids & Islanding",
      desc: "Reliable microgrid control with islanding and black-start capabilities.",
      img: "/assets/img/useCases/useCases3.png",
      num: "03"
    },
    {
      title: "EV Infrastructure",
      desc: "Integrated control of EV charging stations with load balancing.",
      img: "/assets/img/useCases/useCases4.png",
      num: "04"
    },
    {
      title: "Retrofit & Optimization",
      desc: "Modernization of existing PV plants to extend lifetime and improve performance.",
      img: "/assets/img/useCases/useCases5.png",
      num: "05"
    },
    {
      title: "Energy Trading",
      desc: "Preparation for electricity markets and price-based dispatch.",
      img: "/assets/img/useCases/useCases6.png",
      num: "06"
    }
  ];

  return (
    <section className="use-cases">
      <div className="custom-container">
        <div className="use-cases__header">
          <span className="subtitle">Real-World Applications</span>
          <h2>Use Cases</h2>
          <p>
            The UNICOM EMS Platform supports a wide range of energy applications, 
            from commercial installations to utility-scale systems.
          </p>
        </div>

        <div className="use-cases__grid">
          {cases.map((item, index) => (
            <div className="use-case-card" key={index}>
              <div className="use-case-card__image-container">
                <div className="number-badge">{item.num}</div>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="use-case-card__content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;