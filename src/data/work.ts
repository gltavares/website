import type { Lang } from '../i18n/ui';

export interface WorkItem {
  title: string;
  tags: string[];
  media: string;
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
      tags: pt ? ['Produto', 'Mobile', 'UX'] : ['Product', 'Mobile', 'UX'],
      media: img('car-rental'),
    },
    {
      title: 'Scannable',
      tags: pt ? ['Produto', 'QR', 'Mobile'] : ['Product', 'QR', 'Mobile'],
      media: img('scannable'),
    },
    {
      title: 'Design systems',
      tags: pt ? ['Sistemas', 'Documentação'] : ['Systems', 'Documentation'],
      media: img('design-systems'),
    },
    {
      title: pt ? 'Sistema interno de call center' : 'Callcenter internal system',
      tags: pt ? ['Ferramenta interna', 'Web'] : ['Internal tool', 'Web'],
      media: img('callcenter'),
    },
    {
      title: 'deStrava',
      tags: pt ? ['Projeto pessoal', 'Web'] : ['Personal project', 'Web'],
      media: img('destrava'),
    },
    {
      title: pt ? 'Métricas de Design Ops' : 'Design Ops metrics',
      tags: pt ? ['Design Ops', 'Dados'] : ['Design Ops', 'Data'],
      media: img('design-ops'),
    },
    {
      title: pt ? 'Princípios e organização de design' : 'Design principles & organization',
      tags: pt ? ['Cultura', 'Processo'] : ['Culture', 'Process'],
      media: img('principles'),
    },
  ];
}
