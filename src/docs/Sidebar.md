Menu lateral do app, na cor da marca, com grupos, ícones, subitens, contador e modo recolhido. Fica ao lado do conteúdo e se transforma em gaveta no celular. Use com `Topbar`; o `AppHeader` continua valendo para telas sem menu lateral.

**Quem usa fornece:** `groups` (`{id, label?, items}[]`; cada item tem `id`, `label`, `href`, `icon`, `count?` e `children?`), `current` (id do item ou subitem ativo), `logoSrc` (use `unicive-horizontal-sobre-escuro.svg`), `logoCompactSrc` (use `unicive-simbolo-sobre-escuro.svg`), `title` (nome do app) e `homeHref`. Para o modo recolhido, passe `collapsed` e `onCollapsedChange`; para a gaveta no celular, `open` e `onClose`.

- Monte o layout em linha: `<div class="flex"><Sidebar/><div class="flex-1 min-w-0"><Topbar/>…</div></div>`. A barra ocupa a altura da tela e fica fixa (`sticky`).
- `footerItems` fixa itens no rodapé da barra, acima de Recolher menu: use para Configurações e outras áreas de administração. Aceitam o mesmo formato dos itens.
- Até 5 itens por grupo e um nível de subitens. O item com subitens continua sendo um link; a seta ao lado abre e fecha a lista. O subitem ativo abre a lista sozinho.
- O item ativo recebe `aria-current="page"` e fundo `header-active` com contorno; a palavra e o ícone dizem onde você está, não só a cor.
- `count` aparece como selo amarelo e some quando é 0. Recolhida, vira um selo pequeno sobre o ícone.
- Recolhida (a partir de 960px) mostra só ícones, com o nome no `title`. Guarde a escolha no app (ex.: `localStorage`).
- Abaixo de 960px a barra vira gaveta: `open` abre, Esc, o fundo, o botão de fechar e qualquer link chamam `onClose`. Ligue `open` ao botão de menu da `Topbar`.
- Todo ícone vem de `Icon` (`grid`, `checklist`, `database`, `users`, `book`, `clock`, `upload`, `download`, `plus`). O foco de teclado é amarelo e nunca é removido.
- Itens de navegação são links de verdade (`href`); use `onClick` só para navegação sem recarregar a página (`preventDefault`).
