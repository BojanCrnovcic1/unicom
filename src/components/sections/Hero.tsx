import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/hero.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const heroSlides = [
    {
        id: 1,
        image: "/assets/img/hero/hero1.jpg",
        title: "UNICOM – WE CHOOSE THE RIGHT POWER STORAGE SYSTEM FOR YOU",
        subtitle:
            "Tailored battery and charging solutions designed to match your energy needs.",
        link: "/catalogs",
    },
    {
        id: 2,
        image: "/assets/img/hero/hero2.jpeg",
        title: "UNICOM – COMPLETE CHARGING SOLUTIONS",
        subtitle:
            "Integrated hardware and software for safe, efficient, and intelligent charging.",
        link: "/catalogs",
    },
    {
        id: 3,
        image: "/assets/img/hero/hero3.jpeg",
        title: "UNICOM – SOLAR AND STORAGE OPTIMIZATION",
        subtitle:
            "We optimize your solar energy and battery systems to reduce losses and increase returns.",
        link: "/catalogs",
    },
    {
        id: 4,
        image: "/assets/img/hero/hero4.jpeg",
        title: "UNICOM – INTELLIGENT PSS OPTIMIZATION",
        subtitle:
            "Smart EMS software that monitor, control and continuously improves system performance.",
        link: "/catalogs",
    },
];

const Hero = () => {
    return (
        <section
            className="hero-section hero-3"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div className="array-button">
                <button className="array-prev" aria-label="Previous Slide">
                    <i className="fa fa-arrow-left" aria-hidden="true" />
                </button>
                <button className="array-next" aria-label="Next Slide">
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
            </div>

            <Swiper
                loop
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot-2",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                }}
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div
                                className="swiper-slide-content"
                                style={{ position: "relative", height: "100vh" }}
                            >
                                <div
                                    className="hero-image bg-cover"
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        height: "100%",
                                        width: "100%",
                                        position: "relative",
                                    }}
                                />
                                <div
                                    className="container"
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        zIndex: 10,
                                        width: "100%",
                                    }}
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                }}
                                                className="hero-content text-center"
                                            >
                                                {/* Title */}
                                                <motion.h1
                                                    className="text-white"
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{
                                                        y: isActive ? 0 : 40,
                                                        opacity: isActive ? 1 : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.3,
                                                        ease: "easeOut",
                                                    }}
                                                >
                                                    {slide.title}
                                                </motion.h1>
                                                <motion.p
                                                    className="hero-subtitle"
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{
                                                        y: isActive ? 0 : 30,
                                                        opacity: isActive ? 1 : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.5,
                                                        ease: "easeOut",
                                                    }}
                                                >
                                                    {slide.subtitle}
                                                </motion.p>
                                                <motion.div
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{
                                                        y: isActive ? 0 : 30,
                                                        opacity: isActive ? 1 : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.7,
                                                        ease: "easeOut",
                                                    }}
                                                    className="hero-button"
                                                >
                                                    <Link
                                                        to={slide.link}
                                                        className="theme-btn hover-white"
                                                    >
                                                        <span className="hover-layer" />
                                                        View Catalogs
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className="dot-2"
                style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "30px",
                    width: "100%",
                    zIndex: 20,
                }}
            />
        </section>
    );
};

export default Hero;
