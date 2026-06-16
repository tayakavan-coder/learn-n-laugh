import { useReveal } from '../hooks'

const FACS = [
  { name: 'Smart Classrooms', desc: 'Interactive boards, digital tools, and ergonomic furniture for young learners.',         icon: '🖥️', img: 'https://images.pexels.com/photos/8617550/pexels-photo-8617550.jpeg?auto=compress&cs=tinysrgb&w=700' },
  { name: 'Adventure Playground', desc: 'Safe, padded outdoor play area with slides, swings, and climbing structures.',        icon: '🛝', img: 'https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg?auto=compress&cs=tinysrgb&w=700' },
  { name: 'Kids Library',      desc: "Vibrant library with 2,000+ children's books, e-readers, and cosy reading nooks.",       icon: '📚', img: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=700' },
  { name: 'Activity Room',     desc: 'Dedicated space for arts & crafts, science experiments, music, and projects.',           icon: '🎨', img: 'https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg?auto=compress&cs=tinysrgb&w=700' },
  { name: 'Safe Transport',    desc: 'GPS-tracked, air-conditioned school buses with trained attendants for safe journeys.',    icon: '🚌', img: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=700' },
  { name: 'Nutrition Canteen', desc: 'Healthy, balanced meals prepared by certified nutritionists for growing minds and bodies.', icon: '🥗', img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=700' },
]

export default function Facilities() {
  const [ref, vis] = useReveal()
  return (
    <section className="facilities" id="facilities" ref={ref}>
      <div className="container">
        <div className={`facilities-header reveal${vis ? ' in' : ''}`}>
          <div className="section-badge">🏛️ Our Facilities</div>
          <h2 className="section-title">World-Class <span className="gradient-text">Learning Spaces</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Purpose-built spaces designed with children in mind — safe, inspiring, and filled with possibilities for exploration and discovery.
          </p>
        </div>
        <div className="facilities-grid">
          {FACS.map((f, i) => (
            <div key={f.name} className={`fac-card reveal${vis ? ' in' : ''} rev-d${Math.min(i+1,6)}`}>
              <img src={f.img} alt={f.name} className="fac-img" />
              <div className="fac-overlay">
                <div className="fac-icon-bubble">{f.icon}</div>
                <div className="fac-name">{f.name}</div>
                <p className="fac-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
