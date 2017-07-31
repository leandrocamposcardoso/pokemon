# Pokemon API

Projeto em  AngularJS/NodeJS/Mongodb dividido em:
# Back-end
  - NodeJS - Api para manipulaçao do banco
  - MongoDB - Banco NoSQL
  
Como instalar e rodar o BackEnd dentro da pasta "pokemon-backend" execute os seguintes comandos:

1)instalando dependências
```sh
npm install
```
Depêndencias:
 - body-parser: ^1.17.2,
 - compression: ^1.7.0,
 - cors: ^2.8.4,
 - express: ^4.15.3,
 - mongoose: ^4.11.5
 - 
2)Executando o servidor
```sh
node server.js <porta>
```
#  Usuarios
| Requisições da API | Metodo | Parametros| Função 
| ------ | ------ | -----| -----|
| /api/users | POST  |nome,login,senha|Cadastra um usuário
| /api/users | GET| ---- | Recebe lista usuários
| /api/users/<id> | PUT |nome,login,senha| Atualiza usuário
| /api/users/<id> | DELETE|----|Deleta usuário
| /api/users/byuser/<nome> |GET|---- |Recebe usuário pelo nome
| /api/users/login/<nome>/<senha> |GET|---- |Verifica autenticação

 # Pokemons
| Requisições da API | Metodo | Parametros| Função 
| ------ | ------ | -----| -----|
| /api/pokemons | POST  |treinador,nome,tipo,grupo,habilidades|Cadastra um pokemon
| /api/pokemons | GET| ---- | Recebe lista pokemons
| /api/pokemons/<treinador> | PUT |treinador,nome,tipo,grupo,habilidades| Atualiza usuário
| /api/pokemons/<treinador> | GET|----|Recebe pokemons do treinador
| /api/users/byuser/<nome> |GET|---- |Recebe usuário pelo nome
| /api/users/<treinador>| DELETE|----|Deleta usuário

# Front-end
- AngularJS - (Script)
- Bootstrap / Fontawesome (CSS)

1)Alterar a variavel de escopo 
```sh
$rootScope.BackendURL = "http://127.0.0.1:8001";
```
Para:
```sh
$rootScope.BackendURL = "http://<ip do backend>:<porta>";
```


2)Abrir com Apache/Xampp ou qualquer servidor http, eu utilizei o http-server do nodejs, caso queira utilizar é só utilizar os comandos:
```sh
npm install http-server -g
http-server -p <porta>
```
 # Pronto agora ja temos o front-end e o back-end rodando!
 No font-end possuimos as seguintes páginas:
 * Home - Página principal
 * Login - Pagina de autenticação do usuário
 * Manage - Pagina para criar ou alterar o time de pokemons
 * Profile - Pagina para visualizar o time de pokemons
 * Register - Pagina para criar um usuario novo
 
  # Monte a sua equipe!

