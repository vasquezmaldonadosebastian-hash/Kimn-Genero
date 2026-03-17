/*
 * Indicadores — Observatorio de Indicadores de Género
 * Design: Two-column layout (sidebar + main), dashboard viewer, category navigation
 * Colors: #F5F4F8 bg, white cards, #673AB7 accents
 */

import { useState, useEffect } from "react";
import { useSearch } from "wouter";
import { categorias } from "@/lib/indicadores-data";
import IndicadoresSidebar from "@/components/IndicadoresSidebar";
import DashboardViewer from "@/components/DashboardViewer";
import { ChevronRight, LayoutGrid } from "lucide-react";

export default function Indicadores() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCat = params.get("cat") || categorias[0].id;

  const [categoriaActiva, setCategoriaActiva] = useState(initialCat);
  const [indicadorActivo, setIndicadorActivo] = useState(
    () => categorias.find((c) => c.id === initialCat)?.indicadores[0]?.id || categorias[0].indicadores[0].id
  );

  // Sync URL param
  useEffect(() => {
    const cat = params.get("cat");
    if (cat && cat !== categoriaActiva) {
      const found = categorias.find((c) => c.id === cat);
      if (found) {
        setCategoriaActiva(cat);
        setIndicadorActivo(found.indicadores[0].id);
      }
    }
  }, [search]);

  const handleSelect = (catId: string, indId: string) => {
    setCategoriaActiva(catId);
    setIndicadorActivo(indId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categoriaData = categorias.find((c) => c.id === categoriaActiva);
  const indicadorData = categoriaData?.indicadores.find((i) => i.id === indicadorActivo);

  return (
    <div className="min-h-screen bg-[#F5F4F8]">
      {/* Page header */}
      <div
        className="bg-white border-b border-[#EDE7F6]"
        style={{ background: "linear-gradient(180deg, #F8F6FC 0%, #FFFFFF 100%)" }}
      >
        <div className="container py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <a href="/" className="hover:text-[#673AB7] transition-colors">Inicio</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#673AB7] font-medium">Indicadores</span>
            {categoriaData && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-600">{categoriaData.label}</span>
              </>
            )}
          </nav>

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LayoutGrid className="w-5 h-5 text-[#673AB7]" />
                <h1
                  className="text-2xl font-bold text-[#1A0A2E]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Indicadores de Género
                </h1>
              </div>
              {categoriaData && (
                <p className="text-sm text-gray-500 max-w-xl">
                  {categoriaData.descripcion}
                </p>
              )}
            </div>

            {/* Category badge */}
            {categoriaData && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#EDE7F6] rounded-lg flex-shrink-0">
                <span className="text-xl">{categoriaData.icono}</span>
                <div>
                  <div className="text-xs text-[#673AB7] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {categoriaData.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {categoriaData.indicadores.length} indicadores
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sub-indicator tabs (when category has multiple indicators) */}
          {categoriaData && categoriaData.indicadores.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {categoriaData.indicadores.map((ind) => (
                <button
                  key={ind.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    ind.id === indicadorActivo
                      ? "bg-[#673AB7] text-white shadow-sm"
                      : "bg-white text-gray-600 hover:bg-[#EDE7F6] hover:text-[#673AB7] border border-[#EDE7F6]"
                  }`}
                  onClick={() => handleSelect(categoriaActiva, ind.id)}
                >
                  {ind.titulo}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main layout */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <IndicadoresSidebar
            categorias={categorias}
            categoriaActiva={categoriaActiva}
            indicadorActivo={indicadorActivo}
            onSelect={handleSelect}
          />

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {indicadorData ? (
              <DashboardViewer key={indicadorData.id} indicador={indicadorData} />
            ) : (
              <div className="flex items-center justify-center h-64 bg-white rounded-xl border border-[#EDE7F6]">
                <p className="text-gray-400 text-sm">Seleccione un indicador del menú lateral</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
