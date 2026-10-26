# Catálogo de Cursos SESI-SP

Aplicação web desenvolvida como parte do case técnico para a vaga de **Desenvolvedor de Sistemas I do SESI-SP**.

A aplicação permite consultar cursos educacionais, pesquisar por nome, aplicar filtros e visualizar detalhes, utilizando o protótipo do Figma como referência visual.

## 1. Objetivo

Desenvolver uma aplicação web para consulta de cursos educacionais, integrando uma interface responsiva a uma API desenvolvida em C#/.NET e a um banco de dados relacional PostgreSQL.

Os dados disponibilizados são fictícios e utilizados para demonstrar as funcionalidades exigidas pelo case.

## 2. Aplicação publicada

- **Front-end:** https://catalogo-cursos-sesi.vercel.app/
- **API:** https://catalogo-cursos-sesi.onrender.com
- **Repositório:** https://github.com/rbelisario/catalogo-cursos-sesi

A aplicação utiliza Vercel para hospedar o front-end, Render para executar a API e Neon para hospedar o PostgreSQL.

A disponibilidade dos serviços depende das condições e dos limites dos respectivos planos de hospedagem.

## 3. Tecnologias utilizadas

### Front-end

- React
- TypeScript
- Vite
- React Router
- Material UI (MUI)

### Back-end

- C#
- ASP.NET Core Web API
- Entity Framework Core
- Npgsql

### Banco de dados e infraestrutura

- PostgreSQL
- Docker Compose
- Entity Framework Core Migrations
- Vercel
- Render
- Neon

## 4. Arquitetura da solução

A aplicação está organizada em três partes:

1. **Front-end:** interface responsável pela listagem, pesquisa, filtros e visualização dos detalhes dos cursos.
2. **API:** aplicação ASP.NET Core responsável por disponibilizar os dados e consultar o banco por meio do Entity Framework Core.
3. **Banco de dados:** PostgreSQL responsável pela persistência das informações dos cursos e de seus dados relacionados.

O front-end consome a API por requisições HTTP. A conexão com o banco é realizada exclusivamente pelo back-end.

Em produção, a URL da API é configurada por variável de ambiente, e a política de CORS permite a comunicação com a origem pública do front-end.

## 5. Estrutura do projeto

```text
catalogo-cursos-sesi/
├── backend/
│   ├── Data/
│   ├── Migrations/
│   ├── Models/
│   └── Dockerfile
├── docs/
│   ├── ANALISE_FIGMA.md
│   └── REQUISITOS.md
├── frontend/
│   ├── src/
│   └── .env.example
├── .env.example
├── .gitignore
├── docker-compose.yml
├── README.md
└── USO_DE_IA.md
```

A estrutura acima destaca os principais diretórios e arquivos relevantes para desenvolvimento e publicação. Os demais arquivos de configuração e implementação estão disponíveis no repositório.

## 6. Pré-requisitos

Para executar o projeto localmente, instale:

- Node.js e npm
- .NET SDK 10
- Docker Desktop com Docker Compose

Verifique as instalações:

```bash
node --version
npm --version
dotnet --version
docker --version
docker compose version
```

## 7. Configuração e execução local

Execute os comandos a partir da raiz do repositório, salvo indicação contrária.

### 7.1. Configurar o banco de dados

Copie `.env.example` para `.env` e defina uma senha local para o PostgreSQL:

```dotenv
POSTGRES_PASSWORD=defina_uma_senha_local
```

Mantenha o arquivo `.env` fora do controle de versão e não utilize credenciais de produção no ambiente local.

Inicie o banco:

```bash
docker compose up -d
docker compose ps
```

Aguarde o PostgreSQL ficar saudável antes de continuar.

Para interromper os serviços:

```bash
docker compose down
```

Os dados são mantidos no volume Docker. Evite `docker compose down -v` se desejar preservar o banco local.

### 7.2. Configurar a connection string do back-end

Inicialize os User Secrets, caso ainda não estejam configurados:

