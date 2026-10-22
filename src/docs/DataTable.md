Tabela de dados com ordenação, seleção de linha, números em pt-BR, cabeçalho fixo e estados de carregando e vazio.

**Quem usa fornece:** `columns` (`{key, header, numeric?, sortable?, width?, render?}[]`), `rows` (objetos com `id` ou a chave em `rowKey`) e `caption`. Opcionais: `sort` + `onSortChange`, `onRowClick` + `selectedKey`, `loading`, `empty`, `density` e `maxHeight`.

- Sempre informe `caption`: ela nomeia a tabela para leitores de tela.
- `numeric: true` alinha à direita, usa dígitos tabulares e formata números no padrão brasileiro (1.205).
- Ordenação é controlada: a tabela avisa a nova ordem por `onSortChange({key, dir})` e quem usa ordena as linhas. O cabeçalho ativo mostra seta e `aria-sort`.
- Linha clicável recebe foco por teclado (Enter e Espaço), hover em `tint` e, quando selecionada, fundo `tint` com marca de 3px em `primary`.
- `loading` mostra três linhas de esqueleto; `empty` deve dizer como sair do vazio ("Ajuste o semestre ou o nível.").
- `maxHeight` ativa a rolagem interna com cabeçalho fixo; `density="compact"` para listas longas.
- Use `render` para selos (`Badge size="sm"`) e ações (`Button variant="ghost" size="sm"`).
