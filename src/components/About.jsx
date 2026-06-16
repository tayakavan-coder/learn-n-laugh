import { useReveal } from '../hooks'

const MV = [
  { icon: '🎯', title: 'Our Mission', text: "To nurture every child's unique potential through joyful, holistic learning that builds confidence, creativity, and character.", bg: 'rgba(255,79,163,0.06)', iconBg: 'rgba(255,79,163,0.12)' },
  { icon: '🌟', title: 'Our Vision',  text: "To be the leading kids academy shaping tomorrow's leaders through innovation, love, and world-class early education.",  bg: 'rgba(59,130,246,0.06)',  iconBg: 'rgba(59,130,246,0.12)'  },
  { icon: '💎', title: 'Core Values', text: "Respect, Curiosity, Empathy, and Excellence — the four pillars guiding everything we do at Learn'N Laugh.", bg: 'rgba(34,197,94,0.06)',  iconBg: 'rgba(34,197,94,0.12)'  },
  { icon: '🤝', title: 'Community',   text: "Building a strong bond between teachers, parents and students — a true family for every learner.", bg: 'rgba(245,158,11,0.06)', iconBg: 'rgba(245,158,11,0.12)' },
]

export default function About() {
  const [ref, vis] = useReveal()

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className={`about-img-col reveal${vis ? ' in' : ''}`}>
            <img
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Children learning at Learn'N Laugh"
              className="about-main-img"
            />
            <div className="about-badge">
              <div className="about-badge-num">15+</div>
              <div className="about-badge-lbl">Years of Excellence</div>
            </div>
            <div className="about-deco" />
          </div>

          <div className="about-text">
            <div className={`reveal${vis ? ' in' : ''} rev-d2`}>
              <div className="section-badge">🏫 About Us</div>
              <h2 className="section-title">
                A Place Where <span className="gradient-text">Childhood Blooms</span>
              </h2>
              <p className="about-intro">
                Learn'N Laugh Kids Academy is a premium kindergarten and early childhood education centre dedicated to inspiring young minds. Our nurturing environment blends academic excellence with joyful play-based learning — ensuring every child develops the confidence, skills, and love of learning they need to thrive for life.
              </p>
            </div>

            <div className={`about-mv-grid reveal${vis ? ' in' : ''} rev-d3`}>
              {MV.map(m => (
                <div key={m.title} className="mv-card" style={{ background: m.bg }}>
                  <div className="mv-icon" style={{ width: 46, height: 46, borderRadius: 12, background: m.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 10 }}>{m.icon}</div>
                  <div className="mv-title">{m.title}</div>
                  <p className="mv-text">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
