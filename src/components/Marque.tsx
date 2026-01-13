import { Fragment } from 'react'
import '../styles/marque.scss'

const textSliderData = [
  "Energy Management Systems (EMS)",
  "Battery Energy Storage Systems (BESS)",
  "Utility-Scale Solar Power Plants",
  "Data Center Backup Power Solutions",
  "Microgrids & Grid Interaction",
  "Real-Time Energy Optimization",
  "Industrial-Grade Energy Architecture",
  "Forecast-Based Energy Control",
  "Tier 1 Battery Production (15+ GWh)",
  "Worldwide BESS Delivery & Deployment"
]

const Marque = ({ className }: { className?: string }) => {
  return (
    <div className={`marque-section ${className || ''}`}>
      <div className="marque-track">
        <div className="marque-content">
          {[...textSliderData, ...textSliderData].map((text, index) => (
            <Fragment key={index}>
              <span className="marque-separator">
                <img src="/img/asterisk.svg" alt="separator" />
              </span>
              <span className="marque-text">{text}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marque
