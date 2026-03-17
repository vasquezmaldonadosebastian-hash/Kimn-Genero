/*
 * Metodología — Observatorio de Indicadores de Género
 * Design: Clean academic layout with sections, blockquotes, and structured content
 */

import { BookOpen, Target, Database, RefreshCw, CheckCircle2 } from "lucide-react";

const principios = [
  {
    icono: <Target className="w-5 h-5 text-[#673AB7]" />,
    titulo: "Pertinencia",
    descripcion: "Los indicadores seleccionados responden a necesidades concretas de información para el diseño y evaluación de políticas públicas con enfoque de género.",
  },
  {
    icono: <CheckCircle2 className="w-5 h-5 text-[#673AB7]" />,
    titulo: "Confiabilidad",
    descripcion: "Los datos provienen de fuentes oficiales, encuestas estadísticas con diseño probabilístico y registros administrativos validados por instituciones del Estado.",
  },
  {
    icono: <Database className="w-5 h-5 text-[#673AB7]" />,
    titulo: "Desagregación",
    descripcion: "Todos los indicadores se presentan desagregados por sexo como mínimo. Cuando la información lo permite, se incorporan desagregaciones adicionales por edad, región y nivel socioeconómico.",
  },
  {
    icono: <RefreshCw className="w-5 h-5 text-[#673AB7]" />,
    titulo: "Actualización periódica",
    descripcion: "Los indicadores se actualizan con la periodicidad de sus fuentes primarias, garantizando que la plataforma refleje la situación más reciente disponible.",
  },
];

const dimensiones = [
  { nombre: "Mercado Laboral", indicadores: ["Brecha salarial", "Tasa de participación", "Desempleo por sexo"] },
  { nombre: "Educación y Ciencia", indicadores: ["Matrícula por sexo", "Titulación", "Investigadoras"] },
  { nombre: "Cargos Directivos", indicadores: ["Sector público", "Directorios privados", "Poder Judicial"] },
  { nombre: "Violencia de Género", indicadores: ["Femicidios", "Violencia intrafamiliar", "Acceso a justicia"] },
  { nombre: "Salud", indicadores: ["Esperanza de vida", "Salud reproductiva", "Acceso a servicios"] },
  { nombre: "Uso del Tiempo", indicadores: ["Trabajo no remunerado", "Cuidados", "Trabajo doméstico"] },
];

export default function Metodologia() {
  return (
    <div className="min-h-screen bg-[#F5F4F8]">
      {/* Header */}
      <div
        className="bg-white border-b border-[#EDE7F6]"
        style={{ background: "linear-gradient(180deg, #F8F6FC 0%, #FFFFFF 100%)" }}
      >
        <div className="container py-10">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-[#673AB7]" />
            <span className="text-xs font-semibold text-[#673AB7] uppercase tracking-wider">Documentación</span>
          </div>
          <h1
            className="text-3xl font-bold text-[#1A0A2E] mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Metodología
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Marco conceptual, criterios de selección de indicadores y procedimientos de cálculo utilizados en el Observatorio de Indicadores de Género.
          </p>
        </div>
      </div>

      <div className="container py-10">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Marco conceptual */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-[#EDE7F6]">
            <h2
              className="text-xl font-bold text-[#1A0A2E] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Marco Conceptual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El Observatorio adopta el enfoque de género como marco analítico central, entendiendo el género como una construcción social que determina roles, responsabilidades y oportunidades diferenciadas para hombres y mujeres en la sociedad.
            </p>
            <blockquote className="border-l-4 border-[#673AB7] pl-5 py-3 bg-[#F8F6FC] rounded-r-lg my-6">
              <p className="text-sm text-gray-700 italic leading-relaxed">
                "Un indicador de género es una medida que señala el estado o nivel de las diferencias entre hombres y mujeres en un momento del tiempo, expresando en particular las desigualdades que resultan de la diferencia sexual o de género, con interés en aquellas que reflejan situaciones evitables o injustas."
              </p>
              <cite className="text-xs text-[#673AB7] font-semibold mt-2 block">— Instituto Nacional de Estadísticas (INE), 2019, p. 19</cite>
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              Los indicadores presentados en esta plataforma buscan visibilizar las brechas de género existentes en distintas dimensiones de la vida social, económica y política, proporcionando evidencia para el diseño, implementación y evaluación de políticas públicas orientadas a la igualdad de género.
            </p>
          </section>

          {/* Principios */}
          <section>
            <h2
              className="text-xl font-bold text-[#1A0A2E] mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Principios Rectores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principios.map((p) => (
                <div key={p.titulo} className="bg-white rounded-xl p-6 border border-[#EDE7F6] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EDE7F6] flex items-center justify-center">
                      {p.icono}
                    </div>
                    <h3
                      className="font-semibold text-[#1A0A2E]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {p.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dimensiones */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-[#EDE7F6]">
            <h2
              className="text-xl font-bold text-[#1A0A2E] mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Dimensiones de Análisis
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              El observatorio organiza los indicadores en seis dimensiones temáticas que cubren los principales ámbitos de desigualdad de género identificados en la literatura especializada y los marcos internacionales de derechos humanos.
            </p>
            <div className="space-y-3">
              {dimensiones.map((dim, i) => (
                <div key={dim.nombre} className="flex items-start gap-4 p-4 rounded-lg bg-[#F8F6FC] border border-[#EDE7F6]">
                  <div
                    className="w-7 h-7 rounded-full bg-[#673AB7] text-white flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-[#1A0A2E] text-sm mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {dim.nombre}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dim.indicadores.map((ind) => (
                        <span
                          key={ind}
                          className="px-2 py-0.5 bg-white text-[#673AB7] text-xs rounded-full border border-[#EDE7F6] font-medium"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Proceso de actualización */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-[#EDE7F6]">
            <h2
              className="text-xl font-bold text-[#1A0A2E] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Proceso de Actualización
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La actualización de los indicadores sigue el calendario de publicación de las fuentes primarias. El equipo técnico del Observatorio verifica la disponibilidad de nuevos datos, procesa la información según los procedimientos establecidos y actualiza las visualizaciones en la plataforma.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { periodo: "Mensual", descripcion: "Indicadores de empleo y mercado laboral (ENE)" },
                { periodo: "Trimestral", descripcion: "Indicadores de violencia y seguridad" },
                { periodo: "Anual", descripcion: "Indicadores de educación, salud y uso del tiempo" },
              ].map((item) => (
                <div key={item.periodo} className="text-center p-4 bg-[#F8F6FC] rounded-lg border border-[#EDE7F6]">
                  <div
                    className="text-lg font-bold text-[#673AB7] mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.periodo}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.descripcion}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-[#1A0A2E] rounded-xl p-6 text-white">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#673AB7]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#CE93D8] text-sm font-bold">i</span>
              </div>
              <div>
                <h3
                  className="font-semibold text-white mb-1 text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Nota sobre la calidad de los datos
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  La calidad de las cifras presentadas en esta plataforma es de exclusiva responsabilidad de la Universidad Católica de Temuco como institución productora del indicador. Si presenta consultas respecto a algún indicador, puede dirigirlas al equipo del Observatorio a través del formulario de contacto.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
