import type { Lang } from '../i18n/ui';

export interface WorkItem {
  title: string;
  meta: string;
  media: string;
  /** grid span utility classes for the bento layout */
  cls: string;
  /** use a light gradient overlay (for pale artwork) */
  light?: boolean;
  /** optional external case-study link */
  href?: string;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const img = (name: string) => `${base}/work/${name}.svg`;

export function getWork(lang: Lang): WorkItem[] {
  const pt = lang === 'pt-br';
  return [
    {
      title: pt ? 'Aluguel de carros para motoristas de app' : 'Car rental for ridesharing',
      meta: pt ? 'Produto · Mobile' : 'Product · Mobile',
      media: img('car-rental'),
      cls: 'span-4 row-2',
      light: true,
    },
    {
      title: 'Scannable',
      meta: pt ? 'Uma nova forma de acessar QR codes' : 'A new way to access QR codes',
      media: img('scannable'),
      cls: 'span-2',
      light: true,
    },
    {
      title: 'Design systems',
      meta: pt ? 'Sistemas & documentação' : 'Systems & documentation',
      media: img('design-systems'),
      cls: 'span-2',
      light: true,
    },
    {
      title: pt ? 'Sistema interno de call center' : 'Callcenter internal system',
      meta: pt ? 'Ferramenta interna' : 'Internal tool',
      media: img('callcenter'),
      cls: 'span-3',
      light: true,
    },
    {
      title: 'deStrava',
      meta: pt ? 'Projeto pessoal' : 'Personal project',
      media: img('destrava'),
      cls: 'span-3',
      light: true,
    },
    {
      title: pt ? 'Métricas de Design Ops' : 'Design Ops metrics',
      meta: pt ? 'Operações de design' : 'Design operations',
      media: img('design-ops'),
      cls: 'span-2',
      light: true,
    },
    {
      title: pt ? 'Princípios e organização de design' : 'Design principles & organization',
      meta: pt ? 'Cultura & processo' : 'Culture & process',
      media: img('principles'),
      cls: 'span-4',
      light: true,
    },
  ];
}

export const clients = [
  'Localiza',
  'Vale',
  'Ale',
  'Hermes Pardini',
  'Pottencial',
  'Supermix',
  'Tribanco',
  'Landor & Fitch',
];
