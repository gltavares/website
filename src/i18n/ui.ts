export const defaultLang = 'pt-br' as const;
export const languages = {
  'pt-br': 'PT-BR',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  'pt-br': {
    'nav.work': 'trabalho',
    'nav.about': 'sobre',
    'nav.back': 'Voltar',
    'sidebar.description':
      'Product designer. UX, operações e processos — facilitação, times, design systems, interações e produto.',
    'about.title': 'Sobre',
    'site.role': 'product designer',
    'site.blurb': 'UX, operações e processos — IA, times e produto.',
    'site.icon.work': 'trabalho',
    'site.icon.about': 'sobre',
    'site.icon.linkedin': 'linkedin',
    'site.icon.email': 'email',
    'site.icon.github': 'github',
    'site.iconsLabel': 'Atalhos',
  },
  en: {
    'nav.work': 'work',
    'nav.about': 'about',
    'nav.back': 'Back',
    'sidebar.description':
      'Product designer. UX, operations and processes — facilitation, teams, design systems, interactions and product.',
    'about.title': 'About',
    'site.role': 'product designer',
    'site.blurb': 'UX, operations and processes — AI, teams and product.',
    'site.icon.work': 'work',
    'site.icon.about': 'about',
    'site.icon.linkedin': 'linkedin',
    'site.icon.email': 'email',
    'site.icon.github': 'github',
    'site.iconsLabel': 'Shortcuts',
  },
} as const;
