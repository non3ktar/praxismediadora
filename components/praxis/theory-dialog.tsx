"use client"

import type { ReactNode } from "react"
import { Map, Scissors, FileSignature } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TheoryDialog({ trigger }: { trigger: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-8 md:p-10">
          <DialogHeader className="text-center mb-10 items-center">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2 inline-block">
              Guia do Mediador
            </span>
            <DialogTitle className="text-3xl font-bold text-foreground text-balance">
              Por que esse planejamento funciona?
            </DialogTitle>
            <DialogDescription className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
              Seus alunos da escola pública não têm deficiência intelectual; eles têm uma história de privação de
              estímulos. Veja como nosso motor reverte isso.
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-7 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">O Mapa: Lev Vigotski</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Para Vigotski, a inteligência não nasce com a gente, ela é construída de fora para dentro. O menino
                pobre não tem &quot;atraso&quot;, ele apenas não teve acesso às ferramentas culturais adequadas.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <h4 className="font-bold text-blue-700 text-sm mb-2">A Zona de Desenvolvimento Proximal (ZDP)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  É a distância entre o que o aluno faz sozinho hoje e o que ele pode fazer amanhã se você der o
                  &quot;andaime&quot; certo. Esta IA cria o andaime exato para sua disciplina.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-7 border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <Scissors className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">O Bisturi: Reuven Feuerstein</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Feuerstein trabalhou com sobreviventes do Holocausto e provou: o cérebro pode ser modificado
                estruturalmente em qualquer idade. Não importa o trauma ou a pobreza.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100">
                <h4 className="font-bold text-amber-700 text-sm mb-2">Experiência de Aprendizagem Mediada</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O professor não é &quot;expositor de conteúdo&quot;. Ele é o Mediador que se interpõe entre o aluno e
                  o mundo, corrigindo como o aluno percebe, elabora e expressa as ideias.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-primary/5 rounded-2xl p-7 border border-primary/15">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <FileSignature className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground text-balance">
                Além dos PEIs Genéricos (Plano Educacional Individualizado)
              </h3>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
              <p>
                <strong className="text-primary font-bold">Em que medida nos aproximamos?</strong>
                <br />
                Assim como os PEIs autênticos (que buscam integrar alunos com necessidades especiais ou defasagens
                extremas), nosso objetivo é a <b>inclusão real e a personalização</b>. O respeito inegociável à
                realidade material do estudante e ao seu ponto de partida (sua ZDP) é o coração do nosso sistema.
              </p>
              <p>
                <strong className="text-primary font-bold">Como nos afastamos para criar uma nova abordagem?</strong>
                <br />O PEI genérico, frequentemente, descamba para o &quot;facilitacionismo&quot; — reduzir o volume de
                tarefas, simplificar a prova, pintar a atividade com desenhos ou isentar o aluno do desafio cognitivo.
                Nossa ferramenta <b>rejeita a pena e o rebaixamento de expectativas</b>. Ao invés de diminuir a barra,
                nós usamos a Modificabilidade Cognitiva para construir &quot;andaimes&quot; (Mediação), atacando a falha
                cognitiva estrutural para que o aluno consiga alcançar o raciocínio complexo esperado.
              </p>
              <p>
                <strong className="text-primary font-bold">Isso substitui os PEIs Genéricos?</strong>
                <br />
                Substitui a <i>prática pedagógica inerte</i> e burocrática atrelada a eles. Enquanto um PEI genérico na
                gaveta muitas vezes serve apenas como um &quot;atestado de déficit&quot; para cumprir tabela, esta
                inteligência artificial atua como a <b>execução cirúrgica do planejamento</b>. Ela transforma a intenção
                de inclusão em scripts literais (ação mediadora), focando no avanço intelectual prático e provável,
                superando a mera e passiva &quot;socialização&quot; escolar do aluno na sala de aula.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
