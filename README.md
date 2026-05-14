# Atividade 5 - Mega Sena

Aplicacao web para consultar resultados da Mega Sena. O projeto usa Node.js com Express no backend, PostgreSQL para armazenar os concursos e uma interface web simples em HTML, CSS e JavaScript.

## Funcionalidades

- Exibe automaticamente o concurso mais recente.
- Permite buscar um concurso pelo numero.
- Mostra dezenas sorteadas, data, ganhadores, rateios e estimativa de premio.
- Disponibiliza uma API REST para consulta dos dados.
- Possui script para criar a tabela e carregar os dados iniciais a partir de CSV.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- HTML, CSS e JavaScript

## Estrutura do projeto

```text
.
|-- public/
|   |-- assets/
|   |   |-- css/main.css
|   |   `-- js/main.js
|   `-- pages/index.html
|-- src/
|   |-- database/db.js
|   |-- infra/
|   |   |-- init/
|   |   |   |-- schema-sql.sql
|   |   |   |-- seed-sql.sql
|   |   |   `-- seed-data/megasena.csv
|   |   `-- run-sql.js
|   |-- repositories/senas.repository.js
|   |-- routes/senas.routes.js
|   `-- server.js
|-- package.json
`-- README.md
```

## Requisitos

- Node.js instalado.
- PostgreSQL instalado e em execucao.
- Um banco de dados PostgreSQL criado para o projeto.

## Configuracao

1. Instale as dependencias:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com as variaveis abaixo:

```env
PORT=3000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_banco
```

3. Inicialize o banco de dados:

```bash
npm run db:init
```

Esse comando executa os arquivos SQL de criacao da tabela e importacao dos dados em `src/infra/init`.

## Como executar

Para iniciar em modo normal:

```bash
npm start
```

Para iniciar em modo desenvolvimento, reiniciando automaticamente quando houver alteracoes:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

Se a variavel `PORT` tiver outro valor, use a porta configurada no `.env`.

## API

### Buscar o ultimo concurso

```http
GET /api
```

Retorna o concurso mais recente cadastrado na tabela `megasena`.

### Buscar concurso por numero

```http
GET /api/:concurso
```

Exemplo:

```http
GET /api/3234
```

Retorna os dados do concurso informado. Caso o parametro nao seja um numero inteiro, a API retorna erro `400`.

## Scripts disponiveis

- `npm start`: inicia o servidor.
- `npm run dev`: inicia o servidor com `node --watch`.
- `npm run db:init`: cria/atualiza a estrutura do banco e importa os dados do CSV.

## Observacoes

- O arquivo `.env` nao deve ser versionado, pois contem dados de conexao do banco.
- O script de importacao usa o comando `COPY` do PostgreSQL para carregar `megasena.csv`.
- Antes de executar a aplicacao, confirme que o PostgreSQL esta rodando e que as credenciais do `.env` estao corretas.
