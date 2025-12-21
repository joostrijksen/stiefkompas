// lib/use-search.ts
'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { SEARCH_INDEX, type SearchItem } from './search-index';

export function useSearch() {
  const [query, setQuery] = useState('');

  // Fuse.js configuratie voor fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(SEARCH_INDEX, {
        keys: [
          { name: 'title', weight: 2 }, // Title is belangrijkste
          { name: 'description', weight: 1.5 },
          { name: 'keywords', weight: 1 },
          { name: 'section', weight: 0.5 },
        ],
        threshold: 0.4, // 0 = exact match, 1 = match anything
        distance: 100,
        minMatchCharLength: 2,
        includeScore: true,
        useExtendedSearch: true,
      }),
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const fuseResults = fuse.search(query);
    
    // Converteer Fuse results naar SearchItem array
    return fuseResults
      .filter(result => (result.score || 1) < 0.6) // Filter slechte matches
      .map(result => result.item);
  }, [query, fuse]);

  return {
    query,
    setQuery,
    results,
    hasResults: results.length > 0,
  };
}