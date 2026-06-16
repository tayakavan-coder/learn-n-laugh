import { useReveal } from '../hooks'

const ITEMS = [
  { icon: '📍', title: 'Visit Us',      text: '123 Sunshine Boulevard, Greenfield Park\nMetroCity, MC 45678' },
  { icon: '📞', title: 'Call Us',       text: '+1 (555) 123-4567\n+1 (555) 987-6543'                        },
  { icon: '✉️', title: 'Email Us',      text: 'admissions@learnnlaugh.edu\ninfo@learnnlaugh.edu'             },
  { icon: '⏰', title: 'School Hours',  text: 'Mon – Fri: 7:30 AM – 4:00 PM\nSaturday: 8:00 AM – 12:00 PM' },
]

export default function Contact() {
  const [ref, vis] = useReveal()
  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className={`reveal${vis ? ' in' : ''}`} style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge">📍 Contact Us</div>
          <h2 className="section-title">We'd Love to <span className="gradient-text">Hear From You</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have questions about admissions, curriculum, or campus life? Our team is always happy to help.
          </p>
        </div>
        <div className="contact-inner">
          <div className={`contact-cards reveal${vis ? ' in' : ''} rev-d1`}>
            {ITEMS.map(item => (
              <div key={item.title} className="ccard">
                <div className="ccard-icon">{item.icon}</div>
                <div>
                  <div className="ccard-title">{item.title}</div>
                  <p className="ccard-text" style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`reveal${vis ? ' in' : ''} rev-d2`}>
            <div className="map-box">
              <div className="map-inner">
                <span className="map-icon">🗺️</span>
                <h4>123 Sunshine Boulevard</h4>
                <p>Greenfield Park, MetroCity MC 45678</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
