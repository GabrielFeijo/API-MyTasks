# API-MyTasks

Bem-vindo à API MyTasks! Esta API foi criada para integrar o projeto do Gerenciador de Tarefas desenvolvido em React.

## Requisitos

Antes de começar a utilizar a API MyTasks, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js: Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org).
- MongoDB: A API de Quiz utiliza o MongoDB como banco de dados. Você pode baixar e instalar o MongoDB a partir do [site oficial](https://www.mongodb.com)

## Instalação

Siga as etapas abaixo para configurar a API MyTasks em seu ambiente local:

1. Clone o repositório do GitHub:

   ```bash
   git clone https://github.com/GabrielFeijo/API-MyTasks.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd api-mytasks
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start ou npm run start-dev
   ```

Após executar o comando acima, o servidor de desenvolvimento será iniciado na porta padrão 3000. Agora você pode começar a interagir com a API MyTasks.

## Utilização

A API MyTasks fornece endpoints para criar, buscar, atualizar e excluir tarefas. Você pode fazer requisições HTTP para os seguintes endpoints:

### Códigos

- `GET /code`: Retorna os detalhes com base no código fornecido.
- `POST /code`: Adiciona um novo código.
- `PUT /code/:id`: Atualiza um código existente com base no ID.
- `DELETE /deleteCode/:id`: Exclui um código existente com base no ID.

### Tarefas

- `GET /task`: Retorna os detalhes de uma tarefa com base no código.
- `POST /task`: Adiciona uma nova tarefa.
- `PUT /task/:id`: Atualiza uma tarefa existente com base no ID.
- `DELETE /task/:id`: Exclui uma tarefa existente com base no ID.

Certifique-se de incluir os dados corretos no corpo das requisições POST e PUT, seguindo o formato adequado para cada rota.

## Licença

Este projeto está licenciado sob a Licença MIT. Para mais informações, consulte o arquivo LICENSE.
