import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: 'commande', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { opacity: 0, y: 40, duration: 1, ease: 'power3.out' })
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const updateForm = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>
      {/* Header */}
      <div ref={headerRef} style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span>Nous contacter</span></div>
          <h1 className="section-title">Contact</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            Communication directe. Réponse en 24h.
          </p>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }}>

          {/* Left — Info */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}><span>Coordonnées</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: 'Adresse', value: 'Dakar, Sénégal\nAfrique de l\'Ouest' },
                  { label: 'Email', value: 'contact@algueye.com' },
                  { label: 'WhatsApp', value: '+221 70 000 00 00' },
                  { label: 'Délai de réponse', value: 'Sous 24 heures' },
                ].map(item => (
                  <div key={item.label} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.label}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map placeholder */}
            <div style={{ aspectRatio: '4/3', background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--gold)', margin: '0 auto 0.75rem', boxShadow: '0 0 20px rgba(201,168,76,0.6)' }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Dakar, Sénégal</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>14.6928° N, 17.4467° W</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '3rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--gold)', marginBottom: '1rem' }}>Message envoyé.</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nous vous répondrons sous 24 heures. Merci de votre confiance en Algueye.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
                <div style={{ background: 'var(--surface)', padding: '0.5rem' }}>
                  <label style={labelStyle}>Nom complet *</label>
                  <input type="text" value={form.name} onChange={e => updateForm('name', e.target.value)} required placeholder="Votre nom" style={inputStyle} />
                </div>
                <div style={{ background: 'var(--surface)', padding: '0.5rem' }}>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" value={form.email} onChange={e => updateForm('email', e.target.value)} required placeholder="votre@email.com" style={inputStyle} />
                </div>
                <div style={{ background: 'var(--surface)', padding: '0.5rem' }}>
                  <label style={labelStyle}>Objet *</label>
                  <select value={form.subject} onChange={e => updateForm('subject', e.target.value)} style={{ ...inputStyle, background: 'var(--surface)' }}>
                    <option value="commande">Commande</option>
                    <option value="evenement">Événement</option>
                    <option value="presse">Presse & Médias</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div style={{ background: 'var(--surface)', padding: '0.5rem' }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea value={form.message} onChange={e => updateForm('message', e.target.value)} required placeholder="Votre message..." rows={6} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-gold" style={{ margin: '0', justifyContent: 'center', width: '100%', background: 'var(--surface)' }}>
                  <span style={{ color: 'var(--gold)' }}>Envoyer le Message</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}

            {!submitted && (
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/221700000000" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ flex: 1, justifyContent: 'center', minWidth: '160px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span>WhatsApp Direct</span>
                </a>
                <a href="mailto:contact@algueye.com" className="btn-outline" style={{ flex: 1, justifyContent: 'center', minWidth: '160px' }}>
                  <span>Email Direct</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.55rem',
  letterSpacing: '0.2em',
  color: 'var(--gold)',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
  paddingLeft: '0.75rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  padding: '0.75rem',
  color: 'var(--white)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.3s',
}
