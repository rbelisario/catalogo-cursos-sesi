# Catálogo de Cursos SESI-SP

Aplicação web desenvolvida como parte do case técnico para a vaga de **Desenvolvedor de Sistemas I do SESI-SP**.

O projeto permite consultar cursos educacionais, pesquisar por nome, aplicar filtros e visualizar informações detalhadas, utilizando o protótipo do Figma como referência visual.

## Objetivo

Desenvolver uma aplicação web para consulta de cursos educacionais, integrando uma interface responsiva a uma API e a um banco de dados relacional, conforme os requisitos do case técnico.

## Tecnologias

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

### Banco de dados e ambiente
- PostgreSQL
- Docker Compose

## Estrutura do projeto

```text
catalogo-cursos-sesi/
├── backend/                 # API ASP.NET Core
├── docs/
│   ├── ANALISE_FIGMA.md     # Análise do protótipo
│   └── REQUISITOS.md        # Requisitos e critérios de aceite
├── frontend/                # Aplicação React
├── .env.example             # Exemplo de variáveis de ambiente
├── .gitignore
├── docker-compose.yml       # Configuração do banco local
└── README.md
```

## Pré-requisitos

Instale as seguintes ferramentas:

- Node.js e npm
- .NET SDK 10
- Docker Desktop com Docker Compose

Confira as instalações:

```bash
node --version
npm --version
dotnet --version
docker --version
docker compose version
```

## Configuração e execução local

Os comandos abaixo devem ser executados a partir da raiz do repositório, salvo quando indicado.

### 1. Configurar as variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e configure a senha local do PostgreSQL:

```dotenv
POSTGRES_PASSWORD=defina_uma_senha_local
```

Utilize uma senha local e mantenha o arquivo `.env` fora do controle de versão. A senha configurada deve ser a mesma utilizada na connection string do back-end.

### 2. Iniciar o banco de dados

Na raiz do projeto, execute:

```bash
docker compose up -d
```

Verifique o estado dos serviços:

```bash
docker compose ps
```

Aguarde até que o PostgreSQL esteja saudável (`healthy`), quando esse estado estiver configurado no Docker Compose.

Para parar os serviços:

```bash
docker compose down
```

Os dados são mantidos em um volume Docker. Evite executar `docker compose down -v` caso queira preservar os dados locais.

### 3. Configurar os segredos do back-end

Inicialize os User Secrets para o projeto, caso ainda não estejam configurados:

```bash
dotnet user-secrets init --project backend
```

Cadastre a connection string de desenvolvimento:

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=catalogo_cursos;Username=catalogo_app;Password=SUA_SENHA_LOCAL" --project backend
```

Substitua `SUA_SENHA_LOCAL` pela senha definida no arquivo `.env`.

Os User Secrets são destinados ao desenvolvimento local e não substituem uma solução de gerenciamento de segredos em produção.

### 4. Executar o back-end

Na raiz do repositório, execute:

```bash
dotnet run --project backend --launch-profile https
```

Utilize o endereço HTTPS informado no terminal para acessar a API. No ambiente de desenvolvimento validado, o endereço foi:

```text
https://localhost:7241
```

O endpoint principal do catálogo é:

```text
/api/cursos
```

A API também disponibiliza informações auxiliares para os filtros e os detalhes dos cursos.

### 5. Executar o front-end

Em outro terminal, execute:

```bash
cd frontend
npm install
npm run dev
```

Abra o endereço informado pelo Vite. No ambiente de desenvolvimento validado, foi:

```text
http://localhost:5173
```

Com o banco e a API em execução, a aplicação pode consumir os dados dos cursos disponibilizados pelo back-end.

## Funcionalidades

- Listagem de cursos.
- Busca por nome.
- Filtros por categoria, modalidade e status.
- Navegação entre o catálogo e os detalhes de cada curso.
- Visualização das informações e dos módulos e aulas disponibilizados pela API.
- Integração entre front-end, API e banco de dados PostgreSQL.

## Validação e build

### Front-end

Na pasta `frontend`, execute:

```bash
npm run lint
npm run build
```

O primeiro comando verifica problemas identificados pelo ESLint. O segundo executa a compilação de produção.

### Back-end

Na raiz do repositório, execute:

```bash
dotnet build backend
```

Esse comando verifica a compilação do projeto .NET.

## Documentação complementar

- [Requisitos e critérios de aceite](docs/REQUISITOS.md)
- [Análise do protótipo Figma](docs/ANALISE_FIGMA.md)

## Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento, incluindo assistência na implementação, investigação de problemas e revisão de soluções.

As decisões e contribuições relevantes devem ser documentadas em `USO_DE_IA.md`, incluindo os objetivos de utilização, exemplos de prompts, soluções aproveitadas ou descartadas e as validações realizadas pelo desenvolvedor.

## Estado do projeto

O projeto contempla o front-end em React e TypeScript, o back-end em ASP.NET Core Web API e a persistência em PostgreSQL.

A aplicação possui catálogo de cursos, busca, filtros e páginas de detalhes, com integração entre a interface, a API e o banco de dados. A compilação do front-end foi validada durante o desenvolvimento.

A execução local depende da configuração das variáveis de ambiente, do banco de dados e dos segredos de desenvolvimento descritos neste documento.

O deploy e a disponibilidade pública da aplicação devem ser verificados separadamente, conforme os requisitos da entrega.
