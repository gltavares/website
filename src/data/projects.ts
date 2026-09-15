import type { Lang } from '../i18n/ui';

export const PROJECT_SLUGS = [
  'branding-universe',
  'scannable',
  'ridesharing',
  'call-center',
  'vale',
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

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
      slug: 'branding-universe',
      title: 'Branding Universe',
      accent: '#1e1033',
      client: 'Landor & WPP',
    },
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
      title: pt ? 'Ceres — Central de reservas' : 'Ceres — Reservations call center',
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
      slug: 'branding-universe',
      title: 'Branding Universe — Landor & WPP',
      name: pt
        ? 'Plataforma interna de inteligência de marca com IA generativa.'
        : 'Internal brand-intelligence platform powered by generative AI.',
      client: 'Landor & WPP',
      role: 'Lead Product Designer',
      period: '2025',
      accent: '#1e1033',
      facts: [
        { label: 'client', value: 'Landor & WPP' },
        { label: 'project', value: 'Branding Universe' },
        { label: 'year', value: '2025' },
      ],
      lead: pt
        ? 'Em parceria com a Landor e a WPP, liderei o design de produto e a ideação de uma plataforma interna de inteligência de marca potencializada por IA generativa. O produto foi concebido para automatizar a análise competitiva profunda e o diagnóstico de posicionamento de mercado, gerando dados analíticos e visualizações estratégicas que embasam propostas de novos negócios e projetos das agências. A partir de apenas dois inputs — o nome da marca e seu segmento de atuação —, a plataforma estrutura uma leitura analítica completa da narrativa ao impacto estratégico.'
        : 'In partnership with Landor and WPP, I led product design and ideation for an internal brand-intelligence platform powered by generative AI. The product was conceived to automate deep competitive analysis and market-positioning diagnosis, producing analytical data and strategic visualizations that underpin new-business proposals and agency projects. From just two inputs — the brand name and its category — the platform builds a complete analytical reading from narrative to strategic impact.',
      sections: pt
        ? [
            {
              heading: 'The project',
              body: 'Branding Universe é uma plataforma corporativa com inteligência artificial desenhada para acelerar e aprofundar o processo de inteligência de marca das agências Landor e WPP. A solução substitui levantamentos manuais e dispersos de mercado por um mecanismo automatizado de análise comparativa: avalia a história da marca, mapeia concorrentes diretos e indiretos, identifica vetores estratégicos de impacto e gera relatórios visuais com gráficos acionáveis e minutas de propostas comerciais personalizadas para clientes.',
            },
            {
              heading: 'My role',
              bullets: [
                'Ideação e liderança de produto: Conduzi a conceituação do produto e a arquitetura de informação da plataforma, desenhando uma esteira intuitiva capaz de traduzir queries simples em relatórios executivos complexos.',
                'Mapeamento de inteligência e inputs mínimos: Estruturei o fluxo de interação baseado em atrito mínimo, permitindo que a IA construa ecossistemas completos de benchmarking cruzado informando apenas o nome da marca e o segmento de mercado.',
                'Visualização de dados e relatórios estratégicos: Projetei interfaces de análise comparativa com dashboards dinâmicos, gráficos de posicionamento de mercado e matrizes de oportunidade de branding.',
                'Formatação automatizada de propostas comerciais: Desenhei a experiência de geração e personalização de propostas de valor, conectando os insights diagnósticos diretamente às estruturas contratuais e metodologias de projeto da Landor e WPP.',
                'Alinhamento com engenharia de IA e estratégia de marca: Trabalhei em conjunto com estrategistas seniores de branding e o time de desenvolvimento para calibrar os modelos de linguagem, garantindo rigor analítico, tom de voz corporativo e consistência nas análises competitivas entregues.',
              ],
            },
          ]
        : [
            {
              heading: 'The project',
              body: 'Branding Universe is a corporate AI platform designed to accelerate and deepen brand-intelligence work at Landor and WPP agencies. The solution replaces manual, scattered market research with an automated comparative-analysis engine: it evaluates brand history, maps direct and indirect competitors, identifies strategic impact vectors, and generates visual reports with actionable charts and customized commercial-proposal drafts for clients.',
            },
            {
              heading: 'My role',
              bullets: [
                'Product ideation and leadership: I led the product concept and the platform’s information architecture, designing an intuitive pipeline that turns simple queries into complex executive reports.',
                'Intelligence mapping and minimal inputs: I structured a minimum-friction interaction flow so the AI can build complete cross-benchmarking ecosystems from only the brand name and market category.',
                'Data visualization and strategic reports: I designed comparative-analysis interfaces with dynamic dashboards, market-positioning charts, and branding opportunity matrices.',
                'Automated commercial-proposal formatting: I designed the experience of generating and personalizing value propositions, connecting diagnostic insights directly to Landor and WPP contractual structures and project methodologies.',
                'Alignment with AI engineering and brand strategy: I worked with senior branding strategists and the development team to calibrate the language models, ensuring analytical rigor, a corporate tone of voice, and consistency in the competitive analyses delivered.',
              ],
            },
          ],
    },
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
      title: pt
        ? 'Ceres — Central de Reservas Localiza'
        : 'Ceres — Localiza Reservations Center',
      name: pt
        ? 'Modernização da central telefônica de reservas.'
        : 'Modernizing the phone reservations call center.',
      client: 'Localiza',
      role: 'Product Designer',
      period: '2020',
      accent: '#08321c',
      heroMedia: '/projects/localiza/desktop-5.png',
      heroFit: 'contain',
      facts: [
        { label: 'client', value: 'Localiza' },
        { label: 'project', value: 'Ceres' },
        { label: 'year', value: '2020' },
      ],
      lead: pt
        ? 'Em parceria com a operação da Localiza, atuei como Product Designer na modernização e substituição da central de atendimento telefônico de reservas. Conduzimos a migração completa de uma aplicação legado sem suporte para uma plataforma web ágil, eliminando anotações em papel e a sobrecarga cognitiva dos atendentes. A nova experiência reduziu a curva de treinamento de duas semanas para apenas 3 horas e colocou a primeira reserva real em produção em 5 meses a partir da Design Sprint inicial.'
        : 'In partnership with Localiza’s operations, I worked as Product Designer on modernizing and replacing the phone reservations call center. We fully migrated an unsupported legacy application to an agile web platform, eliminating paper notes and the cognitive overload on agents. The new experience cut the training curve from two weeks to just 3 hours, and the first live reservation went into production 5 months after the initial Design Sprint.',
      gallery: [{ src: '/projects/localiza/desktop-4.png', alt: '', size: 'wide' }],
      sections: pt
        ? [
            {
              heading: 'The project',
              body: 'Ceres é a plataforma web interna para operadores da central telefônica de reservas da Localiza. O produto substituiu um sistema legado complexo e desatualizado, cuja alta curva de aprendizado forçava os atendentes a recorrerem a anotações manuais para consultar tarifas, categorias e regras de negócio. O objetivo foi desenhar uma ferramenta intuitiva, de implementação progressiva e centrada na agilidade da chamada.',
            },
            {
              heading: 'My role',
              bullets: [
                'Imersão operacional e shadowing: Conduzi sessões de acompanhamento na prática (shadowing) no atendimento ao vivo para mapear atritos de navegação, consultas paralelas e gargalos de tempo de resposta durante a ligação.',
                'Workshops e ideação rápida: Facilitei dinâmicas de Design Sprint e cocriação com atendentes, supervisores e time de produto para definir a arquitetura da nova solução.',
                'Migração de legado para web: Projetei protótipos de alta fidelidade e fluxos web simplificados, traduzindo regras complexas de locação em interfaces limpas e com implementação progressiva.',
                'Alinhamento e garantia de entrega (QA de Design): Acompanhei de perto o squad de desenvolvimento para assegurar a fidelidade dos componentes, a performance das telas e a aderência às dores operacionais mapeadas.',
                'Impacto e eficiência operacional: Redução drástica da curva de aprendizado e tempo de treinamento dos operadores (de 2 semanas de onboarding para cerca de 3 horas) e validação em tempo recorde com a primeira reserva concluída no novo sistema em 5 meses.',
              ],
            },
          ]
        : [
            {
              heading: 'The project',
              body: 'Ceres is the internal web platform for operators at Localiza’s phone reservations center. The product replaced a complex, outdated legacy system whose steep learning curve forced agents to rely on handwritten notes for rates, categories, and business rules. The goal was to design an intuitive tool, rolled out progressively, centered on call agility.',
            },
            {
              heading: 'My role',
              bullets: [
                'Operational immersion and shadowing: I ran live-floor shadowing sessions to map navigation friction, parallel lookups, and response-time bottlenecks during calls.',
                'Workshops and rapid ideation: I facilitated Design Sprint and co-creation sessions with agents, supervisors, and the product team to define the architecture of the new solution.',
                'Legacy-to-web migration: I designed high-fidelity prototypes and simplified web flows, translating complex rental rules into clean interfaces with progressive implementation.',
                'Alignment and delivery QA (Design QA): I stayed close to the development squad to ensure component fidelity, screen performance, and adherence to the operational pains we had mapped.',
                'Impact and operational efficiency: A sharp drop in the operators’ learning curve and training time (from 2 weeks of onboarding to about 3 hours), validated at record speed with the first reservation completed in the new system in 5 months.',
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
