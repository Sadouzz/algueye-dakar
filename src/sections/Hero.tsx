import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = titleRef.current
      if (!title) return

      // Split title into chars manually
      const text = title.textContent || ''
      title.innerHTML = text.split('').map(c =>
        `<span class="char" style="display:inline-block;will-change:transform,opacity">${c === ' ' ? '&nbsp;' : c}</span>`
      ).join('')

      const chars = title.querySelectorAll('.char')
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(overlayRef.current, { opacity: 1, duration: 0.01 })
        .from(chars, {
          opacity: 0,
          y: 80,
          rotationX: -90,
          stagger: 0.045,
          duration: 1.2,
          ease: 'power4.out',
        })
        .from(subRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5')
        .from(ctaRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6')
        .from(scrollRef.current, {
          opacity: 0,
          duration: 0.6,
        }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" style={heroStyle}>
      {/* Background gradient */}
      <div style={bgGradient} />

      {/* Animated gradient orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Gold grid lines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />

      {/* Content */}
      <div ref={overlayRef} style={contentWrap}>
        {/* Label */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--gold)', textTransform: 'uppercase', borderTop: '1px solid var(--gold)', borderBottom: '1px solid var(--gold)', padding: '0.4rem 1.5rem' }}>
            Maison de Mode de Luxe · Dakar
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="hero-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            fontWeight: 300,
            letterSpacing: '0.15em',
            lineHeight: 0.9,
            color: 'var(--white)',
            textAlign: 'center',
            textTransform: 'uppercase',
            perspectiveOrigin: 'center',
            perspective: '800px',
          }}
        >
          ALGUEYE
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            color: 'var(--gold)',
            textAlign: 'center',
            letterSpacing: '0.1em',
            marginTop: '1.5rem',
          }}
        >
          Dakar. Afrique. Le Monde.
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <Link to="/collections" className="btn-gold">
            <span>Découvrir la Collection</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/a-propos" className="btn-outline">
            <span>Notre Histoire</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>Défiler</span>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'pulse-line 1.8s ease-in-out infinite' }} />
        <style>{`@keyframes pulse-line { 0%,100%{opacity:0.3;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }`}</style>
      </div>
    </section>
  )
}

const heroStyle: React.CSSProperties = {
  position: 'relative',
  height: '100dvh',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: 'var(--black)',
}

const bgGradient: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, var(--black) 70%)',
  pointerEvents: 'none',
}

const contentWrap: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: '0 var(--gutter)',
  width: '100%',
}
