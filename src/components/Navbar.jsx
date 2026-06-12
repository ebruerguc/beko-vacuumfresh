import React, { useState } from "react";
import styled from "styled-components";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <StyledWrapper>
            <header className="navbar">
                <div className="nav-container">
                    <a href="#anasayfa" className="logo" onClick={closeMenu}>
                        <span className="beko">beko</span>
                        <span className="product">VacuumFresh</span>
                    </a>

                    <nav className={isOpen ? "nav-links active" : "nav-links"}>
                        <a href="#anasayfa" onClick={closeMenu}>
                            Anasayfa
                        </a>
                        <a href="#teknoloji" onClick={closeMenu}>
                            Akıllı Sayaç
                        </a>
                        <a href="#detay" onClick={closeMenu}>
                            Ürün Detayı
                        </a>
                        <a href="#vakum" onClick={closeMenu}>
                            Vakum Pompası
                        </a>

                        <a href="#iletisim" onClick={closeMenu}>
                            İletişim
                        </a>


                    </nav>



                    <button
                        className="menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menüyü aç/kapat"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </header>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(249, 248, 246, 0.78);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(11, 34, 64, 0.08);
  }

  .nav-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
  }

  .logo {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .beko {
    color: #0089cf;
    font-size: 34px;
    font-weight: 900;
    letter-spacing: -2px;
    position: relative;
    width: max-content;
  }

  .beko::after {
    content: "";
    position: absolute;
    left: 2px;
    bottom: -5px;
    width: 58px;
    height: 4px;
    border-radius: 999px;
    background: #0089cf;
    transform: rotate(-5deg);
  }

  .product {
    margin-top: 10px;
    color: #0b2240;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.7px;
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .nav-links a {
    text-decoration: none;
    color: #2d3748;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.5px;
    transition: color 0.25s ease;
    position: relative;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: #0089cf;
    transition: width 0.25s ease;
  }

  .nav-links a:hover {
    color: #0089cf;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .download-btn {
    min-height: 46px;
    padding: 0 18px;
    border-radius: 14px;
    background: #0089cf;
    color: #ffffff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0 14px 32px rgba(0, 137, 207, 0.23);
    transition: all 0.25s ease;
    white-space: nowrap;
  }

  .download-btn:hover {
    transform: translateY(-2px);
    background: #0079b7;
  }

  .mobile-download {
    display: none;
  }

  .menu-btn {
    display: none;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 14px;
    background: rgba(0, 137, 207, 0.1);
    color: #0089cf;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 940px) {
    .nav-container {
      padding: 16px 18px;
    }

    .nav-links {
      position: fixed;
      top: 79px;
      left: 18px;
      right: 18px;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(18px);
      border: 1px solid rgba(11, 34, 64, 0.08);
      border-radius: 24px;
      box-shadow: 0 28px 80px rgba(11, 34, 64, 0.16);
      padding: 24px;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-14px);
      transition: all 0.25s ease;
    }

    .nav-links.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .nav-links a {
      padding: 15px 8px;
      font-size: 15px;
      border-bottom: 1px solid rgba(11, 34, 64, 0.06);
    }

    .nav-links a::after {
      display: none;
    }

    .download-btn {
      display: none;
    }

    .mobile-download {
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 14px;
      border-radius: 16px;
      background: #0089cf;
      color: white !important;
      border-bottom: none !important;
    }

    .menu-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .beko {
      font-size: 30px;
    }

    .product {
      font-size: 10px;
      letter-spacing: 1.2px;
    }
  }
`;

export default Navbar;