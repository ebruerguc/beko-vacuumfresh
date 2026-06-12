import React, { useState } from "react";
import styled from "styled-components";
import productDetail from "../assets/product-detail.png";

const hotspots = [
    {
        id: 1,
        title: "Vakum Valfi",
        text: "Pompanın yerleştiği özel hava valfi, kabın içindeki havanın tahliye edilmesini sağlar.",
        top: "31%",
        left: "74%",
    },
    {
        id: 2,
        title: "Akıllı LED Ekran",
        text: "Gün, saat, dakika ve sıcaklık bilgisini göstererek tazelik sürecini görünür hale getirir.",
        top: "72%",
        left: "52%",
    },
    {
        id: 3,
        title: "Sızdırmaz Kapak",
        text: "Kapak formu ve conta sistemi, vakum etkisinin korunmasına yardımcı olur.",
        top: "47%",
        left: "35%",
    },
    {
        id: 4,
        title: "Dikey Vakum Pompası",
        text: "Beko logolu kompakt pompa, kapaktaki valfe oturarak pratik vakumlama deneyimi sunar.",
        top: "76%",
        left: "89%",
    },
];

const ProductInspection = () => {
    const [active, setActive] = useState(hotspots[1]);
    const [lens, setLens] = useState({ x: 50, y: 50 });
    const [showLens, setShowLens] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setLens({
            x: Math.min(100, Math.max(0, x)),
            y: Math.min(100, Math.max(0, y)),
        });
    };

    return (
        <StyledWrapper>
            <section className="inspection-section" id="detay">
                <div className="inspection-container">
                    <div className="section-header">
                        <span>Ürün Detayları</span>
                        <h2>
                            VacuumFresh’i <strong>yakından incele.</strong>
                        </h2>
                        <p>
                            Kapak, LED ekran, vakum valfi ve pompa yapısıyla akıllı saklama
                            deneyimini oluşturan detayları keşfet.
                        </p>
                    </div>

                    <div
                        className="product-stage"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setShowLens(true)}
                        onMouseLeave={() => setShowLens(false)}
                    >
                        <img src={productDetail} alt="Beko VacuumFresh Ürün Detayı" />

                        {showLens && (
                            <div
                                className="magnifier"
                                style={{
                                    left: `${lens.x}%`,
                                    top: `${lens.y}%`,
                                    backgroundImage: `url(${productDetail})`,
                                    backgroundPosition: `${lens.x}% ${lens.y}%`,
                                }}
                            />
                        )}

                        {hotspots.map((item) => (
                            <button
                                key={item.id}
                                className={`hotspot ${active.id === item.id ? "active" : ""}`}
                                style={{ top: item.top, left: item.left }}
                                onMouseEnter={() => setActive(item)}
                                onClick={() => setActive(item)}
                                aria-label={item.title}
                            >
                                <span>{item.id}</span>
                            </button>
                        ))}

                        <div className="floating-detail">
                            <div className="detail-number">0{active.id}</div>
                            <div>
                                <h3>{active.title}</h3>
                                <p>{active.text}</p>
                            </div>
                        </div>
                    </div>

                    <div className="detail-tabs">
                        {hotspots.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActive(item)}
                                className={active.id === item.id ? "selected" : ""}
                            >
                                <span>0{item.id}</span>
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .inspection-section {
    width: 100%;
    background: linear-gradient(180deg, #ffffff 0%, #f9f8f6 100%);
    padding: 120px 24px;
    overflow: hidden;
  }

  .inspection-container {
    width: min(1180px, 100%);
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .section-header span {
    display: inline-flex;
    padding: 9px 16px;
    border-radius: 999px;
    background: rgba(0, 137, 207, 0.1);
    color: #0089cf;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .section-header h2 {
    margin: 0;
    color: #0b2240;
    font-size: clamp(38px, 5vw, 68px);
    line-height: 1.05;
    letter-spacing: -2px;
    font-weight: 850;
  }

  .section-header h2 strong {
    color: #0089cf;
    font-weight: 850;
  }

  .section-header p {
    max-width: 680px;
    margin: 20px auto 0;
    color: #212529;
    font-size: 17px;
    line-height: 1.75;
  }

  .product-stage {
    position: relative;
    width: 100%;
    min-height: 560px;
    border-radius: 42px;
    overflow: hidden;
    background: #f9f8f6;
    box-shadow: 0 34px 90px rgba(11, 34, 64, 0.13);
    border: 1px solid rgba(11, 34, 64, 0.06);
    cursor: crosshair;
  }

  .product-stage::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(0, 137, 207, 0.12), transparent 28%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
    z-index: 2;
    pointer-events: none;
  }

  .product-stage img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
  }

  .magnifier {
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    pointer-events: none;
    background-size: 230%;
    background-repeat: no-repeat;
    border: 3px solid rgba(255, 255, 255, 0.95);
    box-shadow:
      0 24px 55px rgba(11, 34, 64, 0.22),
      inset 0 0 0 1px rgba(0, 137, 207, 0.25);
  }

  .hotspot {
    position: absolute;
    z-index: 6;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.82);
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: grid;
    place-items: center;
    box-shadow: 0 18px 38px rgba(11, 34, 64, 0.18);
    backdrop-filter: blur(12px);
    transition: all 0.25s ease;
  }

  .hotspot::before {
    content: "";
    position: absolute;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 1px solid rgba(0, 137, 207, 0.34);
    animation: pulse 1.9s infinite ease-out;
  }

  .hotspot span {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #0089cf;
    color: #ffffff;
    display: grid;
    place-items: center;
    font-size: 13px;
    font-weight: 850;
    box-shadow: 0 0 18px rgba(0, 137, 207, 0.7);
  }

  .hotspot:hover,
  .hotspot.active {
    transform: translate(-50%, -50%) scale(1.14);
  }

  .hotspot.active span {
    background: #28ff5f;
    color: #0b2240;
    box-shadow: 0 0 22px rgba(40, 255, 95, 0.8);
  }

  @keyframes pulse {
    0% {
      transform: scale(0.65);
      opacity: 0.85;
    }

    100% {
      transform: scale(1.35);
      opacity: 0;
    }
  }

  .floating-detail {
    position: absolute;
    right: 34px;
    bottom: 34px;
    z-index: 7;
    width: min(390px, calc(100% - 68px));
    display: grid;
    grid-template-columns: 58px 1fr;
    gap: 18px;
    padding: 22px;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 28px 70px rgba(11, 34, 64, 0.18);
    backdrop-filter: blur(18px);
  }

  .detail-number {
    width: 52px;
    height: 52px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background: #0089cf;
    color: white;
    font-size: 15px;
    font-weight: 900;
    box-shadow: 0 15px 30px rgba(0, 137, 207, 0.28);
  }

  .floating-detail h3 {
    margin: 0;
    color: #0b2240;
    font-size: 24px;
    letter-spacing: -0.6px;
  }

  .floating-detail p {
    margin: 9px 0 0;
    color: rgba(33, 37, 41, 0.72);
    font-size: 14px;
    line-height: 1.65;
  }

  .detail-tabs {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }

  .detail-tabs button {
    border: 1px solid rgba(11, 34, 64, 0.08);
    background: rgba(255, 255, 255, 0.85);
    color: #2d3748;
    border-radius: 20px;
    padding: 18px;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0 14px 34px rgba(11, 34, 64, 0.05);
    transition: all 0.25s ease;
  }

  .detail-tabs button span {
    display: block;
    color: #0089cf;
    font-size: 12px;
    margin-bottom: 7px;
    font-weight: 900;
  }

  .detail-tabs button:hover,
  .detail-tabs button.selected {
    background: #0b2240;
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 22px 46px rgba(11, 34, 64, 0.18);
  }

  .detail-tabs button.selected span,
  .detail-tabs button:hover span {
    color: #28ff5f;
  }

  @media (max-width: 980px) {
    .inspection-section {
      padding: 90px 18px;
    }

    .product-stage {
      min-height: 460px;
      border-radius: 32px;
    }

    .detail-tabs {
      grid-template-columns: repeat(2, 1fr);
    }

    .magnifier {
      display: none;
    }
  }

  @media (max-width: 620px) {
    .product-stage {
      min-height: 340px;
      border-radius: 24px;
      cursor: default;
    }

    .hotspot {
      width: 34px;
      height: 34px;
    }

    .hotspot span {
      width: 23px;
      height: 23px;
      font-size: 11px;
    }

    .hotspot::before {
      width: 48px;
      height: 48px;
    }

    .floating-detail {
      position: relative;
      right: auto;
      bottom: auto;
      width: 100%;
      margin-top: 18px;
      grid-template-columns: 48px 1fr;
      padding: 18px;
    }

    .detail-number {
      width: 44px;
      height: 44px;
      border-radius: 15px;
    }

    .floating-detail h3 {
      font-size: 21px;
    }

    .detail-tabs {
      grid-template-columns: 1fr;
    }

    .section-header p {
      font-size: 15px;
    }
  }
`;

export default ProductInspection;