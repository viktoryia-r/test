import styles from "./MovoLogo.module.css";

// Each letter artwork is revealed by an animated stroke mask (Figma "Reveal / *" layers).
// Coordinates are in the 392×76 logo frame; mask offsets come from the Figma mask-position.
const O_REVEAL =
  "M13 41.308A28.106 28.308 0 0 1 41.106 13A28.106 28.308 0 0 1 69.212 41.308A28.106 28.308 0 0 1 41.106 69.616A28.106 28.308 0 0 1 13.004 40.908";

const letters = [
  {
    id: "m",
    src: "/assets/logo-m.svg",
    x: 0, y: 1.087, w: 155.185, h: 74.297,
    maskX: -13, maskY: -3.281,
    d: "M13 66.7473H25.534C28.62 66.7473 31.52 65.2713 33.34 62.7713L66.7 17.1113C72.24 9.51134 84.16 13.4713 84.15 22.8973L83.744 60.0573C83.74 69.4913 92.24 70.5713 99.1 63.8913L133.34 17.0513C138.9 9.45134 150.8 13.4113 150.8 22.8433L150.79 58.9893C150.79 63.2713 154.24 66.7473 158.492 66.7473H168.184",
    cap: "round" as const,
  },
  {
    id: "o1",
    src: "/assets/logo-o.svg",
    x: 156.918, y: 0, w: 75.457, h: 76,
    maskX: -3.375, maskY: -3.308,
    d: O_REVEAL,
    cap: "butt" as const,
  },
  {
    id: "v",
    src: "/assets/logo-v.svg",
    x: 234.063, y: 1.68, w: 83.849, h: 73.831,
    maskX: -13.004, maskY: -3.238,
    d: "M13 13H22.692C26.942 13 30.398 16.472 30.398 20.758V57.508C30.398 66.934 42.348 70.886 47.908 63.276L81.688 16.986C83.488 14.506 86.388 13 89.488 13H96.85",
    cap: "round" as const,
  },
  {
    id: "o2",
    src: "/assets/logo-o-last.svg",
    x: 316.543, y: 0, w: 75.457, h: 76,
    maskX: -3.379, maskY: -3.308,
    d: O_REVEAL,
    cap: "butt" as const,
  },
];

export default function MovoLogo() {
  return (
    <div className={styles.logo}>
      <svg
        className={styles.svg}
        viewBox="0 0 392 76"
        role="img"
        aria-label="Movo"
      >
        <defs>
          {letters.map((l) => (
            <mask key={l.id} id={`reveal-${l.id}`} maskUnits="userSpaceOnUse" x="-20" y="-20" width="432" height="116">
              <path
                className={`${styles.reveal} ${styles[l.id]}`}
                transform={`translate(${l.x + l.maskX} ${l.y + l.maskY})`}
                d={l.d}
                pathLength={1}
                fill="none"
                stroke="white"
                strokeWidth={26}
                strokeLinecap={l.cap}
                strokeLinejoin="round"
              />
            </mask>
          ))}
        </defs>
        {letters.map((l) => (
          <image
            key={l.id}
            className={`${styles.letter} ${styles[l.id]}`}
            href={l.src}
            x={l.x}
            y={l.y}
            width={l.w}
            height={l.h}
            mask={`url(#reveal-${l.id})`}
            preserveAspectRatio="none"
          />
        ))}
      </svg>
    </div>
  );
}
