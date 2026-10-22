// Gera tudo em dist/ e tailwind/ a partir de src/. Rode: npm run build
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = (p) => path.join(ROOT, 'src', p);
const out = (p) => path.join(ROOT, p);
fs.mkdirSync(out('dist'), { recursive: true });
fs.mkdirSync(out('tailwind'), { recursive: true });

const tokens = JSON.parse(fs.readFileSync(src('tokens.json'), 'utf8'));
const themes = tokens.color.themes.map((t) => t.id);
const FIRST = themes[0];
const HEAD = '/* UniCIVE Design System — gerado por scripts/build.mjs a partir de src/. Não edite à mão. */\n';

const valueFor = (tok, theme) => {
  if (typeof tok.value === 'string') return theme === FIRST ? tok.value : null;
  return tok.value[theme] ?? null;
};
const cssValue = (v) => (typeof v === 'string' && /^\{.+\}$/.test(v) ? `var(--${v.slice(1, -1)})` : v);
const px = (v) => (typeof v === 'number' ? `${v}px` : v);

/* ---------- tokens.css */
let css = HEAD;
for (const f of tokens.type.fonts) {
  // fonte embutida (data URI): funciona em qualquer bundler, CDN ou Moodle sem depender de caminhos relativos
  const b64 = fs.readFileSync(path.join(ROOT, f.file)).toString('base64');
  css += `@font-face{font-family:"${f.family}";src:url("data:font/woff2;base64,${b64}") format("woff2");font-weight:${f.weight};font-style:${f.style || 'normal'};font-display:swap}\n`;
}
const themeSelectors = {
  light: ':root,[data-theme="light"],.light',
  dark: '[data-theme="dark"],.dark',
};
for (const th of themes) {
  const sel = themeSelectors[th] || `[data-theme="${th}"]`;
  const lines = [];
  for (const tok of tokens.color.tokens) {
    const v = valueFor(tok, th);
    if (v) lines.push(`  --${tok.name}: ${cssValue(v)};`);
  }
  for (const tok of tokens.shadow?.tokens || []) {
    const v = valueFor(tok, th);
    if (v) lines.push(`  --${tok.name}: ${v};`);
  }
  css += `${sel}{\n${th === 'dark' ? '  color-scheme: dark;\n' : '  color-scheme: light;\n'}${lines.join('\n')}\n}\n`;
}
const rootLines = [];
for (const fam of ['spacing', 'radius']) for (const tok of tokens[fam].tokens) rootLines.push(`  --${tok.name}: ${px(tok.value)};`);
for (const [k, v] of Object.entries(tokens.type.families)) rootLines.push(`  --font-${k}: ${v};`);
css += `:root{\n${rootLines.join('\n')}\n}\n`;
// estilos de texto com prefixo uc- para não colidir com classes do app
for (const g of tokens.type.groups) {
  for (const s of g.styles) {
    const fam = s.family || g.family;
    const decl = [
      `font-family:var(--font-${fam})`,
      `font-size:${px(s.fontSize)}`,
      `line-height:${typeof s.lineHeight === 'number' ? s.lineHeight : px(s.lineHeight)}`,
      `font-weight:${s.fontWeight}`,
    ];
    if (s.letterSpacing && s.letterSpacing !== '0') decl.push(`letter-spacing:${s.letterSpacing}`);
    if (s.name === 'overline') decl.push('text-transform:uppercase');
    css += `.uc-${s.name}{${decl.join(';')}}\n`;
  }
}
fs.writeFileSync(out('dist/tokens.css'), css);

/* ---------- components.css, styles.css */
fs.writeFileSync(out('dist/components.css'), HEAD + fs.readFileSync(src('components.css'), 'utf8'));
fs.writeFileSync(out('dist/styles.css'), HEAD + '@import "./tokens.css";\n@import "./components.css";\n');
fs.copyFileSync(src('tokens.json'), out('dist/tokens.json'));

/* ---------- JS: UMD (window.UniCIVE) e ESM */
const umd = fs.readFileSync(src('components.js'), 'utf8');
fs.writeFileSync(out('dist/unicive.umd.js'), umd);

