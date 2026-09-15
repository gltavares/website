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
        ? 'Experiência de ponta a ponta de personalização dinâmica por QR code.'
        : 'End-to-end dynamic personalization experiences via QR code.',
      client: 'Landor',
      role: 'Lead Product Designer',
      period: pt ? '2022 — hoje' : '2022 — present',
      accent: '#008dfa',
      heroMedia: '/projects/scannable.jpg',
      facts: [
        { label: 'client', value: 'Landor' },
        { label: 'project', value: 'Scannable' },
        { label: 'year', value: pt ? '2022 — hoje' : '2022 — present' },
      ],
      lead: pt
        ? 'Em parceria com grandes marcas e eventos, atuei como Lead Product Designer desenhando a experiência de ponta a ponta de uma plataforma de personalização dinâmica por QR code. Conectamos o gerenciamento de campanhas a um CMS inteligente e a múltiplas fontes de dados em tempo real, permitindo entregar conteúdos contextuais baseados no produto, momento e localização — da gôndola ao show ao vivo.'
        : 'In partnership with major brands and events, I worked as Lead Product Designer on the end-to-end experience of a dynamic QR-code personalization platform. We connected campaign management to a smart CMS and multiple real-time data sources, delivering contextual content based on product, moment, and place — from the shelf to a live show.',
      externalUrl:
        'https://landorandfitch.com/en/articles/thinking/welcome-to-the-automagical-era-of-scannable-brands',
      sections: pt
        ? [
            {
              heading: 'The project',
              body: 'Scannable é uma plataforma de conexão dinâmica entre marcas e consumidores via QR code. O produto resolve a estática das ativações tradicionais ao transformar cada escaneamento em uma experiência contextual única, orientada por dados de momento, produto e lugar, com um painel web completo para as marcas gerenciarem campanhas e analisarem métricas em tempo real.',
            },
            {
              heading: 'My role',
              bullets: [
                'Arquitetura de ponta a ponta: Estruturei os fluxos desde a criação e parametrização de campanhas pelas marcas até a navegação e consumo do usuário final.',
                'Plataforma web & CMS: Desenhei a ferramenta de gestão conectada a CMS e visão analítica para acompanhamento de performance e métricas de engajamento.',
                'Design System agnóstico: Criei templates e componentes de interface modulares capazes de absorver identidades visuais de diferentes marcas sem perder consistência técnica.',
                'Alinhamento de produto e regras de negócio: Defini a arquitetura de informação, cenários de uso e regras de features em conjunto com o time de produto e engenharia.',
                'Conduzi testes de usabilidade com pessoas no Brasil, NY e Londres validando que clareza de proposta de valor aumenta a propensão ao compartilhamento de localização.',
              ],
            },
          ]
        : [
            {
              heading: 'The project',
              body: 'Scannable is a dynamic connection platform between brands and consumers via QR code. The product moves past static traditional activations by turning every scan into a unique contextual experience, driven by moment, product, and place data, with a full web dashboard for brands to manage campaigns and analyze metrics in real time.',
            },
            {
              heading: 'My role',
              bullets: [
                'End-to-end architecture: I structured the flows from campaign creation and setup by brands through to the end user’s navigation and consumption.',
                'Web platform & CMS: I designed the management tool connected to a CMS and an analytics view for performance and engagement metrics.',
                'Agnostic design system: I created modular interface templates and components that can absorb different brand identities without losing technical consistency.',
                'Product alignment and business rules: I defined the information architecture, use scenarios, and feature rules together with product and engineering.',
                'I ran usability tests with people in Brazil, NY, and London, validating that a clear value proposition increases willingness to share location.',
              ],
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
      title: 'Geotechnical Monitoring',
      name: pt
        ? 'Digitalização do monitoramento de segurança geotécnica.'
        : 'Digitizing geotechnical safety monitoring.',
      client: 'Vale',
      role: 'Lead Product Designer',
      period: '2020 — 2021',
      accent: '#282828',
      facts: [
        { label: 'client', value: 'Vale' },
        { label: 'project', value: 'Geotechnical Monitoring' },
        { label: 'year', value: '2020 — 2021' },
      ],
      lead: pt
        ? 'Em parceria com a Vale, liderei o design de produto na digitalização crítica do monitoramento de segurança geotécnica. Estruturamos a transição do modelo analógico baseado em prancheta e papel para uma plataforma digital integrada, garantindo o acompanhamento em tempo real de barragens e minas de acordo com as normas legais do setor. O produto alcançou mais de 70 estruturas ativas e atingiu um NPS de 8.7 entre operadores e inspetores de campo.'
        : 'In partnership with Vale, I led product design on the critical digitization of geotechnical safety monitoring. We moved from a clipboard-and-paper analog model to an integrated digital platform, enabling real-time tracking of dams and mines in line with sector legal requirements. The product reached more than 70 active structures and an NPS of 8.7 among operators and field inspectors.',
      sections: pt
        ? [
            {
              heading: 'The project',
              body: 'Plataforma operacional para gestão e monitoramento contínuo de estruturas geotécnicas críticas (barragens e minas). O produto digitalizou fluxos analógicos de inspeção em campo, centralizou notificações e relatórios de conformidade com a legislação mineral brasileira e estruturou um repositório seguro para documentações legais e auditorias de segurança.',
            },
            {
              heading: 'My role',
              bullets: [
                'Digitalização de processos de campo: Mapeei fluxos operacionais e conduzi workshops com especialistas de geotecnia para converter rotinas de papel e caneta em um fluxo digital ágil, confiável e adaptado a ambientes industriais.',
                'Estruturação do time e DesignOps: Estabeleci o processo de design no time de produto, definindo cadências operacionais escaláveis no modelo ágil e conduzindo o treinamento e mentoria de novos designers.',
                'Design System e documentação: Desenvolvi e implementei padrões visuais de interface e documentação técnica, garantindo consistência entre telas de inspeção móvel e dashboards de controle.',
                'Estratégia e conformidade regulatória: Traduzi requisitos dos códigos legais e regulatórios do país em regras de negócio, arquitetura de informação e alertas críticos no sistema.',
                'Impacto e adoção: Conduzi validações contínuas de usabilidade com os inspetores, alcançando NPS 8.7 na ferramenta e adesão direta em mais de 70 estruturas operacionais.',
              ],
            },
          ]
        : [
            {
              heading: 'The project',
              body: 'An operational platform for managing and continuously monitoring critical geotechnical structures (dams and mines). The product digitized analog field-inspection flows, centralized notifications and compliance reports against Brazilian mining law, and built a secure repository for legal documentation and safety audits.',
            },
            {
              heading: 'My role',
              bullets: [
                'Field-process digitization: I mapped operational flows and ran workshops with geotechnical specialists to turn paper-and-pen routines into a digital flow that is agile, reliable, and fit for industrial environments.',
                'Team structure and DesignOps: I established the design process on the product team, defining scalable agile operating cadences and mentoring new designers.',
                'Design system and documentation: I developed and implemented visual interface standards and technical documentation, keeping consistency between mobile inspection screens and control dashboards.',
                'Strategy and regulatory compliance: I translated national legal and regulatory codes into business rules, information architecture, and critical alerts in the system.',
                'Impact and adoption: I ran ongoing usability validation with inspectors, reaching an NPS of 8.7 on the tool and direct adoption across more than 70 operational structures.',
              ],
            },
          ],
    },
  ];
}
