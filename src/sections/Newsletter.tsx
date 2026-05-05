import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <section ref={sectionRef} style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span>Univers Algueye</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Rejoindre l'Univers<br /><em style={{ color: 'var(--gold)' }}>Algueye</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Recevez en avant-première nos nouvelles collections, invitations exclusives et actualités de la maison.
          </p>

          {submitted ? (
            <div style={{ padding: '2rem', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--gold)' }}>Bienvenue dans l'univers Algueye.</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Vous recevrez nos communications exclusives sous peu.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '0', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRight: 'none', padding: '1rem 1.5rem', color: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}
                />
                <button type="submit" className="btn-gold" style={{ flexShrink: 0 }}>
                  <span>S'abonner</span>
                </button>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                En vous inscrivant, vous acceptez notre politique de confidentialité. Désabonnement à tout moment.
              </p>
            </form>
          )}

          {/* Promises */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
            {[
              { icon: '⏱', title: 'Réponse 24h', desc: 'Communication directe et rapide' },
              { icon: '🚚', title: 'Délais maîtrisés', desc: 'Livraison planifiée, respectée' },
              { icon: '✦', title: 'Satisfaction garantie', desc: 'Service premium, qualité d\'exception' },
            ].map(item => (
              <div key={item.title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', filter: 'grayscale(1) brightness(0.8)' }}>{item.icon}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.title}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