const open = umd.indexOf('(function () {');
const close = umd.lastIndexOf('})();');
if (open < 0 || close < 0) throw new Error('src/components.js precisa ser uma IIFE "(function () { … })();"');
let body = umd.slice(open + '(function () {'.length, close);
if (!body.includes('var React = window.React;')) throw new Error('esperado "var React = window.React;"');
if (!body.includes('window.UniCIVE = {')) throw new Error('esperado "window.UniCIVE = {"');
body = body.replace('var React = window.React;', '').replace('window.UniCIVE = {', 'return {');
const names = ['Button', 'TextField', 'Select', 'Checkbox', 'Badge', 'Card', 'Alert', 'DataTable', 'Tabs', 'AppHeader', 'Sidebar', 'Topbar', 'Icon', 'iconNames'];
const esm = `'use client';\n${HEAD}import * as React from 'react';\n\nconst UniCIVE = (function (React) {${body}})(React);\n\nexport const { ${names.join(', ')} } = UniCIVE;\nexport default UniCIVE;\n`;
fs.writeFileSync(out('dist/index.mjs'), esm);

/* ---------- tipos */
const types = fs.readFileSync(src('types.d.ts'), 'utf8').replace(/export declare const iconNames: IconName\[\];\s*$/, '');
const decls = `
type El = React.ReactElement;
export declare function Button(props: ButtonProps): El;
export declare function TextField(props: TextFieldProps): El;
export declare function Select(props: SelectProps): El;
export declare function Checkbox(props: CheckboxProps): El;
export declare function Badge(props: BadgeProps): El;
export declare function Card(props: CardProps): El;
export declare function Alert(props: AlertProps): El;
export declare function DataTable<Row extends Record<string, any> = Record<string, any>>(props: DataTableProps<Row>): El;
export declare function Tabs(props: TabsProps): El;
export declare function AppHeader(props: AppHeaderProps): El;
export declare function Sidebar(props: SidebarProps): El;
export declare function Topbar(props: TopbarProps): El;
export declare function Icon(props: IconProps): El;
export declare const iconNames: IconName[];
declare const UniCIVE: {
  Button: typeof Button; TextField: typeof TextField; Select: typeof Select; Checkbox: typeof Checkbox;
  Badge: typeof Badge; Card: typeof Card; Alert: typeof Alert; DataTable: typeof DataTable; Tabs: typeof Tabs;
  AppHeader: typeof AppHeader; Sidebar: typeof Sidebar; Topbar: typeof Topbar; Icon: typeof Icon; iconNames: IconName[];
};
export default UniCIVE;
`;
fs.writeFileSync(out('dist/index.d.ts'), HEAD + types.trimEnd() + '\n' + decls);

/* ---------- Tailwind */
const colorNames = tokens.color.tokens.map((t) => t.name);
const radius = tokens.radius.tokens;
const fontStack = tokens.type.families.sans;

// v4: @import "@unicive/design-system/tailwind.css" depois de @import "tailwindcss"
let tw4 = HEAD + '@import "../dist/tokens.css";\n\n';
tw4 += '@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *, .dark, .dark *));\n\n';
tw4 += '@theme inline {\n';
for (const n of colorNames) tw4 += `  --color-${n}: var(--${n});\n`;
tw4 += `  --font-sans: ${fontStack};\n`;
for (const r of radius) tw4 += `  --${r.name}: ${px(r.value)};\n`;
// prefixo uc- evita que a variável do Tailwind aponte para ela mesma (--shadow-overlay)
for (const s of tokens.shadow?.tokens || []) tw4 += `  --shadow-uc-${s.name.replace(/^shadow-/, '')}: var(--${s.name});\n`;
tw4 += '}\n';
fs.writeFileSync(out('tailwind/theme.css'), tw4);

// v3: presets: [require('@unicive/design-system/tailwind-preset')]
const colors = Object.fromEntries(colorNames.map((n) => [n, `var(--${n})`]));
const borderRadius = Object.fromEntries(radius.map((r) => [r.name.replace(/^radius-/, ''), px(r.value)]));
const preset = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors,
      borderRadius,
      fontFamily: { sans: fontStack.split(',').map((s) => s.trim().replace(/^"|"$/g, '')) },
      boxShadow: Object.fromEntries((tokens.shadow?.tokens || []).map((s) => [s.name.replace(/^shadow-/, ''), `var(--${s.name})`])),
    },
  },
};
fs.writeFileSync(out('tailwind/preset.cjs'), `${HEAD}// Tailwind v3. Importe também "@unicive/design-system/tokens.css" no seu CSS global.\nmodule.exports = ${JSON.stringify(preset, null, 2)};\n`);

console.log(`ok: ${colorNames.length} cores, ${themes.length} temas, ${names.length - 1} componentes`);
