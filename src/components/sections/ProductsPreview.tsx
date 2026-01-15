import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "../../styles/sections/products-preview.scss";

const ProductsPreview = () => {
  const productsImages = [
    "/assets/img/products/industrialCop.jpg",
    "/assets/img/products/pp1.jpeg",
    "/assets/img/products/pp2.jpeg",
    "/assets/img/products/pp3.jpeg",
  ];

  return (
    <section className="products-preview">
      <div className="custom-container">

        <div className="products-preview__header">
          <span className="subtitle">Our Portfolio</span>
          <h2>Energy Products & Systems</h2>
          <p>
            We deliver a complete range of energy infrastructure solutions –
            from utility-scale storage systems to backup power, transformer
            stations, and fully integrated turnkey projects.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          spaceBetween={28}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="products-preview__slider"
        >
          {productsImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="product-slide">
                <img src={img} alt="Energy product" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="products-preview__cta">
          <Link to="/products" className="btn-primary">
            Explore Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductsPreview;
