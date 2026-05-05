import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TickerProps {
  items?: string[]
  speed?: number
}

const DEFAULT_ITEMS = ['ÉLÉGANCE', 'DAKAR', 'LUXE', 'ALGUEYE', 'NARU GOOR', 'AFRIQUE', 'STYLE', 'MODE', 'IDENTITÉ', 'HÉRITAGE']

export default function Ticker({ items = DEFAULT_ITEMS, speed = 30 }: TickerProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2
    animRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
    })

    // Pause on hover
    const parent = track.parentElement
    parent?.addEventListener('mouseenter', () => animRef.current?.pause())
    parent?.addEventListener('mouseleave', () => animRef.current?.play())

    return () => {
      animRef.current?.kill()
    }
  }, [speed])

  const doubled = [...items, ...items]

  return (
    <div
      style={{
        overflow: 'hidden',
        background: 'var(--surface-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.1rem 0',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <div ref={trackRef} style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2.5rem',
              padding: '0 2.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold-dark)', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
