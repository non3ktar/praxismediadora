"use client"

import { useState } from "react"
import {
  MapPinned,
  Mic,
  ArrowLeftRight,
  Lightbulb,
  ChevronDown,
  Microscope,
  ClipboardList,
  Eraser,
  LogIn,
  Target,
} from "lucide-react"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import {
  type FormData,
  FASE_ENTRADA_OPTIONS,
  FASE_ELABORACAO_OPTIONS,
  FASE_SAIDA_OPTIONS,
} from "@/lib/praxis"

type Props = {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
  onGenerate: () => void
  onClear: () => void
}

const EXAMPLES = [
  {
    tag: "Linguagens",
    color: "border-indigo-200 bg-indigo-100 text-indigo-800",
    partida: "Conta uma fofoca ou história do bairro de forma oral, com começo, meio e fim.",
    chegada: "Escrever essa mesma história no papel no formato de um texto narrativo curto.",
  },
  {
    tag: "Matemática",
    color: "border-emerald-200 bg-emerald-100 text-emerald-800",
    partida: "Consegue calcular troco de cabeça perfeitamente quando compra algo no mercadinho.",
    chegada: "Resolver uma equação de 1º grau simples usando a mesma lógica do \"troco\".",
  },
  {
    tag: "Ciências",
    color: "border-amber-200 bg-amber-100 text-amber-800",
    partida: "Sabe por experiência empírica que a água da panela ferve e \"some\" no fogão.",
    chegada: "Compreender o conceito científico de 'evaporação' e aplicá-lo ao ciclo da chuva.",
  },
]

