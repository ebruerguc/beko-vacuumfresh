import React from "react";
import styled from "styled-components";
import { FiDownload, FiArrowDown } from "react-icons/fi";

const Hero = () => {
    return (
        <StyledWrapper>
            <section className="hero-section" id="anasayfa">
                <div className="beko-watermark">beko</div>

                <div className="hero-content">
                    <span className="project-label">Beko FoodTech & IoT Projesi</span>

                    <h1>
                        Beko <br />
                        <span>VacuumFresh</span>
                    </h1>

                    <h2>Tazeliğin Akıllı Çözümü</h2>

                    <p className="description">
                        Vakum teknolojisi, akıllı LED ekran ve HomeWhiz entegrasyonunu bir
                        araya getiren Beko VacuumFresh; gıdaların daha uzun süre taze
                        kalmasına yardımcı olan yenilikçi bir akıllı saklama çözümüdür.
                    </p>

                    <p className="sub-description">
                        Gıda israfını azaltmak, saklama sürecini takip etmek ve mutfakta
                        daha sürdürülebilir bir deneyim sunmak için tasarlandı.
                    </p>

                    <div className="hero-buttons">
                        <a href="#teknoloji" className="primary-btn">
                            Ürünü Keşfet
                            <FiArrowDown />
                        </a>

                        <a
                            href="/docs/beko-vacuumfresh-rapor.docx"
                            download
                            className="secondary-btn"
                        >
                            <FiDownload />
                            Proje Raporunu İndir
                        </a>
                    </div>

                    <div className="hero-badges">
                        <div className="badge">Vakumlu Koruma</div>
                        <div className="badge">Akıllı Takip</div>
                        <div className="badge">HomeWhiz Entegrasyonu</div>
                        <div className="badge">Gıda İsrafını Azaltır</div>
                    </div>
                </div>
            </section>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .hero-section {
    position: relative;
    min-height: 92vh;
    background: #f9f8f6;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 24px 80px;
  }

  .beko-watermark {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(120px, 28vw, 430px);
    font-weight: 900;
    letter-spacing: -18px;
    color: rgba(0, 137, 207, 0.15);
    line-height: 1;
    z-index: 1;
    user-select: none;
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  .beko-watermark::after {
    content: "";
    position: absolute;
    left: 5%;
    bottom: 8%;
    width: 42%;
    height: 10px;
    background: rgba(0, 137, 207, 0.07);
    transform: rotate(-6deg);
    border-radius: 999px;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-label {
    display: inline-flex;
    align-items: center;
    padding: 9px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 137, 207, 0.14);
    color: #0089cf;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(11, 34, 64, 0.06);
    margin-bottom: 24px;
  }

  h1 {
    margin: 0;
    color: #0b2240;
    font-size: clamp(48px, 8vw, 104px);
    line-height: 0.95;
    font-weight: 800;
    letter-spacing: -3px;
  }

  h1 span {
    color: #0089cf;
  }

  h2 {
    margin: 22px 0 0;
    color: #2d3748;
    font-size: clamp(28px, 4vw, 58px);
    font-weight: 500;
    font-style: italic;
    letter-spacing: -1px;
  }

  .description {
    max-width: 760px;
    margin: 28px 0 0;
    color: #212529;
    font-size: 19px;
    line-height: 1.8;
    font-weight: 400;
  }

  .sub-description {
    max-width: 680px;
    margin: 14px 0 0;
    color: rgba(33, 37, 41, 0.78);
    font-size: 16px;
    line-height: 1.7;
  }

  .hero-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  .primary-btn,
  .secondary-btn {
    min-height: 54px;
    padding: 0 26px;
    border-radius: 16px;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
  }

  .primary-btn {
    background: #0089cf;
    color: white;
    border: 1px solid #0089cf;
    box-shadow: 0 18px 40px rgba(0, 137, 207, 0.25);
  }

  .primary-btn:hover {
    transform: translateY(-3px);
    background: #0079b7;
    box-shadow: 0 22px 48px rgba(0, 137, 207, 0.32);
  }

  .secondary-btn {
    background: rgba(255, 255, 255, 0.72);
    color: #0089cf;
    border: 1px solid rgba(0, 137, 207, 0.35);
    box-shadow: 0 14px 35px rgba(11, 34, 64, 0.06);
    backdrop-filter: blur(10px);
  }

  .secondary-btn:hover {
    transform: translateY(-3px);
    background: white;
    border-color: #0089cf;
  }

  .hero-badges {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 12px;
    justify-content: center;
  }

  .badge {
    padding: 12px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(11, 34, 64, 0.08);
    color: #2d3748;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 12px 32px rgba(11, 34, 64, 0.05);
  }

  @media (max-width: 768px) {
    .hero-section {
      min-height: auto;
      padding: 110px 18px 64px;
    }

    .beko-watermark {
      font-size: clamp(110px, 40vw, 220px);
      letter-spacing: -8px;
      top: 42%;
      opacity: 1;
    }

    h1 {
      letter-spacing: -2px;
    }

    .description {
      font-size: 16px;
      line-height: 1.7;
    }

    .sub-description {
      font-size: 14px;
    }

    .hero-buttons {
      width: 100%;
    }

    .primary-btn,
    .secondary-btn {
      width: 100%;
      max-width: 320px;
    }

    .hero-badges {
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      max-width: 420px;
    }

    .badge {
      text-align: center;
      font-size: 13px;
      padding: 11px 12px;
    }
  }

  @media (max-width: 480px) {
    .hero-badges {
      grid-template-columns: 1fr;
    }
  }
`;

export default Hero;