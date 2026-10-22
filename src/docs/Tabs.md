Abas em pílula, com contador opcional, para alternar visões da mesma tela.

**Quem usa fornece:** `items` (`{id, label, count?}[]`), `value`, `onChange` e `label` (nome da lista para leitores de tela). Com `idPrefix`, liga cada aba ao painel `idPrefix-panel-<id>`.

- 2 a 5 visões irmãs, rótulos de uma ou duas palavras.
- `count` mostra quantidades (pendências, itens); omita quando for zero ou irrelevante.
- Setas esquerda e direita, Home e End trocam de aba e movem o foco.
- Quem usa renderiza só o painel ativo, com `role="tabpanel"`.
- Em telas estreitas, a lista rola na horizontal.
