export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={"brand " + (compact ? "compact" : "")}>
      <svg
        className="heart-logo"
        viewBox="0 0 120 104"
        role="img"
        aria-label="Corazón tejido con línea de latido"
      >
        <defs>
          <linearGradient id="brandGradient">
            <stop stopColor="#087f98" />
            <stop offset="1" stopColor="#d91473" />
          </linearGradient>
        </defs>
        <path
          d="M60 94C24 72 9 54 13 32 17 9 46 5 60 25 75 5 103 9 107 32c4 22-11 40-47 62Z"
          fill="none"
          stroke="url(#brandGradient)"
          strokeWidth="7"
        />
        <path
          d="M20 53h22l7-15 11 31 10-22 7 12h24"
          fill="none"
          stroke="url(#brandGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 21 85 76M23 34l54 49M44 15l49 50"
          opacity=".18"
          stroke="#087f98"
          strokeWidth="2"
        />
      </svg>
      <div>
        <strong>Fundación Tejiendo</strong>
        <span>con Latidos de Esperanza</span>
      </div>
    </div>
  );
}
