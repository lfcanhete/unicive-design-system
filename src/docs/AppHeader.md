Cabeçalho do app com logo, título, navegação, ações e usuário, que se adapta à largura.

**Quem usa fornece:** `logoSrc` (use `unicive-horizontal-sobre-escuro.svg`), `title` (nome do app), `nav` (`{id, label, href}[]`), `current` (id ativo), `user` (`{name}`, vira iniciais) e `children` (ações à direita). `homeHref` para o link do logo.

- No tema claro o fundo é o verde-escuro da marca; no escuro, grafite (`header-bg`) com linha inferior. O logo é sempre a versão `sobre-escuro` ou `branco`.
- Para apps com várias áreas e submenus, prefira `Sidebar` + `Topbar`.
- Até 5 itens de navegação; o ativo recebe `aria-current="page"`.
- No máximo uma ação em `accent` à direita.
- Abaixo de 720px de largura, o título some e a navegação rola com esmaecimento na borda.
