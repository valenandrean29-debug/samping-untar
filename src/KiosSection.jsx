import { useEffect, useRef, useState } from 'react'
import './KiosSection.css'

const kiosks = [
  // Isi whatsappNumber tiap kios dengan nomor pemiliknya (format 08... atau +62...).
  {
    name: 'Ayam Geybok',
    whatsappNumber: '+62 856-7499-238',
    image: '/ayam-geybok-pixel.png',
    foodImage: '/food-ayam-geybok.png',
    foodAlt: 'Ayam Geybok dengan sambal dan keju di atas alas daun pisang',
    alt: 'Ilustrasi pixel-art kios Ayam Geybok berwarna kuning dan merah muda',
    description: 'Ayam dengan sambal khas Bang Jarwo. Publikasi Universitas Tarumanagara menyebut Ayam Blonde dan Blond Krik sebagai menu andalan cabang Tanjung Gedong.',
    source: 'Publikasi Universitas Tarumanagara',
    sourceUrl: 'https://journal.untar.ac.id/index.php/baktimas/article/view/22654/13806',
  },
  {
    name: 'Ayam Bakar Ojo Lali Tomang',
    whatsappNumber: '+62 817-4807-745',
    image: '/ayam-bakar-ojo-lali-pixel.png',
    foodImage: '/food-ayam-ojolali.png',
    foodAlt: 'Ayam bakar dengan sambal, kol, dan lalapan di atas piring',
    alt: 'Ilustrasi pixel-art kios Ayam Bakar Ojo Lali Tomang dengan logo ayam marun',
    description: 'Menu andalannya ayam bakar yang dioles kecap dan disajikan dengan sambal khas. Sumber kampus juga mencatat pilihan ayam dan ikan bakar.',
    source: 'Jurnal Ekonomi Trisakti',
    sourceUrl: 'https://e-journal.trisakti.ac.id/index.php/jet/article/download/15517/9087/54699',
  },
  {
    name: 'Kantin Sahera Pak Kirno',
    whatsappNumber: '+62 812-1846-5155',
    image: '/kantin-sahera-pak-kirno-pixel.png',
    foodImage: '/food-kantin-sahera.png',
    foodAlt: 'Nasi dengan ayam bakar, sambal, dan lalapan',
    alt: 'Ilustrasi pixel-art Kantin Sahera Pak Kirno dengan papan biru dan kios kuning',
    description: 'Pilihan menunya mencakup soto, bakso, ayam penyet, ayam bakar, dan ikan goreng atau bakar. Soto tersedia dalam beberapa pilihan isi dan kuah.',
    source: 'MenuKuliner.net',
    sourceUrl: 'https://menukuliner.net/menu/354124/kantin-sahera-pak-kirno-soto-bakso-ayam-penyet-bakar',
  },
  {
    name: 'Sate Bang Dopir',
    whatsappNumber: '083171936128',
    image: '/sate-bang-dopir-pixel.png',
    foodImage: '/food-sate-bang-dopir.png',
    foodAlt: 'Sate berbumbu dengan irisan mentimun',
    alt: 'Ilustrasi pixel-art kios Sate Bang Dopir dengan sate dan fasad kuning',
    description: 'Menawarkan sate ayam dan kambing, termasuk sate taichan. Pilihan bumbu yang tercantum adalah kacang atau kecap, dengan paket sate dan nasi.',
    source: 'MenuKuliner.net',
    sourceUrl: 'https://menukuliner.net/menu/517013/sate-bang-dopir-tomang',
  },
  {
    name: 'Bakso & Soto Larissa Bahari',
    whatsappNumber: '+62 878-9303-1472',
    image: '/bakso-soto-larissa-bahari-pixel.png',
    foodImage: '/food-bakso-soto-larissa-bahari.png',
    foodAlt: 'Semangkuk bakso dengan bihun, seledri, dan bawang goreng',
    alt: 'Ilustrasi pixel-art kios Bakso & Soto Larissa Bahari dengan papan kuning dan etalase',
    description: 'Kios ini menawarkan pilihan bakso dan soto. Foto menu bakso ditampilkan sebagai gambaran hidangan yang bisa ditemukan di sini.',
  },
  {
    name: 'Nasi Goreng Namura',
    whatsappNumber: '+62 895-4135-28767',
    image: '/nasi-goreng-namura-pixel.png',
    foodImage: '/food-nasi-goreng-namura.png',
    foodAlt: 'Nasi goreng dengan telur mata sapi di atas piring merah',
    alt: 'Ilustrasi pixel-art kios Nasi Goreng Namura dengan papan krem-oranye dan fasad kuning',
    description: 'Nasi Goreng Namura menawarkan nasi goreng sebagai menu utamanya. Foto menu dari kios ditampilkan di atas.',
  },
  {
    name: 'Ayam Dedy Jaya Bang Bestie',
    whatsappNumber: '0819-3126-6681',
    image: '/ayam-dedy-jaya-bang-bestie-pixel.png',
    foodImage: '/food-ayam-dedy-jaya-bang-bestie.png',
    foodAlt: 'Nasi dengan ayam berbumbu kuning, sambal, dan lalapan',
    alt: 'Ilustrasi pixel-art kios Ayam Dedy Jaya Bang Bestie berwarna kuning dan hijau toska',
    description: 'Menu ayam dengan nasi, sambal, dan lalapan seperti yang terlihat pada foto menu kios.',
  },
  {
    name: 'Mie Yamin Samping Untar',
    whatsappNumber: '+62 821-1250-7867',
    image: '/mie-yamin-samping-untar-1-pixel.png',
    foodImage: '/food-mie-yamin-samping-untar.png',
    foodAlt: 'Semangkuk mie yamin dengan bakso, sayuran, dan pangsit',
    alt: 'Ilustrasi pixel-art kios Mie Yamin Samping Untar dengan banner putih-merah dan rangka kuning',
    description: 'Mie Yamin Samping Untar menyajikan mie yamin dengan pelengkap seperti bakso dan pangsit, sesuai foto menu yang dikirim.',
  },
  {
    name: 'Crisbar Ayam Crispy Bakar',
    whatsappNumber: '0821-2121-4145',
    image: '/crisbar-pixel.png',
    foodImage: '/food-crisbar-ayam-crispy-bakar.png',
    foodAlt: 'Ayam crispy bakar dengan nasi, sayuran, dan pelengkap di piring kuning',
    alt: 'Ilustrasi pixel-art kios Crisbar dengan fasad putih-kuning dan papan nama hitam-kuning',
    description: 'Ayam crispy bakar disajikan dengan nasi dan pelengkap seperti yang tampak pada foto menu kios.',
  },
  {
    name: 'RM Sakato Jaya',
    whatsappNumber: '+62 856-9738-9664',
    image: '/rm-sakato-jaya-pixel.png',
    foodImage: '/food-rm-sakato-jaya.png',
    foodAlt: 'Hidangan nasi Padang dengan rendang, lauk goreng, sayur, dan sambal',
    alt: 'Ilustrasi pixel-art warung Padang RM Sakato Jaya',
    description: 'RM Sakato Jaya menyajikan hidangan bergaya rumah makan Padang. Foto menu memperlihatkan nasi dengan rendang, lauk, sayur, dan sambal.',
  },
  {
    name: 'Kedai Ayam 23',
    whatsappNumber: '+62 858 1799 9170',
    image: '/kedai-ayam-23-pixel.png',
    foodImage: '/food-kedai-ayam-23.png',
    foodAlt: 'Nasi dengan ayam goreng, tempe, tahu, sambal, dan lalapan',
    alt: 'Ilustrasi pixel-art kios Kedai Ayam 23 dengan tenda putih-marun dan aksen kuning',
    description: 'Kedai Ayam 23 menyajikan hidangan ayam dengan nasi dan aneka pelengkap. Foto menu menampilkan ayam goreng, tahu, tempe, sambal, dan lalapan.',
  },
]

