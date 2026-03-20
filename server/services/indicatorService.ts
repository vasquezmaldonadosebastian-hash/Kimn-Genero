import type { Indicator, IndicatorCategory } from '@shared/types';

let indicators: Indicator[] = [];
let categories: IndicatorCategory[] = [];

export function initializeIndicators(data: Indicator[]) {
  indicators = data;
  categories = groupByCategory(data);
}

function groupByCategory(data: Indicator[]): IndicatorCategory[] {
  const grouped = new Map<string, Indicator[]>();

  data.forEach(indicator => {
    const cat = indicator.categoria || 'Sin categoría';
    if (!grouped.has(cat)) {
      grouped.set(cat, []);
    }
    grouped.get(cat)!.push(indicator);
  });

  return Array.from(grouped.entries()).map(([name, items]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    nombre: name,
    indicadores: items,
  }));
}

export function getIndicators(): Indicator[] {
  return indicators;
}

export function getIndicator(id: string): Indicator | undefined {
  return indicators.find(ind => ind.id === id);
}

export function getCategories(): IndicatorCategory[] {
  return categories;
}

export function getIndicatorsByCategory(categoryId: string): Indicator[] {
  const category = categories.find(cat => cat.id === categoryId);
  return category?.indicadores || [];
}