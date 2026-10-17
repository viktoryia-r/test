import MovoLogo from "@/components/MovoLogo";
import styles from "./page.module.css";

// TODO: replace "#" with the real TestFlight / Figma / web prototype URLs.
const links = [
  {
    label: "Test Flight link - working app prototype - for iphone",
    icon: "/assets/icon-testflight.png",
    iconClass: styles.iconTestflight,
    href: "#",
  },
  {
    label: "Figma link - on top of token and style system",
    icon: "/assets/icon-figma.png",
    iconClass: styles.iconFigma,
    href: "#",
  },
  {
    label:
      "Explore in browser (might be a bit different, better check app in test flight)",
    icon: "/assets/icon-browser.png",
    iconClass: styles.iconBrowser,
    href: "#",
  },
];

function Links() {
  return (
    <ul className={styles.links}>
      {links.map((l) => (
        <li key={l.label}>
          <a className={styles.link} href={l.href} target="_blank" rel="noreferrer">
            <span className={`${styles.icon} ${l.iconClass}`}>
              <img src={l.icon} alt="" />
            </span>
            <span className={styles.linkLabel}>{l.label}</span>
            <span className={styles.arrow}>
              <img src="/assets/arrow-up-right.svg" alt="" width={10.4167} height={10.4167} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ version, title }: { version: string; title: string }) {
  return (
    <div className={styles.heading}>
      <p className={styles.version}>{version}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

function FlatPhoneCard() {
  return (
    <div className={`${styles.card} ${styles.phoneCard}`}>
      <div className={`${styles.phone} ${styles.phoneV1}`}>
        <img src="/assets/v1-phone.png" alt="Movo app, flat design" />
      </div>
    </div>
  );
}

function GlassPhoneCard() {
  return (
    <div className={`${styles.card} ${styles.phoneCard}`}>
      <div className={`${styles.phone} ${styles.phoneV2}`}>
        <img className={styles.phoneFrame} src="/assets/v2-phone-frame.png" alt="" />
        <img
          className={styles.phoneScreen}
          src="/assets/v2-screenshot.png"
          alt="Movo app, glass design"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.brand}>
          <img className={styles.appIcon} src="/assets/app-icon.svg" alt="" width={270} height={329} />
          <div className={styles.brandText}>
            <MovoLogo />
            <p className={styles.tagline}>App design concept on top of Palianka branding</p>
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <div className={styles.aside}>
          <SectionHeading version="Version 1" title="Flat design" />
          <Links />
        </div>
        <div className={styles.gallery}>
          <FlatPhoneCard />
          <div className={`${styles.card} ${styles.photoCard}`}>
            {/* Placeholder footage from danielamuntyan.com matching the Figma still (v1-photo.png). */}
            <video
              className={styles.videoV1}
              src="/assets/v1-video.mp4"
              poster="/assets/v1-video-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Flat design app in hand"
            />
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <div className={styles.aside}>
          <SectionHeading version="Version 2" title="Glass design" />
          <Links />
        </div>
        <div className={`${styles.gallery} ${styles.galleryReverse}`}>
          <div className={`${styles.card} ${styles.photoCard}`}>
            <img
              className={styles.photoCover}
              src="/assets/v2-photo.png"
              alt="Glass design app in hand"
            />
          </div>
          <GlassPhoneCard />
        </div>
      </section>

      <footer className={styles.footer}>
        Viktoryia Ramanouskaya for Palinka Studio, 2026
      </footer>
    </main>
  );
}
