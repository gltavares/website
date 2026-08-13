export const defaultLang = 'pt-br' as const;
export const languages = {
  'pt-br': 'PT-BR',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  'pt-br': {
    'nav.work': 'Trabalhos',
    'nav.about': 'Sobre',
    'sidebar.description':
      'Product designer. UX, operações e processos — facilitação, times, design systems, interações e produto.',
    'about.title': 'Sobre',
    'breadcrumb.home': 'Início',
  },
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'sidebar.description':
      'Product designer. UX, operations and processes — facilitation, teams, design systems, interactions and product.',
    'about.title': 'About',
    'breadcrumb.home': 'Home',
  },
} as const;
