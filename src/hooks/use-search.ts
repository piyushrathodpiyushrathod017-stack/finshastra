'use client';

import { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';

interface UseSearchOptions<T> {
  keys: (keyof T)[];
  threshold?: number;
  includeMatches?: boolean;
}

interface UseSearchResult<T> {
  query: string;
  setQuery: (query: string) => void;
  results: T[];
  isSearching: boolean;
  clearSearch: () => void;
}

export function useSearch<T extends Record<string, unknown>>(
  data: T[],
  options: UseSearchOptions<T>
): UseSearchResult<T> {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: options.keys as string[],
        threshold: options.threshold ?? 0.3,
        includeMatches: options.includeMatches ?? false,
      }),
    [data, options.keys, options.threshold, options.includeMatches]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse]);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    results,
    isSearching: query.trim().length > 0,
    clearSearch,
  };
}
