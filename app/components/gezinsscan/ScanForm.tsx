// app/components/gezinsscan/ScanForm.tsx

"use client";

import { useState } from "react";
import ScanPijler from "./ScanPijler";
import ScanResult from "./ScanResult";

export default function ScanForm() {
  const [values, setValues] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateValue = (id: string, value: number) =>
    setValues((prev) => ({ ...prev, [id]: value }));

  const pijlers = [
    {
      name: "Verbinding",
      subtitle: "Hechting & relaties",
      statements: [
        { id: "v1", text: "We ervaren regelmatige momenten van echte verbinding." },
        { id: "v2", text: "Iedereen voelt zich gezien en gehoord." },
        { id: "v3", text: "Nieuwe relaties voelen veilig en betrouwbaar." },
        { id: "v4", text: "Er is balans tussen persoonlijke ruimte en nabijheid." },
      ],
    },
    {
      name: "Communicatie & Patronen",
      subtitle: "Circulaire processen",
      statements: [
        { id: "c1", text: "We kunnen conflicten bespreken zonder escalatie." },
        { id: "c2", text: "Patronen uit vorige relaties sturen gesprekken niet negatief." },
        { id: "c3", text: "We begrijpen elkaars triggers en grenzen." },
        { id: "c4", text: "Feedback geven verloopt veilig en rustig." },
      ],
    },
    {
      name: "Structuur & Grenzen",
      subtitle: "Ritme, rollen, kaders",
      statements: [
        { id: "s1", text: "Er zijn duidelijke regels en afspraken." },
        { id: "s2", text: "Iedereen begrijpt zijn/haar verantwoordelijkheid." },
        { id: "s3", text: "Overgang tussen huishoudens verloopt voorspelbaar." },
        { id: "s4", text: "Structuur voorkomt escalatie." },
      ],
    },
    {
      name: "Posities & Loyaliteit",
      subtitle: "Systemische posities",
      statements: [
        { id: "p1", text: "De positie van de stiefouder is duidelijk." },
        { id: "p2", text: "Kinderen voelen geen loyaliteitsconflict." },
        { id: "p3", text: "Biologische en stiefouders ondersteunen elkaar." },
        { id: "p4", text: "Grenzen tussen ouderteam en partnerteam zijn duidelijk." },
      ],
    },
    {
      name: "Gezinsritme & Rituelen",
      subtitle: "Kernpijler",
      statements: [
        { id: "g1", text: "Er is een stabiel gezinsritme." },
        { id: "g2", text: "Gezinsrituelen geven verbinding." },
        { id: "g3", text: "Er is balans tussen oude en nieuwe gewoonten." },
      ],
    },
  ];

  const totals = Object.fromEntries(
    pijlers.map((p) => [
      p.name,
      p.statements.reduce((sum, s) => sum + (values[s.id] || 0), 0),
    ])
  );

  return (
    <div className="space-y-8">
      {pijlers.map((p) => (
        <ScanPijler
          key={p.name}
          title={p.name}
          subtitle={p.subtitle}
          statements={p.statements}
          values={values}
          onChange={updateValue}
        />
      ))}

      <button
        onClick={() => setSubmitted(true)}
        className="px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800"
      >
        Bekijk resultaat
      </button>

      {submitted && <ScanResult totals={totals} />}
    </div>
  );
}