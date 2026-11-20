import './SiteFooter.css'

const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfNet0BsuQ-bbMkkqjvteJ45TEmzWf0r4hpVxtTWwuo5eixrw/viewform?usp=publish-editor'

function SiteFooter() {
  return (
    <footer className="site-footer" id="saran">
      <div className="site-footer__inner">
        <div className="site-footer__feedback">
          <p className="site-footer__eyebrow">Bantu kami berkembang</p>
          <h2 className="site-footer__title">Saran &amp; Masukan</h2>
          <p className="site-footer__copy">Punya ide atau menemukan yang perlu diperbaiki? Kirimkan lewat formulir saran.</p>
          <a className="feedback-form__submit" href={FEEDBACK_FORM_URL} target="_blank" rel="noreferrer">
            Isi Form Saran <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="site-footer__bottom">
          <span className="site-footer__pixel" aria-hidden="true">✦</span>
          <p>© 2026 Valenmamae.</p>
          <span className="site-footer__pixel" aria-hidden="true">✧</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
