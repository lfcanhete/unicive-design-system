# @unicive/design-system

Design system do UniCIVE em uma pasta só: tokens (CSS e JSON), tema Tailwind v3 e v4, componentes React (Button, TextField, Select, Checkbox, Badge, Card, Alert, DataTable, Tabs, AppHeader, Sidebar, Topbar, Icon), fonte Rethink Sans, logos em SVG e guia de marca. Funciona em Next.js, Vite, Replit, HTML puro e Moodle.

```
dist/        tokens.css, components.css, styles.css (os dois juntos), index.mjs (React), unicive.umd.js (sem build), index.d.ts, tokens.json
tailwind/    theme.css (Tailwind v4) e preset.cjs (Tailwind v3)
fonts/       RethinkSans-wght.woff2 (variável 400–800) e licença OFL; a fonte já vem embutida no tokens.css
logos/       11 assinaturas em SVG
GUIDE.md     guia de marca e de interface (cores, tipografia, logo, tom, regras)
AGENTS.md    regras para agentes de IA; copie para a raiz de cada projeto
src/         fonte da verdade: tokens.json, components.js, components.css, tipos e guias
```

## 1. Onde guardar (uma vez)

Escolha um lugar central e instale a partir dele em todos os projetos:

- **Repositório no GitHub (recomendado).** Suba esta pasta como um repositório (ex.: `canhetejr/unicive-design-system`) e crie uma tag por versão:
  ```bash
  cd unicive-design-system
  git init && git add . && git commit -m "UniCIVE Design System 1.0.0"
  gh repo create canhetejr/unicive-design-system --private --source . --push
  git tag v1.0.0 && git push --tags
  ```
- **Pasta local.** Deixe em um lugar fixo (ex.: `~/dev/unicive-design-system`) e instale pelo caminho.
- **Servidor próprio.** Para HTML puro e Moodle, publique `dist/`, `fonts/` e `logos/` como site estático no Coolify (ex.: `ds.canhete.tech`) e aponte as tags `<link>` e `<script>` para lá.

## 2. Instalar em um projeto

```bash
# do GitHub (privado: o ambiente precisa ter acesso ao repositório)
npm i github:canhetejr/unicive-design-system#v1.0.0

# ou de uma pasta local
npm i ../unicive-design-system
```

Em projetos onde não dá para instalar, copie a pasta inteira para dentro do projeto (ex.: `vendor/unicive-design-system`) e importe pelos caminhos relativos.

Depois copie `AGENTS.md` para a raiz do projeto, para que o Claude Code, o Antigravity e o agente do Replit sigam o sistema. No Replit, cole o conteúdo também em `replit.md`; no Claude Code, você pode renomear para `CLAUDE.md` ou incluí-lo nele.

## 3. Usar

### Next.js (App Router) com Tailwind v4

```css
/* app/globals.css */
@import "tailwindcss";
@import "@unicive/design-system/tailwind.css";   /* tokens + cores, fonte e raios como classes */
@import "@unicive/design-system/components.css";
```

```tsx
// app/layout.tsx
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body className="bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
```

```tsx
// qualquer página ou componente
import { AppHeader, Button, Card, DataTable, Badge } from '@unicive/design-system';

<Button iconStart="download">Exportar</Button>
<div className="rounded-lg bg-surface border border-border p-6 text-ink-muted">Classe Tailwind com token</div>
```

Os componentes já trazem `'use client'`. Com `next-themes`, use `attribute="data-theme"` (ou a classe `dark`, que também funciona).

### Tailwind v3

```js
// tailwind.config.js
module.exports = {
  presets: [require('@unicive/design-system/tailwind-preset')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```
E no CSS global: `@import "@unicive/design-system/styles.css";`.

### Vite, Replit ou React sem Tailwind

```js
import '@unicive/design-system/styles.css';
import { Button, TextField } from '@unicive/design-system';
```

### HTML puro, Moodle ou qualquer página sem build

```html
<html lang="pt-BR" data-theme="light">
<head>
  <link rel="stylesheet" href="https://SEU-HOST/unicive-design-system/dist/styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
  <script src="https://SEU-HOST/unicive-design-system/dist/unicive.umd.js"></script>
  <script>
    const { Button } = window.UniCIVE;
    ReactDOM.createRoot(document.getElementById('app')).render(React.createElement(Button, null, 'Salvar'));
  </script>
</body>
</html>
```

Só os tokens, sem React (ex.: um bloco HTML no Moodle): carregue apenas `dist/tokens.css` e use `var(--primary)`, `var(--surface)`, as classes de texto `uc-h1`, `uc-body`, `uc-caption` etc.

Veja `examples/index.html` (abra direto no navegador).

### Fora da web (Figma, slides, apps nativos)

Use `dist/tokens.json`: cada cor tem valor para `light` e `dark`, mais tipografia, espaçamentos e raios.

## 4. Referência rápida

| O quê | Como usar |
| --- | --- |
| Tema escuro | `data-theme="dark"` ou classe `dark` no `<html>` |
| Cores | `var(--primary)`, `--surface`, `--ink`, `--ink-muted`, `--border`, `--tint`, `--success-fg`/`-bg` … · Tailwind: `bg-primary`, `text-ink`, `border-border`, `bg-setor-pos` |
| Marca | `--verde-escuro`, `--amarelo`, `--verde-claro` e as cores setoriais `--setor-*` com `--on-setor-*` |
| Texto | classes `uc-display`, `uc-h1`…`uc-h4`, `uc-body`, `uc-body-sm`, `uc-label`, `uc-caption`, `uc-overline` |
| Espaço | `var(--space-1)` (4px) … `var(--space-8)` (64px) |
| Raios | `var(--radius-sm)` 8 · `md` 12 · `lg` 20 · `xl` 32 · `pill` · Tailwind: `rounded-lg` etc. |
| Sombra (só menus e diálogos) | `var(--shadow-overlay)` · Tailwind v4: `shadow-uc-overlay` · v3: `shadow-overlay` |
| Ícones | `<Icon name="download" />` ou `iconStart="download"` nos botões e campos |

## 5. Atualizar o sistema

Edite só o que está em `src/` (tokens, componentes, estilos) e rode `npm run build`; ele regenera `dist/` e `tailwind/`. Suba uma nova versão (`v1.1.0`) e atualize nos projetos com `npm i github:canhetejr/unicive-design-system#v1.1.0`.

Fonte Rethink Sans: SIL Open Font License 1.1 (`fonts/OFL.txt`). Logos e marca: uso interno do UniCIVE.
