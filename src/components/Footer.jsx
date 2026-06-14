import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name" style={{ fontSize: '18px', letterSpacing: '0.5px' }}>VacuumFresh</span>
        </div>
        <ul className="footer-links">
          <li><a href="#hero">Anasayfa</a></li>
          <li><a href="#urun-tanimi">Ürün Tanımı</a></li>
          <li><a href="#urun-detayi">Ürün Detayı</a></li>
          <li><a href="#pazar-analizi">Pazar Analizi</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
        <span className="footer-copy">© 2026 Beko Ürün Tanıtım Sayfası</span>
      </div>
    </footer>
  );
};

export default Footer;