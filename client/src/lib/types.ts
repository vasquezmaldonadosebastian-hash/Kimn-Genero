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
  dashboardUrl?: string;
  metadata?: Record<string, unknown>;
}

export interface IndicatorCategory {
  id: string;
  nombre: string;
  descripcion?: string;
  icono?: string;
  indicadores: Indicator[];
}

export interface Dashboard {
  id: string;
  titulo: string;
  url: string;
  tipo: 'power-bi' | 'tableau' | 'iframe';
  ancho?: number;
  alto?: number;
}