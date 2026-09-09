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
  },
  en: {
    'nav.work': 'work',
    'nav.about': 'about',
    'nav.back': 'Back',
    'sidebar.description':
      'Product designer. UX, operations and processes — facilitation, teams, design systems, interactions and product.',
    'about.title': 'About',
  },
} as const;
