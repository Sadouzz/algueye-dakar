import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const allProducts = [
  { id: '1', name: 'Robe Médina', price: '185 000', tag: 'FEMME', category: 'femme', color: 'Or & Noir' },
  { id: '2', name: 'Boubou Royal', price: '220 000', tag: 'HOMME', category: 'naru-goor', color: 'Ivoire & Noir' },
  { id: '3', name: 'Ensemble Sahel', price: '160 000', tag: 'FEMME', category: 'femme', color: 'Bordeaux & Or' },
  { id: '4', name: 'Kaftan Prestige', price: '195 000', tag: 'HOMME', category: 'naru-goor', color: 'Blanc & Or' },
  { id: '5', name: 'Tenue Teranga', price: '175 000', tag: 'FEMME', category: 'femme', color: 'Or & Sable' },
  { id: '6', name: 'Costume Dakar', price: '210 000', tag: 'HOMME', category: 'naru-goor', color: 'Noir & Or' },
  { id: '7', name: 'Robe Gorée', price: '198 000', tag: 'ÉVÉNEMENT', category: 'evenement', color: 'Or & Blanc' },
  { id: '8', name: 'Tenue Nuit de Dakar', price: '245 000', tag: 'ÉVÉNEMENT', category: 'evenement', color: 'Noir & Or' },
]

const filters = [
  { id: 'all', label: 'Tout' },
  { id: 'femme', label: 'Femme Algueye' },
  { id: 'naru-goor', label: 'Homme — Naru Goor' },
  { id: 'evenement', label: 'Événements' },
]

export default function Collections() {
  const { category } = useParams<{ category?: string }>()
  const [activeFilter, setActiveFilter] = useState(category || 'all')
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = activeFilter === 'all' ? allProducts : allProducts.filter(p => p.category === activeFilter)

  useEffect(() => {
    setActiveFilter(category || 'all')
  }, [category])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return
      const cards = gridRef.current.querySelectorAll('.col-card')
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [activeFilter])

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>
      {/* Header */}
      <div ref={headerRef} style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span>Maison Algueye</span>
          </div>
          <h1 className="section-title">Collections</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            Mode Intemporelle. Identité Africaine.
          </p>
        </div>
      </div>

      <div className="container section">
        {/* Filters */}
        <div style={{ display: 'flex', gap: '1px', background: 'var(--border)', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                flex: 1,
                minWidth: '140px',
                padding: '0.9rem 1.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                background: activeFilter === f.id ? 'var(--gold)' : 'var(--surface)',
                color: activeFilter === f.id ? 'var(--black)' : 'var(--text-muted)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s, color 0.3s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5px', background: 'var(--border)' }}>
          {filtered.map((product) => (
            <div key={product.id} className="col-card" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
              <Link to={`/produit/${product.id}`} style={{ display: 'block' }}>
                <div style={{ aspectRatio: '3/4', position: 'relative', background: `linear-gradient(${130 + parseInt(product.id) * 15}deg, #1a1208 0%, #0a0806 50%, #1c1409 100%)` }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(201,168,76,0.1) 0%, transparent 65%)' }} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.48rem', letterSpacing: '0.25em', color: 'var(--gold)', border: '1px solid var(--border)', padding: '0.2rem 0.5rem', textTransform: 'uppercase' }}>
                      {product.tag}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.2rem', right: '1.2rem' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{product.color}</p>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.25rem' }}>{product.name}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--gold)' }}>{product.price} FCFA</p>
                  </div>

                  {/* Hover overlay */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', opacity: 0, transition: 'opacity 0.3s' }} className="col-hover">
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--black)', background: 'var(--gold)', padding: '0.6rem 1.2rem', textTransform: 'uppercase' }}>Voir le produit</span>
                  </div>
                </div>
              </Link>
              <style>{`.col-card:hover .col-hover { opacity: 1 !important; }`}</style>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
            Aucun produit dans cette catégorie pour le moment.
          </div>
        )}
      </div>
    </div>
  )
}
