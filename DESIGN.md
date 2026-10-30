---
name: Kuro Neko
description: Loja geek e asiática no Centro de Matão‑SP. O site é o chão da loja em miniatura.
colors:
  red-logo: "#d7433f"
  red: "#c8352f"
  red-deep: "#ad2318"
  red-shade: "#7e1a14"
  ink: "#1e1b20"
  ink-soft: "#57525b"
  line: "#d9d5d8"
  paper: "#f2f0f1"
  white: "#ffffff"
  lamp: "#f4b400"
typography:
  display:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 2.1rem + 4.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.75rem + 2.4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1
  lead:
    fontFamily: "M PLUS 2, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 600
    lineHeight: 1.45
  body:
    fontFamily: "M PLUS 2, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.6
  label:
    fontFamily: "M PLUS 2, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.06em"
  japanese:
    fontFamily: "M PLUS 2, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  label: "2px"
  control: "6px"
  round: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  "9": "96px"
  "10": "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "8px 20px"
    height: "48px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  button-label:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 20px"
    height: "48px"
  button-label-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 20px"
    height: "48px"
  pop-label:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "24px 24px 16px"
  plaque-open:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red}"
    rounded: "4px"
  plaque-closed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "4px"
  tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.label}"
    padding: "2px 8px"
  receipt:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "24px"
---

# Design System: Kuro Neko

## Overview

**Creative North Star: "O chão da loja"**

O site é a Kuro Neko em miniatura, do jeito que um konbini se apresenta: uma placa vermelha em cima, o trilho vermelho da prateleira com etiquetas POP presas por clipe e, na porta, a plaquinha 営業中 / 準備中 que diz se dá para entrar. Cada peça é funcional. A placa lê o horário real de São Paulo, as etiquetas levam ao catálogo ou ao WhatsApp, o recibo é uma tabela de horários de verdade.

A identidade vem da marca que já existe no Instagram: o gatinho preto no disco vermelho, o 黒猫, o vermelho, preto e branco e a caixa‑alta condensada dos posts. O sistema expande isso sem trocar nada. O fundo é o cinza claro dos posts e o vermelho pinta regiões inteiras (placa, trilho, bloco de contato). O preto fecha a página como a noite fecha a loja. A densidade é de loja de bairro: pouco texto, cada frase com um fato ou uma ação.

Rejeitado de propósito: o padrão da categoria (fundo escuro com neon, pétalas de sakura, grade de cards iguais) e qualquer símbolo militar japonês como enfeite.

**Key Characteristics:**
- Vermelho em regiões inteiras, nunca em respingos.
- Etiquetas penduradas num trilho, levemente tortas, com o nome em japonês na vertical.
- Placa da porta e gato que reagem ao horário real (o gato dorme quando a loja fecha).
- Caixa‑alta condensada para títulos; gótica japonesa legível para texto e para kana/kanji.
- Fotos reais da loja; nenhum número, preço ou depoimento inventado.

## Colors

Vermelho, preto e branco da marca, apoiados por um cinza de vitrine e uma única luz amarela.

### Primary
- **Vermelho Placa** (`red`): campos da marca (topo, bloco de contato), trilho da prateleira e texto vermelho grande. Branco por cima passa no AA (5,2:1).
- **Vermelho Gatinho** (`red-logo`): só o disco do logo e o 黒猫 decorativo. Não serve para texto (4,4:1 com branco).
- **Vermelho Lacre** (`red-deep`): links e texto vermelho pequeno; 6,9:1 sobre branco.
- **Sombra do Trilho** (`red-shade`): a borda de baixo do trilho.

### Secondary
- **Lâmpada** (`lamp`): a luz acesa da placa e do status quando a loja está aberta. Nenhum outro uso.

### Neutral
- **Pelo** (`ink`): texto, botão principal no cinza, placa fechada, bloco final da página.
- **Fumaça** (`ink-soft`): texto secundário (6,7:1 sobre o cinza).
- **Risco** (`line`): linhas, pontilhados, divisórias. Nunca texto.
- **Cinza Vitrine** (`paper`): fundo da página, o mesmo cinza claro dos posts.
- **Etiqueta** (`white`): etiquetas POP, recibo, placa aberta, fundo da vitrine.

