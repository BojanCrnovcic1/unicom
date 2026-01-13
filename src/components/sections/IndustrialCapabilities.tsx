import '../../styles/sections/industrial-capabilities.scss';

const IndustrialCapabilities = () => {
  const items = [
    {
      number: '100+ MW',
      title: 'Utility-Scale Solar & BESS',
      text: 'Construction of solar power plants with fully integrated BESS systems exceeding 100MW capacity.'
    },
    {
      number: 'Concept',
      title: 'Renewable Energy Engineering',
      text: 'Development of conceptual and technical solutions for complex renewable and hybrid energy systems.'
    },
    {
      number: 'Data Center',
      title: 'Backup Power & BESS Systems',
      text: 'Mission-critical backup power and BESS systems for data centers, ensuring maximum uptime and resilience.',
      highlight: true
    },
    {
      number: '15 GWh',
      title: 'Tier 1 Manufacturing',
      text: 'Annual production capacity over 15GWh through Tier 1 manufacturing partners in China.'
    },
    {
      number: 'Global',
      title: 'Worldwide Delivery',
      text: 'Global sales, logistics, and deployment of BESS systems and transformer stations.'
    }
  ];

  return (
    <section className="industrial-capabilities">
      <div className="custom-container">

        <div className="industrial-capabilities__header">
          <span className="subtitle">Proven at Industrial Scale</span>
          <h2>Industrial-Grade Energy Capabilities</h2>
          <p>
            From utility-scale renewable plants to mission-critical infrastructure,
            UNICOM delivers energy systems engineered for performance, resilience, and scale.
          </p>
        </div>

        <div className="industrial-capabilities__grid">
          {items.map((item, index) => (
            <div
              key={index}
              className={`capability-tile ${item.highlight ? 'is-highlighted' : ''}`}
            >
              <span className="capability-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {item.highlight && (
                <span className="capability-badge">Critical Infrastructure</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustrialCapabilities;
