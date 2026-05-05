import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'

const products: Record<string, { name: string; price: string; tag: string; desc: string; story: string; sizes: string[]; color: string }> = {
  '1': { name: 'Robe Médina', price: '185 000', tag: 'FEMME', color: 'Or & Noir', desc: 'Silhouette sculpturale, tissus précieux, féminité africaine sublimée.', story: 'Inspirée des ruelles dorées de la Médina de Dakar, cette robe capture l\'âme d\'un quartier où tradition et modernité se rencontrent. Chaque couture est un hommage à l\'artisanat sénégalais.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  '2': { name: 'Boubou Royal', price: '220 000', tag: 'HOMME', color: 'Ivoire & Noir', desc: 'Boubou contemporain, coupe royale, tissu brodé à la main.', story: 'Le Boubou Royal NARU GOOR réinterprète la tenue traditionnelle africaine avec une coupe contemporaine. Broderies faites à la main par des artisans dakarois, tissu noble sélectionné avec soin.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  '3': { name: 'Ensemble Sahel', price: '160 000', tag: 'FEMME', color: 'Bordeaux & Or', desc: 'Ensemble deux pièces, inspiration sahélienne, broderies dorées.', story: 'Du Sahel à la scène internationale, cet ensemble incarne le voyage d\'une femme africaine libre et élégante. Coloris inspirés des couchers de soleil sur le fleuve Sénégal.', sizes: ['XS', 'S', 'M', 'L'] },
  '4': { name: 'Kaftan Prestige', price: '195 000', tag: 'HOMME', color: 'Blanc & Or', desc: 'Kaftan de prestige, col brodé, pour événements d\'exception.', story: 'Le Kaftan Prestige est la pièce maîtresse de la collection NARU GOOR. Conçu pour les événements les plus importants, il allie majesté traditionnelle et rigueur contemporaine.', sizes: ['S', 'M', 'L', 'XL'] },
  '5': { name: 'Tenue Teranga', price: '175 000', tag: 'FEMME', color: 'Or & Sable', desc: 'La chaleur de l\'hospitalité sénégalaise dans une tenue.', story: 'Teranga — l\'hospitalité sénégalaise — inspire chaque détail de cette tenue. Portez la générosité et la chaleur de Dakar partout où vous allez.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  '6': { name: 'Costume Dakar', price: '210 000', tag: 'HOMME', color: 'Noir & Or', desc: 'Costume trois pièces, coupe slim, finitions dorées.', story: 'Le Costume Dakar est le symbole de l\'homme NARU GOOR : fort, élégant, ancré dans son identité africaine tout en maîtrisant les codes de l\'élégance internationale.', sizes: ['S', 'M', 'L', 'XL'] },
}

const relatedIds = ['1', '2', '3', '4', '5', '6']

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const product = products[id || '1']
  const [selectedSize, setSelectedSize] = useState('')
  const [added, setAdded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [id])

  if (!product) return <div style={{ padding: '10rem', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>Produit introuvable</div>

  const related = relatedIds.filter(rid => rid !== id).slice(0, 4)

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>
      <div ref={contentRef} className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>

          {/* Galerie Gauche */}
          <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 2rem)' }}>
            <div style={{
              aspectRatio: '4/5',
              background: `linear-gradient(140deg, #1a1208 0%, #0a0806 50%, #201808 100%)`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(201,168,76,0.12) 0%, transparent 65%)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.8rem', color: 'rgba(201,168,76,0.3)', textAlign: 'center', padding: '0 2rem' }}>{product.name}</p>
                <div style={{ width: '60px', height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase' }}>Algueye · {product.color}</p>
              </div>
              {/* Gold border */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', bottom: '1rem', border: '1px solid rgba(201,168,76,0.15)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', letterSpacing: '0.25em', color: 'var(--gold)', border: '1px solid var(--border)', padding: '0.2rem 0.6rem', textTransform: 'uppercase' }}>{product.tag}</span>
              </div>
            </div>
          </div>

          {/* Détails Droite */}
          <div>
            <Link to="/collections" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', transition: 'color 0.3s' }}>
              ← Collections
            </Link>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{product.tag} · {product.color}</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '0.02em', marginBottom: '1rem' }}>{product.name}</h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', marginBottom: '0.5rem' }}>{product.price} FCFA</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Livraison planifiée · Délais respectés</p>

            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '2.5rem' }}>{product.desc}</p>

            {/* Sizes */}
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Taille {selectedSize && `— ${selectedSize} sélectionné`}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: '48px', height: '48px',
                      border: `1px solid ${selectedSize === size ? 'var(--gold)' : 'var(--border)'}`,
                      background: selectedSize === size ? 'var(--gold)' : 'transparent',
                      color: selectedSize === size ? 'var(--black)' : 'var(--white)',
                      fontFamily: 'var(--font-sans)', fontSize: '0.7rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                  >{size}</button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                className="btn-gold"
                style={{ flex: 1, minWidth: '200px', justifyContent: 'center' }}
                onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 3000) }}
              >
                <span>{added ? '✓ Ajouté au panier' : 'Commander'}</span>
              </button>
              <a href="https://wa.me/221700000000" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Story */}
            <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>L'Histoire de la Pièce</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>{product.story}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '6rem' }}>
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>Vous aimerez aussi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5px', background: 'var(--border)' }}>
            {related.map(rid => {
              const rp = products[rid]
              if (!rp) return null
              return (
                <Link key={rid} to={`/produit/${rid}`} style={{ display: 'block', background: 'var(--black)' }}>
                  <div style={{ aspectRatio: '1/1', background: `linear-gradient(${140 + parseInt(rid) * 20}deg, #1a1208 0%, #0a0806 50%, #201808 100%)`, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 65%)' }} />
                    <div style={{ position: 'absolute', bottom: '1.2rem', left: '1rem', right: '1rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--white)', marginBottom: '0.2rem' }}>{rp.name}</h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--gold)' }}>{rp.price} FCFA</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
