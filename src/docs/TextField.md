Campo de texto com rótulo, ícone, dica, contador e erro, em uma linha ou várias.

**Quem usa fornece:** `label` (obrigatório), `value` e `onChange` (ou `defaultValue`) e `error` quando a validação falhar.

- Rótulo sempre visível acima do campo; `placeholder` é só exemplo. Marque `required` (asterisco) ou `optional` ("(opcional)"), nunca os dois.
- `iconStart` (ex.: `"search"`) para campos de busca; não use em campos comuns.
- `multiline` com `rows` vira área de texto redimensionável na vertical; combine com `maxLength` para mostrar o contador.
- `readOnly` para dados que vêm de outro sistema (JACAD, Moodle): fundo `surface-sunken`, ainda selecionável e copiável. `disabled` para campos que não se aplicam agora.
- Erro: borda de 2px em `danger-fg`, ícone e texto que diz o que corrigir ("Informe apenas números."). A dica some enquanto houver erro.
- Use `inputMode="numeric"` em IDs e códigos numéricos e `autoComplete` quando fizer sentido.
- Altura de 44px (`size="sm"`: 36px, para filtros de tabela).
