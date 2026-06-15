import React, { useState, useEffect } from 'react';

const SmartCounter = () => {
  const [inputs, setInputs] = useState({ gun: '', saat: '', dakika: '' });
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let interval = null;
    if (status === 'active' && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds(prev => prev - 1);
      }, 1000);
    } else if (status === 'active' && totalSeconds === 0) {
      setStatus('finished');
    }
    return () => clearInterval(interval);
  }, [status, totalSeconds]);

  const handleStart = () => {
    const g = parseInt(inputs.gun) || 0;
    const s = parseInt(inputs.saat) || 0;
    const d = parseInt(inputs.dakika) || 0;
    const secs = (g * 86400) + (s * 3600) + (d * 60);
    
    if (secs > 0) {
      setTotalSeconds(secs);
      setStatus('active');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setTotalSeconds(0);
    setInputs({ gun: '', saat: '', dakika: '' });
  };

  const formatLED = (secs) => {
    if (status === 'idle') return '-- : -- : --';
    const d = Math.floor(secs / 86400);
    const h = Math.floor((secs % 86400) / 3600);
    const m = Math.floor((secs % 3600) / 60);
    return `${String(d).padStart(2,'0')} : ${String(h).padStart(2,'0')} : ${String(m).padStart(2,'0')}`;
  };

  return (
    <section id="urun-tanimi">
      <div className="section-inner">
        <div className="tanim-grid">
          <div className="tanim-left reveal">
            <span className="section-tag">Ürün Tanımı</span>
            <h2 className="section-title">Ürün Tanımı</h2>
            <p className="section-sub">Günlük yaşamda gıdalar çoğunlukla plansız tüketim ve yanlış saklama nedeniyle bozulmaktadır. Mevcut saklama kapları yalnızca fiziksel koruma sağlar, ancak süre takibi sunmaz. VacuumFresh bu sorunu iki katmanda çözer:</p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-text">
                  <h4>Fiziksel Çözüm</h4>
                  <p>Vakum pompası ile kaptaki hava boşaltılır ve gıdanın oksijenle teması azaltılır.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-text">
                  <h4>Dijital Çözüm</h4>
                  <p>Mobil uygulama entegrasyonu ile gıdanın saklanma süresi kaydedilir ve kullanıcıya süre yaklaşınca bildirim gönderilir.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="led-container reveal reveal-delay-2">
            <div className="led-header">
              <span className="led-title">LED Gösterge Paneli</span>
              <div className="led-status">
                <div className={`led-dot ${status === 'idle' ? 'inactive' : ''}`} style={status === 'finished' ? {background: '#ef4444', boxShadow: '0 0 8px #ef4444'} : {}}></div>
                <span>{status === 'idle' ? 'Beklemede' : status === 'active' ? 'Aktif' : 'Süre Doldu!'}</span>
              </div>
            </div>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '24px', lineHeight: '1.6' }}>Kapak üzerinde yer alan ekran, saklama süresini gün, saat ve dakika olarak gösterir. Termos versiyonunda ek olarak sıcaklık bilgisi de görüntülenir.</p>

            <div className={`led-display ${status === 'idle' ? 'inactive' : ''}`} style={status === 'finished' ? {color: '#ef4444', textShadow: '0 0 20px rgba(239,68,68,0.5)'} : {}}>
              {formatLED(totalSeconds)}
            </div>
            <div className="led-labels">
              <span className="led-label">Gün</span>
              <span className="led-label">Saat</span>
              <span className="led-label">Dakika</span>
            </div>
            <div className="led-inputs">
              <div className="led-input-wrap">
                <label>Gün</label>
                <input className="led-input" type="number" min="0" max="365" placeholder="5" value={inputs.gun} onChange={e => setInputs({...inputs, gun: e.target.value})} />
              </div>
              <div className="led-input-wrap">
                <label>Saat</label>
                <input className="led-input" type="number" min="0" max="23" placeholder="10" value={inputs.saat} onChange={e => setInputs({...inputs, saat: e.target.value})} />
              </div>
              <div className="led-input-wrap">
                <label>Dakika</label>
                <input className="led-input" type="number" min="0" max="59" placeholder="45" value={inputs.dakika} onChange={e => setInputs({...inputs, dakika: e.target.value})} />
              </div>
            </div>
            <div className="led-actions">
              <button className="led-btn led-btn-start" onClick={handleStart}>Takibi Başlat</button>
              <button className="led-btn led-btn-reset" onClick={handleReset}>Sıfırla</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>• Saklama süresi takibi</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>• Anlık durum bilgisi</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>• Basit arayüz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCounter;