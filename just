# PROMPT AGENT VIBECODE — ALGUEYE × NARU GOOR
## Site Vitrine Luxe | Mode Dakar → Afrique → Monde

---

## IDENTITÉ DE MARQUE

**Marque principale :** ALGUEYE  
**Sous-marque masculine :** NARU GOOR (hommes uniquement)  
**Positionnement :** Maison de mode de luxe africaine, ancrée à Dakar, rayonnant vers l'Afrique et le monde  
**Valeurs :** Élégance intemporelle, artisanat premium, identité africaine contemporaine, maîtrise de la communication  
**Cibles :** Afrique en priorité (diaspora incluse), clientèle mondiale de luxe  

---

## PALETTE & TYPOGRAPHIE

**Couleurs :**  
- `#000000` Noir profond (dominante)  
- `#FFFFFF` Blanc pur  
- `#C9A84C` Or (accents, lignes, highlights)  
- `#8B6914` Or sombre (hover, profondeur)  
- Fond principal : noir  

**Typographies :**  
- Titres : serif élégant (ex. Cormorant Garamond, Playfair Display, ou PP Editorial)  
- Corps/labels : sans-serif fin (ex. Helvetica Neue Light, Futura Light, ou DM Sans)  
- Majuscules pour les sections majeures, tracking large (`letter-spacing: 0.15em`)  

---

## STACK TECHNIQUE

- **Framework :** React ts Tailwind
- **Animations :** GSAP 3 (ScrollTrigger, SplitText, Flip, MotionPath)  
- **Qualité animation :** Niveau Awwwards — fluide, intentionnel, jamais gratuit  
- **Fonts :** Google Fonts ou Adobe Fonts (Cormorant + DM Sans)  
- **Possibilité d'avoir du CSS Custom**  CSS custom  
- **Performance :** Lazy loading images, will-change sur les éléments animés, requestAnimationFrame  

---

## STRUCTURE DES PAGES

### 1. PAGE D'ACCUEIL ()

#### [HERO — FULLSCREEN]
- Vidéo ou image plein écran (16:9 ou portrait selon mobile)  
- Fond noir, overlay léger  
- Animation d'entrée : titre ALGUEYE révélé lettre par lettre avec GSAP SplitText  
- Sous-titre : *"Dakar. Afrique. Le Monde."*  
- CTA doré : `DÉCOUVRIR LA COLLECTION` → lien vers collections  
- Scroll indicator animé (ligne dorée qui pulse vers le bas)  

#### [TICKER / BANDEAU DÉFILANT]
- Texte en boucle infinie : `ÉLÉGANCE • DAKAR • LUXE • ALGUEYE • NARU GOOR • AFRIQUE • STYLE •`  
- Fond noir, texte doré, vitesse douce  
- GSAP infinite marquee  

#### [NOTRE HISTOIRE — 2 colonnes]
- Gauche : grande image portrait (modèle Sénégalais/Africain, tenue Algueye)  
- Droite : texte narratif de marque  
- Titre : *"Une vision née à Dakar"*  
- Texte : "Algueye est une maison de mode de luxe fondée à Dakar. Chaque pièce est conçue pour révéler l'élégance africaine dans toute sa puissance, de la Médina aux capitales du monde."  
- Animation : image slide-in depuis la gauche, texte fade-in depuis la droite (ScrollTrigger)  

#### [COLLECTIONS FEATURED — Grid 3 colonnes]
- Titre section : `NOS COLLECTIONS`  
- 3 cartes : **FEMME ALGUEYE | HOMME NARU GOOR | ÉVÉNEMENTS**  
- Chaque carte : image plein-fond, overlay noir au hover, texte doré, CTA  
- Animation hover : scale(1.03) + overlay fade + texte slide-up  
- Animation entrée scroll : stagger 0.15s depuis le bas  

#### [PRODUITS TENDANCE — Horizontal Scroll ou Grid]
- Titre : `PIÈCES SIGNATURE`  
- 4 à 8 produits en scroll horizontal (snap) ou grid 4 colonnes  
- Chaque carte produit :  
  - Image carrée fond noir  
  - Nom produit (uppercase serif)  
  - Prix (doré)  
  - Bouton QUICK VIEW au hover (fond doré, texte noir)  
- Animation : parallax léger sur les images au scroll  

#### [NARU GOOR — SECTION SOUS-MARQUE]
- Section dédiée, fond légèrement différent (noir texturé ou très sombre)  
- Logo NARU GOOR centré avec animation reveal  
- Tagline : *"La collection masculine. Force. Élégance. Héritage."*  
- CTA : `EXPLORER NARU GOOR`  
- 3 produits hommes en vedette  
- Ambiance plus sombre, plus minimaliste que Algueye femme  

#### [ÉVÉNEMENTS & COMMUNICATIONS]
- Titre : `ÉVÉNEMENTS & EXPÉRIENCES`  
- Cards d'événements : date, lieu, nom de l'event  
- Design sobre, typographie large, ligne dorée en séparateur  
- Formulaire d'inscription / notification event  
- Animation : cards en stagger fade + slide  

#### [MARQUEE PARALLAX — Citation de marque]
- Texte géant en scroll horizontal (effet kinétique) :  
  *"L'ÉLÉGANCE N'A PAS DE FRONTIÈRES"*  
