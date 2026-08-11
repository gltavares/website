export const defaultLang = 'pt-br' as const;
export const languages = {
  'pt-br': 'PT-BR',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  'pt-br': {
    'nav.work': 'Trabalhos',
    'nav.texts': 'Textos',
    'hero.tagline':
      'Product designer. UX, operações e processos. Facilitação, times, design systems, interações, visual, produto.',
    'work.label': 'Trabalhos selecionados',
    'clients.label': 'Clientes',
    'texts.title': 'Textos',
    'texts.intro': 'Escritos e conversas em ordem cronológica.',
    'breadcrumb.home': 'Início',
    'article.back': 'Voltar para Textos',
    'footer.tagline': 'Product designer',
    'footer.email': 'Fale comigo',
  },
  en: {
    'nav.work': 'Work',
    'nav.texts': 'Texts',
    'hero.tagline':
      'Product designer. UX, operations and processes. Facilitation, teams, design systems, interactions, visual, product.',
    'work.label': 'Selected work',
    'clients.label': 'Clients',
    'texts.title': 'Texts',
    'texts.intro': 'Writing and conversations in chronological order.',
    'breadcrumb.home': 'Home',
    'article.back': 'Back to Texts',
    'footer.tagline': 'Product designer',
    'footer.email': 'Get in touch',
  },
} as const;
