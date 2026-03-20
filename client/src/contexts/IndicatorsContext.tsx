import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Indicator, IndicatorCategory } from '@/lib/types';

interface IndicatorsContextType {
  indicators: Indicator[];
  categories: IndicatorCategory[];
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}

const IndicatorsContext = createContext<IndicatorsContextType | undefined>(undefined);

interface IndicatorsProviderProps {
  children: ReactNode;
}

export function IndicatorsProvider({ children }: IndicatorsProviderProps) {
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [categories, setCategories] = useState<IndicatorCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [indicatorsData, categoriesData] = await Promise.all([
          fetch('/api/indicadores').then(r => r.json()),
          fetch('/api/categorias').then(r => r.json()),
        ]);
        setIndicators(indicatorsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <IndicatorsContext.Provider
      value={{
        indicators,
        categories,
        loading,
        error,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </IndicatorsContext.Provider>
  );
}

export function useIndicatorsContext() {
  const context = useContext(IndicatorsContext);
  if (!context) {
    throw new Error('useIndicatorsContext must be used within IndicatorsProvider');
  }
  return context;
}