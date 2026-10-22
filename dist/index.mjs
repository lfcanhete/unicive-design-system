'use client';
/* UniCIVE Design System — gerado por scripts/build.mjs a partir de src/. Não edite à mão. */
import * as React from 'react';

const UniCIVE = (function (React) {
  
  var h = React.createElement;

  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(' ');
  }

  /* Ícones de traço 1.8px, pontas arredondadas, cor = currentColor. */
  var ICONS = {
    success: [['circle', { cx: 8, cy: 8, r: 6.5 }], ['path', { d: 'M5 8.2l2 2L11 6' }]],
    danger: [['circle', { cx: 8, cy: 8, r: 6.5 }], ['path', { d: 'M5.8 5.8l4.4 4.4M10.2 5.8l-4.4 4.4' }]],
    warning: [['path', { d: 'M8 2.2L14.2 13H1.8z' }], ['path', { d: 'M8 6.6v3M8 11.4v.1' }]],
    info: [['circle', { cx: 8, cy: 8, r: 6.5 }], ['path', { d: 'M8 7.2v3.6M8 5v.1' }]],
    close: [['path', { d: 'M4 4l8 8M12 4l-8 8' }]],
    check: [['path', { d: 'M3.5 8.5l3 3 6-7' }]],
    minus: [['path', { d: 'M4 8h8' }]],
    plus: [['path', { d: 'M8 3.5v9M3.5 8h9' }]],
    search: [['circle', { cx: 7, cy: 7, r: 4.5 }], ['path', { d: 'M10.4 10.4L13.5 13.5' }]],
    download: [['path', { d: 'M8 2.5v7.5M4.8 7l3.2 3.2L11.2 7M3 13.5h10' }]],
    upload: [['path', { d: 'M8 10.5V3M4.8 6.2L8 3l3.2 3.2M3 13.5h10' }]],
    'chevron-down': [['path', { d: 'M4 6l4 4 4-4' }]],
    'chevron-right': [['path', { d: 'M6 4l4 4-4 4' }]],
    'arrow-up': [['path', { d: 'M8 13V3.5M4.5 7L8 3.5 11.5 7' }]],
    'arrow-down': [['path', { d: 'M8 3v9.5M4.5 9L8 12.5 11.5 9' }]],
    sort: [['path', { d: 'M5 6l3-3 3 3M5 10l3 3 3-3' }]],
    refresh: [['path', { d: 'M13 8a5 5 0 1 1-1.5-3.6M13 2.5v3h-3' }]],
    edit: [['path', { d: 'M10.5 2.8l2.7 2.7L6 12.7 2.8 13.2l.5-3.2z' }]],
    trash: [['path', { d: 'M2.8 4.5h10.4M6.2 4.5V3h3.6v1.5M4.2 4.5l.6 8.5h6.4l.6-8.5' }]],
    external: [['path', { d: 'M9.5 2.5h4v4M13.5 2.5L7.5 8.5M12 9.5v4H2.5V4h4' }]],
    filter: [['path', { d: 'M2.5 3.5h11L9.3 8.6v4l-2.6 1.2V8.6z' }]],
    menu: [['path', { d: 'M2.5 4h11M2.5 8h11M2.5 12h11' }]],
    'chevron-left': [['path', { d: 'M10 4L6 8l4 4' }]],
    'panel-left': [['rect', { x: 2, y: 2.5, width: 12, height: 11, rx: 2 }], ['path', { d: 'M6.2 2.5v11' }]],
    grid: [['rect', { x: 2.5, y: 2.5, width: 4.5, height: 4.5, rx: 1.2 }], ['rect', { x: 9, y: 2.5, width: 4.5, height: 4.5, rx: 1.2 }], ['rect', { x: 2.5, y: 9, width: 4.5, height: 4.5, rx: 1.2 }], ['rect', { x: 9, y: 9, width: 4.5, height: 4.5, rx: 1.2 }]],
    checklist: [['path', { d: 'M2.5 4.4l1.2 1.2 2-2.4M2.5 10.4l1.2 1.2 2-2.4M8.5 4.8h5M8.5 10.8h5' }]],
    database: [['ellipse', { cx: 8, cy: 4, rx: 5, ry: 2 }], ['path', { d: 'M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.2 2 5 2s5-.9 5-2' }]],
    users: [['circle', { cx: 6, cy: 5.5, r: 2.5 }], ['path', { d: 'M1.8 13c0-2.3 1.9-4 4.2-4s4.2 1.7 4.2 4M10.6 3.4a2.4 2.4 0 0 1 0 4.2M12.2 9.4c1.4.5 2.3 1.8 2.3 3.6' }]],
    book: [['path', { d: 'M3 2.5h7.5a2 2 0 0 1 2 2v9H5a2 2 0 0 1-2-2z' }], ['path', { d: 'M3 11.5a2 2 0 0 1 2-2h7.5' }]],
    clock: [['circle', { cx: 8, cy: 8, r: 6 }], ['path', { d: 'M8 4.6V8l2.2 1.4' }]],
    'log-out': [['path', { d: 'M6.5 2.5h-3v11h3M10 5.5L12.8 8 10 10.5M12.8 8H6.5' }]],
    sliders: [['path', { d: 'M2.5 4.5h3M10.5 4.5h3M2.5 8h7M13.5 8h0M2.5 11.5h1.5M8.5 11.5h5' }], ['circle', { cx: 8, cy: 4.5, r: 1.8 }], ['circle', { cx: 11.5, cy: 8, r: 1.8 }], ['circle', { cx: 6, cy: 11.5, r: 1.8 }]]
  };

  function Icon(props) {
    var size = props.size || 16;
    var parts = ICONS[props.name] || ICONS.info;
    return h('svg', {
      className: cx('uc-icon', props.className), width: size, height: size, viewBox: '0 0 16 16', fill: 'none',
      stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
      'aria-hidden': props.label ? undefined : 'true', role: props.label ? 'img' : undefined, 'aria-label': props.label, focusable: 'false'
    }, parts.map(function (p, i) { return h(p[0], Object.assign({ key: i }, p[1])); }));
  }

  function Spinner(props) {
    var s = props.size || 16;
    return h('svg', { className: 'uc-icon uc-spin', width: s, height: s, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': 'true', focusable: 'false' },
      h('circle', { cx: 8, cy: 8, r: 6, stroke: 'currentColor', strokeOpacity: 0.3, strokeWidth: 2 }),
      h('path', { d: 'M14 8a6 6 0 0 0-6-6', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' }));
  }

  function renderIcon(icon, size) {
    if (!icon) return null;
    return typeof icon === 'string' ? h(Icon, { name: icon, size: size }) : icon;
  }

  /* ---------- Button */
  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var iconSize = size === 'sm' ? 14 : 16;
    var blocked = props.disabled || props.loading;
    var iconOnly = !props.children && (props.iconStart || props.iconEnd);
    var className = cx('uc-btn', 'uc-btn--' + variant, size !== 'md' && 'uc-btn--' + size, props.fullWidth && 'uc-btn--full', iconOnly && 'uc-btn--icon', props.className);
    var content = [
      props.loading ? h(Spinner, { key: 's', size: iconSize }) : (props.iconStart ? h(React.Fragment, { key: 'a' }, renderIcon(props.iconStart, iconSize)) : null),
      props.children != null ? h('span', { key: 'c' }, props.children) : null,
      props.iconEnd && !props.loading ? h(React.Fragment, { key: 'b' }, renderIcon(props.iconEnd, iconSize)) : null
    ];
    var common = {
      className: className,
      'aria-disabled': blocked ? 'true' : undefined,
      'aria-busy': props.loading ? 'true' : undefined,
      'aria-label': props['aria-label'] || props.label,
      title: iconOnly ? (props['aria-label'] || props.label) : undefined,
      onClick: function (e) { if (blocked) { e.preventDefault(); return; } if (props.onClick) props.onClick(e); }
    };
    if (props.href && !blocked) {
      return h('a', Object.assign(common, { href: props.href, target: props.target, rel: props.target === '_blank' ? 'noopener noreferrer' : undefined }), content);
    }
    return h('button', Object.assign(common, { type: props.type || 'button', form: props.form }), content);
  }

  /* ---------- Campos */
  function useFieldIds(id) {
    var auto = React.useId();
    return id || ('uc' + auto.replace(/:/g, ''));
  }

  function FieldFoot(props) {
    var count = props.maxLength && props.length != null
      ? h('span', { className: cx('uc-count', props.length > props.maxLength && 'uc-count--over'), 'aria-live': 'polite' }, props.length + '/' + props.maxLength)
      : null;
    var msg = props.error
      ? h('div', { className: 'uc-err', id: props.id + '-err' }, h(Icon, { name: 'danger', size: 14 }), h('span', null, props.error))
      : (props.hint ? h('div', { className: 'uc-hint', id: props.id + '-hint' }, props.hint) : null);
    if (!msg && !count) return null;
    return h('div', { className: 'uc-field__foot' }, msg, count);
  }

  function FieldLabel(props) {
    return h('label', { className: 'uc-label', htmlFor: props.id }, props.label,
      props.required ? h('span', { className: 'uc-req', 'aria-hidden': 'true' }, ' *') : null,
      props.optional ? h('span', { className: 'uc-hint' }, ' (opcional)') : null);
  }

  function describedBy(id, p) {
    return p.error ? id + '-err' : (p.hint ? id + '-hint' : undefined);
  }

  function TextField(props) {
    var id = useFieldIds(props.id);
    var inner = React.useState(props.defaultValue || '');
    var current = props.value != null ? props.value : inner[0];
    function onChange(e) {
      if (props.value == null) inner[1](e.target.value);
      if (props.onChange) props.onChange(e);
    }
    var attrs = {
      id: id,
      className: cx('uc-input', props.size === 'sm' && 'uc-input--sm'),
      name: props.name,
      value: props.value,
      defaultValue: props.value == null ? props.defaultValue : undefined,
      placeholder: props.placeholder,
      required: props.required,
      disabled: props.disabled,
      readOnly: props.readOnly,
      autoComplete: props.autoComplete,
      inputMode: props.inputMode,
      onChange: onChange,
      onBlur: props.onBlur,
      'aria-invalid': props.error ? 'true' : undefined,
      'aria-describedby': describedBy(id, props)
    };
    var control = props.multiline
      ? h('textarea', Object.assign(attrs, { rows: props.rows || 4 }))
      : h('input', Object.assign(attrs, { type: props.type || 'text' }));
    return h('div', { className: cx('uc-field', props.className) },
      h(FieldLabel, { id: id, label: props.label, required: props.required, optional: props.optional }),
      h('div', { className: cx('uc-control', props.iconStart && !props.multiline && 'uc-control--icon') },
        props.iconStart && !props.multiline ? h('span', { className: 'uc-control__icon' }, renderIcon(props.iconStart, 16)) : null,
        control),
      h(FieldFoot, { id: id, hint: props.hint, error: props.error, maxLength: props.maxLength, length: props.maxLength ? String(current || '').length : null })
    );
  }

  function Select(props) {
    var id = useFieldIds(props.id);
    var options = (props.options || []).map(function (o) {
      return h('option', { key: o.value, value: o.value, disabled: o.disabled }, o.label);
    });
    return h('div', { className: cx('uc-field', props.className) },
      h(FieldLabel, { id: id, label: props.label, required: props.required, optional: props.optional }),
      h('div', { className: 'uc-select-wrap' },
        h('select', {
          id: id,
          className: cx('uc-input', props.size === 'sm' && 'uc-input--sm'),
          name: props.name,
          value: props.value,
          defaultValue: props.value == null ? (props.defaultValue != null ? props.defaultValue : (props.placeholder ? '' : undefined)) : undefined,
          required: props.required,
          disabled: props.disabled,
          onChange: props.onChange,
          'aria-invalid': props.error ? 'true' : undefined,
          'aria-describedby': describedBy(id, props)
        }, props.placeholder ? h('option', { value: '', disabled: props.required }, props.placeholder) : null, options),
        h('span', { className: 'uc-select-chev' }, h(Icon, { name: 'chevron-down', size: 16 }))),
      h(FieldFoot, { id: id, hint: props.hint, error: props.error })
    );
  }

  /* ---------- Checkbox */
  function Checkbox(props) {
    var id = useFieldIds(props.id);
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!props.indeterminate; }, [props.indeterminate]);
    var descId = props.description ? id + '-desc' : undefined;
    var errId = props.error ? id + '-err' : undefined;
    return h('div', { className: cx('uc-field', props.className) },
      h('label', { className: cx('uc-check', props.disabled && 'uc-check--disabled'), htmlFor: id },
        h('span', { className: 'uc-check__box' },
          h('input', {
            ref: ref, id: id, type: 'checkbox', className: 'uc-check__input', name: props.name, value: props.value,
            checked: props.checked, defaultChecked: props.checked == null ? props.defaultChecked : undefined,
            disabled: props.disabled, required: props.required, onChange: props.onChange,
            'aria-invalid': props.error ? 'true' : undefined,
            'aria-describedby': [descId, errId].filter(Boolean).join(' ') || undefined
          }),
          h('span', { className: 'uc-check__mark uc-check__mark--on' }, h(Icon, { name: 'check', size: 14 })),
          h('span', { className: 'uc-check__mark uc-check__mark--mixed' }, h(Icon, { name: 'minus', size: 14 }))),
        h('span', { className: 'uc-check__text' },
          h('span', { className: 'uc-check__label' }, props.label),
          props.description ? h('span', { className: 'uc-check__desc', id: descId }, props.description) : null)),
      props.error ? h('div', { className: 'uc-err', id: errId }, h(Icon, { name: 'danger', size: 14 }), h('span', null, props.error)) : null
    );
  }

  /* ---------- Badge */
  function Badge(props) {
    var kind = props.sector || props.status || 'neutral';
    var showIcon = !props.sector && props.status && props.status !== 'neutral';
    return h('span', { className: cx('uc-badge', 'uc-badge--' + kind, props.size === 'sm' && 'uc-badge--sm', props.className) },
      showIcon ? h(Icon, { name: props.status, size: 14 }) : null, props.children);
  }

  /* ---------- Card */
  function Card(props) {
    var tone = props.tone || 'default';
    var interactive = !!(props.href || props.onClick);
    var className = cx('uc-card', 'uc-card--' + tone, props.compact && 'uc-card--compact', interactive && 'uc-card--interactive', props.className);
    var TitleTag = props.titleAs || 'h3';
    var kids = [
      props.eyebrow ? h('p', { key: 'e', className: 'uc-card__eyebrow' }, props.eyebrow) : null,
      props.value != null ? h('p', { key: 'v', className: 'uc-card__value' }, props.value) : null,
      props.title ? h(TitleTag, { key: 't', className: 'uc-card__title' }, props.title) : null,
      props.children ? h('div', { key: 'b', className: 'uc-card__body' }, props.children) : null,
      props.actions && !interactive ? h('div', { key: 'a', className: 'uc-card__actions' }, props.actions) : null
    ];
    if (props.href) return h('a', { className: className, href: props.href }, kids);
    if (props.onClick) return h('button', { type: 'button', className: className, onClick: props.onClick, style: { textAlign: 'left', font: 'inherit', width: '100%' } }, kids);
    return h('section', { className: className }, kids);
  }

  /* ---------- Alert */
  function Alert(props) {
    var kind = props.kind || 'info';
    var urgent = kind === 'danger' || kind === 'warning';
    return h('div', { className: cx('uc-alert', 'uc-alert--' + kind, props.className), role: urgent ? 'alert' : 'status' },
      h(Icon, { name: kind, size: 16, className: 'uc-alert__icon' }),
      h('div', { className: 'uc-alert__content' },
        props.title ? h('p', { className: 'uc-alert__title' }, props.title) : null,
        props.children ? h('div', { className: 'uc-alert__body' }, props.children) : null,
        props.action ? h('div', { className: 'uc-alert__action' }, props.action) : null),
      props.onClose ? h('button', { type: 'button', className: 'uc-alert__close', onClick: props.onClose, 'aria-label': 'Fechar aviso' }, h(Icon, { name: 'close', size: 16 })) : null
    );
  }

  /* ---------- DataTable */
  var NUM = typeof Intl !== 'undefined' ? new Intl.NumberFormat('pt-BR') : null;

  function DataTable(props) {
    var columns = props.columns || [];
    var rows = props.rows || [];
    var rowKey = props.rowKey || 'id';
    var clickable = typeof props.onRowClick === 'function';
    var sort = props.sort || null;

    function header(c) {
      var active = sort && sort.key === c.key;
      var ariaSort = c.sortable ? (active ? (sort.dir === 'desc' ? 'descending' : 'ascending') : 'none') : undefined;
      var label = c.sortable
        ? h('button', {
          type: 'button', className: 'uc-sort',
          onClick: function () {
            if (!props.onSortChange) return;
            props.onSortChange({ key: c.key, dir: active && sort.dir === 'asc' ? 'desc' : 'asc' });
          }
        }, c.header, h(Icon, { name: active ? (sort.dir === 'desc' ? 'arrow-down' : 'arrow-up') : 'sort', size: 12 }))
        : c.header;
      return h('th', { key: c.key, scope: 'col', 'aria-sort': ariaSort, className: c.numeric ? 'uc-num' : undefined, style: c.width ? { width: c.width } : undefined }, label);
    }

    function cell(c, row) {
      if (c.render) return c.render(row);
      var v = row[c.key];
      if (c.numeric && typeof v === 'number' && NUM) return NUM.format(v);
      return v;
    }

    var bodyRows;
    if (props.loading) {
      bodyRows = [0, 1, 2].map(function (i) {
        return h('tr', { key: 'sk' + i }, columns.map(function (c, j) {
          return h('td', { key: c.key, className: c.numeric ? 'uc-num' : undefined },
            h('span', { className: 'uc-skel', style: { width: (c.numeric ? 40 : 60 + ((i + j) % 3) * 20) + '%', marginLeft: c.numeric ? 'auto' : undefined } }));
        }));
      });
    } else if (rows.length === 0) {
      bodyRows = h('tr', null, h('td', { colSpan: columns.length }, h('div', { className: 'uc-empty' }, props.empty || 'Nenhum registro encontrado.')));
    } else {
      bodyRows = rows.map(function (row) {
        var key = row[rowKey];
        var selected = props.selectedKey != null && props.selectedKey === key;
        var handlers = clickable ? {
          tabIndex: 0,
          'aria-selected': selected ? 'true' : 'false',
          onClick: function () { props.onRowClick(row); },
          onKeyDown: function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onRowClick(row); } }
        } : {};
        return h('tr', Object.assign({ key: key }, handlers), columns.map(function (c) {
          return h('td', { key: c.key, className: c.numeric ? 'uc-num' : undefined }, cell(c, row));
        }));
      });
    }

    return h('div', { className: cx('uc-table-wrap', props.className), style: props.maxHeight ? { maxHeight: props.maxHeight } : undefined },
      h('table', { className: cx('uc-table', props.density === 'compact' && 'uc-table--compact'), 'aria-busy': props.loading ? 'true' : undefined },
        props.caption ? h('caption', null, props.caption) : null,
        h('thead', null, h('tr', null, columns.map(header))),
        h('tbody', null, bodyRows)));
  }

  /* ---------- Tabs */
  function Tabs(props) {
    var items = props.items || [];
    var listRef = React.useRef(null);
    function go(next) {
      if (!next || !props.onChange) return;
      props.onChange(next.id);
      var el = listRef.current && listRef.current.querySelector('[data-tab="' + next.id + '"]');
      if (el) el.focus();
    }
    function onKeyDown(e) {
      var idx = items.findIndex(function (i) { return i.id === props.value; });
      var map = { ArrowRight: idx + 1, ArrowLeft: idx - 1, Home: 0, End: items.length - 1 };
      if (!(e.key in map)) return;
      e.preventDefault();
      go(items[(map[e.key] + items.length) % items.length]);
    }
    return h('div', { ref: listRef, className: cx('uc-tabs', props.className), role: 'tablist', 'aria-label': props.label, onKeyDown: onKeyDown },
      items.map(function (i) {
        var selected = i.id === props.value;
        return h('button', {
          key: i.id, 'data-tab': i.id, type: 'button', role: 'tab', className: 'uc-tab',
          id: props.idPrefix ? props.idPrefix + '-tab-' + i.id : undefined,
          'aria-controls': props.idPrefix ? props.idPrefix + '-panel-' + i.id : undefined,
          'aria-selected': selected ? 'true' : 'false', tabIndex: selected ? 0 : -1,
          onClick: function () { if (props.onChange) props.onChange(i.id); }
        }, i.label, i.count != null ? h('span', { className: 'uc-tab__count' }, i.count) : null);
      }));
  }

  /* ---------- AppHeader */
  function initials(name) {
    return String(name || '').trim().split(/\s+/).filter(Boolean).slice(0, 2).map(function (p) { return p[0].toUpperCase(); }).join('');
  }

  function AppHeader(props) {
    var nav = props.nav || [];
    return h('header', { className: cx('uc-header', props.className) },
      h('a', { className: 'uc-header__brand', href: props.homeHref || '#' },
        props.logoSrc ? h('img', { className: 'uc-header__logo', src: props.logoSrc, alt: 'UniCIVE' }) : h('span', null, 'UniCIVE'),
        props.title ? h('span', { className: 'uc-header__title' }, props.title) : null),
      h('nav', { className: 'uc-header__nav', 'aria-label': 'Principal' }, nav.map(function (n) {
        return h('a', { key: n.id, className: 'uc-header__link', href: n.href || '#', 'aria-current': n.id === props.current ? 'page' : undefined, onClick: n.onClick }, n.label);
      })),
      (props.children || props.user) ? h('div', { className: 'uc-header__actions' },
        props.children,
        props.user ? h('span', { className: 'uc-avatar', title: props.user.name, role: 'img', 'aria-label': props.user.name }, initials(props.user.name)) : null) : null
    );
  }

  /* ---------- Sidebar */
  function Sidebar(props) {
    var groups = props.groups || [];
    var current = props.current;
    var own = React.useState(false);
    var collapsed = props.collapsed != null ? props.collapsed : own[0];
    var manual = React.useState({});
    var asideRef = React.useRef(null);

    function setCollapsed(v) {
      if (props.collapsed == null) own[1](v);
      if (props.onCollapsedChange) props.onCollapsedChange(v);
    }
    function inBranch(item) {
      return (item.children || []).some(function (c) { return c.id === current; });
    }
    function expanded(item) {
      return manual[0][item.id] != null ? manual[0][item.id] : (item.id === current || inBranch(item));
    }
    function toggle(item) {
      var next = Object.assign({}, manual[0]);
      next[item.id] = !expanded(item);
      manual[1](next);
    }
    React.useEffect(function () {
      if (props.open && asideRef.current) asideRef.current.focus();
    }, [props.open]);

    function onKeyDown(e) {
      if (e.key === 'Escape' && props.open && props.onClose) { e.stopPropagation(); props.onClose(); }
    }

    function link(item, extra) {
      var count = item.count != null && item.count > 0 ? item.count : null;
      return h('a', {
        className: cx('uc-sidebar__link', extra), href: item.href || '#',
        'aria-current': item.id === current ? 'page' : undefined,
        'data-branch': inBranch(item) ? 'true' : undefined,
        title: collapsed ? item.label + (count ? ' (' + count + ')' : '') : undefined,
        onClick: function (e) {
          if (item.onClick) item.onClick(e);
          // fecha a gaveta em clique normal; Ctrl/Cmd/Shift abrem em outra aba e deixam o menu como está
          if (props.open && props.onClose && !(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0)) props.onClose();
        }
      },
        item.icon ? h(Icon, { name: item.icon, size: 18 }) : h('span', { className: 'uc-sidebar__dot', 'aria-hidden': 'true' }),
        h('span', { className: 'uc-sidebar__text' }, item.label),
        count ? h('span', { className: 'uc-sidebar__count' }, count) : null);
    }

    function renderItem(item) {
      var kids = item.children || [];
      var open = kids.length > 0 && expanded(item);
      var subId = 'uc-sb-sub-' + item.id;
      return h('li', { key: item.id, className: 'uc-sidebar__item' },
        kids.length > 0 ? h('div', { className: 'uc-sidebar__row' },
          link(item),
          collapsed ? null : h('button', {
            type: 'button', className: 'uc-sidebar__toggle', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': subId,
            'aria-label': (open ? 'Recolher ' : 'Expandir ') + item.label, onClick: function () { toggle(item); }
          }, h(Icon, { name: open ? 'chevron-down' : 'chevron-right', size: 14 }))) : link(item),
        open && !collapsed ? h('ul', { id: subId, className: 'uc-sidebar__sub' }, kids.map(function (c) {
          return h('li', { key: c.id }, link(c, 'uc-sidebar__link--sub'));
        })) : null);
    }

    var brandLabel = props.title ? 'UniCIVE ' + props.title : 'UniCIVE';
    var brand = collapsed
      ? (props.logoCompactSrc ? h('img', { className: 'uc-sidebar__symbol', src: props.logoCompactSrc, alt: '' }) : h('span', { 'aria-hidden': 'true' }, 'U'))
      : (props.logoSrc ? h('img', { className: 'uc-sidebar__logo', src: props.logoSrc, alt: '' }) : h('span', { 'aria-hidden': 'true' }, 'UniCIVE'));

    return h(React.Fragment, null,
      h('aside', {
        ref: asideRef, tabIndex: -1, onKeyDown: onKeyDown,
        className: cx('uc-sidebar', props.className),
        'data-collapsed': collapsed ? 'true' : 'false', 'data-open': props.open ? 'true' : 'false'
      },
        h('div', { className: 'uc-sidebar__top' },
          h('a', { className: 'uc-sidebar__brand', href: props.homeHref || '#', 'aria-label': brandLabel }, brand,
            props.title && !collapsed ? h('span', { className: 'uc-sidebar__title' }, props.title) : null),
          props.onClose ? h('button', { type: 'button', className: 'uc-sidebar__close', 'aria-label': 'Fechar menu', onClick: props.onClose }, h(Icon, { name: 'close', size: 18 })) : null),
        h('nav', { className: 'uc-sidebar__nav', 'aria-label': props.label || 'Principal' },
          groups.map(function (g, gi) {
            var labelId = 'uc-sb-group-' + (g.id || gi);
            return h('div', { key: g.id || gi, className: 'uc-sidebar__group' },
              g.label ? h('p', { id: labelId, className: 'uc-sidebar__label' }, g.label) : null,
              h('ul', { className: 'uc-sidebar__list', 'aria-labelledby': g.label ? labelId : undefined }, g.items.map(renderItem)));
          })),
        h('div', { className: 'uc-sidebar__foot' },
          props.footerItems && props.footerItems.length ? h('ul', { className: 'uc-sidebar__list' }, props.footerItems.map(renderItem)) : null,
          props.footer,
          h('button', {
            type: 'button', className: 'uc-sidebar__collapse', 'aria-pressed': collapsed ? 'true' : 'false',
            'aria-label': collapsed ? 'Expandir menu lateral' : 'Recolher menu lateral', title: collapsed ? 'Expandir menu lateral' : undefined,
            onClick: function () { setCollapsed(!collapsed); }
          }, h(Icon, { name: collapsed ? 'chevron-right' : 'panel-left', size: 18 }), h('span', { className: 'uc-sidebar__text' }, 'Recolher menu')))),
      h('div', { className: 'uc-sidebar__scrim', 'data-open': props.open ? 'true' : 'false', 'aria-hidden': 'true', onClick: props.onClose }));
  }

  /* ---------- Topbar */
  function Topbar(props) {
    return h('header', { className: cx('uc-topbar', props.className) },
      props.onMenuClick ? h('button', {
        type: 'button', className: 'uc-topbar__menu', 'aria-label': props.menuLabel || 'Abrir menu',
        'aria-expanded': props.menuOpen ? 'true' : 'false', onClick: props.onMenuClick
      }, h(Icon, { name: 'menu', size: 20 })) : null,
      h('div', { className: 'uc-topbar__title' }, props.title),
      (props.children || props.user) ? h('div', { className: 'uc-topbar__actions' },
        props.children,
        props.user ? h('span', { className: 'uc-topbar__user' },
          props.user.role ? h('span', { className: 'uc-topbar__role' }, props.user.role) : null,
          h('span', { className: 'uc-avatar', title: props.user.name, role: 'img', 'aria-label': props.user.name }, initials(props.user.name))) : null) : null);
  }

  return {
    Button: Button, TextField: TextField, Select: Select, Checkbox: Checkbox, Badge: Badge, Card: Card,
    Alert: Alert, DataTable: DataTable, Tabs: Tabs, AppHeader: AppHeader, Sidebar: Sidebar, Topbar: Topbar, Icon: Icon, iconNames: Object.keys(ICONS)
  };
})(React);

export const { Button, TextField, Select, Checkbox, Badge, Card, Alert, DataTable, Tabs, AppHeader, Sidebar, Topbar, Icon, iconNames } = UniCIVE;
export default UniCIVE;
