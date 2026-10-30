# Kuro Neko · site e design system

Site da **Kuro Neko** (@kuroneko_matao), loja geek e asiática na Rua Cesário Motta, 631, Centro de Matão‑SP, em frente à ETEC.

HTML/CSS estático, sem build. Abra `index.html` ou publique a pasta como está (GitHub Pages, Netlify, Vercel).

| Arquivo | O que é |
|---|---|
| `index.html` | O site (mobile first) |
| `design-system.html` | Design system vivo: marca, cores, tipografia, componentes e regras, usando o mesmo CSS do site |
| `assets/css/tokens.css` | Tokens: cores, tipos, espaços, sombras, movimento |
| `assets/css/components.css` | Base e componentes (botões, placa da porta, trilho e etiqueta POP, recibo, endereço, barra de atalhos) |
| `assets/css/site.css` | Layout da home |
| `assets/js/store.js` | Status aberto/fechado em tempo real, dia de hoje no horário, copiar endereço, barra de atalhos |
| `DESIGN.md` · `.impeccable/design.json` | O design system em formato para pessoas e para ferramentas/IA |
| `PRODUCT.md` | Fatos confirmados da loja e princípios do produto |

## Rodar localmente

```sh
python3 -m http.server 8000
# abra http://localhost:8000
```

## Mudar o horário

Edite o objeto `STORE.hours` no topo de `assets/js/store.js` (0 = domingo … 6 = sábado) e a tabela em `index.html` (`data-hours`). O status, a placa 営業中/準備中 e o gato que dorme seguem o horário de São Paulo, qualquer que seja o fuso do aparelho.

Para testar um momento qualquer, adicione `?agora=` à URL, por exemplo `index.html?agora=2026-11-03T13:45` (almoço) ou `?agora=2026-11-08T11:00` (domingo).

## O que trocar ou confirmar

- [ ] **Logo:** `#kn-logo`, `#kn-mark` e `favicon.svg` são um redesenho vetorial do logo do Instagram. Troque pelo arquivo original quando houver.
- [ ] **Fotos:** `assets/img/vitrine/*` foram recortadas dos prints do Instagram. Troque pelos arquivos originais (maior resolução), mantendo a proporção 4:5.
- [ ] **Domingo:** a bio não lista domingo; o site mostra "Fechado". Confirme com a loja.
- [ ] **Feriados:** não estão no código; o site manda conferir no Instagram.
- [ ] **Imagem de compartilhamento:** depois de publicar, troque `og:image` em `index.html` por uma URL absoluta (`https://seu-dominio/assets/img/og.png`).

## Fontes

Anton, M PLUS 2 e M PLUS Rounded 1c (Google Fonts, licença OFL) ficam no próprio site, em `assets/fonts/`. As fontes japonesas são subconjuntos com só os caracteres usados. Se adicionar kana ou kanji novos ao HTML ou ao JS, rode:

```sh
sh scripts/subset-fonts.sh
```
