import './SiteNavigation.css'

function SiteNavigation() {
  return (
    <nav className="site-nav" aria-label="Navigasi utama">
      <a className="site-nav__brand" href="#hero" aria-label="Samping Untar, kembali ke halaman utama">
        Samping <span>Untar</span>
      </a>
      <div className="site-nav__links">
        <a className="site-nav__link" href="#hero">Beranda</a>
        <a className="site-nav__link" href="#kios">Daftar Kios</a>
        <a className="site-nav__link site-nav__link--feedback" href="#saran">Saran</a>
      </div>
    </nav>
  )
}

export default SiteNavigation
