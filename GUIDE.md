# UniCIVE — guia de marca e interface

O UniCIVE (Centro Universitário Cidade Verde) forma pessoas, não apenas profissionais. Este sistema serve aos apps internos: telas claras, diretas e com a identidade verde, amarela e menta do manual de marca. Escreva sempre "UniCIVE" em texto corrido; "unicive" em minúsculas existe só dentro do logo.

## Conteúdo e tom

- Fale em português do Brasil, em frases curtas e diretas, com a voz humana do manual: "Educação na vida real.", "Ensino que vai além da sala de aula.", "Formar para o mundo como ele é.", "Formar pessoas, não apenas profissionais."
- Chamadas e slogans terminam com ponto final. Rótulos de botão e de campo não levam ponto.
- Botões começam com verbo: "Salvar alterações", "Exportar relatório". Evite "Clique aqui".
- Mensagens de erro dizem o que corrigir, sem culpar: "Informe apenas números."
- Sem emoji. Use ícones de traço (veja Iconografia).

## Cores

- **Marca:** `verde-escuro` (#006652) domina; `amarelo` (#ffc571) e `verde-claro` (#5bdc9e) apoiam. Em telas de abertura, siga a proporção do manual: cerca de 50% cor dominante, 35% segunda cor, 15% terceira.
- **Interface:** use `bg` para a página, `surface` para cards, tabelas e campos, `ink` para texto e `ink-muted` para texto secundário. Elementos de ação usam `primary` com `on-primary`.
- **Texto sobre cor:** sobre `verde-escuro` e `verde-profundo` use `branco`; sobre `amarelo`, `verde-claro` e `verde-menta` use `ink-preto`. O verde-escuro sobre amarelo (4.46:1) e sobre verde-claro (4.03:1) só vale em texto de 24px ou mais, ou negrito de 19px ou mais, como na chamada "Educação na vida real." do manual.
- **Setores:** cada nível de ensino tem sua cor (`setor-graduacao`, `setor-pos`, `setor-extensao`, `setor-mestrado`, `setor-livres`, `setor-tecnicos`, `setor-aperfeicoamento`) com o texto `on-setor-*` correspondente. Use-as para identificar o nível em selos, colunas e gráficos; nunca para estados.
- **Estados:** `success-*`, `warning-*`, `danger-*` e `info-*` (cada um com `-fg` e `-bg`). Todo estado leva ícone e palavra, porque verde e vermelho não se distinguem só pela cor.
- **Tema escuro:** troque `data-theme` para `dark`. As superfícies são grafite neutro (`bg` #0e0f0f, `surface` #171918), sem tom verde; o verde fica só para marca e ação. O `primary` passa a `verde-claro` com texto escuro, o anel de foco passa a amarelo e o `AppHeader` fica grafite com linha inferior.
- **Desabilitado:** use `disabled-bg` e `disabled-fg`; nunca reduza a opacidade, que lava a cor e derruba o contraste.

## Tipografia

- Uma única família, **Rethink Sans** (arquivo variável em `fonts/`, licença SIL Open Font License 1.1). Títulos em semibold (600), texto em regular (400), como no manual.
- Use `display` só em chamadas grandes; `h1` para título de página, `h2` para seções, `h3` para títulos de card, `body` para texto corrido e `body-sm` em tabelas.
- Rótulos de campo e botões usam `label`; metadados usam `caption` em `ink-muted`; cabeçalhos de coluna e agrupadores usam `overline` em caixa-alta.
- Em tabelas e números, ative dígitos tabulares (`font-variant-numeric: tabular-nums`).

## Logo

- Veja `logos/` para as assinaturas: horizontal (preferida), horizontal 2, vertical, símbolo e tipográfica.
- Sobre fundo claro use a versão colorida. Sobre `verde-escuro`, fundos escuros, compostos ou fotográficos, use sempre a versão `sobre-escuro` ou `branco`, como pede o manual.
- Sobre `amarelo` e `verde-claro` use a assinatura tipográfica colorida (toda em `verde-escuro`).
- Nunca recolora, gire, distorça nem aplique efeitos. Deixe ao redor do logo um respiro de pelo menos a altura do "u" da palavra.
- Em ícones de aplicativo e favicons, use o símbolo.

## Componentes

- Instale como diz o README do pacote: `@unicive/design-system/styles.css` + componentes React importados de `@unicive/design-system` (ou `window.UniCIVE` no modo sem build).
- Formulários: `TextField`, `Select` e `Checkbox` com rótulo sempre visível, erro em texto e ícone e `Button type="submit"` em `primary` no fim.
- Painéis: `AppHeader` no topo (ou, em apps com várias áreas, `Sidebar` à esquerda com `Topbar` por cima do conteúdo), `Tabs` para visões, `Card` com `value` para indicadores e `DataTable` para listas, com `Badge size="sm"` para situação e nível.
- Retorno: `Alert` para resultado de ações; erros de campo ficam no próprio campo.

## Formas, espaço e layout

- Cantos amplos: cards em `radius-lg`, blocos de destaque em `radius-xl`, selos e abas em `radius-pill`, campos em `radius-sm`, botões em `radius-md`.
- Superfícies planas, sem sombra e sem borda lateral colorida. Separe com espaço e cor. A única sombra do sistema é `shadow-overlay`, para menus e diálogos.
- Espaçamento em múltiplos de `space-1` (4px): `space-4` entre campos, `space-5` dentro de cards, `space-6` entre seções.
- Páginas de app: cabeçalho `AppHeader`, margem lateral `space-5` (`space-7` em telas largas), conteúdo em até 1200px sobre `bg`.
- Fotos são retratos sorridentes em fundo liso `verde-claro`, com `radius-xl`.
- Movimento: transições de cor de até 120ms, o spinner de `loading` e o pulso dos esqueletos de tabela. Com `prefers-reduced-motion`, o pulso para e o spinner desacelera.

## Iconografia

O manual não define uma família de ícones, então o sistema traz o próprio conjunto em `Icon` (32 ícones de traço na grade de 16px, traço de 1.8px, pontas arredondadas, cor `currentColor`). Use `UniCIVE.Icon` ou os nomes em `iconStart` e `iconEnd`. Estados usam formatos distintos: círculo com visto (sucesso), círculo com X (erro), triângulo (atenção) e círculo com i (informação). Ícone novo segue o mesmo traço; nunca misture com ícones preenchidos nem use emoji.

## O que o manual não define

O manual de marca traz paleta, tipografia, assinaturas e setorização. Os valores abaixo foram propostos para os apps e podem ser ajustados: neutros esverdeados (`bg`, `surface`, `surface-sunken`, `ink`, `ink-muted`, `border`, `border-strong`, `tint`), cores de estado, `primary-hover`, `accent-hover`, `danger-solid`, `disabled-*`, `header-*`, anel de foco, o tema escuro em grafite, escala de espaçamento, raios, ícones e os componentes (Button, TextField, Select, Checkbox, Badge, Card, Alert, DataTable, Tabs, AppHeader, Sidebar, Topbar, Icon).

## Componentes e props

Os tipos completos de cada componente estão em `dist/index.d.ts`; os guias de uso estão em `src/docs/`.
