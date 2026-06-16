import { useEffect, useState, useRef } from 'react'

const NAV = [
  { label: 'About',        href: '#about' },
  { label: 'Why Us',       href: '#why' },
  { label: 'Teachers',     href: '#teachers' },
  { label: 'Facilities',   href: '#facilities' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar({ onAdmit }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = NAV.map(n => n.href.slice(1)).reverse()
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo">
            <img src="/school-logo.jpg" alt="Learn'N Laugh" className="navbar-logo-img" />
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">Learn'N Laugh</span>
              <span className="navbar-logo-sub">Kids Academy</span>
            </div>
          </a>

          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n.href}>
                <a href={n.href} className={`nav-link${active === n.href.slice(1) ? ' active' : ''}`}>
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <button className="nav-apply" onClick={onAdmit}>Apply Now</button>
            </li>
          </ul>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setOpen(false)}>✕</button>
        <img src="/school-logo.jpg" alt="Logo" style={{ width: 72, height: 72, objectFit: 'contain', borderRadius: 16, background: 'white', padding: 4, marginBottom: 4 }} />
        {NAV.map(n => (
          <a key={n.href} href={n.href} className="nav-link" onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <button
          onClick={() => { setOpen(false); onAdmit() }}
          style={{ background: 'linear-gradient(135deg,#FF4FA3,#3B82F6)', color: 'white', border: 'none', borderRadius: '9999px', padding: '14px 38px', fontSize: 16, fontWeight: 800, cursor: 'pointer', marginTop: 4 }}
        >
          Apply Now 🎈
        </button>
      </div>
    </>
  )
}
