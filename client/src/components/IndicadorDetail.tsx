/*
 * IndicadorDetail — Página individual de indicador
 * Design: Estructura del Proto_observatorio_genero.html adaptada a React
 * Incluye: Hero, KPIs, Dashboard con iframe, Ficha técnica, Info cards
 */

import { useState } from "react";
import { ChevronDown, RefreshCw, Expand, Share2, Download, Info } from "lucide-react";

interface IndicadorData {
  "Nombre del indicador": string;
  "Código del indicador": string;
  "Descripción": string;
  "Objetivo del Indicador": string;
  "Formula del cálculo": string;
  "Unidad de medida": string;
  "Frecuencia de Medición": string;
  "Fuente de Dato": string;
  "Responsable de Calculo": string;
  "Responsable de verificar": string;
  "Fecha de Corte": string;
  "Estado del Indicador": string;
  "Área": string;
  "Dimensión": string;
  "Alcance": string;
  "Instructivo de Cálculo": string;
  "Enlace visualizacion": string;
  [key: string]: any;
}

interface IndicadorDetailProps {
  indicador: IndicadorData;
}

export default function IndicadorDetail({ indicador }: IndicadorDetailProps) {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    fuentes: true,
    metodologia: false,
    notas: false,
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Determinar si tiene iframe (solo el primero)
  const tieneIframe = indicador["Nro indicador"] === 1.0;
  const iframeSrc: string | undefined = tieneIframe
    ? "https://app.powerbi.com/view?r=eyJrIjoiODY2ZGRjNGEtZDEzMC00ZmMyLWFlY2YtOGM3N2E1ZTMwODFkIiwidCI6IjBkODQ5NzNiLThiYjctNDQ1OC05YzI5LTIxZmFiNDZmMTUyYyIsImMiOjR9&pageName=5a15333ea46c0791c848"
    : undefined;

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-br from-[#3A1A45] via-[#5E2750] to-[#8E44AD] relative overflow-hidden py-16">
        {/* Decorative circles */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/4 -top-48 -right-24 pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/4 -bottom-24 left-12 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-semibold uppercase tracking-wider">
            <span>📊</span> Indicador {indicador["Código del indicador"]}
          </div>

          <h1
            className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {indicador["Nombre del indicador"]}
          </h1>

          <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
            {indicador["Descripción"]}
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-white text-[#3A1A45] font-bold rounded-lg hover:shadow-lg transition-all">
              Explorar Datos
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/12 transition-all">
              Descargar Reporte
            </button>
          </div>
        </div>
      </section>

      {/* ═══ WAVE SEPARATOR ═══ */}
      <div
        className="w-full h-12 bg-[#F8F9FA]"
        style={{
          clipPath: "ellipse(55% 100% at 50% 0%)",
          marginTop: "-1px",
        }}
      />

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#8E44AD]">
            <div className="text-sm text-gray-500 mb-2">Unidad de Medida</div>
            <div className="text-3xl font-black text-[#3A1A45]" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {indicador["Unidad de medida"] || "N/A"}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#0891B2]">
            <div className="text-sm text-gray-500 mb-2">Frecuencia</div>
            <div className="text-2xl font-bold text-[#0891B2]" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {indicador["Frecuencia de Medición"] || "N/A"}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#065F46]">
            <div className="text-sm text-gray-500 mb-2">Estado</div>
            <div className="text-lg font-bold text-[#065F46]">{indicador["Estado del Indicador"] || "N/A"}</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#92400E]">
            <div className="text-sm text-gray-500 mb-2">Corte de Datos</div>
            <div className="text-sm font-semibold text-[#92400E]">
              {indicador["Fecha de Corte"] ? new Date(indicador["Fecha de Corte"]).toLocaleDateString("es-CL") : "N/A"}
            </div>
          </div>
        </div>

        {/* ── Dashboard Card ── */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F3E8F9] border-b border-[#E5D4F0]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#27AE60]" />
              <div>
                <div className="font-semibold text-[#3A1A45]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {tieneIframe ? "Visualización Interactiva — Power BI" : "Visualización Pendiente"}
                </div>
                <div className="text-xs text-gray-500">Fuente: {indicador["Fuente de Dato"] || "Por definir"}</div>
              </div>
            </div>

            {tieneIframe && (
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/50 rounded-lg transition-colors" title="Actualizar">
                  <RefreshCw className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-white/50 rounded-lg transition-colors" title="Pantalla completa">
                  <Expand className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-white/50 rounded-lg transition-colors" title="Compartir">
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            )}
          </div>

          {/* Iframe or Placeholder */}
          <div className="relative w-full bg-gradient-to-br from-[#F3E8F9] to-[#EDE7F6]" style={{ minHeight: "500px" }}>
            {tieneIframe ? (
              <iframe
                title="PreVersion"
                width="100%"
                height="500"
                src={iframeSrc}
                frameBorder="0"
                allowFullScreen={true}
                style={{ display: "block" }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16 px-6">
                <div className="w-20 h-20 rounded-3xl bg-[#F3E8F9] flex items-center justify-center mb-6">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-[#4B5563] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Visualización por Configurar
                </h3>
                <p className="text-center text-gray-500 max-w-md mb-6">
                  Este indicador aún no cuenta con una visualización interactiva. La integración del dashboard de Power BI o Tableau está en proceso.
                </p>
                <div className="bg-white rounded-lg p-4 border border-[#E5D4F0] text-sm text-gray-600">
                  <strong>Responsable de cálculo:</strong> {indicador["Responsable de Calculo"] || "Por asignar"}
                </div>
              </div>
            )}
          </div>

          {/* Bottom toolbar */}
          {tieneIframe && (
            <div className="flex items-center justify-between px-6 py-3 bg-[#F8F9FA] border-t border-gray-100 flex-wrap gap-3">
              <span className="text-xs text-gray-600 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#8E44AD]" />
                Los datos se actualizan siguiendo el cronograma institucional de indicadores.
              </span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Descargar imagen">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Info Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F3E8F9] flex items-center justify-center text-[#8E44AD]">
                🎯
              </div>
              <h3 className="font-bold text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Objetivo
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{indicador["Objetivo del Indicador"] || "Por definir"}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0891B2]">
                📈
              </div>
              <h3 className="font-bold text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Fórmula
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-mono bg-gray-50 p-3 rounded">
              {indicador["Formula del cálculo"] || "Por definir"}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#D1FAE5] flex items-center justify-center text-[#065F46]">
                📅
              </div>
              <h3 className="font-bold text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Periodicidad
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Actualización <strong>{indicador["Frecuencia de Medición"]}</strong> de los datos según cronograma institucional.
            </p>
          </div>
        </div>

        {/* ── Ficha Técnica (Acordeón) ── */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-[#3A1A45] rounded" />
            <h2 className="text-2xl font-black text-[#3A1A45]" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Ficha Técnica y Metodología
            </h2>
          </div>

          {/* Acordeón 1: Fuentes */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-3">
            <button
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F3E8F9] transition-colors"
              onClick={() => toggleAccordion("fuentes")}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8F9] flex items-center justify-center text-[#8E44AD]">
                  📊
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Fuentes de Datos</h3>
                  <p className="text-xs text-gray-500">Sistemas de origen y organismos productores</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${openAccordions.fuentes ? "rotate-180" : ""}`}
              />
            </button>

            {openAccordions.fuentes && (
              <div className="px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Fuente administrativa:</strong> {indicador["Fuente administrativa"] || "Por definir"}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Fuente de datos:</strong> {indicador["Fuente de Dato"] || "Por definir"}
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-600">
                    <strong>Responsable de registro:</strong> {indicador["Responsable de registro"] || "Por asignar"}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Responsable de cálculo:</strong> {indicador["Responsable de Calculo"] || "Por asignar"}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Responsable de verificación:</strong> {indicador["Responsable de verificar"] || "Por asignar"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Acordeón 2: Metodología */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-3">
            <button
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F3E8F9] transition-colors"
              onClick={() => toggleAccordion("metodologia")}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0891B2]">
                  📐
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Metodología</h3>
                  <p className="text-xs text-gray-500">Fórmula de cálculo e instructivo</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${openAccordions.metodologia ? "rotate-180" : ""}`}
              />
            </button>

            {openAccordions.metodologia && (
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-semibold mb-2">FÓRMULA DE CÁLCULO</p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-xs text-gray-700 overflow-x-auto">
                    {indicador["Formula del cálculo"] || "Por definir"}
                  </div>
                </div>

                {indicador["Instructivo de Cálculo"] && indicador["Instructivo de Cálculo"] !== "falta" && (
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-2">INSTRUCTIVO DETALLADO</p>
                    <a
                      href={indicador["Instructivo de Cálculo"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E44AD] text-sm font-semibold hover:underline flex items-center gap-2"
                    >
                      📄 Ver documento de instructivo
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Acordeón 3: Notas Técnicas */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F3E8F9] transition-colors"
              onClick={() => toggleAccordion("notas")}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D1FAE5] flex items-center justify-center text-[#065F46]">
                  ℹ️
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Información Técnica</h3>
                  <p className="text-xs text-gray-500">Detalles adicionales y contexto</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${openAccordions.notas ? "rotate-180" : ""}`}
              />
            </button>

            {openAccordions.notas && (
              <div className="px-6 py-4 border-t border-gray-100 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Área</p>
                  <p className="text-sm text-gray-600">{indicador["Área"] || "Por definir"}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Dimensión</p>
                  <p className="text-sm text-gray-600">{indicador["Dimensión"] || "Por definir"}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Alcance</p>
                  <p className="text-sm text-gray-600">{indicador["Alcance"] || "Por definir"}</p>
                </div>
                <div className="bg-[#FFF8E1] border-l-4 border-[#F59E0B] rounded-r-lg p-3 mt-4">
                  <p className="text-xs text-[#78350F]">
                    <strong>⚠️ Nota:</strong> La calidad de las cifras presentadas es de exclusiva responsabilidad de la institución productora del indicador.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
