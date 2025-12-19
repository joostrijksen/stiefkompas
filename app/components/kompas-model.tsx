// app/components/kompas-model.tsx

export function KompasModel() {
  return (
    <div className="mx-auto max-w-md">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-auto"
        aria-labelledby="stiefkompas-title stiefkompas-desc"
      >
        <title id="stiefkompas-title">Stiefkompas – vijf pijlers</title>
        <desc id="stiefkompas-desc">
          Kompasmodel met vier pijlers op de windrichtingen rond een centrale
          kernpijler voor de Stiefkompas-methodiek.
        </desc>

        {/* Buitenste cirkel */}
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />

        {/* Kruislijnen */}
        <line
          x1="200"
          y1="50"
          x2="200"
          y2="350"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <line
          x1="50"
          y1="200"
          x2="350"
          y2="200"
          stroke="#e2e8f0"
          strokeWidth="1"
        />

        {/* Cardinale richtingen (kompasgevoel) */}
        <text
          x="200"
          y="40"
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
          letterSpacing="0.2em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          N
        </text>
        <text
          x="200"
          y="368"
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
          letterSpacing="0.2em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Z
        </text>
        <text
          x="360"
          y="204"
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
          letterSpacing="0.2em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          O
        </text>
        <text
          x="40"
          y="204"
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
          letterSpacing="0.2em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          W
        </text>

        {/* Kleine gekleurde punten op de windrichtingen */}
        <circle cx="200" cy="70" r="4" fill="#0f766e" />
        <circle cx="330" cy="200" r="4" fill="#0369a1" />
        <circle cx="200" cy="330" r="4" fill="#b45309" />
        <circle cx="70" cy="200" r="4" fill="#4f46e5" />

        {/* Centrale kerncirkel */}
        <circle
          cx="200"
          cy="200"
          r="60"
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1.2"
        />

        {/* Kerntekst */}
        <text
          x="200"
          y="188"
          textAnchor="middle"
          fontSize="13"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.06em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          STIEFKOMPAS
        </text>
        <text
          x="200"
          y="206"
          textAnchor="middle"
          fontSize="11"
          fill="#334155"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Gezinsritme & Rituelen
        </text>
        <text
          x="200"
          y="220"
          textAnchor="middle"
          fontSize="9"
          fill="#64748b"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          kernpijler van het model
        </text>

        {/* Boven – VERBINDING */}
        <text
          x="200"
          y="100"
          textAnchor="middle"
          fontSize="14"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.08em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          VERBINDING
        </text>
        <text
          x="200"
          y="116"
          textAnchor="middle"
          fontSize="10"
          fill="#0f766e"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          hechting & relaties
        </text>

        {/* Rechts – COMMUNICATIE & PATRONEN */}
        <text
          x="306"
          y="190"
          textAnchor="middle"
          fontSize="12"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.05em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          COMMUNICATIE
        </text>
        <text
          x="306"
          y="206"
          textAnchor="middle"
          fontSize="12"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.05em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          & PATRONEN
        </text>
        <text
          x="306"
          y="222"
          textAnchor="middle"
          fontSize="10"
          fill="#0369a1"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          circulaire processen
        </text>

        {/* Onder – STRUCTUUR & GRENSEN */}
        <text
          x="200"
          y="300"
          textAnchor="middle"
          fontSize="13"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.08em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          STRUCTUUR & GRENSEN
        </text>
        <text
          x="200"
          y="316"
          textAnchor="middle"
          fontSize="10"
          fill="#b45309"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ritme, rollen, kaders
        </text>

        {/* Links – POSITIES & LOYALITEIT */}
        <text
          x="94"
          y="190"
          textAnchor="middle"
          fontSize="12"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.05em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          POSITIES &
        </text>
        <text
          x="94"
          y="206"
          textAnchor="middle"
          fontSize="12"
          fill="#0f172a"
          fontWeight="600"
          letterSpacing="0.05em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          LOYALITEIT
        </text>
        <text
          x="94"
          y="222"
          textAnchor="middle"
          fontSize="10"
          fill="#4f46e5"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          systemische posities
        </text>
      </svg>
    </div>
  );
}