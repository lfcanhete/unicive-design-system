# Interface: Design System UNICIVE

Este projeto usa o design system do UNICIVE (`@unicive/design-system`). Toda tela, componente ou estilo novo segue estas regras.

1. **Leia antes de criar UI:** `node_modules/@unicive/design-system/GUIDE.md` (marca, cores, tipografia, logo, tom de voz) e `node_modules/@unicive/design-system/dist/index.d.ts` (props dos componentes). Se o pacote estiver copiado em outra pasta, use o mesmo caminho dentro dela.
2. **Use os componentes do sistema** em vez de criar controles do zero: `Button`, `TextField`, `Select`, `Checkbox`, `Badge`, `Card`, `Alert`, `DataTable`, `Tabs`, `AppHeader`, `Sidebar`, `Topbar` e `Icon`, importados de `@unicive/design-system`.
3. **Cores só por token:** `var(--primary)`, `var(--surface)`, `var(--ink)` etc., ou as classes Tailwind equivalentes (`bg-primary`, `text-ink`, `border-border`). Nunca escreva hex soltos no código do app.
4. **Tema escuro** é `data-theme="dark"` (ou a classe `dark`) no `<html>`. Superfícies em grafite neutro; o verde fica só para marca e ação.
5. **Fonte:** Rethink Sans, já carregada pelo `tokens.css`. Títulos em 600, texto em 400.
6. **Logo:** use os SVGs de `logos/`. No `AppHeader` e sobre fundos escuros, use `unicive-horizontal-sobre-escuro.svg`. Nunca recolorir nem redesenhar.
7. **Textos** em português do Brasil, curtos e diretos; botões começam com verbo; erros dizem o que corrigir. Sem emoji: ícones vêm de `Icon`.
8. **Acessibilidade:** todo campo tem rótulo visível, estados levam ícone e palavra (nunca só cor) e o foco de teclado nunca é removido.
