Lista suspensa nativa com o mesmo rótulo, dica, erro e tamanhos do `TextField`.

**Quem usa fornece:** `label`, `options` (`{value, label, disabled?}[]`), `value` e `onChange` (ou `defaultValue`). `placeholder` cria a primeira opção vazia; com `required`, ela não pode ser escolhida de volta.

- Use para 3 a 10 opções fixas; acima disso, ofereça um campo de busca.
- Mantém o seletor nativo para funcionar bem em celular e em leitores de tela.
- `size="sm"` para filtros acima de tabelas.