### Named Rules
**The Disc Rule.** O Vermelho Gatinho é do logo. Campos e textos usam o Vermelho Placa, que passa no contraste com branco.

**The Lamp Rule.** O amarelo aparece em um lugar só: a luz acesa de "aberta". Se ele estiver em outro lugar, sai.

**The Word-With-Color Rule.** Aberto e fechado sempre trazem a palavra (Aberta, Almoço, Fechada) junto com a cor e a forma do indicador.

## Typography

**Display Font:** Anton (fallback Arial Narrow)
**Body Font:** M PLUS 2 (fallback system-ui)
**Logo lettering:** M PLUS Rounded 1c ExtraBold, só dentro do logo

**Character:** Anton é a voz de cartaz dos posts: condensada, pesada, sempre em caixa‑alta. M PLUS 2 é uma gótica japonesa com latim claro, então o português e o kana/kanji saem da mesma família e o japonês nunca parece colado de outra fonte.

### Hierarchy
- **Display** (Anton 400, 3rem → 6rem, 1.0): o título do topo. Uma vez por página.
- **Headline** (Anton 400, 2.25rem → 3.75rem, 1.0): títulos de seção.
- **Title** (Anton 400, 1.75rem → 2.25rem, 1.0): nome da prateleira na etiqueta POP, rua no endereço.
- **Lead** (M PLUS 2 600, 1.125rem → 1.3125rem, 1.45): a frase que vem logo depois de um título.
- **Body** (M PLUS 2 450, 1.0625rem, 1.6): texto corrido, até 62ch.
- **Label** (M PLUS 2 800, 0.8125rem, +0.06em, caixa‑alta): tags e cabeçalhos de tabela.
- **Japanese** (M PLUS 2 900, tategaki): nome da prateleira na vertical, kanji da placa.

### Named Rules
**The Poster Rule.** Anton só em caixa‑alta e só em títulos, nomes de prateleira e endereço. Nunca em parágrafo.

**The Seasoning Rule.** Japonês é tempero. Todo kana ou kanji tem o equivalente em português visível por perto, leva `lang="ja"` e fica oculto para leitor de tela quando é decorativo.

## Layout

Mobile first, uma coluna, margem lateral fluida de 16 a 40px (`--gutter`) e conteúdo até 76rem. Grade de 4px, com grupos colados e seções bem separadas (48px no celular, 64px a partir de 640px).

Ordem da página: placa vermelha (o quê, onde, aberta agora, como chegar) → trilho com as quatro etiquetas → vitrine com fotos reais → horário e como chegar → "Tem o que você procura?" no vermelho → "Por que gato preto?" e rodapé no preto.

As etiquetas viram 1 coluna no celular (cada uma com o próprio trilho), 2 a partir de 640px e 4 penduradas direto no trilho do topo a partir de 1024px. Assim o trilho com as etiquetas aparece na primeira tela do computador. Horário e como chegar ficam lado a lado a partir de 1024px. No celular, uma barra fixa embaixo com "Como chegar" e "WhatsApp" aparece quando os botões do topo saem da tela e some no rodapé.

## Elevation & Depth

Nada flutua: as coisas penduram. As etiquetas e a placa recebem uma sombra curta e macia que cai para baixo, como papel preso num trilho. O trilho tem uma borda inferior mais escura e uma sombra fina. Botões são planos e afundam 1px quando pressionados. Sem vidro, sem brilho, sem sombra dura deslocada.

### Shadow Vocabulary
- **Etiqueta** (`0 1px 0 rgb(30 27 32 / .06), 0 10px 18px -12px rgb(30 27 32 / .45)`): etiquetas POP.
- **Placa** (`0 2px 2px rgb(30 27 32 / .12), 0 14px 22px -14px rgb(30 27 32 / .55)`): a placa da porta.
- **Pressionado** (`inset 0 2px 0 rgb(0 0 0 / .18)`): botão no momento do toque.

