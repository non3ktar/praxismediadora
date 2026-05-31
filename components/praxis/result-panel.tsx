"use client"

import { useState } from "react"
import { Bot, ClipboardCheck, Copy, CheckCheck, Brain } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  prompt: string | null
}

export function ResultPanel({ prompt }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!prompt) return
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(prompt)
      } else {
        const textarea = document.getElementById("generated-prompt-textarea") as HTMLTextAreaElement | null
        if (!textarea) throw new Error("no textarea")
        textarea.select()
        textarea.setSelectionRange(0, 99999)
        document.execCommand("copy")
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      toast.error("Erro ao copiar o texto. Por favor, copie manualmente (Ctrl+C).")
    }
  }

  return (
    <div className="w-full lg:w-8/12 flex flex-col">
      <div className="bg-card rounded-2xl shadow-xl border border-border flex-1 flex flex-col overflow-hidden min-h-[60vh]">
        {/* Header estilo editor */}
        <div className="bg-secondary/70 border-b border-border p-4 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium text-muted-foreground font-mono">Script_de_Intervencao.md</span>
        </div>

        <div className="flex-1 overflow-y-auto relative">
          {!prompt ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-secondary/30">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Bot className="h-10 w-10 text-primary/50" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Aguardando Parâmetros</h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Preencha o formulário ao lado para gerar o seu Super Prompt metodológico e aplicá-lo em uma Inteligência
                Artificial.
              </p>
            </div>
          ) : (
            <div className="flex flex-col p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 shadow-sm border border-emerald-200">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Seu Super Prompt está pronto!</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Siga os 2 passos abaixo para gerar sua aula em qualquer IA gratuita.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Passo 1 */}
                <div className="bg-secondary/60 p-5 rounded-xl border border-border shadow-sm">
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                      <span className="bg-slate-800 text-white w-5 h-5 rounded flex items-center justify-center text-xs">
                        1
                      </span>{" "}
                      Copie o texto metodológico:
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCopy}
                      className={
                        copied
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700"
                          : "bg-card"
                      }
                    >
                      {copied ? (
                        <>
                          <CheckCheck className="h-4 w-4" /> Copiado com Sucesso!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copiar Prompt
                        </>
                      )}
                    </Button>
                  </div>
                  <Textarea
                    id="generated-prompt-textarea"
                    readOnly
                    value={prompt}
                    className="w-full h-64 bg-card font-mono text-sm text-muted-foreground resize-none"
                  />
                </div>

                {/* Passo 2 */}
                <div>
                  <span className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="bg-slate-800 text-white w-5 h-5 rounded flex items-center justify-center text-xs">
                      2
                    </span>{" "}
                    Cole o texto na Inteligência Artificial:
                  </span>
                  <a
                    href="https://claude.ai/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-5 rounded-xl border border-orange-200 bg-gradient-to-b from-orange-50 to-card hover:border-orange-400 hover:shadow-md transition-all group cursor-pointer mt-2"
                  >
                    <Brain className="h-8 w-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-foreground text-base">Claude (claude.ai)</span>
                    <span className="text-xs text-muted-foreground text-center mt-1 max-w-md leading-relaxed">
                      Exclusivamente recomendado devido à sua altíssima empatia e aderência à nuance pedagógica e
                      teórica exigida neste tipo de mediação.
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
