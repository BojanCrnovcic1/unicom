import { useEffect, useState } from "react";
import "../styles/products.scss";

const products = [
  {
    id: 1,
    category: "Energy Storage Systems",
    name: "Liquid Cooling ES All-in-one Cabinet",
    model: "ES232/115K-A/EU",
    image: "/assets/img/products/LiquidCoolingES.jpeg",
    specsImage: "/assets/img/products/LiquidCoolingES-spec.jpeg",
    pdf: "/assets/pdf/LiguidCoolingES.pdf",
  },
  {
    id: 2,
    category: "Energy Storage Systems",
    name: "0.65MW / 1.3MWh Liquid Cooling ESS",
    model: "ES1306/653K-A/EU",
    image: "/assets/img/products/LiquidCoolingESS.jpeg",
    specsImage: "/assets/img/products/LiquidCoolingESS-spec.jpeg",
    pdf: "/assets/img/products/LiquidCoolingESS-spec.jpeg",
  },
  {
    id: 3,
    category: "Energy Storage Systems",
    name: "0.93MW / 1.86MWh Liquid Cooling C&I ESS",
    model: "ES1863/931K-A/EU",
    image: "/assets/img/products/LiquidCoolingC&IESS.jpeg",
    specsImage: "/assets/img/products/LiquidCoolingC&IESS-spec.jpeg",
    pdf: "/assets/img/products/LiquidCoolingC&IESS-spec.jpeg",
  },
  {
    id: 4,
    category: "Energy Storage Systems",
    name: "1.0MW / 2.09MWh Liquid Cooling C&I ESS",
    model: "ES2090/1000K-A/EU",
    image: "/assets/img/products/LiquidCoolingC&IALL.jpeg",
    specsImage: "/assets/img/products/LiquidCoolingC&IALL-spec.jpeg",
    pdf: "/assets/img/products/LiquidCoolingC&IALL-spec.jpeg",
  },
  {
    id: 5,
    category: "Energy Storage Systems",
    name: "2.58MW / 5.01MWh Liquid Cooling ESS",
    model: "ES5015/2580K-C/EU",
    image: "/assets/img/products/LiquidCoolingESS2.5MW.jpeg",
    specsImage: "/assets/img/products/LiquidCoolingESS2.5MW-spec.jpeg",
    pdf: "/assets/img/products/LiquidCoolingESS2.5MW-spec.jpeg",
  },
  
];

const Products = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleDownload = (pdfPath: string) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop() || "datasheet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="products-page">

      <section className="products-hero">
        <div className="custom-container">
          <span className="subtitle">Our Portfolio</span>
          <h1>Energy Storage & Power Solutions</h1>
          <p>
            A comprehensive portfolio of battery energy storage systems,
            power conversion solutions, and integrated infrastructure
            designed for commercial, industrial, and utility-scale projects.
          </p>
        </div>
      </section>

      <section className="products-catalog">
        <div className="custom-container">

          {products.map((product, index) => (
            <div className="product-row" key={product.id}>

              <div
                className="product-visual"
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image} alt={product.name} />
              </div>

              <div
                className="product-specs"
                onClick={() => setActiveImage(product.specsImage)}
              >
                <img
                  src={product.specsImage}
                  alt={`${product.name} specifications`}
                />
              </div>

              <div className={`product-info ${index % 2 !== 0 ? "reverse" : ""}`}>
                <span className="product-category">{product.category}</span>
                <h2>{product.name}</h2>
                <span className="product-model">{product.model}</span>

                <button
                  className="product-cta"
                  onClick={() => handleDownload(product.pdf)}
                >
                  Request Datasheet
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

      <section className="products-cta">
        <div className="custom-container">
          <h2>Need a Custom Energy Solution?</h2>
          <p>
            Our engineering team delivers tailored BESS and power solutions
            optimized for your project requirements.
          </p>
          <a href="/contact" className="cta-btn">
            Contact Sales
          </a>
        </div>
      </section>

      {activeImage && (
        <div className="image-modal" onClick={() => setActiveImage(null)}>
          <span className="close-btn">×</span>
          <img src={activeImage} alt="Enlarged preview" />
        </div>
      )}

    </main>
  );
};

export default Products;