const SUGGEST_KIOSK_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScdN2MCeoCFSAfDLh-d1kMgvz98qISw34AxtEjxwfLvWgx0JA/viewform?usp=publish-editor'

function getWhatsAppUrl(kiosk) {
  const digits = kiosk.whatsappNumber.replace(/\D/g, '')
  if (!digits) return ''

  const internationalNumber = digits.startsWith('0') ? `62${digits.slice(1)}` : digits
  const message = encodeURIComponent(`Halo, saya ingin pesan dari ${kiosk.name}.`)
  return `https://wa.me/${internationalNumber}?text=${message}`
}

function KiosCard({ kiosk, onAbout }) {
  const whatsappUrl = getWhatsAppUrl(kiosk)

  return (
    <article className="kios-card">
      <div className="kios-card__image-frame">
        <img className="kios-card__image" src={kiosk.image} alt={kiosk.alt} />
      </div>
      <div className="kios-card__body">
        <h3 className="kios-card__name">{kiosk.name}</h3>
        <div className="kios-card__actions">
          {whatsappUrl ? (
            <a className="kios-card__button kios-card__button--primary" href={whatsappUrl}>
              Pesan Sekarang <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button className="kios-card__button kios-card__button--primary" type="button" disabled title="Tambahkan nomor WhatsApp kios di KiosSection.jsx">
              Pesan Sekarang <span aria-hidden="true">↗</span>
            </button>
          )}
          <button className="kios-card__button kios-card__button--secondary" type="button" onClick={() => onAbout(kiosk)}>
            Tentang Kios
          </button>
        </div>
      </div>
    </article>
  )
}

