import type { Lang } from '../i18n/ui';

export type ProjectSlug = 'scannable' | 'ridesharing' | 'call-center' | 'vale';

export interface ProjectCard {
  slug: ProjectSlug;
  /** Short card title shown on the feed */
  title: string;
  accent: string;
  media?: string;
  /** Client name shown under the title on feed cards */
  client: string;
  /** Push tall phone mockups down so they clear the card top */
  mediaInset?: boolean;
}

export interface ProjectCase {
  slug: ProjectSlug;
  title: string;
  name: string;
  client: string;
  role: string;
  period: string;
  accent: string;
  heroMedia?: string;
  /** How the case hero crops media — contain for full device mockups */
  heroFit?: 'cover' | 'contain';
  facts?: { label: string; value: string }[];
  lead?: string;
  gallery?: {
    src: string;
    alt?: string;
    size?: 'wide' | 'square';
    crop?: 'contain' | 'phone-top' | 'phone-bottom';
    overlay?: string;
  }[];
  galleryStrip?: { src: string; alt?: string }[];
  externalUrl?: string;
  sections: {
    heading?: string;
    body?: string;
    bullets?: string[];
  }[];
}

export function getProjectCards(lang: Lang): ProjectCard[] {
  const pt = lang === 'pt-br';
  return [
    {
      slug: 'scannable',
      title: pt ? 'Experiências scannable' : 'Scannable experiences',
      accent: '#008dfa',
      client: 'Landor',
      media: '/projects/scannable.jpg',
    },
    {
      slug: 'ridesharing',
      title: pt ? 'Aluguel para motoristas de app' : 'Car rental for uber drivers',
      accent: '#30ab6c',
      client: 'Localiza',
      media: '/projects/localiza/mockup-1.png',
      mediaInset: true,
    },
    {
      slug: 'call-center',
      title: pt ? 'Reserva por telefone' : 'Make your rental over phone',
      accent: '#08321c',
      client: 'Localiza',
      media: '/projects/localiza/desktop-5.png',
    },
    {
      slug: 'vale',
      title: pt ? 'Monitoramento geotécnico' : 'Geotechnical monitoring',
      accent: '#282828',
      client: 'Vale',
    },
  ];
}

export function getProjectCase(slug: ProjectSlug, lang: Lang): ProjectCase | undefined {
  return getProjectCases(lang).find((p) => p.slug === slug);
}

