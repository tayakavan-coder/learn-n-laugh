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
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7806.938186612713!2d79.81194287510603!3d11.941989588286715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53613f7b7fcbfd%3A0x538d6d8bd7718dd7!2sLearn%20'N%20Laugh%20Kids%20Academy!5e0!3m2!1sen!2sin!4v1782023965635!5m2!1sen!2sin"
                 width="100%"
                 height="350"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
