import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
  { id: '1', name: 'Robe Médina', price: '185 000', tag: 'FEMME', category: 'Algueye' },
  { id: '2', name: 'Boubou Royal', price: '220 000', tag: 'HOMME', category: 'Naru Goor' },
  { id: '3', name: 'Ensemble Sahel', price: '160 000', tag: 'FEMME', category: 'Algueye' },
  { id: '4', name: 'Kaftan Prestige', price: '195 000', tag: 'HOMME', category: 'Naru Goor' },
  { id: '5', name: 'Tenue Teranga', price: '175 000', tag: 'FEMME', category: 'Algueye' },
  { id: '6', name: 'Costume Dakar', price: '210 000', tag: 'HOMME', category: 'Naru Goor' },
]

// Abstract pattern backgrounds for each product
const productBgs = [
  'linear-gradient(135deg, #1a1208 0%, #0d0b06 50%, #201808 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #080808 50%, #141414 100%)',
  'linear-gradient(135deg, #130f08 0%, #0b0906 50%, #1c1409 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #060606 50%, #111 100%)',
  'linear-gradient(135deg, #181008 0%, #0e0b05 50%, #1a1208 100%)',
  'linear-gradient(135deg, #0f0f0f 0%, #080808 50%, #151515 100%)',
]

export default function SignaturePieces() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (elements) => {
          gsap.from(elements, {
            opacity: 0,
            y: 60,
            stagger: 0.12,
            duration: 0.9,
            ease: 'power3.out',
          })
        },
        start: 'top 85%',
        once: true,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>La Sélection</div>
            <h2 className="section-title">Pièces Signature</h2>
          </div>
          <Link to="/collections" className="btn-outline" style={{ flexShrink: 0 }}>
            <span>Voir tout</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'var(--border)' }}>
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={el => { if (el) cardsRef.current[i] = el }}
              style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}
              className="product-card"
            >
              <Link to={`/produit/${product.id}`} style={{ display: 'block' }}>
                {/* Image zone */}
                <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', background: productBgs[i] }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(201,168,76,0.1) 0%, transparent 65%)' }} />

                  {/* Pattern */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent ${10 + i * 3}px)`,
                  }} />

                  {/* Product number */}
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Tag */}
                  <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '0.25rem 0.6rem' }}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Quick View overlay */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', opacity: 0, transition: 'opacity 0.35s' }} className="quick-view-overlay">
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--black)', textTransform: 'uppercase', background: 'var(--gold)', padding: '0.7rem 1.5rem' }}>
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div style={{ padding: '1.5rem 1.2rem' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {product.category}
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>
                    {product.price} FCFA
                  </p>
                </div>
              </Link>
              <style>{`.product-card:hover .quick-view-overlay { opacity: 1; }`}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
