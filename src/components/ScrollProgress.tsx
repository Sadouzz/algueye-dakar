import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const bar = barRef.current
      if (!bar) return
      const docH = document.documentElement.scrollHeight - window.innerHeight
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0
      bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', zIndex: 1000, background: 'rgba(255,255,255,0.05)' }}>
      <div ref={barRef} style={{ height: '100%', background: 'var(--gold)', width: '0%', transition: 'width 0.1s linear' }} />
    </div>
  )
}
