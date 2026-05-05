import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function KineticQuote() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const quote = "L'ÉLÉGANCE N'A PAS DE FRONTIÈRES"
  const repeated = Array(4).fill(quote).join(' · ')

  return (
    <section ref={sectionRef} style={{
      background: 'var(--black)',
      padding: '6rem 0',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div ref={textRef} style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 300,
          letterSpacing: '0.06em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.5)',
          textTransform: 'uppercase',
          paddingRight: '3rem',
          lineHeight: 1,
          userSelect: 'none',
        }}>
          {repeated}
        </span>
      </div>
    </section>
  )
}
