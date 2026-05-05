import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const naruProducts = [
  { id: '2', name: 'Boubou Royal', price: '220 000', desc: 'Majesté et tradition' },
  { id: '4', name: 'Kaftan Prestige', price: '195 000', desc: 'Modernité africaine' },
  { id: '6', name: 'Costume Dakar', price: '210 000', desc: 'Élégance urbaine' },
]

export default function NaruGoor() {
  const sectionRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      tl.from(logoRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power4.out',
      })
        .from(taglineRef.current, {
          opacity: 0,
          y: 25,
          duration: 0.9,
          ease: 'power3.out',
        }, '-=0.6')
        .from(cardsRef.current, {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="naru-goor" className="section" style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #0d0d0d 0%, #000 100%)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo / Brand reveal */}
        <div ref={logoRef} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '60px', height: '1px', background: 'var(--white)' }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Collection Masculine</span>
            <div style={{ width: '60px', height: '1px', background: 'var(--white)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 300, letterSpacing: '0.2em', color: 'var(--white)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            NARU<br /><span style={{ fontSize: '0.7em', color: 'var(--text-muted)' }}>GOOR</span>
          </h2>
        </div>

        <p ref={taglineRef} style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', marginBottom: '3rem' }}>
          "La collection masculine. Force. Élégance. Héritage."
        </p>

        {/* Tagline pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {['Force', 'Élégance', 'Héritage', 'Identité Africaine'].map(tag => (
            <span key={tag} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.12)', padding: '0.4rem 1.2rem' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Products */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '3rem' }}>
          {naruProducts.map((p, i) => (
            <div key={p.id} ref={el => { if (el) cardsRef.current[i] = el }} style={{ background: '#050505', position: 'relative' }}>
              <Link to={`/produit/${p.id}`} style={{ display: 'block' }}>
                <div style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden', background: `linear-gradient(${140 + i * 20}deg, #0d0d0d 0%, #060606 60%, #111 100%)` }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '2rem', left: '1.5rem', right: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Naru Goor</p>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.3rem' }}>{p.name}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{p.desc}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--white)' }}>{p.price} FCFA</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/collections/naru-goor" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--white)' }}>
            <span>Explorer Naru Goor</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