### Named Rules
**The Hanging Rule.** Sombra só no que está pendurado (etiqueta, placa, recibo). Um elemento que não pendura não tem sombra.

## Shapes

Papel cortado e plástico de loja. Etiquetas, tags e recibo têm cantos de 2px; botões, mapa e placa grande têm 6px; o círculo completo fica para o disco do logo, a lâmpada e os furos da placa. O recibo tem a borda de baixo serrilhada. As etiquetas ficam inclinadas entre −1° e 1° e presas por um clipe translúcido no trilho.

## Components

### Buttons
- **Shape:** cantos levemente arredondados (6px), altura de 48px, borda de 2px.
- **Primary:** no cinza, fundo Pelo e texto Etiqueta; no vermelho (`.on-brand`), fundo Etiqueta e texto Pelo (`kn-btn--label`).
- **Hover / Focus:** o principal fica Vermelho Placa (no vermelho, fica Pelo). Foco com contorno de 3px e 3px de folga, branco sobre o vermelho. Pressionado desce 1px.
- **Secondary:** contorno de 2px na cor do texto (`kn-btn--line`).
- **Done:** "Copiar endereço" vira "Endereço copiado", com ícone de check e aviso para leitor de tela.

### Chips
- **Tag:** um selo único ("Endereço novo"), caixa‑alta 800. Pelo sobre o cinza, branco com Vermelho Lacre sobre o vermelho. Nunca em fileira.

### Cards / Containers
- **POP label:** fundo Etiqueta, cantos de 2px, sombra de etiqueta, preenchimento de 24px. Nome em Anton, uma frase concreta, japonês na vertical à direita separado por pontilhado, uma ação em link. Endireita no hover do mouse.
- **Receipt:** cupom branco com borda serrilhada. Tabela real (dia, manhã, tarde) com números tabulares; o dia de hoje fica em negrito sobre o cinza, com a etiqueta "hoje".

### Navigation
- **Header:** fixo, fundo Cinza Vitrine. Selo do logo, nome em Anton e 黒猫 vertical à esquerda; placa da porta à direita. Links de seção aparecem só a partir de 1024px.
- **Action bar (celular):** fixa embaixo, duas ações ("Como chegar" e "WhatsApp"), escondida também para o teclado quando não está visível.

### Door Plaque (signature)
A placa 営業中 / 準備中 / 定休日 pendurada num prego. Aberta: branca, kanji vermelho, lâmpada acesa. Almoço e fechada: Pelo com texto branco, sem lâmpada. Balança uma vez quando o status chega e gira quando o horário muda. Sempre acompanhada da frase de status ("Aberta agora · fecha às 13h30 para o almoço").

### Store Cat (signature)
O gatinho do logo, com contorno branco, sentado no trilho do topo e no bloco final. Fica de olhos abertos com a loja aberta e dorme quando ela fecha.

## Do's and Don'ts

### Do:
- **Do** responder "posso ir agora?" na primeira tela: placa, frase de status, endereço e "Como chegar".
- **Do** pintar regiões inteiras de Vermelho Placa (#c8352f) e deixar o resto em Cinza Vitrine (#f2f0f1).
- **Do** pendurar etiquetas num trilho; elas não flutuam soltas.
- **Do** manter contraste AA: texto 4,5:1, título grande 3:1, foco visível em todo fundo.
- **Do** escrever horários como "9h", "13h30" em frase e "09:00–13:30" em tabela.
- **Do** usar só fotos reais da loja, em 4:5, com legenda que diz o produto.

### Don't:
- **Don't** usar fundo escuro com neon, partículas de sakura ou kanji espalhado como enfeite.
- **Don't** montar grade de cards iguais com ícone, título e texto.
- **Don't** usar texto em degradê, vidro desfocado, sombra dura deslocada ou faixa colorida lateral em cards e linhas.
- **Don't** usar raios de sol nascente ou qualquer símbolo militar japonês como enfeite.
- **Don't** usar emoji no lugar de ícone; ícones são SVG com traço de 2px.
- **Don't** colocar sobretítulo (kicker) acima de um título.
- **Don't** inventar preços, números de seguidores, notas ou depoimentos.
