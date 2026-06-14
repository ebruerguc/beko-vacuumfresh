import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a className="nav-brand" href="#hero">
          <svg className="nav-logo" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="900" fill="#0089CF">beko</text>
            <line x1="0" y1="46" x2="115" y2="42" stroke="#0089CF" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <div className="nav-divider"></div>
          <span className="nav-product-name">VacuumFresh</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero" className={activeLink === 'hero' ? 'active' : ''}>Anasayfa</a></li>
          <li><a href="#urun-tanimi" className={activeLink === 'urun-tanimi' ? 'active' : ''}>Ürün Tanımı</a></li>
          <li><a href="#urun-detayi" className={activeLink === 'urun-detayi' ? 'active' : ''}>Ürün Detayı</a></li>
          <li><a href="#pazar-analizi" className={activeLink === 'pazar-analizi' ? 'active' : ''}>Pazar Analizi</a></li>
          <li><a href="#iletisim" className={activeLink === 'iletisim' ? 'active' : ''}>İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;