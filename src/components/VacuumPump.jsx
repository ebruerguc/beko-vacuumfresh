import React from 'react';
import vacuumPumpImg from '../assets/vacuum-pump.png';

const VacuumPump = () => {
  return (
    <div className="section-inner">
      <div className="pump-section reveal" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'start' }}>
        
        <div className="pump-img-wrap" style={{ padding: '0', background: 'transparent', border: 'none', borderRadius: '24px', overflow: 'hidden', display: 'block', marginTop: '165px', boxShadow: 'var(--shadow-md)' }}>
          <img className="pump-img" src={vacuumPumpImg} alt="VacuumFresh Vakum Pompası" style={{ width: '100%', height: 'auto', display: 'block', margin: '0' }} />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <span className="section-tag">Vakum Pompası</span>
            <h3 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 38px)', marginBottom: '12px' }}>Vakum Pompası</h3>
            <p style={{ fontSize: '15px', color: 'var(--gray-text)', lineHeight: '1.7', marginBottom: '36px' }}>Beko markalı harici vakum pompası, kapla birlikte çalışır ancak bağımsız bir ünitedir.</p>
            
            <div className="pump-steps">
              <div className="pump-step" style={{ padding: '20px', borderRadius: '16px' }}>
                <div className="pump-step-num" style={{ background: 'var(--beko-blue)' }}>01</div>
                <div className="pump-step-text">
                  <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Yerleştir</h4>
                  <p style={{ fontSize: '13px' }}>Gıdanı VacuumFresh kabına koy ve kapağı kapat.</p>
                </div>
              </div>
              <div className="pump-step" style={{ padding: '20px', borderRadius: '16px' }}>
                <div className="pump-step-num" style={{ background: 'var(--beko-blue)' }}>02</div>
                <div className="pump-step-text">
                  <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Vakumla</h4>
                  <p style={{ fontSize: '13px' }}>Dikey pompayı kapak üzerindeki valfe yerleştir.</p>
                </div>
              </div>
              <div className="pump-step" style={{ padding: '20px', borderRadius: '16px' }}>
                <div className="pump-step-num" style={{ background: 'var(--beko-blue)' }}>03</div>
                <div className="pump-step-text">
                  <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Kilitle</h4>
                  <p style={{ fontSize: '13px' }}>Hava tahliye edilir, sızdırmaz yapı tazeliği korur.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div className="diff-card reveal" style={{ padding: '20px', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--beko-blue)', fontSize: '15px', marginBottom: '8px' }}>Güçlü Vakum</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5' }}>Kabın içindeki havayı pratik şekilde tahliye eder.</p>
            </div>
            <div className="diff-card reveal reveal-delay-1" style={{ padding: '20px', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--beko-blue)', fontSize: '15px', marginBottom: '8px' }}>Tek Tuş</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5' }}>Kolay, hızlı ve kullanıcı dostu kullanım sunar.</p>
            </div>
            <div className="diff-card reveal reveal-delay-2" style={{ padding: '20px', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--beko-blue)', fontSize: '15px', marginBottom: '8px' }}>Sızdırmaz Uyum</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5' }}>Kapak valfiyle uyumlu güvenli vakum deneyimi sağlar.</p>
            </div>
            <div className="diff-card reveal reveal-delay-3" style={{ padding: '20px', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--beko-blue)', fontSize: '15px', marginBottom: '8px' }}>Şarj Edilebilir</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5' }}>Kablosuz ve taşınabilir kullanım hissi verir.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '100px', paddingBottom: '120px' }}>
        <span className="section-tag reveal">Sistem Yaklaşımı</span>
        <h3 className="section-title reveal" style={{ fontSize: 'clamp(24px, 3vw, 38px)', marginBottom: '12px' }}>Sistem Yaklaşımı</h3>
        <p className="section-sub reveal">VacuumFresh yalnızca bir saklama kabı değildir. Donanım ve yazılımın birlikte çalıştığı bir mutfak sistemidir.</p>
        
        <div className="diff-grid">
          <div className="diff-card reveal">
            <h4 style={{ color: 'var(--beko-blue)' }}>Vakum teknolojisi</h4>
          </div>
          <div className="diff-card reveal reveal-delay-1">
            <h4 style={{ color: 'var(--beko-blue)' }}>Dijital takip sistemi</h4>
          </div>
          <div className="diff-card reveal reveal-delay-2">
            <h4 style={{ color: 'var(--beko-blue)' }}>Mobil uygulama entegrasyonu</h4>
          </div>
          <div className="diff-card reveal reveal-delay-3">
            <h4 style={{ color: 'var(--beko-blue)' }}>Akıllı ev ekosistemi uyumu</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacuumPump;