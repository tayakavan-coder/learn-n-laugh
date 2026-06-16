import { useEffect, useState } from 'react'

const COLORS = [
  ['#FF4FA3','#c9145f'],
  ['#3B82F6','#1d4ed8'],
  ['#22C55E','#15803d'],
  ['#F59E0B','#d97706'],
  ['#F97316','#ea580c'],
  ['#A855F7','#7c3aed'],
  ['#EC4899','#db2777'],
  ['#06B6D4','#0891b2'],
]

const STATS = [
  { num: '500+', lbl: 'Happy Students'      },
  { num: '25+',  lbl: 'Expert Teachers'     },
  { num: '15+',  lbl: 'Years Excellence'    },
  { num: '98%',  lbl: 'Parent Satisfaction' },
]

export default function Hero({ onAdmit }) {
  const [balloons, setBalloons] = useState([])
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setBalloons(
      Array.from({ length: 15 }, (_, i) => ({
        id:    i,
        left:  `${5 + Math.random() * 90}%`,
        delay: `${Math.random() * 22}s`,
        dur:   `${18 + Math.random() * 16}s`,
        col:   COLORS[i % COLORS.length],
        w:     42 + Math.random() * 28,
        str:   70 + Math.random() * 50,
      }))
    )
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id:    i,
        left:  `${Math.random() * 100}%`,
        top:   `${Math.random() * 100}%`,
        delay: `${Math.random() * 9}s`,
        dur:   `${6 + Math.random() * 10}s`,
        col:   COLORS[i % COLORS.length][0],
        size:  3 + Math.random() * 5,
      }))
    )
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-gradient" />

      {/* Balloons */}
      <div className="balloons-wrap">
        {balloons.map(b => (
          <div
            key={b.id}
            className="balloon"
            style={{ left: b.left, animationDuration: b.dur, animationDelay: b.delay }}
          >
            <div
              className="balloon-body"
              style={{
                width: b.w,
                height: b.w * 1.2,
                background: `linear-gradient(135deg, ${b.col[0]}, ${b.col[1]})`,
                boxShadow: `inset -8px -10px 20px rgba(0,0,0,0.2), 0 6px 18px rgba(0,0,0,0.2)`,
              }}
            />
            <div className="balloon-tie" />
            <div className="balloon-string" style={{ height: b.str }} />
          </div>
        ))}
      </div>

      {/* Particles */}
      <div className="particles-wrap">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left, top: p.top,
              animationDuration: p.dur, animationDelay: p.delay,
              width: p.size, height: p.size, background: p.col,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">

          {/* School Logo */}
          <div className="hero-logo-wrap">
            <img
              src="/school-logo.jpg"
              alt="Learn'N Laugh Kids Academy Logo"
              className="hero-logo"
            />
          </div>

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Admissions Open 2025–26
          </div>

          <h1 className="hero-title">
            <span className="line1">Learn'N Laugh</span>
            <span className="line2">Kids Academy</span>
            <span className="line3">Where Every Child Shines ✨</span>
          </h1>

          <p className="hero-tagline">
            Learn <span className="dot">·</span> Play <span className="dot">·</span> Grow <span className="dot">·</span> Shine
          </p>

          <div className="hero-actions">
            <button className="btn-admit" onClick={onAdmit}>
              <span>🎈</span>
              <span>Apply for Admission</span>
            </button>
            <a href="#about" className="btn-tour">
              <span>Discover More</span>
              <span>↓</span>
            </a>
          </div>

          {/* Stats — no fragments with missing keys */}
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div key={s.lbl} className="hero-stat-group">
                {i > 0 && <div className="hero-divider" />}
                <div className="hero-stat">
                  <span className="hero-stat-num">{s.num}</span>
                  <span className="hero-stat-lbl">{s.lbl}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  )
}
