import * as React from 'react';

export type IconName =
  | 'success' | 'danger' | 'warning' | 'info' | 'close' | 'check' | 'minus' | 'plus'
  | 'search' | 'download' | 'upload' | 'chevron-down' | 'chevron-right' | 'arrow-up'
  | 'arrow-down' | 'sort' | 'refresh' | 'edit' | 'trash' | 'external' | 'filter'
  | 'menu' | 'chevron-left' | 'panel-left' | 'grid' | 'checklist' | 'database' | 'users' | 'book' | 'clock' | 'log-out' | 'sliders';

export type IconProps = {
  name: IconName;
  /** Lado em px. Padrão: 16. */
  size?: number;
  /** Nome acessível; só quando o ícone tem significado sozinho. */
  label?: string;
  className?: string;
};

export type ButtonProps = {
  /** Padrão: "primary". */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
  /** lg 48px · md 40px · sm 32px. Padrão: "md". */
  size?: 'sm' | 'md' | 'lg';
  iconStart?: IconName | React.ReactNode;
  iconEnd?: IconName | React.ReactNode;
  /** Mostra spinner, marca aria-busy e bloqueia cliques. */
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Renderiza como link. */
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  /** Obrigatório quando o botão só tem ícone. */
  'aria-label'?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
};

export type TextFieldProps = {
  label: string;
  hint?: string;
  /** Mensagem de erro; ativa o estado inválido. */
  error?: string;
  required?: boolean;
  /** Mostra "(opcional)" após o rótulo. */
  optional?: boolean;
  iconStart?: IconName | React.ReactNode;
  /** Vira área de texto. */
  multiline?: boolean;
  rows?: number;
  /** Mostra contador "n/max". */
  maxLength?: number;
  size?: 'sm' | 'md';
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent) => void;
  className?: string;
};

export type SelectProps = {
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  /** Cria a primeira opção vazia com este texto. */
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  size?: 'sm' | 'md';
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

export type CheckboxProps = {
  label: React.ReactNode;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  /** Estado parcial para "selecionar todos". */
  indeterminate?: boolean;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export type BadgeProps = {
  /** Situação, com ícone. */
  status?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  /** Nível de ensino, com a cor setorial. Tem prioridade sobre status. */
  sector?: 'graduacao' | 'pos' | 'extensao' | 'mestrado' | 'livres' | 'tecnicos' | 'aperfeicoamento';
  size?: 'sm' | 'md';
  className?: string;
  children?: React.ReactNode;
};

export type CardProps = {
  tone?: 'default' | 'brand' | 'accent' | 'soft';
  /** Rótulo em caixa-alta no topo. */
  eyebrow?: string;
  /** Número de destaque (indicadores). */
  value?: React.ReactNode;
  title?: string;
  titleAs?: 'h2' | 'h3' | 'h4';
  /** Botões no rodapé; ignorado quando o cartão é clicável. */
  actions?: React.ReactNode;
  /** Torna o cartão inteiro um link. */
  href?: string;
  /** Torna o cartão inteiro um botão. */
  onClick?: () => void;
  compact?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type AlertProps = {
  kind?: 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  /** Um botão sm secondary abaixo da mensagem. */
  action?: React.ReactNode;
  /** Mostra o botão "Fechar aviso". */
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export type DataTableColumn<Row> = {
  key: string;
  header: string;
  /** Alinha à direita, dígitos tabulares e formato pt-BR. */
  numeric?: boolean;
  sortable?: boolean;
  width?: string | number;
  render?: (row: Row) => React.ReactNode;
};

export type DataTableSort = { key: string; dir: 'asc' | 'desc' };

export type DataTableProps<Row extends Record<string, any> = Record<string, any>> = {
  columns: DataTableColumn<Row>[];
  rows: Row[];
  /** Nome da tabela para leitores de tela. */
  caption?: string;
  /** Padrão: "id". */
  rowKey?: string;
  sort?: DataTableSort;
  onSortChange?: (sort: DataTableSort) => void;
  selectedKey?: string | number;
  /** Torna as linhas clicáveis e focáveis. */
  onRowClick?: (row: Row) => void;
  /** Mostra linhas de esqueleto. */
  loading?: boolean;
  /** Mensagem quando não há linhas. */
  empty?: string;
  density?: 'comfortable' | 'compact';
  /** Altura máxima com rolagem e cabeçalho fixo. */
  maxHeight?: string | number;
  className?: string;
};

export type TabsProps = {
  items: { id: string; label: string; count?: number }[];
  value: string;
  onChange?: (id: string) => void;
  /** Nome da lista de abas para leitores de tela. */
  label?: string;
  /** Liga cada aba ao painel `${idPrefix}-panel-${id}`. */
  idPrefix?: string;
  className?: string;
};

export type AppHeaderProps = {
  /** Logo versão sobre-escuro ou branco. */
  logoSrc?: string;
  homeHref?: string;
  title?: string;
  nav?: { id: string; label: string; href?: string; onClick?: (e: React.MouseEvent) => void }[];
  /** Id do item ativo. */
  current?: string;
  /** Mostra as iniciais à direita. */
  user?: { name: string };
  className?: string;
  /** Ações à direita. */
  children?: React.ReactNode;
};

export type SidebarLink = {
  id: string;
  label: string;
  href?: string;
  /** Ícone do conjunto `Icon`. Itens de segundo nível podem ficar sem ícone. */
  icon?: IconName;
  /** Número em destaque (ex.: pendências). Some quando é 0. */
  count?: number;
  onClick?: (e: React.MouseEvent) => void;
};

export type SidebarItem = SidebarLink & {
  /** Subitens (um nível). O item continua sendo um link; a seta abre e fecha a lista. */
  children?: SidebarLink[];
};

export type SidebarGroup = {
  id: string;
  /** Título do grupo, em caixa-alta. Some quando a barra está recolhida. */
  label?: string;
  items: SidebarItem[];
};

export type SidebarProps = {
  groups: SidebarGroup[];
  /** Id do item ou subitem da página aberta; recebe `aria-current="page"`. */
  current?: string;
  /** Logo completo (use `unicive-horizontal-sobre-escuro.svg`). */
  logoSrc?: string;
  /** Símbolo usado com a barra recolhida (use `unicive-simbolo-sobre-escuro.svg`). */
  logoCompactSrc?: string;
  homeHref?: string;
  /** Nome do app ao lado do logo. */
  title?: string;
  /** Barra recolhida, só com ícones (a partir de 960px). Controlado quando informado. */
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Gaveta aberta no celular (abaixo de 960px). */
  open?: boolean;
  /** Fecha a gaveta: Esc, clique no fundo, no botão de fechar ou em um link. */
  onClose?: () => void;
  /** Itens fixos no rodapé, acima do botão de recolher (ex.: Configurações). Mesmo formato dos itens dos grupos. */
  footerItems?: SidebarItem[];
  /** Conteúdo livre acima do botão de recolher. */
  footer?: React.ReactNode;
  /** Nome da navegação para leitores de tela. Padrão: "Principal". */
  label?: string;
  className?: string;
};

export type TopbarProps = {
  /** Mostra o botão de menu abaixo de 960px; ligue-o à `open` da Sidebar. */
  onMenuClick?: () => void;
  menuOpen?: boolean;
  menuLabel?: string;
  title?: React.ReactNode;
  /** `name` vira iniciais; `role` aparece como selo (some no celular). */
  user?: { name: string; role?: string };
  /** Ações à direita, antes do usuário. */
  children?: React.ReactNode;
  className?: string;
};

export declare const iconNames: IconName[];
