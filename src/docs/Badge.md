Selo em pílula para situação (`status`) ou nível de ensino (`sector`).

**Quem usa fornece:** `children` (uma ou duas palavras) e `status` (`success`, `warning`, `danger`, `info`, `neutral`) **ou** `sector` (`graduacao`, `pos`, `extensao`, `mestrado`, `livres`, `tecnicos`, `aperfeicoamento`). `size="sm"` dentro de tabelas.

- Selos de situação sempre levam ícone de formato próprio e uma palavra: nunca dependa só da cor.
- Selos de setor usam as cores setoriais do manual com o texto `on-setor-*`. No tema escuro, Graduação, Pós-graduação e Técnicos ganham contorno `border-strong` para não sumirem no grafite.
- Em `mestrado` o texto é escuro (5.1:1); o manual mostra branco, que só passa em texto grande.
- No máximo dois selos por linha de tabela.
