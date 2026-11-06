# ⚡ Sprint

Landing page de um planner fictício de rotina e produtividade, com visual neo-brutalista, feita para quem quer organizar a semana como uma arrancada. Desenvolvida do zero em **HTML, CSS e JavaScript puro**, sem frameworks ou bibliotecas de front-end.

> Projeto pessoal de estudo, construído como prática de fundamentos de front-end: estrutura semântica, abordagem mobile first, layout com Grid e Flexbox, animações com CSS e acessibilidade. O produto, os preços e os depoimentos são fictícios.

<!-- Adicione aqui um print ou GIF da página, por exemplo:
![Página inicial do Sprint](assets/hero.png)
-->

---

## 🔗 Demo

https://nathaliadebona.github.io/sprint-planner/

---

## 📋 Sobre o projeto

O **Sprint** é uma landing page de produto único: a página apresenta um planner de papel e leva a pessoa até a chamada para compra. A identidade visual é neo-brutalista, com bordas grossas, sombras sólidas sem desfoque, adesivos levemente girados e botões que "afundam" ao serem clicados, como teclas de teclado.

A página tem 7 seções: **Hero**, **Benefícios**, **Como funciona**, **Galeria**, **Depoimentos**, **Perguntas frequentes** e **Chamada final**, mais uma faixa animada entre o hero e os benefícios.

---

## ✨ Funcionalidades

- 🍔 **Menu hambúrguer acessível** — painel que abre e fecha com JavaScript, com `aria-expanded` e `aria-label` atualizados e fechamento automático ao clicar em um link
- ⌨️ **Botões com efeito de tecla** — a sombra some e o botão se desloca no `:active`, com transição curta
- 🎞️ **Faixa animada** — texto que rola em loop com `@keyframes` e `translateX`, desativada para quem prefere menos movimento
- 📓 **Páginas do planner desenhadas só com HTML e CSS** — lista de tarefas, visão da semana em 7 colunas, agenda por horários e acompanhamento de hábitos, sem nenhuma imagem
- 🖼️ **Galeria adaptável** — rolagem horizontal com `scroll-snap` no celular e grade de três colunas no desktop
- ❓ **FAQ com `<details>`** — accordion nativo, com apenas uma pergunta aberta por vez, ícone animado e painel de resposta
- 🌊 **Rolagem suave** — links do menu deslizam até a seção
- 📱 **Design responsivo** — mobile first, com ajuste para telas a partir de `64rem` e conteúdo limitado a `70rem` de largura
- ♿ **Acessibilidade** — HTML semântico, ícones decorativos com `aria-hidden`, menu e FAQ navegáveis pelo teclado e respeito a `prefers-reduced-motion`

---

## 🛠️ Tecnologias

- **HTML5** — marcação semântica (`header`, `nav`, `main`, `section`, `article`, `figure`, `blockquote`, `details`, `ol`)
- **CSS3** — variáveis CSS, Grid, Flexbox, media queries, `position`, pseudo-elementos, `@keyframes`, `scroll-snap`, `clamp()`, `max()` e `calc()`
- **JavaScript (Vanilla)** — manipulação do DOM, eventos, `classList` e atributos ARIA
- **Font Awesome** — ícones via CDN
- **Google Fonts** — Bricolage Grotesque (títulos) e Figtree (texto)

---

## 📁 Estrutura do projeto

```
sprint-planner/
├── index.html    # Estrutura da página
├── style.css     # Estilos, variáveis e responsividade
├── script.js     # Menu hambúrguer
├── LICENSE
└── README.md
```

---

## 🎨 Paleta de cores e tipografia

- **Creme** `#FFF2C5` — fundo da página
- **Creme escuro** `#F4E19A` — cards, etiquetas e painéis
- **Verde-escuro** `#1B3100` — texto, bordas e sombras
- **Orquídea** `#8D3F7D` — botões, destaques e itens concluídos

**Tipografia:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (títulos) e [Figtree](https://fonts.google.com/specimen/Figtree) (corpo)

A regra de ouro do design: apenas três cores, com o roxo reservado para o que pede ação ou marca o que já foi feito.

---

## 🧠 Aprendizados

Este projeto foi construído em etapas, com foco em pontos que eu ainda não tinha praticado:

- **Scroll snap** — `scroll-snap-type`, `scroll-snap-align` e `scroll-padding` para a galeria horizontal parar sempre alinhada ao card, sem o primeiro colar na borda da tela
- **Centralizar com limite de largura** — `padding-inline` com `max()` e `calc()` para o conteúdo ficar centralizado e limitado a `70rem`, enquanto o fundo das seções ocupa a tela toda
- **Valores fluidos** — `clamp()` para o título do hero crescer junto com a largura da tela, sem precisar de várias media queries

---

## 🚀 Como rodar o projeto

Não há dependências ou build: é só HTML, CSS e JS puro.

```bash
# Clone o repositório
git clone https://github.com/nathaliadebona/sprint-planner.git

# Entre na pasta
cd sprint-planner

# Abra o index.html no navegador
```

Ou use a extensão **Live Server** do VS Code para rodar com recarregamento automático.

---

## 👩‍💻 Autoria

Desenvolvido por **Nathalia** como projeto de estudo em front-end.

Github https://github.com/nathaliadebona
Portfólio https://nathaliadebona.github.io/portfolio/

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Este é um projeto fictício, feito para estudo: nenhum planner está sendo vendido, e os nomes, preços e depoimentos são inventados.
