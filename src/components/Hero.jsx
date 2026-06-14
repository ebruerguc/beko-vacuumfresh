import React from 'react';
import bekoLogo from '../assets/beko-logo.png';

const Hero = () => {
  return (
    <section id="hero" style={{ justifyContent: 'center' }}>
      <div className="hero-watermark" aria-hidden="true" style={{ opacity: 0.08, width: '80vw', maxWidth: '900px' }}>
        <img src={bekoLogo} alt="Beko Logo Watermark" style={{ width: '100%', objectFit: 'contain' }} />
      </div>
      
      <div className="hero-inner" style={{ maxWidth: '800px' }}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Tazeliği koruyan akıllı saklama sistemi
          </div>
          <h1 className="hero-title">
            Beko Vacuum <span className="hero-title-accent">Fresh</span>
          </h1>
          <p className="hero-tagline">Tazeliği koruyan akıllı saklama sistemi</p>
          <p className="hero-desc">VacuumFresh, gıda israfını azaltmayı hedefleyen; vakum teknolojisi ile dijital takip sistemini bir araya getiren akıllı bir saklama çözümüdür. Fiziksel saklama kabı, vakum pompası ve mobil uygulama entegrasyonu birlikte çalışır.</p>
          
          <div className="hero-actions">
            <a href="/Beko_VacuumFresh_RAPOR.pdf" download="Beko_VacuumFresh_RAPOR.pdf" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Proje Raporunu İndir
            </a>
            <a href="#urun-tanimi" className="btn-secondary">
              Ürünü Keşfet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;