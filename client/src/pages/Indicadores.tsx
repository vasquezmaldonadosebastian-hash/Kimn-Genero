/*
 * Indicadores — Listado de 19 indicadores
 * Design: Grid de tarjetas con enlaces a cada indicador individual
 * Colors: #F5F4F8 bg, white cards, #673AB7 accents
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Search, Filter } from "lucide-react";

interface IndicadorData {
  "Nombre del indicador": string;
  "Nro indicador": number;
  "Código del indicador": string;
  "Descripción": string;
  "Área": string;
  "Dimensión": string;
  "Unidad de medida": string;
  "Frecuencia de Medición": string;
  [key: string]: any;
}

export default function Indicadores() {
  const [indicadores, setIndicadores] = useState<IndicadorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterArea, setFilterArea] = useState("todos");

  useEffect(() => {
    const loadIndicadores = async () => {
      try {
        const response = await fetch("/indicadores.json");
        if (!response.ok) throw new Error("No se pudo cargar los indicadores");
        const data = await response.json();
        setIndicadores(data);
      } catch (err) {
        console.error("Error loading indicadores:", err);
      } finally {
        setLoading(false);
      }
    };

    loadIndicadores();
  }, []);

  // Filtrar indicadores
  const filtrados = indicadores.filter((ind) => {
    const matchesSearch =
      ind["Nombre del indicador"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind["Código del indicador"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind["Descripción"]?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesArea = filterArea === "todos" || ind["Área"] === filterArea;

    return matchesSearch && matchesArea;
  });

  // Obtener áreas únicas
  const areas = ["todos", ...Array.from(new Set(indicadores.map((ind) => ind["Área"])))];

  // Mapeo de colores por área
  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    Gestión: { bg: "#F3E8F9", border: "#E5D4F0", text: "#8E44AD" },
    GESTIÓN: { bg: "#F3E8F9", border: "#E5D4F0", text: "#8E44AD" },
    DOCENCIA: { bg: "#E0F2FE", border: "#BAE6FD", text: "#0891B2" },
    Docencia: { bg: "#E0F2FE", border: "#BAE6FD", text: "#0891B2" },
  };

  const getColorForArea = (area: string) => {
    return colorMap[area] || { bg: "#F0F9FF", border: "#E0F2FE", text: "#0369A1" };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F4F8] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8E44AD] mb-4" />
          <p className="text-gray-600">Cargando indicadores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4F8]">
      {/* Page header */}
      <div className="bg-white border-b border-[#EDE7F6]">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
            <a href="/" className="hover:text-[#673AB7] transition-colors">
              Inicio
            </a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#673AB7] font-medium">Indicadores</span>
          </nav>

          <h1 className="text-3xl font-black text-[#3A1A45] mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Sistema de Indicadores de Género
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Explora los {indicadores.length} indicadores que conforman el observatorio de género institucional. Cada indicador incluye
            su descripción, metodología, fuentes de datos y visualizaciones interactivas.
          </p>
        </div>
      </div>

      {/* Filters and search */}
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, código o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#EDE7F6] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8E44AD] focus:border-transparent"
            />
          </div>

          {/* Filter by area */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-[#EDE7F6] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8E44AD] focus:border-transparent"
            >
              {(areas as string[]).map((area) => (
                <option key={area} value={area}>
                  {area === "todos" ? "Todas las áreas" : area}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Mostrando <strong>{filtrados.length}</strong> de <strong>{indicadores.length}</strong> indicadores
          </p>
        </div>

        {/* Grid de indicadores */}
        {filtrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrados.map((indicador) => {
              const color = getColorForArea(indicador["Área"]);
              return (
                <Link key={indicador["Nro indicador"]} href={`/indicador/${indicador["Nro indicador"]}`}>
                  <a className="group h-full">
                    <div
                      className="h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#EDE7F6]"
                    >
                      {/* Header con color por área */}
                      <div
                        className="p-4"
                        style={{
                          backgroundColor: color.bg,
                          borderBottom: `2px solid ${color.border}`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span
                            className="inline-block px-2.5 py-1 rounded-full text-xs font-bold"
                            style={{ backgroundColor: color.text, color: "white" }}
                          >
                            {indicador["Código del indicador"]}
                          </span>
                          <span className="text-xs font-semibold text-gray-500">
                            {indicador["Frecuencia de Medición"]}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{indicador["Área"]}</p>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3
                          className="text-lg font-bold text-[#3A1A45] mb-2 line-clamp-2 group-hover:text-[#8E44AD] transition-colors"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {indicador["Nombre del indicador"]}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                          {indicador["Descripción"]}
                        </p>

                        {/* Meta info */}
                        <div className="space-y-2 mb-4 pt-4 border-t border-gray-100">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Unidad:</span>
                            <span className="font-semibold text-gray-700">{indicador["Unidad de medida"] || "N/A"}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Dimensión:</span>
                            <span className="font-semibold text-gray-700 text-right max-w-xs">
                              {indicador["Dimensión"] || "N/A"}
                            </span>
                          </div>
                        </div>

                        {/* CTA */}
                        <button
                          className="w-full px-4 py-2.5 rounded-lg font-semibold text-sm transition-all"
                          style={{
                            backgroundColor: color.text,
                            color: "white",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.9";
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          Ver Indicador →
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border border-[#EDE7F6]">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No se encontraron indicadores</h3>
            <p className="text-gray-600 text-center max-w-md">
              Intenta ajustar tus filtros de búsqueda o área para encontrar lo que buscas.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterArea("todos");
              }}
              className="mt-4 px-6 py-2.5 bg-[#8E44AD] text-white font-semibold rounded-lg hover:bg-[#5E2750] transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
