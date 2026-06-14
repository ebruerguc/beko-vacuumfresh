import React, { useState, useEffect } from 'react';
import bekoLogo from '../assets/beko-logo.png';

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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <div className="nav-brand">
          <a href="https://www.beko.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={bekoLogo} alt="Beko Logo" style={{ height: '28px', objectFit: 'contain' }} />
          </a>
          <div className="nav-divider"></div>
          <a href="#hero" onClick={scrollToTop} className="nav-product-name" style={{ cursor: 'pointer', textDecoration: 'none' }}>
            VacuumFresh
          </a>
        </div>
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