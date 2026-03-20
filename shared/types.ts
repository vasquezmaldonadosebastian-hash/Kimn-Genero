export interface Indicator {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  unidad: string;
  valor: number;
  actualizacion: string;
  metodologia?: string;
  fuente?: string;
  metadata?: Record<string, unknown>;
}

export interface IndicatorCategory {
  id: string;
  nombre: string;
  descripcion?: string;
  indicadores: Indicator[];
}