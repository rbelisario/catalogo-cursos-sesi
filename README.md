# Catálogo de Cursos SESI-SP

Catálogo web de cursos educacionais desenvolvido como parte do case técnico para a vaga de Desenvolvedor de Sistemas I do SESI-SP.

## Objetivo

Desenvolver uma aplicação web para consultar cursos educacionais, com busca, filtros e visualização de detalhes, seguindo os requisitos do case e utilizando o protótipo do Figma como referência visual.

## Tecnologias

### Front-end
- React
- TypeScript
- Vite

### Back-end
- C#
- ASP.NET Core Web API
- Entity Framework Core
- Npgsql para integração com PostgreSQL

### Banco de dados
- PostgreSQL
- Docker Compose para execução local

## Estrutura do projeto

```text
catalogo-cursos-sesi/
├── backend/                 # API ASP.NET Core
├── docs/
│   ├── ANALISE_FIGMA.md     # Análise do protótipo
│   └── REQUISITOS.md        # Requisitos e critérios de aceite
├── frontend/                # Aplicação React
├── .env.example             # Exemplo de variáveis locais
├── .gitignore
├── docker-compose.yml       # Banco de dados local
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

## Configuração do ambiente local

### 1. Configurar as variáveis do PostgreSQL

Na raiz do projeto, crie um arquivo `.env` com a variável:

```dotenv
POSTGRES_PASSWORD=defina_uma_senha_local
```

Utilize uma senha local forte. O arquivo `.env` não deve ser versionado.

O arquivo `.env.example` contém apenas um exemplo da variável necessária. Copie-o para `.env` e substitua o valor de exemplo pela sua senha local.

### 2. Iniciar o banco de dados

Na raiz do projeto, execute:

```bash
docker compose up -d
```

Verifique o estado do serviço:

```bash
docker compose ps
```

O PostgreSQL deve aparecer como `healthy`.

Para parar o serviço:

```bash
docker compose down
```

Os dados são mantidos em um volume Docker. Não utilize `docker compose down -v` se quiser preservar os dados locais.

### 3. Configurar os segredos do back-end

Inicialize o armazenamento de segredos de desenvolvimento:

```bash
dotnet user-secrets init --project backend
```

Cadastre a connection string local:

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=catalogo_cursos;Username=catalogo_app;Password=SUA_SENHA_LOCAL" --project backend
```

Substitua `SUA_SENHA_LOCAL` pela mesma senha definida no `.env`.

Os User Secrets são destinados ao desenvolvimento local e não devem ser usados como mecanismo de gestão de segredos em produção.

### 4. Executar o back-end

Na raiz do repositório:

```bash
dotnet run --project backend
```

A API será iniciada no endereço informado pelo terminal. No ambiente local validado durante o desenvolvimento, o endereço HTTP foi `http://localhost:5034`.

O endpoint inicial de exemplo é:

```text
/weatherforecast
```

Ele é utilizado apenas para validar a execução inicial da API; não representa um endpoint de cursos.

### 5. Executar o front-end

Em outro terminal, execute:

```bash
cd frontend
npm install
npm run dev
```

Abra o endereço informado pelo Vite. No ambiente local validado durante o desenvolvimento, foi `http://localhost:5173`.

### 6. Validar o front-end

Dentro da pasta `frontend`, execute:

```bash
npm run lint
npm run build
```

Os comandos verificam problemas de lint e geram a compilação de produção do front-end.

Para validar a compilação do back-end, execute na raiz:

```bash
dotnet build backend
```

## Documentação complementar

- [Requisitos e critérios de aceite](docs/REQUISITOS.md)
- [Análise do protótipo Figma](docs/ANALISE_FIGMA.md)

## Estado atual

O ambiente inicial de desenvolvimento foi configurado, com front-end React, API ASP.NET Core e PostgreSQL executado via Docker Compose.

A compilação do front-end e do back-end foi validada. O PostgreSQL iniciou com estado saudável no Docker.

A integração efetiva entre a API e o banco, a modelagem dos cursos, os endpoints de negócio e a interface do catálogo ainda precisam ser implementados e validados nas próximas etapas.

## Uso de inteligência artificial

O uso de ferramentas de inteligência artificial durante o desenvolvimento será registrado em `USO_DE_IA.md`, incluindo objetivos, prompts relevantes, decisões aproveitadas ou descartadas e validações realizadas.
