// app/components/gezinsscan/ScanPijler.tsx

"use client";

interface Statement {
  id: string;
  text: string;
}

interface Props {
  title: string;
  subtitle: string;
  color?: string;
  statements: Statement[];
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
}

export default function ScanPijler({
  title,
  subtitle,
  color = "text-slate-700",
  statements,
  values,
  onChange,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="space-y-4">
        {statements.map((s) => (
          <div key={s.id} className="space-y-2">
            <p className="text-sm text-slate-700">{s.text}</p>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => onChange(s.id, n)}
                  className={`h-8 w-8 rounded-full border flex items-center justify-center
                    ${
                      values[s.id] === n
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
                    }
                  `}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}