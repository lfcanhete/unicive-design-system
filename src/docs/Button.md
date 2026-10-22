Botão de ação com cinco variantes, três tamanhos, ícones, estado de carregamento e versão só com ícone.

**Quem usa fornece:** `children` (texto curto começando por verbo), `onClick` ou `href`; em formulários, `type="submit"`. Botão só com ícone exige `aria-label`.

- `variant`: `primary` (uma vez por tela ou grupo), `secondary` (ação alternativa), `accent` (uma chamada de destaque em amarelo, nunca ao lado de outro `primary`), `ghost` (ações discretas em tabelas e cards) e `danger` (ações destrutivas, sempre com confirmação).
- `size`: `lg` (48px, telas de abertura), `md` (40px, padrão) e `sm` (32px, tabelas e cabeçalhos).
- `iconStart` e `iconEnd` aceitam um nome de `Icon` (`"download"`) ou um elemento. Use ícone para reforçar o texto, não para substituí-lo, exceto em ações óbvias (editar, atualizar) com `aria-label`.
- `loading` mostra o spinner no lugar do ícone, mantém a cor da variante, marca `aria-busy` e bloqueia cliques. Troque o texto para o gerúndio ("Sincronizando").
- `disabled` usa `disabled-bg` e `disabled-fg` (sem opacidade) e mantém o foco por teclado via `aria-disabled`. Explique perto do botão por que ele está bloqueado.
- `fullWidth` ocupa a largura do contêiner (formulários estreitos e celular).
- Com `href`, vira link com a mesma aparência; `target="_blank"` recebe `rel="noopener noreferrer"`.
