"use client"

import { useState } from "react"
import { Sidebar } from "@/components/praxis/sidebar"
import { InterventionForm } from "@/components/praxis/intervention-form"
import { ResultPanel } from "@/components/praxis/result-panel"
import { type FormData, INITIAL_FORM_DATA, buildSystemPrompt } from "@/lib/praxis"

export default function Page() {
  const [data, setData] = useState<FormData>(INITIAL_FORM_DATA)
  const [prompt, setPrompt] = useState<string | null>(null)

  const handleChange = (patch: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...patch }))
  }

  const handleGenerate = () => {
    setPrompt(buildSystemPrompt(data))
  }

  const handleClear = () => {
    setData(INITIAL_FORM_DATA)
    setPrompt(null)
  }

  return (
    <div className="lg:h-screen lg:flex lg:overflow-hidden text-foreground">
      <Sidebar />

      <main className="flex-1 flex flex-col lg:h-screen lg:overflow-hidden bg-background relative">
        <header className="bg-card border-b border-border px-6 md:px-8 py-6 z-10">
          <h2 className="text-2xl font-bold text-foreground text-balance">Criar Intervenção Mediada</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Preencha os dados estruturais para gerar o script do professor.
          </p>
        </header>

        <div className="flex-1 lg:overflow-y-auto p-6 md:p-8 flex flex-col lg:flex-row gap-8">
          <InterventionForm
            data={data}
            onChange={handleChange}
            onGenerate={handleGenerate}
            onClear={handleClear}
          />
          <ResultPanel prompt={prompt} />
        </div>
      </main>
    </div>
  )
}
