Cartão plano com cantos `radius-lg`, quatro tons, valor de destaque, ações e versão clicável.

**Quem usa fornece:** `children` e, conforme o caso, `eyebrow` (rótulo em caixa-alta), `title`, `value` (número de destaque), `actions` (botões) e `href` ou `onClick`.

- Indicadores de painel: `eyebrow` + `value` + uma linha de contexto em `children` ("cursos ofertados em 2026/2").
- `tone`: padrão para conteúdo comum; `brand` (verde-escuro, texto branco) para o destaque principal; `accent` e `soft` com texto `ink-preto`. No máximo um cartão colorido para cada três neutros.
- `actions` recebe botões `size="sm"`, com no máximo um `primary`.
- Com `href` ou `onClick`, o cartão inteiro vira link ou botão, com hover em `tint` e anel de foco. Nesse caso não coloque botões dentro (`actions` é ignorado).
- `compact` reduz o padding para grades densas. Sem sombra e sem borda lateral colorida.
