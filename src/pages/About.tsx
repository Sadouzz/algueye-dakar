import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { num: '01', title: 'Élégance Intemporelle', desc: 'Chaque création transcende les tendances. Nous concevons pour l\'éternité, pas pour la saison.' },
  { num: '02', title: 'Artisanat Premium', desc: 'Nos artisans dakarois, héritiers de techniques séculaires, insufflent leur excellence dans chaque pièce.' },
  { num: '03', title: 'Identité Africaine', desc: 'L\'Afrique est notre source, notre cœur, notre fierté. Nous la portons au sommet de la mode mondiale.' },
  { num: '04', title: 'Service d\'Exception', desc: 'Communication directe, réponse en 24h, satisfaction garantie. Le luxe commence par l\'attention portée au client.' },
]

const team = [
  { name: 'Aicha Algueye', role: 'Fondatrice & Directrice Artistique', location: 'Dakar, Sénégal' },
  { name: 'Ibrahima Sow', role: 'Directeur Création — NARU GOOR', location: 'Dakar, Sénégal' },
  { name: 'Fatou Mbaye', role: 'Responsable Artisanat', location: 'Dakar, Sénégal' },
]

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { opacity: 0, y: 40, duration: 1, ease: 'power3.out' })
      sectionsRef.current.forEach(el => {
        if (!el) return
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>
      {/* Header */}
      <div ref={headerRef} style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}><span>Notre Maison</span></div>
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Née à Dakar,<br /><em style={{ color: 'var(--gold)' }}>Portée Partout.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
            Algueye est une maison de mode de luxe fondée à Dakar. Nous croyons en une élégance africaine contemporaine, ancrée dans l'identité et rayonnant vers le monde.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <div ref={el => { if (el) sectionsRef.current[0] = el }} className="section">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}><span>Notre Histoire</span></div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>La Vision d'Algueye</h2>
            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2.5rem', width: '60px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                'Algueye est née d\'une conviction profonde : la mode africaine mérite sa place au sommet de la mode mondiale. Non pas en imitant les maisons occidentales, mais en affirmant avec force et élégance l\'identité africaine.',
                'Fondée à Dakar en 2020, la maison s\'est rapidement imposée comme une référence de l\'élégance africaine contemporaine. Nos créations mêlent savoir-faire artisanal traditionnel et vision design moderne.',
                'En 2023, nous avons lancé NARU GOOR, notre collection masculine dédiée à l\'homme africain fort, élégant, fier de son héritage. Naru Goor, c\'est "l\'homme vrai" en wolof — celui qui porte son identité comme sa plus belle parure.',
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

        {/* Values */}
        <div ref={el => { if (el) sectionsRef.current[1] = el }} className="section">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}><span>Nos Valeurs</span></div>
          <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>Ce Qui Nous Guide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5px', background: 'var(--border)' }}>
            {values.map(val => (
              <div key={val.num} style={{ background: 'var(--surface)', padding: '2.5rem', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'rgba(201,168,76,0.2)', lineHeight: 1, marginBottom: '1.2rem' }}>{val.num}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1rem' }}>{val.title}</h3>
                <div style={{ width: '30px', height: '1px', background: 'var(--gold)', marginBottom: '1rem' }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

        {/* Team */}
        <div ref={el => { if (el) sectionsRef.current[2] = el }} className="section">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}><span>L'Équipe</span></div>
          <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>Les Fondateurs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--border)' }}>
            {team.map(member => (
              <div key={member.name} style={{ background: 'var(--surface)', padding: '2.5rem', textAlign: 'center', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.05) 100%)', border: '1px solid var(--border)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--gold)' }}>{member.name.charAt(0)}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.4rem' }}>{member.name}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{member.role}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
