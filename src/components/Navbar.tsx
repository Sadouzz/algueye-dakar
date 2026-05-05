import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: 'Collections', href: '/collections', i18n: 'collections' },
  { label: 'Naru Goor', href: '/collections/naru-goor', i18n: 'naru-goor' },
  { label: 'Événements', href: '/evenements', i18n: 'evenements' },
  { label: 'À Propos', href: '/a-propos', i18n: 'a-propos' },
  { label: 'Contact', href: '/contact', i18n: 'contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const lastY = useRef(0)

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const handleScroll = () => {
      const currentY = window.scrollY
      const dir = currentY > lastY.current ? 1 : -1
      setScrolled(currentY > 50)

      if (currentY < 100) {
        nav.style.transform = 'translateY(0)'
      } else {
        nav.style.transform = dir === 1 ? 'translateY(-100%)' : 'translateY(0)'
      }
      lastY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav ref={navRef} style={navStyle(scrolled)}>
        <div style={navInner}>
          {/* Logo */}
          <Link to="/" style={logoStyle}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500, letterSpacing: '0.25em', color: 'var(--white)' }}>ALGUEYE</span>
            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: '1px' }}>Dakar · Afrique · Le Monde</span>
          </Link>

          {/* Desktop Links */}
          <ul style={linkList}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-i18n={link.i18n}
                  style={{
                    ...linkStyle,
                    color: location.pathname === link.href ? 'var(--gold)' : 'var(--white)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = location.pathname === link.href ? 'var(--gold)' : 'var(--white)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/collections" className="btn-gold" style={{ fontSize: '0.6rem', padding: '0.65rem 1.5rem' }}>
            <span>Commander</span>
          </Link>

          {/* Burger */}
          <button
            id="burger-menu"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            style={burgerStyle}
          >
            <span style={{ ...burgerLine, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ ...burgerLine, opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }} />
            <span style={{ ...burgerLine, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div style={{ ...overlayStyle, opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none' }}>
        <nav>
          <ul style={{ listStyle: 'none', textAlign: 'center' }}>
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ transform: `translateY(${menuOpen ? 0 : 30}px)`, opacity: menuOpen ? 1 : 0, transition: `all 0.5s var(--ease-expo) ${i * 0.07}s` }}>
                <Link
                  to={link.href}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: 'var(--white)', letterSpacing: '0.08em', display: 'block', padding: '0.5rem 0' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ position: 'absolute', bottom: '3rem', textAlign: 'center', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Dakar · Afrique · Le Monde</p>
        </div>
      </div>
    </>
  )
}

const navStyle = (scrolled: boolean): React.CSSProperties => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  height: 'var(--nav-h)',
  backgroundColor: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
  backdropFilter: scrolled ? 'blur(12px)' : 'none',
  borderBottom: scrolled ? '1px solid var(--border)' : 'none',
  transition: 'background 0.5s var(--ease-expo), border 0.5s, transform 0.5s var(--ease-expo)',
  willChange: 'transform',
})

const navInner: React.CSSProperties = {
  maxWidth: 'var(--container)',
  margin: '0 auto',
  padding: '0 var(--gutter)',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
}

const logoStyle: React.CSSProperties = {
  display: 'block',
  flexShrink: 0,
}

const linkList: React.CSSProperties = {
  display: 'flex',
  listStyle: 'none',
  gap: '2.5rem',
  alignItems: 'center',
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.7rem',
  fontWeight: 400,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  transition: 'color 0.3s',
}

const burgerStyle: React.CSSProperties = {
  display: 'none',
  flexDirection: 'column',
  gap: '5px',
  padding: '8px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1001,
}

const burgerLine: React.CSSProperties = {
  display: 'block',
  width: '24px',
  height: '1.5px',
  background: 'var(--white)',
  transition: 'all 0.35s var(--ease-expo)',
  transformOrigin: 'center',
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 998,
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.5s var(--ease-expo)',
}
