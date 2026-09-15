---
title: 'Are we building the products right?'
date: 2026-09-15
lang: pt-br
kind: Artigo
description: 'Estamos correndo atrás da velocidade sem fazer a pergunta básica: mais rápido em direção a quê?'
tags: [DesignOps, IA, Pesquisa]
---

O design no mercado de tecnologia caiu em uma armadilha conhecida.

Todas as conversas agora giram em torno de como a IA pode construir mais rápido: telas mais rápidas, protótipos mais rápidos e repasses mais rápidos. Estamos correndo atrás da velocidade sem fazer a pergunta básica: mais rápido em direção a quê?

Sem saber o que estamos construindo ou o porquê, não estamos avançando. Estamos apenas nos perdendo com mais eficiência.

## A Base que a Engenharia Construiu Antes da Velocidade

A engenharia de software começou com disciplina antes de buscar velocidade.

Antes que qualquer ferramenta pudesse acelerar o trabalho, engenheiros passaram décadas construindo uma base sólida com documentação estruturada, código limpo, arquiteturas reutilizáveis e convenções claras. Essa base é o que faz ferramentas como o GitHub Copilot funcionarem de verdade. O Copilot gera boas sugestões porque existe uma lógica estruturada por baixo. Sem essa estrutura você só gera ruído e erros em escala.

O design tentou copiar a entrega final sem fazer o trabalho de fundação. O que temos de mais visível no UX é a camada de interface: design systems, bibliotecas de componentes e layouts de tela. É aí que a maior parte da energia é gasta. Com isso, continuamos ignorando o problema central do produto: Por que este produto existe? Para quem ele serve? Quais regras de negócio e cenários ele precisa resolver antes de ganhar uma interface?

## Operações: A Camada que Falta

Dave Malouf definiu DesignOps como "a ferramenta, a graxa e os trilhos que amplificam o valor de um time de design". Obter valor real do design exige uma prática operacional intencional em vez de profissionais talentosos empurrando pixels de forma isolada.

A maioria dos times ainda não construiu esses trilhos. Sem eles, a IA não acelera o design. Ela acelera a ausência de design.

Em equipes comuns, aprendizados de pesquisas anteriores ficam presos na memória de alguém, perdidos em pastas esquecidas ou descartados quando um designer sai da empresa. Decisões acabam tomadas sem contexto e cada nova sprint começa do zero. Quando a IA entra nesse ambiente desestruturado, ela não conserta o processo. Ela apenas entrega coisas erradas mais rápido.

## Pesquisa como Infraestrutura, Não como Etapa

É aqui que o conceito de pesquisa atômica de Tomer Sharon se torna indispensável. Em vez de relatórios longos que ninguém lê de novo, o feedback do usuário vira pequenos blocos atômicos com evidências categorizadas e fáceis de buscar.

Ao estruturar a pesquisa como base de conhecimento operacional, o time deixa de depender da memória individual. A IA finalmente permite transformar essa base em um repositório ativo e contínuo:

- **Insights Pesquisáveis:** A IA analisa transcrições e pesquisas anteriores em segundos para abastecer os briefings ativos diretamente.
- **Zero Telas em Branco:** Todo novo projeto começa abastecido por dados reais e regras de negócio já documentadas.
- **Sincronização de Contexto em Tempo Real:** Pesquisas e regras de negócio alimentam variáveis do Figma, componentes e cenários de exceção.

## O que Estamos Fazendo: O Fluxo de Spec-Driven Design

Em vez de usar a IA apenas para gerar wireframes visuais, levamos todo o nosso processo para o início da esteira com Spec-Driven Design.

Tratamos documentação, contexto e lógica de negócio como os artefatos principais do projeto. A interface não é o ponto de partida, mas a consequência natural de um sistema bem resolvido.

### Cursor como Ambiente Principal de Design

Nossos designers começam o trabalho dentro de editores de código como o Cursor em vez de abrir o Figma imediatamente. Trabalhamos com texto, lógica e arquivos em Markdown para definir o comportamento do produto, as jornadas e os casos de borda antes de desenhar o primeiro frame.

### O PRD Unificado como Fonte da Verdade

Em vez de espalhar briefings, pesquisas e tarefas do Jira em ferramentas desconectadas, tudo fica centralizado em um Documento de Requisitos de Produto (PRD). O PRD funciona como um índice ativo conectado a personas, fluxos de uso, diretrizes de voz e aos SKUs dos componentes reais da engenharia.

Quando uma regra de negócio ou fluxo muda, nós atualizamos diretamente a especificação. Os arquivos visuais são atualizados a partir dessa fonte oficial, sem a necessidade de alterar dezenas de telas manualmente no Figma.

### Processo e Cenários Primeiro, Telas Depois

Antes de criar qualquer interface visual, o time monta tabelas intermediárias de fluxo. Mapeamos:

- A ação do usuário e a resposta esperada do sistema
- Casos de borda com estados vazios, telas de carregamento e mensagens de erro
- SKUs dos componentes correspondentes no design system

Apenas quando a lógica do sistema está completa e validada nossas ferramentas transformam a especificação em telas no Figma.

## Os Resultados Reais

Ao trocar a geração puramente visual por uma esteira operacional de contexto, transformamos o dia a dia da equipe:

- **Desk Research em Minutos:** Sínteses de pesquisa que antes consumiam uma semana inteira de 40 horas agora são concluídas entre 30 e 45 minutos com dados brutos processados em segundos.
- **Documentação Mais Rápida e Consultada:** As especificações ficam prontas muito mais rápido e recebem um volume de acessos bem maior por servirem como referência tanto para design quanto para engenharia.
- **Mais de 40 Skills Agênticas:** Desenvolvemos um ecossistema interno com mais de 40 ferramentas e scripts para rodar análises de tom de voz, acessibilidade, indexação de pesquisa e mapeamento de componentes sob demanda.
- **Contexto de Desenvolvimento Integrado:** Conectamos a lógica do código em produção ao nosso fluxo para preencher estados de componentes e variações de tela, eliminando a distância entre o Figma e o produto final.

## Construindo as Coisas Certas

A metodologia de design de serviços de Marc Stickdorn reforça um princípio claro: mapear problemas, desenhar jornadas e testar hipóteses precisa acontecer antes de qualquer interface gráfica. Estilos visuais, tokens e tendências mudam com o tempo. A lógica funcional por trás da experiência do produto é o que permanece estável.

Precisamos encarar o design com o mesmo rigor estrutural que a engenharia dedica à arquitetura de software. O cuidado com a qualidade do contexto precisa ser tão relevante quanto a velocidade da entrega final.

Sem trilhos operacionais bem construídos, a velocidade do trem não faz diferença. Estamos produzindo mais rápido do que nunca. O essencial agora é ter certeza sobre o que estamos construindo e se isso realmente merece existir.
