import React from "react";
import styled from "styled-components";
import { FiDownload, FiMail, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
    return (
        <StyledWrapper>
            <footer className="footer" id="iletisim">
                <div className="footer-container">
                    <div className="footer-main">
                        <div className="brand-area">
                            <a href="#anasayfa" className="footer-logo">
                                <span className="beko">beko</span>
                                <span className="product">VacuumFresh</span>
                            </a>

                            <p>
                                Vakum teknolojisi, akıllı LED ekran ve HomeWhiz entegrasyonunu
                                birleştiren yenilikçi akıllı saklama çözümü.
                            </p>

                            <a
                                href="/docs/beko-vacuumfresh-rapor.docx"
                                download
                                className="report-btn"
                            >
                                <FiDownload />
                                Proje Raporunu İndir
                            </a>
                        </div>

                        <div className="footer-links">
                            <div className="link-column">
                                <h4>Sayfa</h4>
                                <a href="#anasayfa">Anasayfa</a>
                                <a href="#teknoloji">Akıllı Sayaç</a>
                                <a href="#vakum">Vakum Pompası</a>
                                <a href="#detay">Ürün Detayı</a>
                            </div>

                            <div className="link-column">
                                <h4>Ürün</h4>
                                <a href="#teknoloji">LED Tazelik Sayacı</a>
                                <a href="#vakum">Dikey Vakum Pompası</a>
                                <a href="#detay">Vakum Valfi</a>
                                <a href="#detay">Sızdırmaz Kapak</a>
                            </div>

                            <div className="link-column">
                                <h4>Proje</h4>
                                <a href="/docs/beko-vacuumfresh-rapor.docx" download>
                                    Raporu İndir
                                </a>
                                <a href="#detay">
                                    Ürünü İncele <FiArrowUpRight />
                                </a>
                                <a href="#iletisim">
                                    İletişim <FiMail />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 Beko VacuumFresh Proje Tanıtım Sayfası.</p>
                        <span>Tazeliğin Akıllı Çözümü</span>
                    </div>
                </div>
            </footer>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .footer {
    width: 100%;
    background: #0b2240;
    color: #ffffff;
    padding: 80px 24px 28px;
    overflow: hidden;
    position: relative;
  }

  .footer::before {
    content: "beko";
    position: absolute;
    right: -40px;
    bottom: -60px;
    font-size: 230px;
    font-weight: 900;
    letter-spacing: -14px;
    color: rgba(255, 255, 255, 0.035);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .footer-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .footer-main {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 80px;
    align-items: flex-start;
  }

  .footer-logo {
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    line-height: 1;
  }

  .beko {
    color: #0089cf;
    font-size: 42px;
    font-weight: 900;
    letter-spacing: -2px;
    position: relative;
    width: max-content;
  }

  .beko::after {
    content: "";
    position: absolute;
    left: 2px;
    bottom: -6px;
    width: 72px;
    height: 5px;
    border-radius: 999px;
    background: #0089cf;
    transform: rotate(-5deg);
  }

  .product {
    margin-top: 14px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.9px;
    text-transform: uppercase;
  }

  .brand-area p {
    max-width: 430px;
    margin: 30px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 15px;
    line-height: 1.8;
  }

  .report-btn {
    margin-top: 28px;
    min-height: 52px;
    padding: 0 20px;
    width: max-content;
    border-radius: 16px;
    background: #0089cf;
    color: #ffffff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0 18px 42px rgba(0, 137, 207, 0.25);
    transition: all 0.25s ease;
  }

  .report-btn:hover {
    transform: translateY(-3px);
    background: #0079b7;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }

  .link-column h4 {
    margin: 0 0 20px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 850;
  }

  .link-column a {
    display: flex;
    align-items: center;
    gap: 6px;
    width: max-content;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.62);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;
    transition: all 0.25s ease;
  }

  .link-column a:hover {
    color: #0089cf;
    transform: translateX(3px);
  }

  .footer-bottom {
    margin-top: 70px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .footer-bottom p,
  .footer-bottom span {
    margin: 0;
    color: rgba(255, 255, 255, 0.55);
    font-size: 13px;
  }

  .footer-bottom span {
    color: rgba(255, 255, 255, 0.78);
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: 54px;
    }

    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 560px) {
    .footer {
      padding: 64px 18px 24px;
    }

    .footer-links {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .report-btn {
      width: 100%;
      justify-content: center;
    }

    .footer::before {
      font-size: 150px;
      right: -30px;
      bottom: -35px;
    }
  }
`;

export default Footer;