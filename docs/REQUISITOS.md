# Requisitos do Projeto — Catálogo de Cursos SESI-SP

## 1. Objetivo

Desenvolver uma aplicação web para consulta de um catálogo de cursos em um ambiente educacional semelhante ao Moodle, permitindo que usuários pesquisem, filtrem e consultem informações detalhadas sobre os cursos disponíveis.

A aplicação deverá utilizar uma interface baseada no protótipo do Figma, uma API desenvolvida em C#/.NET e um banco de dados open source.

A instalação ou integração efetiva com o Moodle não é obrigatória.

## 2. Escopo funcional

### RF-01 — Listagem de cursos

A aplicação deve exibir os cursos disponíveis, obtidos por meio da API.

**Critérios de aceite**
- [ ] Os cursos são carregados a partir da API.
- [ ] Cada curso apresenta as informações previstas no design.
- [ ] A interface trata o estado de carregamento.
- [ ] A interface apresenta uma mensagem adequada quando ocorre um erro ao carregar os cursos.

### RF-02 — Pesquisa por nome

A aplicação deve permitir pesquisar cursos pelo nome.

**Critérios de aceite**
- [ ] O usuário consegue informar um termo de pesquisa.
- [ ] Os resultados correspondem ao termo informado.
- [ ] A pesquisa funciona em conjunto com os filtros.
- [ ] A interface informa quando nenhum curso corresponde à pesquisa.

### RF-03 — Filtros

A aplicação deve permitir filtrar os cursos por categoria, modalidade e status.

**Critérios de aceite**
- [ ] É possível filtrar por categoria.
- [ ] É possível filtrar por modalidade.
- [ ] É possível filtrar por status.
- [ ] É possível combinar dois ou mais filtros.
- [ ] Os filtros funcionam em conjunto com a pesquisa por nome.
- [ ] É possível limpar os filtros e retornar à listagem sem restrições.

### RF-04 — Contagem de resultados

A aplicação deve informar a quantidade de cursos encontrados.

**Critérios de aceite**
- [ ] A quantidade exibida corresponde aos resultados apresentados.
- [ ] A quantidade é atualizada quando a pesquisa ou os filtros mudam.
- [ ] A interface trata corretamente a ausência de resultados.

### RF-05 — Detalhes do curso

A aplicação deve permitir consultar os detalhes de um curso.

**Critérios de aceite**
- [ ] O usuário consegue acessar os detalhes de um curso a partir da listagem.
- [ ] As informações apresentadas correspondem ao curso selecionado.
- [ ] A interface segue as orientações do protótipo do Figma.

### RF-06 — Estados da interface

A aplicação deve tratar os principais estados da consulta de cursos.

**Critérios de aceite**
- [ ] Existe um estado de carregamento.
- [ ] Existe um tratamento para erros de comunicação ou consulta à API.
- [ ] Existe uma mensagem para quando nenhum resultado é encontrado.
- [ ] As mensagens são claras e compreensíveis.

## 3. Requisitos de dados

### RD-01 — Quantidade e diversidade dos cursos

A aplicação deve disponibilizar pelo menos seis cursos fictícios.

**Critérios de aceite**
- [ ] Existem pelo menos 6 cursos cadastrados.
- [ ] Existem pelo menos 3 categorias.
- [ ] Existem pelo menos 2 modalidades.
- [ ] Existem pelo menos 3 status.
- [ ] Os cursos apresentam variação de carga horária.
- [ ] Os cursos apresentam módulos e descrições das aulas.
- [ ] Os cursos apresentam informações sobre o público-alvo.

### RD-01.1 — Atributos obrigatórios dos cursos

Cada curso deve contemplar os seguintes atributos, conforme o enunciado:

| Atributo | Descrição |
|---|---|
| Nome completo | Nome completo do curso. |
| Nome breve | Nome resumido do curso. |
| Descrição | Apresentação e informações gerais do curso. |
| Categoria | Categoria à qual o curso pertence. |
| Modalidade | Modalidade de realização do curso. |
| Carga horária | Carga horária total do curso. |
| Público-alvo | Perfil de público ao qual o curso se destina. |
| Status | Situação do curso no catálogo. |
| Imagem de apresentação | Imagem utilizada para apresentar o curso. |
| Data de disponibilização | Data de disponibilização do curso, quando aplicável. |

**Critérios de aceite**
- [ ] O modelo de dados contempla todos os atributos definidos no enunciado.
- [ ] Os cursos fictícios possuem dados coerentes para os atributos aplicáveis.
- [ ] A data de disponibilização pode não ser informada quando não se aplicar.
- [ ] Os atributos necessários para a listagem e os detalhes estão disponíveis pela API.

### RD-02 — Persistência dos dados

Os dados dos cursos devem ser armazenados em um banco de dados open source.

**Critérios de aceite**
- [ ] O banco de dados escolhido é open source.
- [ ] A estrutura dos dados está documentada.
- [ ] Existem scripts, migrations ou arquivos necessários para preparar o banco.
- [ ] A API consegue consultar os cursos armazenados.

## 4. Requisitos técnicos

### RT-01 — Front-end

O front-end deve implementar a interface do catálogo conforme o protótipo do Figma.

**Critérios de aceite**
- [ ] A interface segue o protótipo fornecido.
- [ ] A aplicação funciona em diferentes tamanhos de tela.
- [ ] Os componentes e estados de interface estão implementados.
- [ ] A interface contempla requisitos de acessibilidade.

### RT-02 — Back-end e API

O back-end deve ser desenvolvido em C#/.NET e disponibilizar uma API para consulta dos cursos.

**Critérios de aceite**
- [ ] A API disponibiliza os cursos para o front-end.
- [ ] Os dados retornados correspondem aos registros disponíveis.
- [ ] Os endpoints estão documentados.
- [ ] Os erros de consulta são tratados adequadamente.

### RT-03 — Integração

O front-end, a API e o banco de dados devem funcionar de forma integrada.

**Critérios de aceite**
- [ ] O front-end consegue consumir a API.
- [ ] A API consegue consultar os dados persistidos.
- [ ] A aplicação funciona seguindo as instruções de configuração.
- [ ] A configuração de comunicação entre as partes está documentada.

### RT-04 — Responsividade e acessibilidade

A interface deve ser responsiva e acessível.

**Critérios de aceite**
- [ ] O catálogo pode ser utilizado em diferentes tamanhos de tela.
- [ ] Os controles possuem identificação adequada.
- [ ] A navegação por teclado é considerada.
- [ ] As informações e mensagens possuem apresentação compreensível.
- [ ] As decisões de responsividade e acessibilidade estão documentadas.

## 5. Requisitos de documentação

### RDOC-01 — README.md

O projeto deve possuir um README com as informações necessárias para compreender, configurar e executar a aplicação.

**Conteúdo esperado**
- Objetivo do projeto.
- Tecnologias utilizadas.
- Arquitetura da aplicação.
- Estrutura de pastas.
- Instruções para executar o projeto.
- Configuração do banco de dados.
- Endpoints da API.
- Modelo de dados.
- Estratégia de responsividade.
- Decisões de acessibilidade.
- Processo de implantação.
- Limitações conhecidas.

### RDOC-02 — USO_DE_IA.md

O uso de ferramentas de inteligência artificial deve ser registrado em um documento próprio.

**Conteúdo esperado**
- Ferramentas utilizadas.
- Objetivo de cada utilização.
- Prompts relevantes.
- Conteúdo ou sugestões utilizados e descartados.
- Como as sugestões foram validadas.
- Exemplo de erro ou inadequação identificado.
- Correção realizada.

### RDOC-03 — Limitações e pendências

As limitações e os itens não concluídos devem ser documentados.

**Critérios de aceite**
- [ ] As limitações conhecidas estão registradas.
- [ ] Os itens não implementados estão identificados.
- [ ] Eventuais diferenças em relação ao Figma estão justificadas.

## 6. Requisitos de implantação e entrega

### RDEL-01 — Publicação gratuita

A aplicação deve ser publicada de forma gratuita, sem gerar custos para o SESI-SP.

**Critérios de aceite**
- [ ] Existe um link acessível para a aplicação publicada.
- [ ] A solução de hospedagem não exige pagamento para o SESI-SP.
- [ ] As instruções de implantação estão documentadas.
- [ ] As limitações do ambiente gratuito, se houver, estão registradas.

### RDEL-02 — Repositório e arquivos

A entrega deve disponibilizar o código-fonte e os arquivos necessários para executar e implantar a aplicação.

**Critérios de aceite**
- [ ] O repositório GitHub está disponível.
- [ ] O código-fonte do front-end está incluído.
- [ ] O código-fonte do back-end está incluído.
- [ ] Os scripts, migrations ou arquivos necessários para o banco estão incluídos.
- [ ] A documentação está disponível.
- [ ] O ZIP dos arquivos de implantação disponíveis está preparado.
- [ ] O link da aplicação publicada está informado.

## 7. Fora do escopo obrigatório

Os itens abaixo não são exigências obrigatórias identificadas no enunciado:

- Instalação ou integração efetiva com o Moodle.
- Painel administrativo para cadastro, edição e exclusão de cursos.

Esses itens só devem ser considerados depois da conclusão e validação dos requisitos obrigatórios.

## 8. Pendências de análise

Os seguintes pontos devem ser confirmados durante a análise do protótipo do Figma:

- [ ] Layout e componentes de cada tela.
- [ ] Informações exibidas nos cards de cursos.
- [ ] Apresentação dos detalhes de um curso.
- [ ] Comportamento visual dos filtros e da pesquisa.
- [ ] Estados de carregamento, erro e ausência de resultados.
- [ ] Comportamento da interface em dispositivos menores.
- [ ] Diferenças entre o protótipo e a implementação, caso existam.

## 9. Definição geral de pronto

O case será considerado pronto para entrega quando:

- [ ] Todos os requisitos obrigatórios estiverem implementados ou suas pendências estiverem claramente documentadas.
- [ ] A aplicação estiver integrada e testada.
- [ ] As funcionalidades de pesquisa, filtros e detalhes estiverem verificadas.
- [ ] A interface estiver validada em relação ao Figma, à responsividade e à acessibilidade.
- [ ] A aplicação estiver publicada gratuitamente.
- [ ] O README.md e o USO_DE_IA.md estiverem completos.
- [ ] Os arquivos exigidos para a entrega estiverem disponíveis.
- [ ] As limitações e diferenças relevantes estiverem documentadas.