function KiosSection() {
  const [selectedKiosk, setSelectedKiosk] = useState(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!selectedKiosk) return undefined
    const previousFocus = document.activeElement
    closeButtonRef.current?.focus()
    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedKiosk(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      previousFocus?.focus?.()
    }
  }, [selectedKiosk])

  return (
    <section className="kios-section" id="kios" aria-labelledby="kios-heading">
      <div className="kios-section__inner">
        <header className="kios-section__header">
          <p className="kios-section__eyebrow">Jajanan dekat kampus</p>
          <h2 className="kios-section__title" id="kios-heading">Pilih Kios Favoritmu</h2>
          <p className="kios-section__description">Lihat kios langganan anak Untar, lalu pesan langsung ke penjual.</p>
        </header>
        <div className="kios-grid">
          {kiosks.map((kiosk) => <KiosCard key={kiosk.name} kiosk={kiosk} onAbout={setSelectedKiosk} />)}
          <article className="kios-card kios-card--coming-soon" aria-label="Kios lainnya segera hadir">
            <div className="kios-card__image-frame kios-card__image-frame--coming-soon" aria-hidden="true">
              <span className="coming-soon__spark coming-soon__spark--one">✦</span>
              <span className="coming-soon__tile coming-soon__tile--one">?</span>
              <span className="coming-soon__tile coming-soon__tile--two">+</span>
              <span className="coming-soon__spark coming-soon__spark--two">✧</span>
            </div>
            <div className="kios-card__body kios-card__body--coming-soon">
              <h3 className="kios-card__name">Kios lainnya segera hadir</h3>
              <p className="coming-soon__caption">COMING SOON</p>
              <a className="coming-soon__button" href={SUGGEST_KIOSK_FORM_URL} target="_blank" rel="noreferrer">
                Bagikan Kios <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </div>
      {selectedKiosk && (
        <div className="kios-about-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedKiosk(null)
        }}>
          <section className="kios-about" role="dialog" aria-modal="true" aria-labelledby="kios-about-title">
            <button ref={closeButtonRef} className="kios-about__close" type="button" aria-label="Tutup informasi kios" onClick={() => setSelectedKiosk(null)}>×</button>
            <p className="kios-about__eyebrow">Tentang kios</p>
            <h2 className="kios-about__title" id="kios-about-title">{selectedKiosk.name}</h2>
            <div className="kios-about__food-frame">
              {selectedKiosk.foodImage ? (
                <img className="kios-about__food-image" src={selectedKiosk.foodImage} alt={selectedKiosk.foodAlt} />
              ) : (
                <div className="kios-about__food-placeholder" role="img" aria-label="Slot foto makanan menunggu foto dari kios">
                  <span className="kios-about__food-icon" aria-hidden="true">✦</span>
                  <span>Foto menu kios</span>
                  <span className="kios-about__food-icon" aria-hidden="true">✧</span>
                </div>
              )}
            </div>
            <p className="kios-about__description">{selectedKiosk.description}</p>
            {selectedKiosk.sourceUrl && (
              <a className="kios-about__source" href={selectedKiosk.sourceUrl} target="_blank" rel="noreferrer">
                Sumber info: {selectedKiosk.source} <span aria-hidden="true">↗</span>
              </a>
            )}
            <p className="kios-about__note">Menu dan ketersediaan dapat berubah. Konfirmasi langsung ke kios sebelum memesan.</p>
          </section>
        </div>
      )}
    </section>
  )
}

export default KiosSection
