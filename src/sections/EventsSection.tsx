import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = [
  {
    id: '1',
    date: '15 Juin 2026',
    location: 'Dakar, Sénégal',
    name: 'Défilé Algueye SS26',
    desc: 'Présentation de la collection Printemps-Été 2026 au Musée des Civilisations Noires.',
  },
  {
    id: '2',
    date: '22 Juillet 2026',
    location: 'Abidjan, Côte d\'Ivoire',
    name: 'Algueye x FIMA',
    desc: 'Participation au Festival International de la Mode Africaine.',
  },
  {
    id: '3',
    date: '5 Octobre 2026',
    location: 'Paris, France',
    name: 'Naru Goor — Présentation Paris',
    desc: 'Présentation exclusive de la collection masculine NARU GOOR à la semaine de la mode.',
  },
]

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.9,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--black)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span>Agenda</span>
          </div>
          <h2 className="section-title">Événements & Expériences</h2>
        </div>

        {/* Event Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '4rem' }}>
          {events.map((ev, i) => (
            <div
              key={ev.id}
              ref={el => { if (el) cardsRef.current[i] = el }}
              style={{ background: 'var(--surface)', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: '180px 1fr auto', gap: '2rem', alignItems: 'center', transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--gold)', letterSpacing: '0.02em', marginBottom: '0.3rem' }}>{ev.date}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{ev.location}</p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>{ev.name}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{ev.desc}</p>
              </div>
              <button className="btn-outline" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span>S'inscrire</span>
              </button>
            </div>
          ))}
        </div>

        {/* Notification form */}
        <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Ne rien manquer</p>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.5rem' }}>Soyez notifié</h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Recevez les invitations en avant-première pour nos événements.</p>
          {submitted ? (
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--gold)' }}>✓ Vous serez notifié de nos prochains événements.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0', maxWidth: '400px', margin: '0 auto' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                style={{ flex: 1, background: 'var(--surface)', border: '1px solid var(--border)', borderRight: 'none', padding: '0.85rem 1.2rem', color: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem' }}
              />
              <button type="submit" className="btn-gold" style={{ flexShrink: 0 }}>
                <span>Notifier</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
