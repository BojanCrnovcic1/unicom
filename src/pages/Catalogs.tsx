import "../styles/catalogs.scss";

const catalogs = [
  {
    id: 1,
    title: "Product Catalogue",
    description:
      "Keep forging ahead with boundless energy.",
    cover: "/assets/img/catalogs/catalog1.png",
    pdf: "/assets/pdf/catalog.pdf",
  },
  {
    id: 2,
    title: "FlexCombo",
    description:
      "Flexible, Scalabe & Reliable Energy Block",
    cover: "/assets/img/catalogs/catalog2.png",
    pdf: "/assets/pdf/FlexCombo-D6500-314Ah-1016-5.pdf.pdf",
  },
  {
    id: 3,
    title: "PowerCombo",
    description:
      "Available Reliable Accontable",
    cover: "/assets/img/catalogs/catalog3.png",
    pdf: "/assets/pdf/PowerCombo.pdf.pdf",
  },
  {
    id: 4,
    title: "Transformer Station",
    description:
      "Transformer Station",
    cover: "/assets/img/catalogs/catalog4.png",
    pdf: "/assets/pdf/TransformerStation.pdf.pdf",
  },
];

const Catalogs = () => {
  const handleDownload = (pdfPath: string) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop() || "catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="catalogs-page">

      <section className="catalogs-hero">
        <div className="custom-container">
          <span className="subtitle">Downloads</span>
          <h1>Product Catalogs</h1>
          <p>
            Browse, view, and download our official product catalogs containing
            detailed technical specifications and system architectures.
          </p>
        </div>
      </section>

      <section className="catalogs-grid">
        <div className="custom-container">

          {catalogs.map((catalog) => (
            <div className="catalog-card" key={catalog.id}>

              <div className="catalog-cover">
                <img src={catalog.cover} alt={catalog.title} />
              </div>

              <div className="catalog-content">
                <h3>{catalog.title}</h3>
                <p>{catalog.description}</p>

                <div className="catalog-actions">
                  <a
                    href={catalog.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    View PDF
                  </a>

                  <button
                    className="btn-solid"
                    onClick={() => handleDownload(catalog.pdf)}
                  >
                    Download PDF
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
};

export default Catalogs;
