/*
 * Footer — Observatorio de Indicadores de Género
 * Design: Dark purple background, three-column layout
 * Columns: About | Links | Contact
 */

import { BarChart3, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A2E] text-white">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#673AB7] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  OBSERVATORIO
                </div>
                <div className="text-xs text-[#CE93D8] font-medium tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Indicadores de Género
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              Plataforma institucional de visualización de indicadores de género. Datos desagregados para el análisis de brechas, participación y equidad.
            </p>
            {/* Partner logos placeholder */}
            <div className="flex flex-wrap gap-3">
              <div className="h-8 px-3 bg-white/10 rounded flex items-center text-xs text-gray-300 font-medium">
                Institución A
              </div>
              <div className="h-8 px-3 bg-white/10 rounded flex items-center text-xs text-gray-300 font-medium">
                Institución B
              </div>
              <div className="h-8 px-3 bg-white/10 rounded flex items-center text-xs text-gray-300 font-medium">
                Institución C
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", href: "/" },
                { label: "Indicadores", href: "/indicadores" },
                { label: "Metodología", href: "/metodologia" },
                { label: "Glosario", href: "/glosario" },
                { label: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#CE93D8] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#673AB7] inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-6 mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                "Política de Privacidad",
                "Términos de Uso",
                "Accesibilidad",
              ].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-[#CE93D8] transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#CE93D8] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Consultas sobre datos</div>
                  <a href="mailto:observatorio@institucion.cl" className="text-sm text-gray-200 hover:text-[#CE93D8] transition-colors">
                    observatorio@institucion.cl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#CE93D8] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Teléfono</div>
                  <span className="text-sm text-gray-200">+56 2 XXXX XXXX</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#CE93D8] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Dirección</div>
                  <span className="text-sm text-gray-200">Av. Institución 1234, Chile</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed">
                La calidad de las cifras presentadas es de exclusiva responsabilidad de la institución productora del indicador.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Observatorio de Indicadores de Género. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Datos actualizados periódicamente · Fuentes: registros institucionales y encuestas oficiales
          </p>
        </div>
      </div>
    </footer>
  );
}
