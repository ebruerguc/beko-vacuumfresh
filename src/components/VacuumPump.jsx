import React from "react";
import styled from "styled-components";
import pumpImage from "../assets/vacuum-pump.png";
import { FiZap, FiMousePointer, FiShield, FiBatteryCharging } from "react-icons/fi";

const VacuumPump = () => {
    return (
        <StyledWrapper>
            <section className="pump-section" id="vakum">
                <div className="pump-container">
                    <div className="pump-visual">
                        <div className="glow-circle"></div>
                        <div className="ring ring-1"></div>
                        <div className="ring ring-2"></div>
                        <div className="ring ring-3"></div>

                        <div className="pump-card">
                            <img src={pumpImage} alt="Beko Dikey Vakum Pompası" />
                        </div>

                        <div className="floating-badge badge-top">
                            <span></span>
                            Vakum Basıncı Aktif
                        </div>

                        <div className="floating-badge badge-bottom">
                            Tek Dokunuşla Kullanım
                        </div>
                    </div>

                    <div className="pump-content">
                        <span className="section-label">Dikey Vakum Pompası</span>

                        <h2>
                            Tek dokunuşla <span>vakumlama</span>
                        </h2>

                        <p className="description">
                            Beko VacuumFresh’in dikey vakum pompası, kapak üzerindeki hava
                            valfine kolayca yerleşir. Kabın içindeki havayı tahliye ederek
                            gıdaların daha uzun süre taze kalmasına yardımcı olur.
                        </p>

                        <div className="steps">
                            <div className="step">
                                <strong>01</strong>
                                <div>
                                    <h3>Yerleştir</h3>
                                    <p>Gıdanı VacuumFresh kabına koy ve kapağı kapat.</p>
                                </div>
                            </div>

                            <div className="step">
                                <strong>02</strong>
                                <div>
                                    <h3>Vakumla</h3>
                                    <p>Dikey pompayı kapak üzerindeki valfe yerleştir.</p>
                                </div>
                            </div>

                            <div className="step">
                                <strong>03</strong>
                                <div>
                                    <h3>Kilitle</h3>
                                    <p>Hava tahliye edilir, sızdırmaz yapı tazeliği korur.</p>
                                </div>
                            </div>
                        </div>

                        <div className="feature-grid">
                            <div className="feature-card">
                                <FiZap />
                                <h4>Güçlü Vakum</h4>
                                <p>Kabın içindeki havayı pratik şekilde tahliye eder.</p>
                            </div>

                            <div className="feature-card">
                                <FiMousePointer />
                                <h4>Tek Tuş</h4>
                                <p>Kolay, hızlı ve kullanıcı dostu kullanım sunar.</p>
                            </div>

                            <div className="feature-card">
                                <FiShield />
                                <h4>Sızdırmaz Uyum</h4>
                                <p>Kapak valfiyle uyumlu güvenli vakum deneyimi sağlar.</p>
                            </div>

                            <div className="feature-card">
                                <FiBatteryCharging />
                                <h4>Şarj Edilebilir</h4>
                                <p>Kablosuz ve taşınabilir kullanım hissi verir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .pump-section {
    width: 100%;
    background: #f9f8f6;
    padding: 120px 24px;
    overflow: hidden;
  }

  .pump-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    align-items: center;
    gap: 80px;
  }

  .pump-visual {
    position: relative;
    min-height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glow-circle {
    position: absolute;
    width: 460px;
    height: 460px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 137, 207, 0.18) 0%,
      rgba(0, 137, 207, 0.06) 45%,
      transparent 72%
    );
    z-index: 1;
  }

  .ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(0, 137, 207, 0.18);
    z-index: 1;
    animation: pulse 4s infinite ease-in-out;
  }

  .ring-1 {
    width: 280px;
    height: 280px;
  }

  .ring-2 {
    width: 390px;
    height: 390px;
    animation-delay: 0.8s;
  }

  .ring-3 {
    width: 510px;
    height: 510px;
    animation-delay: 1.4s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.92);
      opacity: 0.25;
    }

    50% {
      transform: scale(1);
      opacity: 0.7;
    }

    100% {
      transform: scale(0.92);
      opacity: 0.25;
    }
  }

  .pump-card {
    position: relative;
    z-index: 3;
    width: 310px;
    min-height: 540px;
    background: rgba(255, 255, 255, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 35px 90px rgba(11, 34, 64, 0.14);
    backdrop-filter: blur(14px);
  }

  .pump-card img {
    width: 72%;
    max-height: 500px;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 28px 35px rgba(11, 34, 64, 0.18));
  }

  .floating-badge {
    position: absolute;
    z-index: 4;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(0, 137, 207, 0.16);
    color: #0b2240;
    border-radius: 999px;
    padding: 13px 18px;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 18px 46px rgba(11, 34, 64, 0.1);
    backdrop-filter: blur(16px);
  }

  .badge-top {
    top: 105px;
    right: 42px;
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .badge-top span {
    width: 9px;
    height: 9px;
    background: #28ff5f;
    border-radius: 50%;
    box-shadow: 0 0 14px rgba(40, 255, 95, 0.9);
  }

  .badge-bottom {
    left: 40px;
    bottom: 115px;
  }

  .pump-content {
    position: relative;
    z-index: 2;
  }

  .section-label {
    display: inline-flex;
    padding: 9px 16px;
    border-radius: 999px;
    background: rgba(0, 137, 207, 0.1);
    color: #0089cf;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 22px;
  }

  h2 {
    margin: 0;
    color: #0b2240;
    font-size: clamp(38px, 5vw, 68px);
    line-height: 1.03;
    letter-spacing: -2.2px;
    font-weight: 850;
  }

  h2 span {
    color: #0089cf;
  }

  .description {
    margin: 24px 0 0;
    max-width: 600px;
    color: #212529;
    font-size: 17px;
    line-height: 1.8;
  }

  .steps {
    margin-top: 34px;
    display: grid;
    gap: 16px;
  }

  .step {
    display: grid;
    grid-template-columns: 58px 1fr;
    align-items: flex-start;
    gap: 18px;
    background: #ffffff;
    border: 1px solid rgba(11, 34, 64, 0.08);
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 16px 40px rgba(11, 34, 64, 0.055);
  }

  .step strong {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: #0089cf;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .step h3 {
    margin: 0 0 6px;
    color: #0b2240;
    font-size: 19px;
  }

  .step p {
    margin: 0;
    color: rgba(33, 37, 41, 0.72);
    font-size: 14px;
    line-height: 1.6;
  }

  .feature-grid {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(11, 34, 64, 0.08);
    border-radius: 22px;
    padding: 18px;
    box-shadow: 0 16px 40px rgba(11, 34, 64, 0.05);
  }

  .feature-card svg {
    color: #0089cf;
    font-size: 24px;
    margin-bottom: 12px;
  }

  .feature-card h4 {
    margin: 0 0 7px;
    color: #0b2240;
    font-size: 16px;
  }

  .feature-card p {
    margin: 0;
    color: rgba(33, 37, 41, 0.68);
    font-size: 13px;
    line-height: 1.55;
  }

  @media (max-width: 980px) {
    .pump-section {
      padding: 90px 18px;
    }

    .pump-container {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .pump-content {
      text-align: center;
    }

    .description {
      margin-left: auto;
      margin-right: auto;
    }

    .pump-visual {
      order: 2;
      min-height: 560px;
    }

    .pump-content {
      order: 1;
    }

    .steps {
      max-width: 620px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 620px) {
    .pump-visual {
      min-height: 520px;
    }

    .pump-card {
      width: 250px;
      min-height: 460px;
      border-radius: 34px;
    }

    .ring-1 {
      width: 230px;
      height: 230px;
    }

    .ring-2 {
      width: 330px;
      height: 330px;
    }

    .ring-3 {
      width: 420px;
      height: 420px;
    }

    .floating-badge {
      font-size: 12px;
      padding: 11px 14px;
    }

    .badge-top {
      top: 80px;
      right: 0;
    }

    .badge-bottom {
      left: 0;
      bottom: 80px;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }

    .step {
      grid-template-columns: 48px 1fr;
      text-align: left;
      padding: 17px;
    }

    .step strong {
      width: 42px;
      height: 42px;
    }
  }
`;

export default VacuumPump;