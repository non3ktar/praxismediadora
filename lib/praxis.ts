export type FormData = {
  disciplina: string
  tema: string
  realidade: string
  ndr: string
  ndp: string
  faseEntrada: string
  faseElaboracao: string
  faseSaida: string
}

type Option = {
  /** Texto técnico longo enviado para a IA (equivalente ao "value" do <select> original) */
  value: string
  /** Rótulo curto e legível exibido ao professor */
  label: string
}

export const FASE_ENTRADA_OPTIONS: Option[] = [
  {
    value:
      "Impulsividade na coleta de dados (O aluno lê correndo, 'chuta' as respostas e ignora os detalhes importantes da instrução)",
    label: 'Impulsividade: Lê correndo, "chuta" respostas e ignora a instrução.',
  },
  {
    value:
      'Percepção episódica da realidade (O aluno vê as informações soltas, fragmentadas, sem conseguir ligar o que veio antes e o que vem depois)',
    label: 'Visão Fragmentada: Vê os fatos soltos, não percebe começo, meio e fim.',
  },
  {
    value:
      'Falta de orientação espacial/temporal (O aluno não consegue se localizar no contexto da época histórica ou do lugar geográfico)',
    label: 'Desorientação: Fica totalmente perdido no tempo (época) ou espaço (lugar).',
  },
]

export const FASE_ELABORACAO_OPTIONS: Option[] = [
  {
    value:
      'Dificuldade em perceber contradições (O aluno aceita duas ideias opostas como verdadeiras sem questionar o sentido lógico)',
    label: 'Não percebe contradições lógicas: Aceita ideias opostas sem questionar.',
  },
  {
    value:
      'Incapacidade de comparar/categorizar (O aluno não consegue olhar para duas coisas e dizer o que têm em comum ou de diferente)',
    label: 'Dificuldade em comparar: Não consegue ver semelhanças, diferenças ou agrupar.',
  },
  {
    value:
      "Pensamento não-hipotético (O aluno não consegue prever consequências, pensar 'E se...?' ou trabalhar com ideias fora do concreto)",
    label: 'Falta de pensamento hipotético: Não consegue imaginar cenários ("E se?").',
  },
]

export const FASE_SAIDA_OPTIONS: Option[] = [
  {
    value:
      "Comunicação egocêntrica (O aluno acha que o professor 'lê sua mente', responde 'tipo assim' e omite os passos lógicos da explicação)",
    label: 'Comunicação Egocêntrica: Responde "tipo assim", achando que você lê a mente dele.',
  },
  {
    value:
      "Bloqueio e desistência (O aluno trava no primeiro erro, apaga tudo violentamente ou diz 'não sei' por medo de arriscar)",
    label: 'Bloqueio e Desistência: Trava no primeiro erro e desiste logo de cara.',
  },
  {
    value:
      "Vocabulário inadequado/impreciso (Faltam palavras adequadas para a disciplina, ele substitui conceitos por 'aquele negócio' ou 'bagulho')",
    label: 'Vocabulário Impreciso: Substitui os nomes corretos por "aquele negócio" ou "bagulho".',
  },
]

export const INITIAL_FORM_DATA: FormData = {
  disciplina: '',
  tema: '',
  realidade: '',
  ndr: '',
  ndp: '',
  faseEntrada: FASE_ENTRADA_OPTIONS[0].value,
  faseElaboracao: FASE_ELABORACAO_OPTIONS[0].value,
  faseSaida: FASE_SAIDA_OPTIONS[0].value,
}

const orFallback = (v: string) => (v && v.trim() ? v : '[Não informado]')

