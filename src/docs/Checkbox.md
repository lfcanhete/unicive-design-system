Caixa de seleção com rótulo, descrição opcional, estado parcial e erro.

**Quem usa fornece:** `label`, `checked` e `onChange` (ou `defaultChecked`); `indeterminate` para o "selecionar todos" quando só parte dos itens está marcada.

- O rótulo inteiro é clicável; escreva-o como afirmação ("Notificar tutores"), não como pergunta.
- `description` explica a consequência em uma linha, em `ink-muted`.
- Para confirmação obrigatória, use `required` e `error` ("Confirme para continuar.").
- Em listas, recue os filhos 32px abaixo do "Selecionar todos".
- Para ligar e desligar algo com efeito imediato, prefira um botão; a caixa é para escolhas que serão salvas depois.