```bash
dotnet user-secrets init --project backend
```

Configure a connection string de desenvolvimento:

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=catalogo_cursos;Username=catalogo_app;Password=SUA_SENHA_LOCAL" --project backend
```

Substitua `SUA_SENHA_LOCAL` pela senha definida no arquivo `.env`.

Os User Secrets são destinados ao desenvolvimento local e não devem ser utilizados como mecanismo de configuração de produção.

### 7.3. Aplicar as migrations

Com o banco local em execução e a connection string configurada, aplique as migrations:

```bash
dotnet ef database update --project backend
```

Se o comando `dotnet ef` não estiver disponível, instale a ferramenta do Entity Framework Core compatível com a versão utilizada pelo projeto.

As migrations versionadas em `backend/Migrations` definem a estrutura do banco. A aplicação também possui inicialização de dados fictícios para demonstrar o catálogo.

### 7.4. Executar o back-end

Na raiz do repositório:

```bash
dotnet run --project backend --launch-profile https
```

No ambiente de desenvolvimento utilizado, a API fica disponível em:

```text
https://localhost:7241
```

O certificado HTTPS de desenvolvimento pode exigir configuração local no primeiro uso.

### 7.5. Executar o front-end

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

No ambiente de desenvolvimento utilizado, o Vite disponibiliza a aplicação em:

```text
http://localhost:5173
```

Por padrão, o front-end utiliza a URL local da API como alternativa. Para apontar para outro ambiente, configure a variável `VITE_API_URL`.

Exemplo para desenvolvimento local, no arquivo `frontend/.env.local`:

```dotenv
VITE_API_URL=https://localhost:7241/api
```

Para produção, a variável deve conter o endereço-base público da API, incluindo `/api`. No projeto publicado, ela corresponde a:

```dotenv
VITE_API_URL=https://catalogo-cursos-sesi.onrender.com/api
```

Variáveis `VITE_*` são incorporadas ao bundle do front-end; portanto, não coloque senhas ou outros segredos nelas.

## 8. Funcionalidades

A aplicação contempla:

- Listagem de cursos obtidos pela API.
- Pesquisa por nome.
- Filtros por categoria, modalidade e status.
- Combinação de pesquisa e filtros.
- Exibição da quantidade de resultados.
- Limpeza dos filtros.
- Navegação para os detalhes de um curso.
- Exibição de módulos e aulas disponibilizados pela API.
- Tratamento de carregamento, ausência de resultados e falhas de consulta.

Não faz parte do escopo obrigatório o gerenciamento administrativo de cursos por meio de cadastro, edição ou exclusão.

## 9. Endpoints da API

Base URL de produção:

`https://catalogo-cursos-sesi.onrender.com`

| Método | Endpoint | Finalidade |
|---|---|---|
| GET | `/api/cursos` | Consultar a listagem de cursos. |
| GET | `/api/cursos/{id}` | Consultar um curso pelo identificador. |
| GET | `/api/categorias` | Consultar categorias disponíveis. |
| GET | `/api/modalidades` | Consultar modalidades disponíveis. |
| GET | `/api/status-cursos` | Consultar os status disponíveis. |
| GET | `/health/database` | Verificar a conectividade da API com o banco. |

O endpoint `/api/cursos` é utilizado pelo front-end para carregar o catálogo. Os endpoints auxiliares fornecem os dados necessários para os filtros.

O endpoint de saúde verifica a conectividade com o banco; ele não substitui testes funcionais completos da aplicação.

## 10. Modelo de dados

O modelo utiliza entidades relacionadas para representar os cursos e suas informações.

| Entidade | Responsabilidade |
|---|---|
| `Curso` | Armazena os dados principais do curso, como nomes, descrição, carga horária, público-alvo, imagem e data de disponibilização, quando aplicável. |
| `Categoria` | Representa a categoria do curso. |
| `Modalidade` | Representa a modalidade de realização do curso. |
| `StatusCurso` | Representa o estado do curso no catálogo. |
| `Modulo` | Organiza o conteúdo de um curso em módulos. |
| `Aula` | Representa as aulas associadas ao conteúdo dos cursos. |