export function getProjectCases(lang: Lang): ProjectCase[] {
  const pt = lang === 'pt-br';
  return [
    {
      slug: 'scannable',
      title: 'Scannable Experience',
      name: pt
        ? 'Criando experiências de marcas personalizadas para os seus clientes.'
        : 'Building personalized brand experiences for every customer.',
      client: 'Landor',
      role: pt ? 'Lead Product Designer' : 'Lead Product Designer',
      period: pt ? '2022 — hoje' : '2022 — present',
      accent: '#008dfa',
      heroMedia: '/projects/scannable.jpg',
      externalUrl:
        'https://landorandfitch.com/en/articles/thinking/welcome-to-the-automagical-era-of-scannable-brands',
      sections: pt
        ? [
            {
              heading: 'Contexto',
              body: 'Marcas buscam formas mais profundas de se conectar com seus clientes. A proposta deste produto é a personalização dinâmica: conteúdos distintos a cada acesso via QR code, usando múltiplas fontes de dados para reconhecer em tempo real o produto, o momento e o lugar — da prateleira a um show ao vivo.',
            },
            {
              heading: 'Papel',
              body: 'Como Lead Product Designer, idealizei o fluxo de ponta a ponta: da criação de campanhas à experiência do cliente final. O gerenciamento de campanhas virou uma plataforma web conectada a um CMS, com visão de dados para as marcas acompanharem resultados.',
              bullets: [
                'Desenvolvimento da web de gestão de campanhas com conexão a CMS',
                'Ideação da interface de contato com flexibilidade para qualquer marca, preservando identidade visual',
                'Criação de templates de conteúdo',
                'Definição de regras de features com o time de produto',
                'Arquitetura de informação e fluxo do usuário',
                'Acompanhamento da implementação e métricas de campanha',
              ],
            },
            {
              heading: 'Pesquisa — localização e consentimento',
              body: 'Em resposta ao cenário de privacidade, testamos se as pessoas compartilham localização com mais vontade quando o valor fica explícito. Comparamos dois fluxos no Useberry (178 respostas, 120 completas) com participantes em NY, Londres e dti.',
              bullets: [
                'Fluxo 1: pedir localização ao aceitar cookies (abordagem tradicional)',
                'Fluxo 2: pedir localização com justificativa clara do valor',
                '56% preferiram o Fluxo 2; clareza ≥3 para 53% vs 32% no Fluxo 1',
                'Quem normalmente não compartilha localização aceitou mais no Fluxo 2',
              ],
            },
            {
              heading: 'Achados',
              body: 'Transparência e justificativa aumentam o consentimento. Caminhos possíveis: enriquecer a página de cookies com explicação antes do pedido, ou refinar o Fluxo 2 para reduzir tom promocional e reforçar interatividade onde o heatmap mostrou expectativa.',
            },
          ]
        : [
            {
              heading: 'Context',
              body: 'Brands keep looking for deeper ways to meet their customers. This product centers on dynamic personalization: different content on every QR scan, using multiple data sources to recognize the product, moment, and place in real time — from the shelf to a live show.',
            },
            {
              heading: 'Role',
              body: 'As Lead Product Designer I shaped the end-to-end flow: from campaign creation to the final customer experience. Campaign management became a CMS-connected web platform with a dedicated data view so brands can follow results.',
              bullets: [
                'Campaign management web with CMS connection',
                'Flexible customer-facing UI that adapts to any brand identity',
                'Content templates',
                'Feature rules with product',
                'Information architecture and user flows',
                'Implementation support and campaign metrics',
              ],
            },
            {
              heading: 'Research — location & consent',
              body: 'Facing evolving privacy expectations, we tested whether people share location more readily when the value is explicit. We compared two flows in Useberry (178 responses, 120 completes) with participants in NY, London, and dti.',
              bullets: [
                'Flow 1: request location with cookie acceptance (traditional)',
                'Flow 2: request location with a clear rationale',
                '56% preferred Flow 2; clarity ≥3 for 53% vs 32% on Flow 1',
                'People who rarely share location accepted more often on Flow 2',
              ],
            },
            {
              heading: 'Findings',
              body: 'Transparency and justification increase consent. Next paths: enrich the cookies step with explanation before asking, or refine Flow 2 to soften sales copy and meet heatmap expectations for image interactivity.',
            },
          ],
    },
    {
      slug: 'ridesharing',
      title: 'Zarp',
      name: pt
        ? 'Aluguel de carros para motoristas de aplicativo parceiros'
        : 'Car rental for rideshare partner drivers',
      client: 'Localiza',
      role: pt ? 'Lead Product Designer' : 'Lead Product Designer',
      period: pt ? '2018 — 2019 e 2021' : '2018 - 2019 and 2021',
      accent: '#30ab6c',
      facts: [
        { label: 'client', value: 'Localiza' },
        { label: 'project', value: 'Zarp' },
        { label: 'year', value: pt ? '2018 — 2019 e 2021' : '2018 - 2019 and 2021' },
      ],
      lead: pt
        ? 'Em parceria com a Uber e a Localiza, passei mais de dois anos como lead designer arquitetando o ecossistema digital e físico de aluguel para motoristas de app. Evoluímos o produto de um PWA leve para um app nativo e desenhamos os sistemas internos das agências — o que ajudou a impulsionar um crescimento de 94% no segmento no lançamento e a passar de 100 mil downloads.'
        : 'Partnering with Uber and Localiza, I spent over two years as the lead designer architecting the digital and physical ecosystem for rideshare driver rentals. By evolving the product from a lightweight PWA into a native mobile app and designing robust internal systems for rental agencies, we helped drive a 94% launch lift in the segment and scaled to over 100k+ app downloads.',
      gallery: [
        {
          src: '/projects/localiza/main.png',
          alt: '',
          size: 'wide',
        },
        { src: '/projects/localiza/mockup-1.png', alt: '', crop: 'phone-top' },
        { src: '/projects/localiza/mockup-2.png', alt: '', crop: 'phone-bottom' },
      ],
      galleryStrip: [
        { src: '/projects/localiza/desktop-1.png', alt: '' },
        { src: '/projects/localiza/mobile-5.png', alt: '' },
        { src: '/projects/localiza/mobile-6.png', alt: '' },
        { src: '/projects/localiza/desktop-4.png', alt: '' },
        { src: '/projects/localiza/desktop-5.png', alt: '' },
      ],
      sections: pt
        ? [
            {
              heading: 'the project',
              body: 'Localiza Zarp é uma assinatura de aluguel feita para resolver o atrito financeiro e operacional dos motoristas de app. Pagamento semanal pós-pago, integração direta com os ganhos da Uber e um app dedicado para gerir o contrato.',
            },
            {
              heading: 'my role',
              bullets: [
                'Arquitetei fluxos que integram três nós: a plataforma da Uber, as agências físicas e o app do motorista.',
                'Conduzi a evolução de PWA para app nativo, com um design system escalável.',
                'Desenhei os portais internos para as agências gerirem contratos, dados do motorista e follow-up.',
                'Pesquisei com CX e transformei achados de campo nas regras de negócio da assinatura mensal.',
              ],
            },
          ]
        : [
            {
              heading: 'the project',
              body: 'Localiza Zarp is a highly tailored car-rental subscription built specifically to solve the financial and operational friction faced by rideshare drivers. The product features a weekly postpaid subscription, direct integration with Uber earnings for automatic payments, and a dedicated mobile app designed to make contract management effortless.',
            },
            {
              heading: 'my role',
              bullets: [
                "Architected complex flows integrating three distinct operational nodes: Uber's platform, physical car-rental agencies, and the driver's mobile app.",
                'Pioneered the product evolution from a Progressive Web App (PWA) into a native app, designing a scalable design system to maintain visual and functional consistency.',
                'Designed back-office administrative portals that allowed physical agency employees to manage contracts, access driver details, and follow up on workflows.',
                'Conducted customer research in partnership with CX, translating field insights into the foundational business rules for the monthly rental subscription model.',
              ],
            },
          ],
    },
    {
      slug: 'call-center',
      title: 'Call center',
      name: pt
        ? 'Criando experiências de reserva por telefone'
        : 'Designing phone reservation experiences',
      client: 'Localiza',
      role: 'Product Designer',
      period: '2018',
      accent: '#08321c',
      heroMedia: '/projects/localiza/desktop-5.png',
      heroFit: 'contain',
      gallery: [{ src: '/projects/localiza/desktop-4.png', alt: '', size: 'wide' }],
      sections: pt
        ? [
            {
              heading: 'Papel',
              bullets: [
                'Contato com usuários e shadowing no papel deles',
                'Mapeamento de solução em workshops',
                'Migração do legado para web atendendo dores reais',
                'Prototipagem e acompanhamento do time de desenvolvimento',
                'Garantia de que as entregas cobriam as dores mapeadas',
              ],
            },
            {
              heading: 'Sobre o produto',
              body: 'Sistema usado para reservas de aluguel por telefone. O legado estava desatualizado, sem suporte, com curva alta de aprendizado — o time usava anotações manuais para acompanhar regras. A migração precisava ser simples e progressiva para o atendimento.',
            },
            {
              heading: 'Resultado',
              bullets: [
                'Treinamento caiu de cerca de duas semanas para ~3h de acompanhamento',
                'Do design sprint à primeira reserva no sistema: 5 meses',
              ],
            },
          ]
        : [
            {
              heading: 'Role',
              bullets: [
                'User contact and shadowing in their day-to-day',
                'Solution mapping in workshops',
                'Legacy-to-web migration aimed at real pain points',
                'Prototyping and partnering with engineering',
                'Keeping delivery aligned with the pains we mapped',
              ],
            },
            {
              heading: 'Product',
              body: 'A system for phone-based car rental reservations. The legacy tool was outdated, unsupported, and hard to learn — agents kept handwritten notes for new rules. Migration had to stay simple and progressive for the support team.',
            },
            {
              heading: 'Impact',
              bullets: [
                'Training dropped from ~two weeks to about 3 hours of guided use',
                'Design sprint to first live reservation: 5 months',
              ],
            },
          ],
    },
    {
      slug: 'vale',
      title: pt ? 'Monitoramento geotécnico' : 'Geotechnical monitoring',
      name: pt
        ? 'Garantindo a segurança de estruturas geotécnicas'
        : 'Keeping geotechnical structures safer',
      client: 'Vale',
      role: pt ? 'Lead Product Designer' : 'Lead Product Designer',
      period: '2020 — 2021',
      accent: '#282828',
      sections: pt
        ? [
            {
              heading: 'Papel',
              bullets: [
                'Estruturação do processo de design no time',
                'Processo operacional escalável no modelo ágil',
                'Treinamento de novos profissionais',
                'Padrões visuais e de documentação do produto',
                'Exploração de oportunidades e evolução do produto',
                'Mapeamento de processos e workshops',
              ],
            },
            {
              heading: 'Sobre o produto',
              body: 'Gestão de estruturas geotécnicas — minas e barragens — com monitoramento e notificações alinhados a códigos legais. Migração do acompanhamento analógico (papel e caneta) para o digital, incluindo documentações legais das estruturas.',
            },
            {
              heading: 'Resultado',
              bullets: [
                'NPS 8.7 no app de inspeção e monitoramento',
                'Mais de 70 estruturas usando a aplicação',
              ],
            },
          ]
        : [
            {
              heading: 'Role',
              bullets: [
                'Design process for the team',
                'Scalable agile operating model',
                'Onboarding new practitioners',
                'Visual and documentation standards',
                'Opportunity exploration and product evolution',
                'Process mapping and workshops',
              ],
            },
            {
              heading: 'Product',
              body: 'Managing geotechnical structures — mines and dams — with monitoring and notifications aligned to legal codes. Moving inspection from paper to digital, including legal documentation for each structure.',
            },
            {
              heading: 'Impact',
              bullets: [
                'NPS 8.7 on the inspection & monitoring app',
                '70+ structures using the product',
              ],
            },
          ],
    },
  ];
}
