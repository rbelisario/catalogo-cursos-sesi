# Uso de Inteligência Artificial

## 1. Ferramenta utilizada

**ChatGPT**, utilizado como ferramenta de apoio durante o desenvolvimento do Catálogo de Cursos SESI-SP.

## 2. Objetivo do uso

A inteligência artificial foi utilizada para apoiar a implementação e revisão de código, esclarecer dúvidas técnicas, investigar erros de integração e organizar a documentação do projeto.

O uso foi mais intenso no back-end em C#/.NET e na configuração da publicação, por serem áreas em que precisei aprofundar conhecimentos específicos. No front-end, desenvolvido com React e TypeScript, a IA auxiliou principalmente na análise de alternativas, investigação de problemas e revisão de implementação.

As sugestões foram avaliadas conforme os requisitos do desafio e o comportamento esperado da aplicação. As decisões técnicas e a responsabilidade pelo código entregue permaneceram sob minha responsabilidade.

## 3. Prompts relevantes e avaliação das sugestões

Os prompts utilizados envolveram solicitações para:

- Explicar e apoiar a implementação de uma API em ASP.NET Core com Entity Framework Core e PostgreSQL.
- Investigar erros de conexão e orientar a aplicação de migrations no banco de dados.
- Configurar variáveis de ambiente para separar a URL local da API da URL utilizada em produção.
- Investigar problemas de comunicação entre o front-end publicado na Vercel e a API hospedada no Render.
- Revisar a documentação técnica e os requisitos de entrega.

As sugestões consideradas compatíveis com a arquitetura e os requisitos foram aproveitadas após avaliação. Orientações genéricas ou que não correspondiam à configuração real do projeto foram ajustadas antes de serem aplicadas.

Os itens acima descrevem os principais tipos de solicitações utilizados, sem pretender reproduzir literalmente todo o histórico de prompts.

## 4. Validação do conteúdo gerado

As sugestões foram verificadas por meio da execução e da compilação do projeto, da análise dos logs e de testes de integração.

Entre as verificações realizadas, destacam-se:

- Compilação do front-end para produção.
- Compilação do back-end com o .NET SDK.
- Aplicação das migrations do Entity Framework Core no PostgreSQL do Neon.
- Consulta dos cursos por meio da API publicada.
- Teste da integração entre o front-end na Vercel, a API no Render e o banco de dados.

A validação foi baseada no comportamento observado durante a execução, e não apenas nas respostas fornecidas pela ferramenta.

## 5. Exemplo de inadequação identificada e correção realizada

Durante a preparação para publicação, a URL da API no front-end estava definida diretamente para o ambiente local, utilizando `https://localhost:7241/api`.

Essa configuração não era adequada para a aplicação publicada, pois o navegador dos usuários não deveria tentar acessar a API pela própria máquina local.

A configuração foi corrigida para utilizar a variável de ambiente `VITE_API_URL`, mantendo uma URL local como valor alternativo para o desenvolvimento. Na Vercel, a variável foi configurada com o endereço público da API hospedada no Render.

Também foi necessário ajustar a política de CORS do back-end para permitir a origem pública do front-end, além da origem local de desenvolvimento.

Após os ajustes, a aplicação publicada conseguiu carregar os cursos por meio da API.

## 6. Limitações e responsabilidade

Ferramentas de inteligência artificial podem produzir respostas incorretas, incompletas ou incompatíveis com o contexto do projeto. Por isso, suas sugestões exigem análise crítica e validação técnica.

A utilização da ferramenta serviu como apoio ao processo de desenvolvimento, sem substituir a compreensão dos requisitos, a avaliação das alternativas e a responsabilidade pelas decisões de implementação.
