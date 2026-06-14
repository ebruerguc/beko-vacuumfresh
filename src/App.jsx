import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmartCounter from './components/SmartCounter';
import ProductInspection from './components/ProductInspection';
import VacuumPump from './components/VacuumPump';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SmartCounter />
      <ProductInspection />
      <VacuumPump />

      {/* PAZAR ANALİZİ */}
      <section id="pazar-analizi">
        <div className="section-inner">
          <h2 className="section-title reveal">STP Stratejisi</h2>
          <p className="section-sub reveal">VacuumFresh, farklı kullanıcı ihtiyaçlarına yönelik Farklılaştırılmış Pazarlama Stratejisi benimsemektedir.</p>

          <div className="stp-grid">
            <div className="stp-card reveal">
              <div className="stp-card-header">
                <div className="stp-card-header-text">
                  <div className="stp-card-label">S</div>
                  <div className="stp-card-title">Segmentasyon</div>
                </div>
              </div>
              <div className="stp-card-body">
                <ul className="stp-list">
                  <li>25-45 yaş aralığında, orta ve üst gelir grubuna mensup çalışan profesyoneller.</li>
                  <li>Teknoloji kullanımına yatkın bireyler ve genç aileler.</li>
                  <li>Meal-prep alışkanlığı bulunan ve sürdürülebilir yaşamı benimseyen tüketiciler.</li>
                  <li>Başta İstanbul, Ankara ve İzmir olmak üzere teknolojik adaptasyonun yüksek olduğu büyükşehirler.</li>
                </ul>
              </div>
            </div>

            <div className="stp-card reveal reveal-delay-1" style={{ background: 'var(--white)' }}>
              <div className="stp-card-header" style={{ background: '#0C2D55' }}>
                <div className="stp-card-header-text">
                  <div className="stp-card-label">T</div>
                  <div className="stp-card-title">Hedefleme</div>
                </div>
              </div>
              <div className="stp-card-body">
                <ul className="stp-list">
                  <li>Birincil Hedef: Çalışan profesyoneller, meal-prep yapanlar ve akıllı ev kullanıcıları.</li>
                  <li>İkincil Hedef: Sağlıklı beslenenler, sporcular ve sık seyahat edenler.</li>
                  <li>Üçüncül Hedef: Kafeler, catering işletmeleri ve gıda üreticileri.</li>
                  <li>Dördüncül Hedef: İlaç firmaları ve eczaneler (aşı/insülin saklama).</li>
                </ul>
              </div>
            </div>

            <div className="stp-card reveal reveal-delay-2" style={{ background: 'var(--white)' }}>
              <div className="stp-card-header" style={{ background: 'linear-gradient(135deg, #0B2240, #0089CF)' }}>
                <div className="stp-card-header-text">
                  <div className="stp-card-label">P</div>
                  <div className="stp-card-title">Konumlandırma</div>
                </div>
              </div>
              <div className="stp-card-body">
                <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--text)' }}>VacuumFresh şu ihtiyaçlara odaklanır:</p>
                <ul className="stp-list">
                  <li>Gıda tazeliğini korumak</li>
                  <li>Saklama süresini takip etmek</li>
                  <li>Kullanıcıya zamanında bilgi vermek</li>
                  <li>Akıllı mutfak deneyimi sunmak</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim">
        <div className="section-inner">
          <div className="contact-inner">
            <div className="reveal" style={{ textAlign: 'center' }}>
              <h2 className="section-title">VacuumFresh'i Birlikte Geliştirelim</h2>
            </div>
            <div className="contact-card reveal reveal-delay-1">
              <div className="contact-avatar">EE</div>
              <div className="contact-name">Ebru Ergüç</div>
              <div className="contact-role">VacuumFresh Proje Sahibi</div>
              <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/ebruerguc/" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-linkedin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="mailto:ebruerguc5@gmail.com" className="contact-btn contact-btn-mail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                  ebruerguc5@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;