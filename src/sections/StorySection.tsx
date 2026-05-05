import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
      gsap.from(textRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
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
    <section ref={sectionRef} className="section" style={{ background: 'var(--surface-2)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>

          {/* Image gauche */}
          <div ref={imgRef} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(160deg, #1a1208 0%, #0d0b06 40%, #1c1408 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Abstract fashion silhouette */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 60% 80% at 50% 40%, rgba(201,168,76,0.15) 0%, transparent 70%)' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '80px', height: '1px', background: 'var(--gold)', margin: '0 auto 2rem' }} />
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                  "L'Élégance Africaine<br />au Sommet du Monde"
                </p>
                <div style={{ width: '80px', height: '1px', background: 'var(--gold)', margin: '0 auto' }} />
              </div>
            </div>
            {/* Gold border accent */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', bottom: '1rem', border: '1px solid rgba(201,168,76,0.25)', pointerEvents: 'none' }} />
          </div>

          {/* Texte droit */}
          <div ref={textRef}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Notre Histoire</div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              Une vision<br /><em style={{ color: 'var(--gold)' }}>née à Dakar</em>
            </h2>
            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem', width: '60px' }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Algueye est une maison de mode de luxe fondée à Dakar. Chaque pièce est conçue pour révéler l'élégance africaine dans toute sa puissance, de la Médina aux capitales du monde.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Nous croyons en une mode intemporelle, ancrée dans l'identité africaine, portée par un artisanat d'exception. Chaque tissu, chaque coupe, chaque détail est un hommage à notre héritage.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
              {[['2020', 'Fondation'], ['100+', 'Créations'], ['30+', 'Pays']].map(([num, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{num}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '0.4rem' }}>{lbl}</p>
                </div>
              ))}
            </div>
            <a href="/a-propos" className="btn-outline">
              <span>Notre Story Complète</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
