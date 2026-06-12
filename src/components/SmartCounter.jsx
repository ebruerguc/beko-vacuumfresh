import React, { useEffect, useState } from "react";
import styled from "styled-components";
import productMain from "../assets/product-main.png";


const INITIAL_TIME = {
    days: 5,
    hours: 10,
    minutes: 45,
    seconds: 0,
};

const SmartCounter = () => {
    const [time, setTime] = useState(INITIAL_TIME);

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + INITIAL_TIME.days);
        targetDate.setHours(targetDate.getHours() + INITIAL_TIME.hours);
        targetDate.setMinutes(targetDate.getMinutes() + INITIAL_TIME.minutes);
        targetDate.setSeconds(targetDate.getSeconds() + INITIAL_TIME.seconds);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (value) => String(value).padStart(2, "0");

    return (
        <StyledWrapper>
            <section className="counter-section" id="teknoloji">
                <div className="section-container">
                    <div className="counter-content">
                        <span className="section-label">Akıllı Tazelik Takibi</span>

                        <h2>
                            Tazeliği sadece saklama, <span>takip et.</span>
                        </h2>

                        <p>
                            Beko VacuumFresh, kapak üzerindeki LED ekranıyla gıdanın kalan
                            tazelik süresini gün, saat ve dakika bazında gösterir. Böylece
                            buzdolabındaki ürünleri unutmaz, tüketim süresini kolayca takip
                            edersin.
                        </p>

                        <div className="led-counter-card">
                            <div className="led-top">
                                <span>VACUUMFRESH TIMER</span>
                                <div className="status">
                                    <span className="green-dot"></span>
                                    Aktif
                                </div>
                            </div>

                            <div className="led-display">
                                <div className="led-box">
                                    <span className="led-label">GÜN</span>
                                    <strong>{format(time.days)}</strong>
                                </div>

                                <div className="led-box">
                                    <span className="led-label">SAAT</span>
                                    <strong>{format(time.hours)}</strong>
                                </div>

                                <div className="led-box">
                                    <span className="led-label">DAKİKA</span>
                                    <strong>{format(time.minutes)}</strong>
                                </div>

                                <div className="led-box">
                                    <span className="led-label">SANİYE</span>
                                    <strong>{format(time.seconds)}</strong>
                                </div>
                            </div>

                            <div className="freshness-bar">
                                <div className="bar-info">
                                    <span>Tazelik Durumu</span>
                                    <strong>%78</strong>
                                </div>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <div className="mini-info">
                            <div>
                                <strong>LED Sayaç</strong>
                                <span>Kapak üzerinde anlık takip</span>
                            </div>

                            <div>
                                <strong>HomeWhiz Bildirimi</strong>
                                <span>Süre yaklaşınca mobil uyarı</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-visual">
                        <div className="circle-bg"></div>

                        <div className="image-card">
                            <img src={productMain} alt="Beko VacuumFresh Ürün Görseli" />
                        </div>

                        <div className="layer-card layer-1">
                            <span>01</span>
                            <strong>Akıllı Kapak</strong>
                            <p>LED ekran, sayaç ve valf sistemi</p>
                        </div>

                        <div className="layer-card layer-2">
                            <span>02</span>
                            <strong>Sızdırmaz Conta</strong>
                            <p>Vakum etkisini koruyan silikon yapı</p>
                        </div>

                        <div className="layer-card layer-3">
                            <span>03</span>
                            <strong>Borosilikat Cam</strong>
                            <p>Dayanıklı ve sürdürülebilir gövde</p>
                        </div>
                    </div>
                </div>
            </section>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .counter-section {
    width: 100%;
    background: linear-gradient(180deg, #f9f8f6 0%, #ffffff 100%);
    padding: 110px 24px;
    overflow: hidden;
  }

  .section-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    align-items: center;
    gap: 70px;
  }

  .counter-content {
    position: relative;
    z-index: 2;
  }

  .section-label {
    display: inline-flex;
    padding: 9px 16px;
    border-radius: 999px;
    background: rgba(0, 137, 207, 0.1);
    color: #0089cf;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 22px;
  }

  h2 {
    margin: 0;
    color: #0b2240;
    font-size: clamp(36px, 5vw, 64px);
    line-height: 1.05;
    letter-spacing: -2px;
    font-weight: 800;
  }

  h2 span {
    color: #0089cf;
  }

  p {
    margin: 24px 0 0;
    color: #212529;
    font-size: 17px;
    line-height: 1.8;
    max-width: 560px;
  }

  .led-counter-card {
    margin-top: 34px;
    width: min(460px, 100%);
    border-radius: 28px;
    background: #101820;
    padding: 22px;
    box-shadow: 0 28px 70px rgba(11, 34, 64, 0.22);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .led-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
    letter-spacing: 1.8px;
    margin-bottom: 18px;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #8cff9f;
    font-size: 12px;
    letter-spacing: 0;
  }

  .green-dot {
    width: 9px;
    height: 9px;
    background: #28ff5f;
    border-radius: 50%;
    box-shadow: 0 0 14px rgba(40, 255, 95, 0.9);
  }

  .led-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

  .led-box {
    background: #05080c;
    border-radius: 18px;
    padding: 14px 10px;
    text-align: center;
    border: 1px solid rgba(0, 137, 207, 0.24);
    box-shadow: inset 0 0 20px rgba(0, 137, 207, 0.08);
  }

  .led-label {
    display: block;
    color: rgba(255, 255, 255, 0.52);
    font-size: 11px;
    letter-spacing: 1.6px;
    margin-bottom: 8px;
  }

  .led-box strong {
    display: block;
    color: #f8fbff;
    font-size: 42px;
    line-height: 1;
    font-weight: 500;
    font-family: "Courier New", monospace;
    text-shadow: 0 0 16px rgba(0, 137, 207, 0.7);
  }

  .freshness-bar {
    margin-top: 20px;
  }

  .bar-info {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.72);
    font-size: 13px;
    margin-bottom: 9px;
  }

  .bar-info strong {
    color: #8cff9f;
  }

  .bar {
    width: 100%;
    height: 9px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }

  .bar span {
    display: block;
    width: 78%;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #0089cf, #28ff5f);
    box-shadow: 0 0 18px rgba(0, 137, 207, 0.55);
  }

  .mini-info {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    width: min(460px, 100%);
  }

  .mini-info div {
    background: #ffffff;
    border: 1px solid rgba(11, 34, 64, 0.08);
    border-radius: 20px;
    padding: 18px;
    box-shadow: 0 16px 40px rgba(11, 34, 64, 0.06);
  }

  .mini-info strong {
    display: block;
    color: #0b2240;
    font-size: 15px;
    margin-bottom: 6px;
  }

  .mini-info span {
    color: rgba(33, 37, 41, 0.7);
    font-size: 13px;
    line-height: 1.5;
  }

  .product-visual {
    position: relative;
    min-height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-bg {
    position: absolute;
    width: 540px;
    height: 540px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 137, 207, 0.13) 0%,
      rgba(0, 137, 207, 0.04) 45%,
      transparent 70%
    );
    z-index: 1;
  }

  .image-card {
    position: relative;
    z-index: 3;
    width: min(620px, 100%);
    border-radius: 36px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 32px 90px rgba(11, 34, 64, 0.16);
    border: 1px solid rgba(255, 255, 255, 0.9);
  }

  .image-card img {
    display: block;
    width: 100%;
    height: auto;
  }

  .layer-card {
    position: absolute;
    z-index: 4;
    width: 210px;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 137, 207, 0.15);
    border-radius: 22px;
    padding: 16px;
    box-shadow: 0 22px 60px rgba(11, 34, 64, 0.12);
  }

  .layer-card span {
    display: inline-flex;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: #0089cf;
    color: white;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .layer-card strong {
    display: block;
    color: #0b2240;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .layer-card p {
    margin: 0;
    color: rgba(33, 37, 41, 0.68);
    font-size: 13px;
    line-height: 1.45;
  }

  .layer-1 {
    top: 42px;
    right: 10px;
  }

  .layer-2 {
    left: 0;
    bottom: 135px;
  }

  .layer-3 {
    right: 35px;
    bottom: 55px;
  }

  @media (max-width: 980px) {
    .counter-section {
      padding: 80px 18px;
    }

    .section-container {
      grid-template-columns: 1fr;
      gap: 55px;
    }

    .counter-content {
      text-align: center;
    }

    p,
    .led-counter-card,
    .mini-info {
      margin-left: auto;
      margin-right: auto;
    }

    .product-visual {
      min-height: auto;
      padding: 40px 0 180px;
    }

    .layer-1 {
      top: 0;
      right: 5%;
    }

    .layer-2 {
      left: 5%;
      bottom: 70px;
    }

    .layer-3 {
      right: 5%;
      bottom: 0;
    }
  }

  @media (max-width: 620px) {
    .led-display {
      gap: 8px;
    }

    .led-box strong {
      font-size: 32px;
    }

    .mini-info {
      grid-template-columns: 1fr;
    }

    .product-visual {
      padding-bottom: 0;
      display: block;
    }

    .image-card {
      margin: 0 auto 18px;
      border-radius: 24px;
    }

    .layer-card {
      position: static;
      width: auto;
      margin: 12px 0;
    }
  }
`;

export default SmartCounter;