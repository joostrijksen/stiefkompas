import { ReactNode } from "react";

export const dynamic = "force-dynamic";

export default function LerenLayout({ children }: { children: ReactNode }) {
  return (
    // ✅ Zorgt dat BODY niet meer scrolt
    <div className="bg-slate-50 h-[calc(100vh-64px)] overflow-hidden">
      <div className="max-w-7xl mx-auto h-full px-4 py-6">
        {/* Let op: children moet straks de grid bevatten die zélf 2 kolommen heeft */}
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}