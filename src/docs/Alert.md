Aviso em bloco com ícone, título, mensagem, ação opcional e botão de fechar.

**Quem usa fornece:** `kind`, `title`, `children` (a mensagem) e, se for o caso, `action` (um botão `size="sm"` `secondary`) e `onClose`.

- Título curto diz o que aconteceu; a mensagem diz o que fazer em seguida ou tranquiliza ("Suas alterações estão guardadas.").
- Cada tipo tem ícone de formato diferente, então não depende só da cor.
- `danger` e `warning` usam `role="alert"` (anunciados na hora); `success` e `info` usam `role="status"`.
- Ofereça `onClose` só em avisos informativos; erros somem quando o problema for resolvido.
- Para erro de um campo, use a mensagem do próprio campo, não um aviso.