export function InterventionForm({ data, onChange, onGenerate, onClear }: Props) {
  const [examplesOpen, setExamplesOpen] = useState(false)

  const { supported, isRecording, toggle } = useSpeechRecognition({
    onResult: (transcript) => {
      onChange({ realidade: data.realidade ? data.realidade + " " + transcript : transcript })
    },
    onError: (message) => toast.error(message),
    onListeningStart: () => toast.info("Ouvindo... Pode falar."),
  })

  const handleMic = () => {
    if (!supported) {
      toast.error("Reconhecimento de voz não suportado neste navegador.")
      return
    }
    toggle()
  }

  return (
    <div className="w-full lg:w-4/12 space-y-6">
      {/* Bloco 1: Contexto e Materialidade */}
      <Card className="p-6 gap-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MapPinned className="h-5 w-5 text-primary" /> Contexto &amp; Materialidade
        </h3>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-sm">Disciplina e Tema</Label>
            <div className="flex gap-3">
              <Input
                value={data.disciplina}
                onChange={(e) => onChange({ disciplina: e.target.value })}
                placeholder="Ex: História"
                className="w-1/3"
              />
              <Input
                value={data.tema}
                onChange={(e) => onChange({ tema: e.target.value })}
                placeholder="Ex: Revolução Industrial"
                className="w-2/3"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm">Realidade Material do Aluno</Label>
            <div className="relative">
              <Textarea
                value={data.realidade}
                onChange={(e) => onChange({ realidade: e.target.value })}
                rows={2}
                placeholder="Ex: Alunos de periferia, sem acesso à internet, histórico de evasão escolar..."
                className="pr-11 resize-none"
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleMic}
                aria-label="Ditar Realidade"
                title="Ditar Realidade"
                className={
                  isRecording
                    ? "absolute top-2 right-2 text-destructive animate-pulse"
                    : "absolute top-2 right-2 text-muted-foreground hover:text-primary"
                }
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Bloco 2: ZDP (Vigotski) */}
      <Card className="p-6 gap-0 border-l-4 border-l-primary">
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-primary" /> A Ponte da Aprendizagem (ZDP)
          </h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Vigotski ensina que a aula falha se for muito fácil (tédio) ou muito difícil (frustração). A
            &quot;Ponte&quot; é a distância exata entre o que ele sabe hoje e o que ele vai aprender com sua ajuda agora.
          </p>
        </div>

        <Collapsible open={examplesOpen} onOpenChange={setExamplesOpen} className="mb-5">
          <CollapsibleTrigger className="text-xs text-primary font-semibold cursor-pointer flex items-center gap-1.5 hover:text-primary/80 transition-colors w-fit pb-1 border-b border-dashed border-primary/40">
            <Lightbulb className="h-3.5 w-3.5 text-amber-500" /> Ver exemplos de sala de aula
            <ChevronDown
              className={`h-3 w-3 transition-transform ${examplesOpen ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 bg-secondary/60 rounded-lg p-4 border border-primary/10 text-xs text-muted-foreground space-y-3">
            <p className="italic">
              A lógica é sempre puxar do conhecimento de mundo (concreto) para o saber escolar (abstrato):
            </p>
            {EXAMPLES.map((ex) => (
              <div key={ex.tag} className="flex gap-3 items-start border-l-2 border-border pl-2">
                <span
                  className={`font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider mt-0.5 border ${ex.color}`}
                >
                  {ex.tag}
                </span>
                <div className="space-y-1">
                  <p>
                    <b className="text-foreground">1. Partida:</b> {ex.partida}
                  </p>
                  <p>
                    <b className="text-foreground">2. Chegada:</b> {ex.chegada}
                  </p>
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <div className="space-y-5">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/15">
            <Label className="text-sm font-bold text-foreground mb-1 block">
              1. O Ponto de Partida (O que ele já consegue fazer sozinho?)
            </Label>
            <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
              Seja sincero sobre a realidade atual. Onde ele está ancorado hoje? (Não use termos abstratos)
              <br />
              <span className="text-primary font-medium inline-flex items-center gap-1">
                <LogIn className="h-3 w-3" />
                Ex:
              </span>{" "}
              &quot;Consegue calcular troco mentalmente na venda, mas erra no papel.&quot;
              <br />
              <span className="text-primary font-medium inline-flex items-center gap-1">
                <LogIn className="h-3 w-3" />
                Ex:
              </span>{" "}
              &quot;Ele lê uma notícia no celular, mas só olha a manchete e acredita em tudo.&quot;
            </p>
            <Input
              value={data.ndr}
              onChange={(e) => onChange({ ndr: e.target.value })}
              placeholder="Descreva aqui o ponto de partida do seu aluno..."
            />
          </div>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/15">
            <Label className="text-sm font-bold text-foreground mb-1 block">
              2. A Linha de Chegada (O que ele fará COM a sua ajuda hoje?)
            </Label>
            <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
              Qual é o próximo passo <b>lógico e alcançável</b> para o qual você vai &quot;puxar&quot; esse aluno?
              <br />
              <span className="text-emerald-600 font-medium inline-flex items-center gap-1">
                <Target className="h-3 w-3" />
                Ex:
              </span>{" "}
              &quot;Transformar a lógica mental do troco em uma equação escrita de 1º grau.&quot;
              <br />
              <span className="text-emerald-600 font-medium inline-flex items-center gap-1">
                <Target className="h-3 w-3" />
                Ex:
              </span>{" "}
              &quot;Aprender a desconfiar da manchete e buscar a fonte primária da notícia.&quot;
            </p>
            <Input
              value={data.ndp}
              onChange={(e) => onChange({ ndp: e.target.value })}
              placeholder="Descreva aqui qual o próximo passo alcançável de hoje..."
            />
          </div>
        </div>
      </Card>

      {/* Bloco 3: Funções Cognitivas (Feuerstein) */}
      <Card className="p-6 gap-0 border-l-4 border-l-amber-500">
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Microscope className="h-5 w-5 text-amber-600" /> O Foco da Mediação (Onde ele trava?)
          </h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Feuerstein mapeia onde o pensamento do aluno se perde. Não se apegue aos termos acadêmicos: escolha o{" "}
            <b>comportamento real</b> que você mais observa nesse perfil de aluno durante a aula.
          </p>
        </div>

        <div className="space-y-5">
          <div className="bg-secondary/60 p-4 rounded-lg border border-border">
            <Label className="text-sm font-bold text-foreground">1. A Entrada (Recebendo os dados)</Label>
            <p className="text-[11px] text-muted-foreground mb-2 mt-0.5">
              O erro principal acontece logo no início, no contato com o texto ou exercício?
            </p>
            <Select value={data.faseEntrada} onValueChange={(v) => onChange({ faseEntrada: v })}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FASE_ENTRADA_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value} className="text-sm">
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-secondary/60 p-4 rounded-lg border border-border">
            <Label className="text-sm font-bold text-foreground">2. A Elaboração (Processando na mente)</Label>
            <p className="text-[11px] text-muted-foreground mb-2 mt-0.5">
              Ele até lê bem, mas na hora de cruzar ideias e raciocinar, onde ele empaca?
            </p>
            <Select value={data.faseElaboracao} onValueChange={(v) => onChange({ faseElaboracao: v })}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FASE_ELABORACAO_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value} className="text-sm">
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-secondary/60 p-4 rounded-lg border border-border">
            <Label className="text-sm font-bold text-foreground">3. A Saída (Expressando o que aprendeu)</Label>
            <p className="text-[11px] text-muted-foreground mb-2 mt-0.5">
              Ele entendeu na cabeça, mas na hora de explicar falando ou escrevendo...
            </p>
            <Select value={data.faseSaida} onValueChange={(v) => onChange({ faseSaida: v })}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FASE_SAIDA_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value} className="text-sm">
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Ações do Professor */}
      <div className="space-y-3 pt-2">
        <Button
          onClick={onGenerate}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
        >
          <ClipboardList className="h-5 w-5 text-emerald-400" /> Gerar &quot;Super Prompt&quot; para Copiar
        </Button>

        <Button
          variant="ghost"
          onClick={onClear}
          className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 text-sm font-medium"
        >
          <Eraser className="h-4 w-4" /> Limpar Formulário
        </Button>
      </div>
    </div>
  )
}