As entidades são mapeadas pelo Entity Framework Core. As migrations em `backend/Migrations` definem a estrutura persistida no PostgreSQL.

A inicialização do projeto disponibiliza dados fictícios para demonstrar a listagem e os relacionamentos entre cursos, módulos e aulas.

## 11. Responsividade e acessibilidade

A interface utiliza React e Material UI para estruturar os componentes visuais e apoiar a adaptação do layout a diferentes tamanhos de tela.

A implementação tem como referência o protótipo fornecido no Figma e considera a identificação dos controles, a clareza das mensagens e a utilização dos componentes de interface.

Antes da entrega, recomenda-se verificar diretamente na aplicação:

- Funcionamento em larguras de tela de celular, tablet e desktop.
- Navegação por teclado e visibilidade do foco.
- Identificação acessível de campos, filtros e botões.
- Comportamento de carregamento, erro e ausência de resultados.
- Compatibilidade entre o layout implementado e o protótipo do Figma.

As verificações acima são critérios de validação; não devem ser interpretadas como uma certificação formal de acessibilidade.

## 12. Validação e compilação

### Front-end

Na pasta `frontend`:

```bash
npm run lint
npm run build
```

O comando `lint` verifica problemas identificados pelo ESLint. O comando `build` gera a compilação de produção.

### Back-end

Na raiz do repositório:

```bash
dotnet build backend
```

Esse comando verifica a compilação do projeto .NET.

Além da compilação, a validação de integração inclui testar a API, verificar a conexão com o PostgreSQL e utilizar o front-end publicado para consultar os cursos.

## 13. Processo de publicação

### Front-end — Vercel

O front-end é publicado a partir do repositório GitHub, utilizando o diretório `frontend` como raiz do projeto.

A variável de ambiente de produção é:

```dotenv
VITE_API_URL=https://catalogo-cursos-sesi.onrender.com/api
```

Após alterações nessa variável, é necessário gerar um novo deploy para que o valor seja incorporado ao bundle.

### Back-end — Render

A API é publicada utilizando o Dockerfile em `backend/Dockerfile`.

A configuração de produção utiliza, entre outras, as seguintes variáveis:

- `ASPNETCORE_ENVIRONMENT=Production`
- `ConnectionStrings__DefaultConnection`: connection string do PostgreSQL no Neon, mantida como variável secreta no Render.

A origem pública do front-end deve estar permitida na política CORS da API.

### Banco de dados — Neon

O PostgreSQL de produção é hospedado no Neon. A estrutura é preparada por meio das migrations do Entity Framework Core.

A connection string deve ser configurada no ambiente de execução do back-end, sem ser incluída no código-fonte ou em arquivos versionados.

Os planos gratuitos podem apresentar limites de recursos, suspensão por inatividade e variação no tempo de resposta. A disponibilidade pública deve ser conferida no momento da avaliação.

## 14. Limitações conhecidas

- Os dados do catálogo são fictícios e destinados à demonstração.
- A aplicação não inclui um painel administrativo para cadastrar, editar ou excluir cursos.
- A disponibilidade da aplicação depende dos serviços externos de hospedagem e de seus limites operacionais.
- A execução local exige configuração prévia do banco, da connection string e das migrations.
- A validação de acessibilidade deve ser complementada por testes manuais e, quando possível, por ferramentas específicas.
- Eventuais diferenças em relação ao protótipo do Figma devem ser registradas e justificadas após a conferência final das telas.

## 15. Documentação complementar

- [Requisitos e critérios de aceite](docs/REQUISITOS.md)
- [Análise do protótipo Figma](docs/ANALISE_FIGMA.md)
- `USO_DE_IA.md`: ferramentas utilizadas, objetivos, prompts relevantes, validações e exemplo de inadequação corrigida.

