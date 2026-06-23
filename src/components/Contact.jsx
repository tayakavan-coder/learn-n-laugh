import { useReveal } from '../hooks'

const ITEMS = [
  { icon: '📍', title: 'Visit Us',      text: 'No:16,North Street,Old Saram\n(Near Water Tank),Puducherry-605 013.' },
  { icon: '📞', title: 'Call Us',       text: '+91 7010034228\n+91 7070294012'                        },
  { icon: '✉️', title: 'Email Us',      text: '\ninfo@learnnlaugh.edu'             },
  { icon: '⏰', title: 'School Hours',  text: 'Mon – Fri: 9:00 AM – 7:00 PM\nSaturday: 9:00 AM – 2:00 PM' },
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
            Have questions about admissions, curriculum, or campus life? Welcome! Our team is always happy to help.
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
               <iframe
              src="https://www.google.com/maps?q=Learn%20N%20Laugh%20Kids%20Academy&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
             ></iframe>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
