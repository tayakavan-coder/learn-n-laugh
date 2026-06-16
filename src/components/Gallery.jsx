import { useState } from 'react'
import { useReveal } from '../hooks'

const IMGS = [
  { src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Children learning', wide: true },
  { src: 'https://images.pexels.com/photos/8617673/pexels-photo-8617673.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Art and craft' },
  { src: 'https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Outdoor play' },
  { src: 'https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Science activity' },
  { src: 'https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Annual celebration', wide: true },
  { src: 'https://images.pexels.com/photos/8613012/pexels-photo-8613012.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Sports day' },
]

export default function Gallery() {
  const [ref, vis] = useReveal()
  const [lb, setLb] = useState(null)

  const prev = () => setLb(l => (l - 1 + IMGS.length) % IMGS.length)
  const next = () => setLb(l => (l + 1) % IMGS.length)

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="container">
        <div className={`gallery-header reveal${vis ? ' in' : ''}`}>
          <div className="section-badge">📸 Event Gallery</div>
          <h2 className="section-title">Moments of <span className="gradient-text">Joy & Learning</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into the vibrant, colourful world of Learn'N Laugh — where every day is a new adventure.
          </p>
        </div>
        <div className="gallery-grid">
          {IMGS.map((img, i) => (
            <div
              key={i}
              className={`g-item${img.wide ? ' wide' : ''} reveal${vis ? ' in' : ''} rev-d${Math.min(i+1,6)}`}
              onClick={() => setLb(i)}
            >
              <img src={img.src} alt={img.alt} className="g-img" />
              <div className="g-overlay">🔍</div>
            </div>
          ))}
        </div>
      </div>

      {lb !== null && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <img src={IMGS[lb].src} alt={IMGS[lb].alt} className="lb-img" onClick={e => e.stopPropagation()} />
          <button className="lb-close" onClick={() => setLb(null)}>✕</button>
          <button className="lb-btn lb-prev" onClick={e => { e.stopPropagation(); prev() }}>‹</button>
          <button className="lb-btn lb-next" onClick={e => { e.stopPropagation(); next() }}>›</button>
        </div>
      )}
    </section>
  )
}
