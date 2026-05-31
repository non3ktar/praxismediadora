"use client"

import type { ReactNode } from "react"
import { ArrowRight, Puzzle, Waves } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DidacticDialog({ trigger }: { trigger: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-8 md:p-10">
          <DialogHeader className="text-center mb-8 items-center">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2 inline-block">
              Tradução Prática
            </span>
            <DialogTitle className="text-2xl font-bold text-foreground text-balance">
              As Teorias na Prática (Sem Jargões)
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              Um resumo simples e direto do que Vigotski e Feuerstein quiseram dizer para o dia a dia da sala de aula
              real.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-muted-foreground text-sm md:text-base">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <Waves className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold text-xl text-foreground">Lev Vigotski e a &quot;Ponte&quot;</h3>
              </div>
              <p className="mb-3 leading-relaxed">
                <strong>A ideia central:</strong> Ninguém nasce &quot;inteligente&quot; ou &quot;burro&quot;. A
                inteligência é construída de fora para dentro, através do contato com os outros e com o ambiente. Se um
                aluno não aprende, não é porque falta cérebro; é porque faltou a ferramenta certa na hora certa.
              </p>
              <p className="mb-3 leading-relaxed">
                <strong>O que é a ZDP (Zona de Desenvolvimento Proximal)?</strong>
                <br />
                Imagine um rio.
                <br />• <em>Onde o aluno está pisando agora</em> é o que ele sabe fazer sozinho (Desenvolvimento Real).
                <br />• <em>A outra margem</em> é o que ele não consegue fazer de jeito nenhum (ainda).
                <br />• <em>A ZDP</em> é a ponte. É aquilo que ele não faz sozinho, mas{" "}
                <b>consegue fazer hoje se você der a mão para ele</b>.
              </p>
              <p className="text-blue-800 font-semibold bg-blue-100/60 p-3 rounded-lg border border-blue-200 flex gap-2 leading-relaxed">
                <ArrowRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>
                  Na prática: Sua aula nunca deve ser fácil demais (a margem de cá) nem difícil demais (a margem de lá).
                  A sua intervenção tem que ser exatamente a ponte!
                </span>
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="flex items-center gap-3 mb-3">
                <Puzzle className="h-6 w-6 text-amber-500" />
                <h3 className="font-bold text-xl text-foreground">Reuven Feuerstein e o &quot;Filtro&quot;</h3>
              </div>
              <p className="mb-3 leading-relaxed">
                <strong>A ideia central:</strong> O cérebro humano é igual a um plástico maleável: pode ser modificado
                estruturalmente em qualquer idade. Não importa se o aluno sofreu privações severas, o raciocínio dele
                pode ser consertado.
              </p>
              <p className="mb-3 leading-relaxed">
                <strong>O que é o Professor Mediador?</strong>
                <br />O professor comum apenas &quot;joga&quot; o conteúdo na lousa e espera que o aluno entenda (como
                jogar água numa esponja furada). O Professor <b>Mediador</b> se coloca no meio, entre o aluno e o mundo.
                Ele atua como um <i>filtro</i> ou um <i>par de óculos</i>, ajudando o aluno a organizar a bagunça na
                cabeça dele.
              </p>
              <p className="text-amber-800 font-semibold bg-amber-100/60 p-3 rounded-lg border border-amber-200 flex gap-2 leading-relaxed">
                <ArrowRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>
                  Na prática: Você não explica só a matéria. Você ensina o aluno <i>como</i> pensar na matéria (como ler
                  sem pular linha, como comparar duas coisas sem se perder, como falar sem achar que você lê a mente
                  dele).
                </span>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
