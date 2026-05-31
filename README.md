# 🧠 PráxisMediadora AI

> Motor de inteligência artificial para planejamento pedagógico baseado em **Vigotski** e **Feuerstein** — feito para professores que trabalham com alunos em situação de vulnerabilidade social.

---

## 📌 O que é isso?

O **PráxisMediadora** é uma ferramenta web que ajuda professores a construir intervenções pedagógicas estruturadas, usando como base duas das teorias mais robustas da educação:

- **Lev Vigotski** — Zona de Desenvolvimento Proximal (ZDP) e o papel histórico-cultural da aprendizagem
- **Reuven Feuerstein** — Modificabilidade Cognitiva Estrutural e a Experiência de Aprendizagem Mediada (EAM)

A ferramenta **não gera a aula diretamente**. Ela coleta os dados reais da turma e constrói um *Super Prompt* metodológico que o professor copia e cola em uma IA (como o Claude), recebendo de volta um roteiro cirúrgico de mediação pronto para a sala de aula — e exportável como `.docx`.

---

## ✨ Funcionalidades

- **Formulário guiado em 3 blocos** — contexto, ZDP e funções cognitivas de Feuerstein
- **Geração de Super Prompt** — armadura teórica completa para uso em qualquer IA generativa
- **Instrução DOCX embutida** — o prompt gerado já orienta a IA a formatar o resultado como documento Word
- **Reconhecimento de voz** — dite a realidade material do aluno via microfone
- **Barra de progresso** — indicador visual de preenchimento do formulário em tempo real
- **Guia teórico interativo** — dois modais explicando Vigotski e Feuerstein em linguagem acessível
- **Exportação em PDF** — geração de PDF oficial via `html2pdf.js`
- **Zero dependências de backend** — funciona como arquivo HTML estático puro

---

## 🖥️ Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/praxis-mediadora.git
cd praxis-mediadora
```

### 2. Abra no navegador

Não é necessário servidor. Basta abrir o arquivo diretamente:

```bash
open index.html
# ou arraste o arquivo para o navegador
```

### 3. Preencha o formulário

| Bloco | O que preencher |
|---|---|
| **Contexto & Materialidade** | Disciplina, tema da aula e realidade social dos alunos |
| **A Ponte (ZDP)** | O que o aluno já sabe fazer sozinho e o que vai aprender hoje |
| **O Foco da Mediação** | Onde o pensamento do aluno trava (Feuerstein) |

### 4. Gere o Super Prompt

Clique em **"Gerar Super Prompt"**, copie o texto e cole no [Claude](https://claude.ai/new) (recomendado) ou em outra IA.

### 5. Exporte como DOCX

O prompt já instrui a IA a incluir um guia para salvar o planejamento como `.docx`. Após receber a resposta, siga as instruções ao final do documento gerado.

---

## 🏗️ Estrutura do Projeto

```
praxis-mediadora/
└── index.html        # Aplicação completa (single-file)
```

A ferramenta é intencionalmente um **único arquivo HTML autocontido**. Todas as dependências são carregadas via CDN.

### Dependências externas (CDN)

| Biblioteca | Uso |
|---|---|
| [Tailwind CSS](https://tailwindcss.com) | Estilização utilitária |
| [Font Awesome 6](https://fontawesome.com) | Ícones |
| [DM Sans + DM Mono](https://fonts.google.com) | Tipografia |
| [Marked.js](https://marked.js.org) | Renderização de Markdown |
| [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) | Exportação em PDF |

---

## 🧬 Fundamento Teórico

### Lev Vigotski — A Zona de Desenvolvimento Proximal

A ZDP é a distância entre o que o aluno consegue fazer **sozinho hoje** e o que ele consegue fazer **com mediação**. A ferramenta mapeia esses dois pontos e instrui a IA a criar um andaime exato para o intervalo entre eles.

> *"O que a criança pode fazer hoje com ajuda, ela poderá fazer sozinha amanhã."*

### Reuven Feuerstein — Funções Cognitivas e EAM

Feuerstein identificou que dificuldades de aprendizagem frequentemente não são deficit cognitivo inato, mas **falhas nas funções cognitivas** causadas por privação de estímulos. A ferramenta mapeia a falha nas três fases do pensamento:

| Fase | O que representa |
|---|---|
| **Entrada** | Como o aluno coleta e percebe os dados |
| **Elaboração** | Como o aluno processa e raciocina |
| **Saída** | Como o aluno expressa o que aprendeu |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sugestões de melhoria, novas funções cognitivas de Feuerstein, traduções ou melhorias de acessibilidade são especialmente valorizadas.

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feat/minha-melhoria`
3. Commit suas mudanças: `git commit -m 'feat: descrição da melhoria'`
4. Push: `git push origin feat/minha-melhoria`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙏 Créditos

Desenvolvido com a convicção de que **nenhum aluno da escola pública tem atraso mental — ele tem uma história de privação de estímulos**. Esta ferramenta existe para dar ao professor o rigor metodológico que seus alunos merecem.

Baseado nas obras de **Lev Semyonovich Vigotski** (1896–1934) e **Reuven Feuerstein** (1921–2014).
