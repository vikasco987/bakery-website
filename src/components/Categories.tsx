"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.cake-card');
    if (!cards) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find index manually to ensure consistent staggered delay
          const index = Array.from(cards).indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('in-view'), index * 90);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    cards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Birthday Cakes",
      icon: "🎂",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "#menu",
      isFeatured: true
    },
    {
      title: "Chocolate Cakes",
      icon: "🍫",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "#menu"
    },
    {
      title: "Fruit Cakes",
      icon: "🍓",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "#menu"
    },
    {
      title: "Custom Cakes",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "#menu"
    },
    {
      title: "Pastries & Cupcakes",
      icon: "🧁",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "#menu"
    },
    {
      title: "Donuts & More",
      icon: "🍩",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "#menu"
    }
  ];

  return (
    <section id="categories" ref={sectionRef} className="collection-section">
      <style>{`
        .collection-section {
          position: relative;
          padding: 90px 6vw 100px;
          background: #fdf3ec;
          overflow: hidden;
        }

        .collection-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e7c9b6 1px, transparent 1px);
          background-size: 26px 26px;
          opacity: 0.35;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 { width: 320px; height: 320px; background: #ffd9e6; top: -100px; left: -80px; }
        .blob-2 { width: 280px; height: 280px; background: #ffe6b3; bottom: -80px; right: -60px; }

        .drift {
          position: absolute;
          z-index: 0;
          opacity: 0.5;
          pointer-events: none;
          animation: drift 7s ease-in-out infinite;
        }
        .drift-1 { top: 8%;  right: 8%;  font-size: 30px; animation-duration: 6s; }
        .drift-2 { top: 60%; left: 3%;   font-size: 24px; animation-duration: 8s; }
        .drift-3 { top: 82%; right: 22%; font-size: 22px; animation-duration: 6.5s; }
        @keyframes drift {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%     { transform: translateY(-16px) rotate(8deg); }
        }

        .inner { position: relative; z-index: 1; max-width: 1400px; margin: 0 auto; }

        .collection-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .header-text .eyebrow {
          font-family: Georgia, serif;
          font-style: italic;
          color: #e0356b;
          font-size: clamp(20px, 2vw, 26px);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .header-text h2 {
          font-size: clamp(30px, 4.5vw, 54px);
          font-weight: 800;
          color: #1b1b2e;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid #e0356b;
          color: #e0356b;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          transition: all .25s ease;
          white-space: nowrap;
        }
        .view-all:hover {
          background: #e0356b;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(224,53,107,0.3);
        }
        .view-all .arrow { transition: transform .25s ease; }
        .view-all:hover .arrow { transform: translateX(4px); }

        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #e0356b;
          max-width: 420px;
          margin-bottom: 50px;
        }
        .divider .line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #d9c6b8, transparent); }

        .cake-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 26px;
        }

        .cake-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(30,20,15,0.06);
          transition: transform .35s ease, box-shadow .35s ease;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
        }

        .cake-card.in-view {
          animation: cardRise .7s ease forwards;
        }
        @keyframes cardRise {
          to { opacity: 1; transform: translateY(0); }
        }

        .cake-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(30,20,15,0.16);
        }

        .cake-card.featured {
          box-shadow: 0 10px 28px rgba(224,53,107,0.18);
          border: 1.5px solid #f7c9d8;
        }

        .ribbon {
          position: absolute;
          top: 14px;
          left: -34px;
          background: linear-gradient(135deg, #ee5586, #d81b60);
          color: #fff;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 5px 40px;
          transform: rotate(-45deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.25);
          z-index: 3;
        }

        .cake-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          width: 100%;
          overflow: hidden;
        }

        .cake-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform .5s ease;
        }

        .cake-card:hover .cake-img-wrap img {
          transform: scale(1.08);
        }

        .cake-img-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 45%);
          opacity: 0;
          transition: opacity .35s ease;
        }
        .cake-card:hover .cake-img-wrap::after { opacity: 1; }

        .badge-icon {
          position: absolute;
          bottom: -26px;
          left: 20px;
          width: 52px;
          height: 52px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.18);
          z-index: 2;
          transition: transform .35s ease;
        }
        .cake-card:hover .badge-icon {
          transform: rotate(-8deg) scale(1.08);
        }

        .cake-body {
          padding: 40px 22px 26px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cake-body h3 {
          font-size: 18px;
          font-weight: 800;
          color: #1b1b2e;
          letter-spacing: 0.3px;
          margin-bottom: 0;
          line-height: 1.25;
        }

        /* ===== Responsive breakpoints ===== */
        @media (max-width: 1200px) {
          .cake-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .collection-section { padding: 60px 5vw 70px; }
          .collection-header { flex-direction: column; align-items: flex-start; }
          .cake-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .drift { display: none; }
        }

        @media (max-width: 460px) {
          .cake-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding-bottom: 12px;
            -webkit-overflow-scrolling: touch;
          }
          .cake-grid::-webkit-scrollbar { height: 6px; }
          .cake-grid::-webkit-scrollbar-thumb { background: #e0b9a4; border-radius: 10px; }
          .cake-card {
            min-width: 72%;
            scroll-snap-align: start;
          }
        }
      `}</style>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <span className="drift drift-1">🍒</span>
      <span className="drift drift-2">✨</span>
      <span className="drift drift-3">🍫</span>

      <div className="inner">
        <div className="collection-header">
          <div className="header-text">
            <p className="eyebrow">Our Special 🎂</p>
            <h2>Cake Collection</h2>
          </div>
          <Link href="/menu" className="view-all">VIEW ALL CAKES <span className="arrow">→</span></Link>
        </div>

        <div className="divider">
          <span className="line"></span><span>♥</span><span className="line"></span>
        </div>

        <div className="cake-grid">
          {categories.map((cat, idx) => (
            <Link href={cat.href} key={idx} className={`cake-card ${cat.isFeatured ? 'featured' : ''}`}>
              {cat.isFeatured && <span className="ribbon">BESTSELLER</span>}
              <div className="cake-img-wrap">
                <img src={cat.image} alt={cat.title} />
                <span className="badge-icon">{cat.icon}</span>
              </div>
              <div className="cake-body">
                <h3>{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
