Barra fina no topo do conteúdo, em superfície neutra, para o botão de menu, o título e as ações da pessoa. Acompanha a `Sidebar`.

**Quem usa fornece:** `onMenuClick` (mostra o botão de menu abaixo de 960px; ligue ao `open` da `Sidebar`), `menuOpen`, `title`, `user` (`{name, role?}`: o nome vira iniciais e o `role` aparece como selo) e `children` (ações à direita, como o tema e "Sair").

- Altura de 56px e fica fixa no topo ao rolar (`sticky`).
- No celular o selo de `role` some; o nome continua no `title` do avatar.
- Ações com ícone usam botões redondos de 40px em superfície (`border`, `surface`); texto de botão começa com verbo.
- Não repita na barra o que já está no menu lateral.
