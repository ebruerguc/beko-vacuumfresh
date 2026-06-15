import React, { useState } from 'react';
import glass1L from '../assets/glass-1l.png';
import glass3L from '../assets/glass-3l.png';
import glass5L from '../assets/glass-5l.png';
import thermos from '../assets/thermos.png';
import explodedGlass from '../assets/exploded-glass.jpg';
import explodedThermos from '../assets/exploded-thermos.jpg';
import productTopView from '../assets/product-top-view.jpg';
import ledGlass from '../assets/led-glass.png';
import ledThermos from '../assets/led-thermos.png';

const ProductInspection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  
  const hotspotData = [
    { id: 1, title: 'Hava valfi', desc: 'Vakum işleminin gerçekleşmesini sağlar.', top: '35%', left: '74%' }, 
    { id: 2, title: 'LED ekran', desc: 'Saklama süresini ve durum bilgisini gösterir.', top: '68%', left: '48%' }, 
    { id: 3, title: 'Akıllı kapak modülü', desc: 'Elektronik bileşenleri ve güç sistemini içerir.', top: '30%', left: '35%' }, 
    { id: 4, title: 'Vakum pompası', desc: 'Harici olarak çalışan, havayı hazneden çeken ana ünitedir.', top: '65%', left: '92%' } 
  ];

  return (
    <section id="urun-detayi">
      <div className="section-inner">
        <span className="section-tag reveal">Ürün Serisi</span>
        <h2 className="section-title reveal">Ürün Serisi</h2>
        <p className="section-sub reveal">VacuumFresh farklı kullanım ihtiyaçlarına göre üç cam ve bir termos versiyonu sunar:</p>

        <div className="series-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div className="series-card reveal visible">
            <img className="series-card-img" src={glass1L} alt="1 Litre Cam" />
            <div className="series-card-body">
              <div className="series-card-size">1 Litre</div>
              <div className="series-card-name">VacuumFresh Compact</div>
              <p className="series-card-desc">Günlük küçük porsiyonlar için.</p>
            </div>
          </div>
          
          <div className="series-card reveal reveal-delay-1 visible">
            <img className="series-card-img" src={glass3L} alt="3 Litre Cam" />
            <div className="series-card-body">
              <div className="series-card-size">3 Litre</div>
              <div className="series-card-name">VacuumFresh Standard</div>
              <p className="series-card-desc">Genel kullanım için dengeli kapasite.</p>
            </div>
          </div>
          
          <div className="series-card reveal reveal-delay-2 visible">
            <img className="series-card-img" src={glass5L} alt="5 Litre Cam" />
            <div className="series-card-body">
              <div className="series-card-size">5 Litre</div>
              <div className="series-card-name">VacuumFresh Family</div>
              <p className="series-card-desc">Aile kullanımı için geniş hacim.</p>
            </div>
          </div>

          <div className="series-card reveal reveal-delay-3 visible">
            <img className="series-card-img" src={thermos} alt="3 Litre Termos" />
            <div className="series-card-body">
              <div className="series-card-size">3 Litre</div>
              <div className="series-card-name">VacuumFresh Thermo</div>
              <p className="series-card-desc">Isı korumalı çift katmanlı termos yapı.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '60px' }}>
          
          <div className="reveal" style={{ padding: '40px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '24px' }}>Teknik Bileşenler (Cam Serisi)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
              <img src={explodedGlass} alt="Cam Katmanlar" style={{ width: '100%', borderRadius: '12px' }} />
              <ul className="stp-list" style={{ fontSize: '16px' }}>
                <li>Vakum valfi sistemi</li>
                <li>OLED LED ekran</li>
                <li>ESP32 tabanlı kontrol kartı</li>
                <li>Şarj edilebilir pil sistemi</li>
                <li>Borosilikat cam gövde</li>
              </ul>
            </div>
          </div>

          <div className="reveal" style={{ padding: '40px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '24px' }}>Teknik Bileşenler (Termos Serisi)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px', alignItems: 'center' }}>
              <img src={explodedThermos} alt="Termos Katmanlar" style={{ width: '100%', borderRadius: '12px', background: '#fff' }} />
              <ul className="stp-list" style={{ fontSize: '16px' }}>
                <li>Sızdırmaz valf sistemi</li>
                <li>Sıcaklık sensörü</li>
                <li>OLED ekran</li>
                <li>Metal çift katman gövde</li>
              </ul>
            </div>
          </div>

        </div>

        {/* YAKINDAN İNCELE BÖLÜMÜ */}
        <div className="reveal" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid var(--gray-mid)' }}>
          <h3 className="section-title" style={{ textAlign: 'center' }}>Ürünü Yakından İnceleyin</h3>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>Sistem dört ana parçadan oluşur:</p>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto 60px' }}>
            <img src={productTopView} alt="Üstten Görünüm" style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'block' }} />
            
            {hotspotData.map(spot => (
              <div 
                key={spot.id}
                className="hotspot" 
                style={{ top: spot.top, left: spot.left, transform: activeHotspot === spot.id ? 'scale(1.2)' : 'scale(1)' }} 
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="hotspot-ring" style={{ display: activeHotspot === spot.id ? 'block' : 'none' }}></div>
                <span className="hotspot-icon">{spot.id}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '80px' }}>
            {hotspotData.map(spot => (
              <div 
                key={spot.id}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                style={{ 
                  background: 'var(--white)', 
                  padding: '24px', 
                  borderRadius: '16px', 
                  border: `2px solid ${activeHotspot === spot.id ? 'var(--beko-blue)' : 'var(--gray-light)'}`,
                  transform: activeHotspot === spot.id ? 'translateY(-5px)' : 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: activeHotspot === spot.id ? 'var(--shadow-md)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--beko-dark)', marginBottom: '12px' }}>{spot.id}. {spot.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--gray-text)', lineHeight: '1.6' }}>{spot.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--white)', padding: '32px', borderRadius: '16px', border: '1px solid var(--gray-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--beko-dark)', marginBottom: '8px', textAlign: 'center' }}>Borosilikat Cam Serisi</h4>
              <p style={{ fontSize: '13px', color: 'var(--gray-text)', textAlign: 'center', marginBottom: '24px' }}>LED Ekran Arayüzü</p>
              <img src={ledGlass} alt="Cam LED Ekran" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div style={{ background: 'var(--white)', padding: '32px', borderRadius: '16px', border: '1px solid var(--gray-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--beko-dark)', marginBottom: '8px', textAlign: 'center' }}>Termos Serisi</h4>
              <p style={{ fontSize: '13px', color: 'var(--gray-text)', textAlign: 'center', marginBottom: '24px' }}>LED Ekran Arayüzü (Derece Göstergeli)</p>
              <img src={ledThermos} alt="Termos LED Ekran" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductInspection;