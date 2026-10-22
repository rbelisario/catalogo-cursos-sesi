# Análise do Figma — Catálogo de Cursos SESI

## 1. Referências

### 1.1. Protótipo original

- **Protótipo:** [SESI Indústria — Figma](https://www.figma.com/proto/YB0o91nnOEB5bXXCtmy5s6/-TEST-DEV--SESI-Ind%C3%BAstria?node-id=6017-342)
- **Telas analisadas:** página inicial/catálogo, detalhes do curso e ambiente de aprendizagem acessado pelo botão de matrícula.
- **Observação:** a análise foi realizada por meio das interações disponíveis no protótipo.

### 1.2. Referência complementar para o catálogo

- **Página:** [SESI/SENAI — Cursos profissionalizantes](https://cursos.sesisenai.org.br/cursos-profissionalizantes)
- **Objetivo:** utilizar como referência complementar para a organização do catálogo completo, especialmente a disposição dos filtros, dos resultados e dos cards de cursos.
- **Diretriz:** preservar a identidade visual do Figma original, utilizando a referência complementar para orientar funcionalidades e organização da consulta.

## 2. Página inicial e catálogo

### 2.1. Elementos observados

- Cabeçalho com logotipo e navegação: Início, Cursos, Sobre e Área do aluno.
- Seção “Principais cursos”, com cards contendo imagem, categoria, título e descrição.
- Botão “Ver todos os cursos”.
- Controles de navegação horizontal dos cards.

### 2.2. Interações observadas

- O item “Cursos” do menu superior direciona para a seção de cursos na página.
- O botão “Ver todos os cursos” não apresenta interação observável no protótipo.
- Entre os cards observados, somente o primeiro abre a página de detalhes.
- A navegação horizontal da seção de cards é feita por arraste e por duas setas no canto inferior direito.
- Não foi possível confirmar o comportamento de todos os cards nem de todos os elementos de navegação.

### 2.3. Decisões de implementação

O catálogo será dividido em duas experiências complementares:

1. **Página inicial:** seguirá a estrutura visual do Figma, com a seção “Principais cursos” e o botão “Ver todos os cursos”.
2. **Página de catálogo completo:** permitirá consultar os cursos disponíveis, pesquisar por nome e aplicar filtros.

O botão **“Ver todos os cursos”** direcionará para a página de catálogo completo.

A organização dessa página será inspirada na referência complementar do SESI/SENAI, com uma área de filtros e outra para apresentação dos resultados em cards.

O catálogo completo deverá oferecer:

- Pesquisa por nome do curso.
- Filtro por categoria.
- Filtro por modalidade.
- Filtro por status.
- Combinação entre pesquisa e filtros.
- Quantidade de resultados encontrados.
- Opção para limpar os filtros.
- Acesso aos detalhes de cada curso.
- Mensagem quando nenhum curso corresponder à pesquisa.
- Estados de carregamento e de erro.

Serão implementados apenas os filtros necessários ao escopo do case. Filtros adicionais observados na referência externa, como preço, localização e avaliações, não serão incluídos sem necessidade justificada.

A página deverá preservar a identidade visual do protótipo original e adaptar sua organização para diferentes tamanhos de tela.

## 3. Página de detalhes do curso

### 3.1. Elementos observados

- Categoria e título do curso.
- Data de início e informação de certificação.
- Imagem de apresentação com controle visual de reprodução de vídeo.
- Botão “Matricule-se”.
- Seção de benefícios, com certificação, professores especialistas, suporte e flexibilidade.
- Seção “Sobre o curso”.
- Seções expansíveis:
  - Módulos.
  - Aulas online e avaliações.
  - Dúvidas frequentes.
- Depoimentos, seção de fale conosco e rodapé.
- Barra de matrícula fixa durante a rolagem, exibindo o nome do curso e uma ação de matrícula.

### 3.2. Interações observadas

- O botão “Matricule-se” direciona para outra tela, com navegação lateral, módulos e conteúdo de aprendizagem.
- As seções de detalhes apresentam estados expandido e recolhido.
- A barra de matrícula permanece visível durante a rolagem.
- A navegação das seções com cards é feita por arraste e por meio de duas setas no canto inferior direito.
- Não foi possível confirmar o funcionamento de todos os controles de vídeo, módulos e navegação.

### 3.3. Distribuição das informações dos cursos

Os atributos obrigatórios do curso deverão estar contemplados no modelo de dados e na API. Isso não significa que todos precisem aparecer simultaneamente nos cards.

**Cards do catálogo:**

- Imagem de apresentação.
- Nome do curso.
- Categoria.
- Descrição resumida.
- Modalidade e status, quando úteis para identificar o curso.

**Página de detalhes:**

- Nome completo.
- Nome breve, quando pertinente à apresentação.
- Descrição completa.
- Categoria.
- Modalidade.
- Carga horária.
- Público-alvo.
- Status.
- Imagem de apresentação.
- Data de disponibilização, quando aplicável.

A distribuição deverá garantir que os dados obrigatórios definidos no case estejam disponíveis, mesmo quando não forem exibidos diretamente no card.

### 3.4. Decisão de implementação

A página de detalhes apresentará as informações disponíveis para o curso selecionado.

As seções expansíveis poderão ser reproduzidas quando forem compatíveis com o escopo e os dados disponíveis.

A barra fixa de matrícula será avaliada durante a implementação, com atenção para não ocultar conteúdo, controles ou informações importantes em telas menores.

## 4. Ambiente de aprendizagem

O botão “Matricule-se” direciona para uma interface com navegação por módulos e aulas, progresso do curso e conteúdo textual.

Não foi identificada interação adicional confirmada para essa interface além do acesso por meio do botão de matrícula.

### Decisão de escopo

A interface aparenta representar uma experiência de aprendizagem separada do catálogo.

Como o case não exige a implementação de um ambiente Moodle nem de um fluxo completo de matrícula, essa experiência não será uma prioridade inicial.

O comportamento do botão “Matricule-se” será avaliado após a implementação das funcionalidades obrigatórias. Caso não seja possível reproduzir o fluxo completo, a limitação deverá ser registrada na documentação final.

## 5. Identidade visual

### 5.1. Elementos observados

- Predominância de fundo branco.
- Vermelho escuro e vermelho institucional em áreas de destaque.
- Laranja claro em etiquetas, ícones e seções.
- Botões pretos com texto branco e botões secundários claros.
- Cards com imagens, cantos arredondados e sobreposição colorida.
- Tipografia sem serifa, com títulos grandes e destacados.
- Uso de ícones para categorias, benefícios e ações.

As cores, fontes, espaçamentos e demais elementos definitivos deverão ser conferidos durante a implementação, conforme os recursos disponíveis.

### 5.2. Paleta visual de referência

Os valores abaixo são estimativas visuais obtidas a partir das capturas do protótipo, e não tokens oficiais de um design system.

| Token | Aplicação | Valor |
|---|---|---|
| `brand-primary` | Vermelho institucional | `#2596be` |
| `brand-dark` | Vermelho escuro dos cards e destaques | `#9b0414` |
| `accent` | Laranja claro das etiquetas e ícones | `#fcd19c` |
| `background` | Fundo principal | `#ffffff` |
| `text-primary` | Títulos e textos principais | `#0c0c0d` |
| `text-secondary` | Textos auxiliares | A identificar |
| `surface-dark` | Barra fixa e áreas escuras | A identificar |
| `border` | Bordas e divisórias | A identificar |

Os valores deverão ser conferidos durante a implementação. Caso seja possível obter os estilos oficiais do Figma, eles terão prioridade sobre as estimativas extraídas das capturas.

## 6. Responsividade e acessibilidade

O protótipo observado não demonstra adequadamente o comportamento responsivo.

A implementação deverá atender à responsividade exigida pelo case, incluindo a adaptação do catálogo, dos filtros, dos cards, da página de detalhes e da barra fixa de matrícula.

Também deverão ser considerados:

- Navegação por teclado e foco visível.
- Nomes acessíveis para botões e controles.
- Hierarquia correta de títulos.
- Contraste e legibilidade.
- Uso adequado de textos alternativos para imagens.
- Mensagens acessíveis para carregamento, erros e ausência de resultados.
- Funcionamento das seções expansíveis sem depender exclusivamente da interação por mouse.
- Adaptação da área de filtros e dos cards para telas menores.
- Prevenção de conteúdo cortado ou encoberto por elementos fixos.

A responsividade será implementada e validada durante o desenvolvimento, mesmo sem uma referência responsiva disponível no protótipo.

## 7. Pendências de implementação e validação

- Conferir e, se possível, refinar os valores da paleta visual.
- Implementar e validar a responsividade nas principais páginas e componentes.
- Avaliar o comportamento do botão “Matricule-se” após a conclusão das funcionalidades obrigatórias.
- Registrar eventuais diferenças entre o Figma e a implementação final.
- Documentar limitações ou funcionalidades não concluídas na entrega final.
