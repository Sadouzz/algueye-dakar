import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const collections = [
  {
    id: 'femme',
    title: 'FEMME',
    subtitle: 'ALGUEYE',
    desc: 'Silhouettes sculpturales, tissus précieux, féminité africaine sublimée.',
    href: '/collections/femme',
    accent: 'var(--gold)',
    bg: 'linear-gradient(160deg, #1a1408 0%, #0d0a05 60%, #1c160a 100%)',
  },
  {
    id: 'homme',
    title: 'HOMME',
    subtitle: 'NARU GOOR',
    desc: 'Force. Élégance. Héritage masculin africain contemporain.',
    href: '/collections/naru-goor',
    accent: 'var(--white)',
    bg: 'linear-gradient(160deg, #0d0d0d 0%, #080808 60%, #111 100%)',
  },
  {
    id: 'events',
    title: 'ÉVÉNEMENTS',
    subtitle: 'ALGUEYE',
    desc: 'Tenues d\'exception pour vos moments les plus précieux.',
    href: '/evenements',
    accent: 'var(--gold)',
    bg: 'linear-gradient(160deg, #13100a 0%, #0a0806 60%, #181209 100%)',
  },
]

export default function CollectionsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 70,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--black)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span>Explorer</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '0' }}>Nos Collections</h2>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--border)' }}>
          {collections.map((col, i) => (
            <div
              key={col.id}
              ref={el => { if (el) cardsRef.current[i] = el }}
              style={{ background: 'var(--black)', position: 'relative' }}
            >
              <Link to={col.href} style={{ display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
                {/* BG */}
                <div style={{ position: 'absolute', inset: 0, background: col.bg, transition: 'transform 0.7s var(--ease-expo)' }} className="card-bg" />

                {/* Gold Orb */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 35%, rgba(201,168,76,0.12) 0%, transparent 65%)', transition: 'opacity 0.5s' }} />

                {/* Hover overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', opacity: 0, transition: 'opacity 0.4s' }} className="card-overlay" />

                {/* Content */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem 2rem' }}>
                  <div style={{ transform: 'translateY(0)', transition: 'transform 0.5s var(--ease-expo)' }} className="card-text">
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.35em', color: col.accent, textTransform: 'uppercase', marginBottom: '0.5rem', opacity: 0.8 }}>
                      {col.subtitle}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '0.1em', color: 'var(--white)', lineHeight: 1 }}>
                      {col.title}
                    </h3>
                    <div style={{ width: '40px', height: '1px', background: col.accent, margin: '1rem 0', transition: 'width 0.4s var(--ease-expo)' }} className="card-line" />
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '240px', opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.4s 0.1s, transform 0.4s var(--ease-expo) 0.1s' }} className="card-desc">
                      {col.desc}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', color: col.accent, textTransform: 'uppercase', opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.4s 0.15s, transform 0.4s var(--ease-expo) 0.15s' }} className="card-cta">
                      Explorer →
                    </span>
                  </div>
                </div>
              </Link>

              <style>{`
                div:has(> a):hover .card-bg { transform: scale(1.04); }
                div:has(> a):hover .card-overlay { opacity: 1; }
                div:has(> a):hover .card-line { width: 70px; }
                div:has(> a):hover .card-desc { opacity: 1; transform: translateY(0); }
                div:has(> a):hover .card-cta { opacity: 1; transform: translateY(0); }
                @media (max-width:768px) {
                  div[style*="grid-template-columns: repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
