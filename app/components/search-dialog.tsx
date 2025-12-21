// components/search-dialog.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/lib/use-search';
import { SearchItem } from '@/lib/search-index';

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { query, setQuery, results, hasResults } = useSearch();

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Escape om te sluiten
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Reset query wanneer dialog sluit
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen, setQuery]);

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    router.push(item.href);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 hover:border-slate-400 transition"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Zoeken...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-xs font-mono text-slate-500">
          <span>⌘</span>K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Dialog */}
      <div className="fixed left-1/2 top-[20vh] -translate-x-1/2 z-50 w-full max-w-2xl">
        <div className="mx-4 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek op pagina's, tools, modules..."
              className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 outline-none text-base"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              ESC
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {!query.trim() ? (
              <div className="p-8 text-center text-sm text-slate-500">
                Begin met typen om te zoeken...
              </div>
            ) : !hasResults ? (
              <div className="p-8 text-center">
                <div className="text-slate-400 mb-2">Geen resultaten gevonden</div>
                <div className="text-xs text-slate-500">
                  Probeer andere zoektermen
                </div>
              </div>
            ) : (
              <div className="py-2">
                {results.map((item, index) => (
                  <button
                    key={`${item.href}-${index}`}
                    onClick={() => handleSelect(item)}
                    className="w-full px-4 py-3 hover:bg-slate-50 transition text-left group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-slate-900 group-hover:text-[#0E2A47] transition">
                            {item.title}
                          </span>
                          {item.type && (
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                              {item.type}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-slate-600 line-clamp-2 mb-1">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>{item.section}</span>
                          <span>·</span>
                          <span className="truncate">{item.href}</span>
                        </div>
                      </div>
                      <svg 
                        className="h-4 w-4 text-slate-400 group-hover:text-slate-600 flex-shrink-0 mt-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {hasResults && (
            <div className="border-t border-slate-200 px-4 py-2 bg-slate-50">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{results.length} resultaten</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-white border border-slate-300 px-1.5 py-0.5 font-mono">↑↓</kbd>
                    <span>navigeren</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-white border border-slate-300 px-1.5 py-0.5 font-mono">↵</kbd>
                    <span>selecteren</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}