import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: 'Aminata Diallo',
    location: 'Dakar, Sénégal',
    rating: 5,
    text: 'Algueye a transformé ma façon de m\'habiller. Chaque pièce est une œuvre d\'art qui honore notre culture tout en restant d\'une modernité absolue.',
  },
  {
    id: 2,
    name: 'Moussa Traoré',
    location: 'Abidjan, Côte d\'Ivoire',
    rating: 5,
    text: 'La collection NARU GOOR est exceptionnelle. Je porte ces vêtements avec une fierté immense — c\'est la puissance de l\'élégance africaine.',
  },
  {
    id: 3,
    name: 'Fatou Sow',
    location: 'Paris, France (Diaspora)',
    rating: 5,
    text: 'Depuis Paris, Algueye me reconnecte à mes racines. La qualité est irréprochable, le service parfait. Communication en 24h comme promis.',
  },
  {
    id: 4,
    name: 'Ibrahima Ba',
    location: 'Lomé, Togo',
    rating: 5,
    text: 'J\'ai commandé pour un événement de prestige. La tenue était prête dans les délais, superbe. Algueye tient ses promesses.',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (i: number) => setActive((i + testimonials.length) % testimonials.length)

  useEffect(() => {
    autoRef.current = setInterval(() => goTo(active + 1), 5000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [active])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const t = testimonials[active]

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--surface-3)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span>Témoignages</span>
          </div>
          <h2 className="section-title">Ils Portent Algueye</h2>
        </div>

        <div ref={sliderRef} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '2rem' }}>
            {Array(t.rating).fill(0).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 300,
            color: 'var(--gold)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            transition: 'opacity 0.4s',
          }}>
            "{t.text}"
          </blockquote>

          {/* Author */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              {t.name}
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              {t.location}
            </p>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Témoignage ${i + 1}`}
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '3px',
                  background: i === active ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s var(--ease-expo)',
                  borderRadius: '2px',
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {[
              { dir: -1, label: 'Précédent', path: 'M19 12H5M12 19l-7-7 7-7' },
              { dir: 1, label: 'Suivant', path: 'M5 12h14M12 5l7 7-7 7' },
            ].map(btn => (
              <button
                key={btn.label}
                onClick={() => goTo(active + btn.dir)}
                aria-label={btn.label}
                style={{ width: '48px', height: '48px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', cursor: 'pointer', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.background = 'var(--muted)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d={btn.path} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