/** Constrói a "Armadura Teórica" (System Prompt) — idêntico ao buildSystemPrompt original. */
export function buildSystemPrompt(data: FormData): string {
  const disciplina = orFallback(data.disciplina)
  const tema = orFallback(data.tema)
  const realidade = orFallback(data.realidade)
  const ndr = orFallback(data.ndr)
  const ndp = orFallback(data.ndp)
  const entrada = data.faseEntrada
  const elaboracao = data.faseElaboracao
  const saida = data.faseSaida

  return `Você é um pedagogo magistral, especialista absoluto na teoria Histórico-Cultural de Lev Vigotski e na Modificabilidade Cognitiva Estrutural de Reuven Feuerstein. 
Seu objetivo é gerar um roteiro prático e cirúrgico de intervenção pedagógica para um professor que trabalha com alunos em extrema pobreza e com falsos diagnósticos de "atraso mental".

DIRETRIZES FUNDAMENTAIS (NÃO DESVIE):
1. Rejeite o determinismo biológico. A dificuldade do aluno é fruto de privação material e cultural, não falta de inteligência inata.
2. Não crie aulas conteudistas ("passe o texto no quadro"). O foco é a MEDIAÇÃO. O professor é um mediador que se interpõe entre o aluno e o mundo.
3. Não use jargões motivacionais superficiais. Use rigor metodológico.
4. Entregue scripts literais do que o professor deve falar para "bloquear" o erro cognitivo do aluno.
5. OBRIGATÓRIO: O seu retorno deve conter EXATAMENTE as seguintes TRÊS partes estruturadas.

DADOS DA AULA SOLICITADA PELO PROFESSOR:
- Disciplina: ${disciplina}
- Tema da Aula: ${tema}
- Realidade Material do Aluno: ${realidade}
- Zona de Desenvolvimento Proximal (ZDP): O aluno sai de "${ndr}" (Desenvolvimento Real) e deve chegar a "${ndp}" (Potencial).
- Falha na Fase de Entrada detectada: ${entrada}
- Falha na Fase de Elaboração detectada: ${elaboracao}
- Falha na Fase de Saída detectada: ${saida}

FORMATO DA SUA RESPOSTA OBRIGATÓRIA (Use formatação Markdown rigorosa):

# PARTE 1: Plano de Aula Oficial (O Script)
(Um parágrafo explicando como o tema da aula se conecta com a realidade do aluno para gerar Significado).

### 📥 Etapa 1: Fase de Entrada (Coleta de Dados)
- **O Foco:** Como superar a falha de ${entrada}.
- **Ação Mediadora:** O que o professor deve fazer com o material (texto/imagem/etc).
- **🗣️ Script do Mediador:** Escreva exatamente as frases em primeira pessoa que o professor deve dizer para guiar o aluno.

### ⚙️ Etapa 2: Fase de Elaboração (O Conflito / ZDP)
- **O Foco:** Como superar a falha de ${elaboracao}.
- **Ação Mediadora:** Como criar o conflito dialético e ajudar o aluno a pensar de onde ele está para onde ele deve ir na ZDP.
- **🗣️ Script do Mediador:** Exemplo do que falar.
- **🚀 Critério de Transcendência:** (Explique como o professor mostra que essa habilidade de raciocínio serve para a vida real/sobrevivência do aluno fora da escola).

### 📤 Etapa 3: Fase de Saída (Precisão e Expressão)
- **O Foco:** Como corrigir a falha de ${saida}.
- **Ação Mediadora:** Como garantir que o aluno não desista e consiga expressar o conhecimento.
- **🗣️ Script do Mediador:** Exemplo prático.

---

# PARTE 2: Andaime Textual do Aluno
(Crie o texto, problema ou atividade exata que será impressa ou entregue ao aluno. Use linguagem acessível, alinhada à realidade de ${realidade}. 
*Crucial:* Insira "Paradas de Pensamento" (ex: "[PAUSA] Mediador, aqui você pergunta:...") dentro do próprio texto/atividade para garantir que o aluno não pule as etapas de processamento.)

---

# PARTE 3: Relatório de Avaliação Dinâmica
(Crie uma rubrica rápida para o professor provar à gestão o avanço cognitivo do aluno.)
- **Critério 1 (Entrada):** O aluno parou de "chutar" e analisou os dados? (Sim/Não - Evidência)
- **Critério 2 (Elaboração):** O aluno conectou as ideias e percebeu contradições? (Sim/Não - Evidência)
- **Critério 3 (Saída):** O aluno expressou o raciocínio sem bloqueio ou comunicação egocêntrica? (Sim/Não - Evidência)
- **Conclusão:** Próximos passos para a EAM (Experiência de Aprendizagem Mediada).`
}
