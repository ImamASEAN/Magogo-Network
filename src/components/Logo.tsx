export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3.5 5 9.75v12.5L16 28.5l11-6.25V9.75z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M5 9.75 16 16l11-6.25M16 16v12.5" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 3.5 27 9.75 16 16 5 9.75z" fill="#38e08c" fillOpacity=".9" />
    </svg>
  );
}

export default function Logo() {
  return (
    <a className="logo" href="#beranda" aria-label="MagoGo Network, ke beranda">
      <LogoMark />
      <span className="logo-text">
        Mago<span>Go</span>
      </span>
      <span className="logo-tag">Network</span>
    </a>
  );
}
