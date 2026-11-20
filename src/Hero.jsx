import './Hero.css'

function Hero() {
  return (
    <main className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">Jajan enak, dekat kampus</p>
        <h1 className="hero__title" id="hero-title">
          <span className="hero__title-word">Samping</span>
          <img className="hero__untar-logo" src="/untar-pixel-logo.png" alt="Logo Untar bergaya pixel" />
        </h1>
        <p className="hero__subtitle">Lagi pengin makan apa bosku?</p>
        <a className="hero__cta" href="#kios">Cari Kios <span aria-hidden="true">↗</span></a>
      </div>
      <span className="hero__pixel hero__pixel--one" aria-hidden="true">✦</span>
      <span className="hero__pixel hero__pixel--two" aria-hidden="true">✧</span>
    </main>
  )
}

export default Hero