- Fond noir, texte en stroke doré (text-stroke) ou plein  
- GSAP ScrollTrigger horizontal scrub  

#### [TÉMOIGNAGES — Slider]
- 4-6 avis clients (Afrique + diaspora)  
- Fond sombre, quote en serif doré, nom client blanc  
- Slider auto-play + navigation manuelle  
- Étoiles en doré  

#### [NEWSLETTER & PIED DE PAGE]
- Newsletter : "Rejoindre l'univers Algueye" + champ email + bouton doré  
- Footer : Liens rapides | Politique | Réseaux sociaux  
- Icônes réseaux : Instagram, TikTok, Facebook, WhatsApp  
- Copyright : `© 2026 Algueye. Tous droits réservés. Dakar, Sénégal.`  

---

### 2. PAGE COLLECTIONS ()
- Header full-width avec titre animé  
- Filtres : Femme | Homme (NARU GOOR) | Événement | Tout  
- Grid produits 3-4 colonnes responsive  
- Infinite scroll ou pagination  

### 3. PAGE PRODUIT ()
- Galerie images gauche (zoom hover)  
- Détails droite : nom, prix doré, description, taille, CTA noir/doré  
- Section "Description complète" avec storytelling de la pièce  
- Produits similaires en bas  

### 4. PAGE ÉVÉNEMENTS ()
- Timeline verticale des événements  
- Filtres passés / à venir  
- Cards détaillées : visuel, date, lieu Dakar ou international, description  

### 5. PAGE À PROPOS ()
- Histoire de la marque (Algueye + sous-marque NARU GOOR)  
- Valeurs, mission, vision Afrique  
- Équipe fondatrice  
- Engagements : qualité, délais maîtrisés, satisfaction client  

### 6. PAGE CONTACT ()
- Formulaire : Nom, Email, Objet (commande / événement / presse / autre), Message  
- Adresse Dakar, WhatsApp, Email  
- Carte Google Maps intégrée  

---

## ANIMATIONS GSAP — SPÉCIFICATIONS DÉTAILLÉES

```javascript
// 1. HERO TITLE REVEAL
gsap.from(".hero-title .char", {
  opacity: 0,
  y: 80,
  rotationX: -90,
  stagger: 0.05,
  duration: 1.2,
  ease: "power4.out",
  delay: 0.3
});

// 2. SCROLL TRIGGERED SECTIONS
ScrollTrigger.batch(".product-card", {
  onEnter: (elements) => gsap.from(elements, {
    opacity: 0,
    y: 60,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out"
  })
});

// 3. MARQUEE KINÉTIQUE
gsap.to(".marquee-track", {
  xPercent: -50,
  duration: 20,
  ease: "none",
  repeat: -1
});

// 4. IMAGE PARALLAX
gsap.to(".hero-bg", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});

// 5. HORIZONTAL SCRUB QUOTE
gsap.to(".kinetic-text", {
  xPercent: -60,
  ease: "none",
  scrollTrigger: {
    trigger: ".kinetic-section",
    scrub: 1,
    pin: true
  }
});

// 6. NAVBAR : disparaît au scroll down, réapparaît au scroll up
ScrollTrigger.create({
  start: "top top",
  onUpdate: (self) => {
    navbar.style.transform = self.direction === -1 
      ? "translateY(0)" 
      : "translateY(-100%)";
  }
});
```

---

## RESPONSIVE

- **Mobile first** — priorité mobile (80%+ trafic Afrique)  
- Breakpoints : 320px, 480px, 768px, 1024px, 1440px  
- Navigation mobile : menu burger → overlay plein écran noir avec liens dorés  
- Animations allégées sur mobile (prefers-reduced-motion respecté)  
- Images : format WebP, lazy loading, srcset  

---

## CONTENU TEXTUEL PAR DÉFAUT

**Taglines Algueye :**  
- "L'Élégance Africaine au Sommet du Monde"  
- "Né à Dakar. Porté Partout."  
- "Mode Intemporelle. Identité Africaine."  

**Taglines NARU GOOR :**  
- "L'Homme Fort. L'Homme Élégant."  
- "NARU GOOR — La Puissance du Style Masculin Africain"  

**Promesse client (réponse aux pain points) :**  
- "Livraison planifiée, délais respectés."  
- "Satisfaction garantie. Service premium."  
- "Communication directe, réponse en 24h."  

---

## FICHIERS À GÉNÉRER


## RÈGLES ABSOLUES

1. **Aucun bleu, vert, rouge** — noir, blanc, or UNIQUEMENT  
2. **Chaque section doit avoir une animation GSAP** — pas de page statique  
3. **Qualité Awwwards** : transitions fluides 60fps, courbes d'animation soignées  
4. **NARU GOOR = section séparée** dans la nav et dans les collections  
5. **WhatsApp intégré** en flottant (bouton vert bas droite) — canal principal Afrique  
6. **Multilangue préparé** : structure FR/EN (attributs `lang`, classes `i18n`)  
7. **SEO Dakar** : balises meta, Open Graph, schema.org pour mode de luxe  
8. **Pas de lorem ipsum** — utiliser le contenu de marque fourni ci-dessus
9. **Inspiration** - S'inspirer du thème Maya et du site "https://maya-theme-empower.myshopify.com/"