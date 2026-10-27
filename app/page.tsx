'use client'

import Image from 'next/image'
import { useState } from 'react'

const cards = [
  { name: 'Deep clean powder', image: '/img/card-powder-480.webp', large: '/img/card-powder-960.webp', copy: 'A mineral-rich reset for tired surfaces.' },
  { name: 'Detail scraper', image: '/img/card-scraper-480.webp', large: '/img/card-scraper-960.webp', copy: 'Lift away buildup without the guesswork.' },
  { name: 'Refill bags', image: '/img/card-bags-480.webp', large: '/img/card-bags-960.webp', copy: 'Less waste, more routines in the bag.' },
  { name: 'Finishing mist', image: '/img/card-mist-480.webp', large: '/img/card-mist-960.webp', copy: 'The final touch for a clean, calm finish.' },
]

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)

  return (
    <div className="comparison" style={{ '--p': position } as React.CSSProperties} data-gsap="comparison">
      <Image className="comparison-image" src="/img/before-oil-1600.webp" alt="Oily surface before treatment" fill sizes="(max-width: 900px) 100vw, 60vw" loading="lazy" />
      <div className="comparison-top" aria-hidden="true">
        <Image className="comparison-image" src="/img/after-puck-1600.webp" alt="Clean surface after treatment" fill sizes="(max-width: 900px) 100vw, 60vw" loading="lazy" />
      </div>
      <span className="comparison-label comparison-label-before">Before</span>
      <span className="comparison-label comparison-label-after">After</span>
      <label className="sr-only" htmlFor="comparison-position">Compare before and after</label>
      <input id="comparison-position" className="comparison-range" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-valuetext={`${position}% after`} />
      <span className="comparison-handle" aria-hidden="true" />
    </div>
  )
}

export default function Page() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Main navigation" data-gsap="nav">
        <a className="wordmark" href="#top" aria-label="Puck home">PUCK<span>.</span></a>
        <div className="nav-links"><a href="#method">Method</a><a href="#kit">The kit</a><a href="#results">Results</a></div>
        <a className="nav-cta" href="#kit">Shop the reset <span aria-hidden="true">↗</span></a>
      </nav>

      <section id="top" className="hero" data-gsap="hero">
        <div className="hero-copy">
          <p className="eyebrow">A cleaner kind of clean</p>
          <h1>Give your<br /><em>surfaces</em> a reset.</h1>
          <p className="hero-text">Plant-powered care for the places life leaves its mark. Puck is a considered ritual for a cleaner home.</p>
          <a className="button" href="#kit">Meet your new clean <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-art" data-gsap="hero-image">
          <Image src="/img/hero-1280.webp" alt="Puck cleaning kit on a warm stone surface" fill priority fetchPriority="high" sizes="(max-width: 760px) 100vw, 58vw" />
          <div className="hero-stamp">better<br />by nature</div>
        </div>
      </section>

      <section className="marquee" aria-label="Puck product benefits"><span>REFILLABLE</span><i>✳</i><span>PLANT POWERED</span><i>✳</i><span>NO SINGLE-USE PLASTIC</span><i>✳</i><span>MADE FOR EVERYDAY</span></section>

      <section id="method" className="story section-grid" data-gsap="method">
        <div className="section-intro"><p className="eyebrow">The Puck method</p><h2>Less drama.<br /><em>More ritual.</em></h2></div>
        <div className="story-copy"><p>Good cleaning should feel less like a chore and more like a small act of care. Our concentrated formulas meet reusable tools to make everyday reset feel easy.</p><a className="text-link" href="#results">See it in action <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="results" className="results section-grid" data-gsap="results">
        <div className="result-copy"><p className="eyebrow">Proof in the process</p><h2>A clean you<br /><em>can see.</em></h2><p>Slide to see the difference a little intention makes. No tricks, just a better way to get back to baseline.</p></div>
        <BeforeAfterSlider />
      </section>

      <section id="kit" className="kit section-grid" data-gsap="kit">
        <div className="section-intro"><p className="eyebrow">Build your ritual</p><h2>Everything you<br /><em>need to reset.</em></h2></div>
        <div className="kit-grid">{cards.map((card) => <article className="product-card" key={card.name}><div className="card-image"><picture><source media="(min-width: 700px)" srcSet={card.large} /><Image src={card.image} alt="" fill sizes="(max-width: 700px) 50vw, 24vw" loading="lazy" /></picture></div><h3>{card.name}</h3><p>{card.copy}</p></article>)}</div>
      </section>

      <section className="bundle" data-gsap="bundle"><div><p className="eyebrow">The complete reset</p><h2>Start fresh,<br /><em>stay fresh.</em></h2><a className="button button-light" href="#top">Shop the bundle <span aria-hidden="true">↗</span></a></div><div className="bundle-image"><Image src="/img/bundle-flatlay-1200.webp" alt="Complete Puck cleaning bundle flat lay" fill sizes="(max-width: 760px) 100vw, 50vw" loading="lazy" /></div></section>

      <footer className="footer"><a className="wordmark" href="#top">PUCK<span>.</span></a><p>Small rituals. Big reset.</p><span>© 2026 Puck</span></footer>
    </main>
  )
}
