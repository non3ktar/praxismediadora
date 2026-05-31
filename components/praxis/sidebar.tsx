"use client"

import { Brain, Wrench, ScanEye, BookOpenCheck, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TheoryDialog } from "./theory-dialog"
import { DidacticDialog } from "./didactic-dialog"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-80 lg:shrink-0 bg-slate-900 text-white flex flex-col p-6 lg:h-screen lg:overflow-y-auto z-10 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary p-2 rounded-lg">
          <Brain className="h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">
          Práxis<span className="text-indigo-300">Mediadora</span>
        </h1>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Fundamento Epistemológico
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Este motor de IA opera sob a integração materialista-histórica de Vigotski e a modificabilidade estrutural
            de Feuerstein.
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-2 mb-2 text-indigo-300">
            <ScanEye className="h-4 w-4" />
            <h3 className="font-semibold text-sm">A Lente Vigotskiana</h3>
          </div>
          <p className="text-xs text-slate-300 mb-2 leading-relaxed">
            Mapeia a <b>Zona de Desenvolvimento Proximal (ZDP)</b> considerando as condições materiais e de pobreza
            extrema.
          </p>
          <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1">
            <li>Desenvolvimento Real</li>
            <li>Desenvolvimento Potencial</li>
            <li>Ferramentas Histórico-Culturais</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-2 mb-2 text-indigo-300">
            <Wrench className="h-4 w-4" />
            <h3 className="font-semibold text-sm">A Lente de Feuerstein</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Aplica a <b>Experiência de Aprendizagem Mediada (EAM)</b> corrigindo falhas cognitivas.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <TheoryDialog
            trigger={
              <Button
                variant="outline"
                className="w-full bg-slate-800 hover:bg-slate-700 text-indigo-200 hover:text-indigo-100 border-indigo-500/30 py-6 text-sm font-medium"
              >
                <BookOpenCheck className="h-4 w-4" /> Por que isso funciona?
              </Button>
            }
          />
          <DidacticDialog
            trigger={
              <Button
                variant="outline"
                className="w-full bg-slate-800 hover:bg-slate-700 text-emerald-300 hover:text-emerald-200 border-emerald-500/30 py-6 text-sm font-medium"
              >
                <Presentation className="h-4 w-4" /> Resumo Teórico Didático
              </Button>
            }
          />
        </div>
      </div>
    </aside>
  )
}
