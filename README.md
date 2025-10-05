# Simple API Rest in Typecript 
Este projeto consiste em uma API REST simples desenvolvida com TypeScript, focada em demonstrar a estrutura básica de um backend moderno. Utiliza Node.js, Express e práticas recomendadas de tipagem e organização de código, sendo ideal para quem está começando no desenvolvimento de APIs com TypeScript.

### 🛠️ Tools
[![Node](https://img.shields.io/badge/Node-339933?logo=node.js&logoColor=white)](https://nodejs.org/es/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/es/)
[![Typescript](https://img.shields.io/badge/Typescript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![SQLite](https://img.shields.io/badge/sqlite-003B57?logo=sqlite&logoColor=white)](https://sqlite.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)
[![Eslint](https://img.shields.io/badge/Eslint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

<br>

## How to use<br>
<br>

### Step 1: Clone the project 
Em primeiro lugar precisamos clonar ou baixar o projeto localmente, para isso usaremos o seguinte comando: 
```
git clone 'https://github.com/AlexandreBnovais/TCC-backend.git'
```
Em seguida entre no diretorio 
```
cd TCC-backend
```
<br>

### Step 2: Install dependency
Agora precisamos instalar as dependencias de desenvolvimento do projeto. Para isso usaremos o gerenciador de pacotes "npm".
```
npm install
```
**Dica**: para verificar se a instalação deu certo identifique se o projeto gerou a pasta "node_modules" e o arquivo "package-look.json"

<br>

### Step 3: Creating environment variables
Esta etapa define a criação das variaveis de ambientes necessarias para API.
1. Crie um arquivo .env
2. Copie todas as variaveis de ambiente do arquivo de exemplo (.env.example) e cole-as no seu arquivo .env.
3. Preencha o nome do HOST e a PORTA que você irá usar (ex: APP_HOST='localhost' e APP_PORT=8000)

<br>

### Step 4: Creating a Signature Token
Após incluir valores para as variaveis "host" e "port", precisamos criar uma chave de assinatura para o Json Web Token (JWT). 
Para criar um chave de assinatura usaremos a libs require("crypto")

1. No seu terminal de comando digite: 
```
node 
```
2. Depois digite a seguinte estrutura:
```ruby
const crypto = require('crypto'); crypto.randomBytes(16).toString('hex')
```
3. Copie o hash gerado e cole na variavel de ambiente "JWT_SECRET"

<br>

### Step 5: Build your application
Nesta etapa construiremos nossas migrations assim com nosso banco de dados local.
Usaremos o seguinte comando
```
npm run migrate
```
Depois gere o prisma client e a pasta ./dist
```
npm run build
```
