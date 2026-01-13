import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/sections/core-capabilites.scss';

const CoreCapabilities = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const capabilities = [
    {
      id: 1,
      title: "Real-Time Monitoring & Control",
      text: "Live monitoring of PV plants, BESS, generators, loads, and EV charging systems.",
      img: "/assets/img/coreCopabilites/coreCop1.png"
    },
    {
      id: 2,
      title: "Advanced Energy Optimization",
      text: "Intelligent energy flow management between generation, storage, and the grid.",
      img: "/assets/img/coreCopabilites/coreCop2.png"
    },
    {
      id: 3,
      title: "Forecast-Based Automation",
      text: "Automated decision-making using forecasting of generation and electricity prices.",
      img: "/assets/img/coreCopabilites/coreCop3.png"
    },
    {
      id: 4,
      title: "Islanding & Black-Start",
      text: "Support for islanded operation and microgrid control during outages.",
      img: "/assets/img/coreCopabilites/coreCop4.png"
    },
    {
      id: 5,
      title: "Fail-Safe & Fallback Logic",
      text: "Built-in fail-safe mechanisms ensure secure system operation under all conditions.",
      img: "/assets/img/coreCopabilites/coreCop5.png"
    }
  ];

  return (
    <section className="core-capabilities">
      <div className="custom-container">
        <div className="core-capabilities__header">
          <span className="subtitle">Platform Power</span>
          <h2>Core Capabilities</h2>
          <p>The intelligent control layer behind modern energy systems.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="capabilities-swiper"
        >
          {capabilities.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="capability-card">
                <div className="capability-card__image" onClick={() => setSelectedImg(item.img)}>
                  <img src={item.img} alt={item.title} />
                  <div className="zoom-overlay">
                    <span>Click to enlarge</span>
                  </div>
                </div>
                <div className="capability-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImg && (
        <div className="image-lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content">
            <img src={selectedImg} alt="Enlarged capability" />
            <button className="close-lightbox">&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreCapabilities;