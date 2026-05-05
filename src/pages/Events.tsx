import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const allEvents = [
  { id: '1', date: '2026-06-15', dateLabel: '15 Juin 2026', location: 'Dakar, Sénégal', name: 'Défilé Algueye SS26', desc: 'Présentation de la collection Printemps-Été 2026 au Musée des Civilisations Noires.', upcoming: true, type: 'Défilé' },
  { id: '2', date: '2026-07-22', dateLabel: '22 Juillet 2026', location: 'Abidjan, Côte d\'Ivoire', name: 'Algueye x FIMA', desc: 'Participation au Festival International de la Mode Africaine — édition 2026.', upcoming: true, type: 'Festival' },
  { id: '3', date: '2026-10-05', dateLabel: '5 Octobre 2026', location: 'Paris, France', name: 'Naru Goor — Présentation Paris', desc: 'Présentation exclusive de la collection masculine NARU GOOR à la semaine de la mode.', upcoming: true, type: 'Présentation' },
  { id: '4', date: '2025-11-20', dateLabel: '20 Novembre 2025', location: 'Dakar, Sénégal', name: 'Lancement NARU GOOR', desc: 'Lancement officiel de la collection masculine NARU GOOR à Dakar.', upcoming: false, type: 'Lancement' },
  { id: '5', date: '2025-09-10', dateLabel: '10 Septembre 2025', location: 'Lagos, Nigeria', name: 'Lagos Fashion Week', desc: 'Présentation Algueye à la Lagos Fashion Week — succès retentissant.', upcoming: false, type: 'Fashion Week' },
]

export default function Events() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all')
  const itemsRef = useRef<HTMLDivElement[]>([])

  const filtered = allEvents.filter(e => filter === 'all' ? true : filter === 'upcoming' ? e.upcoming : !e.upcoming)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { opacity: 0, y: 40, duration: 1, ease: 'power3.out' })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current.length) {
        gsap.from(itemsRef.current.filter(Boolean), {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
        })
      }
    })
    return () => ctx.revert()
  }, [filter])

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>
      {/* Header */}
      <div ref={headerRef} style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span>Agenda</span></div>
          <h1 className="section-title">Événements & Expériences</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-muted)', marginTop: '1rem' }}>Dakar · Afrique · Le Monde</p>
        </div>
      </div>

      <div className="container section">
        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {([['all', 'Tous'], ['upcoming', 'À venir'], ['past', 'Passés']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                padding: '0.65rem 1.5rem',
                fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                background: filter === key ? 'var(--gold)' : 'transparent',
                color: filter === key ? 'var(--black)' : 'var(--text-muted)',
                border: `1px solid ${filter === key ? 'var(--gold)' : 'var(--border)'}`,
                cursor: 'pointer', transition: 'all 0.3s',
              }}
            >{label}</button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '1px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />

          {filtered.map((ev, i) => (
            <div
              key={ev.id}
              ref={el => { if (el) itemsRef.current[i] = el }}
              style={{ position: 'relative', paddingBottom: '3rem', paddingLeft: '2.5rem' }}
            >
              {/* Dot */}
              <div style={{ position: 'absolute', left: '-2.5rem', top: '0.35rem', width: '10px', height: '10px', borderRadius: '50%', background: ev.upcoming ? 'var(--gold)' : 'var(--text-muted)', border: `2px solid ${ev.upcoming ? 'var(--gold)' : 'transparent'}`, boxShadow: ev.upcoming ? '0 0 12px rgba(201,168,76,0.5)' : 'none' }} />

              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.2em', color: ev.upcoming ? 'var(--gold)' : 'var(--text-muted)', border: `1px solid ${ev.upcoming ? 'var(--gold)' : 'var(--border)'}`, padding: '0.2rem 0.6rem', textTransform: 'uppercase' }}>{ev.type}</span>
                      {ev.upcoming && <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--black)', background: 'var(--gold)', padding: '0.2rem 0.6rem', textTransform: 'uppercase' }}>À VENIR</span>}
                    </div>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.3rem' }}>{ev.name}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{ev.dateLabel} · {ev.location}</p>
                  </div>
                  {ev.upcoming && (
                    <button className="btn-outline" style={{ flexShrink: 0 }}><span>S'inscrire</span></button>
                  )}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
