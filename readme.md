# TO-DO List - SAIPO

To-do list da SAIPO para criação de tarefas.

## Screenshot
![alt text](https://i.ibb.co/j4fbC1C/2021-08-11-22-39.png, "Home Screen")

# Stack
- ReactJS
- NodeJS + AdonisJS
- Postgres

# Instalação

Faça o clone do projeto e execute os passos abaixo.

### Postgres
```
$ sudo apt-get update
$ sudo apt install postgresql postgresql-contrib
```

Acesse o postgres e crie uma base de dados chamada: **sapio**

### API - AdonisJS
```
$ sudo npm i -g @adonisjs/cli
```

Acesse o diretório *sapio_api* e configure o acesso a base de dados dentro do arquivo ***.env***

Com a base de dados configurada, execute o comando:
```
$ adonis migration:run
```
Este comando ira criar a(s) tabela(s) necessaria(s) para a execução do projeto.

Rode o Servidor com o comando:
```
$ yarn start
```
ou
```
$ adonis serve --dev
```

### Web - React
Basta acessar o diretório ***sapio_web*** e executar:
```
$ yarn install
```
para instalar todas as dependencias

Execute a aplicação com o comando:
```
$ yarn start
```