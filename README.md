# Pokemon API

Projeto em  AngularJS/NodeJS/Mongodb dividido em:
# Back-end
  - NodeJS - Api para manipula�ao do banco
  - MongoDB - Banco NoSQL
  
Como instalar e rodar o BackEnd dentro da pasta "pokemon-backend" execute os seguintes comandos:

1)instalando depend�ncias
```sh
npm install
```
Dep�ndencias:
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
| Requisi��es da API | Metodo | Parametros| Fun��o 
| ------ | ------ | -----| -----|
| /api/users | POST  |nome,login,senha|Cadastra um usu�rio
| /api/users | GET| ---- | Recebe lista usu�rios
| /api/users/<id> | PUT |nome,login,senha| Atualiza usu�rio
| /api/users/<id> | DELETE|----|Deleta usu�rio
| /api/users/byuser/<nome> |GET|---- |Recebe usu�rio pelo nome
| /api/users/login/<nome>/<senha> |GET|---- |Verifica autentica��o

 # Pokemons
| Requisi��es da API | Metodo | Parametros| Fun��o 
| ------ | ------ | -----| -----|
| /api/pokemons | POST  |treinador,nome,tipo,grupo,habilidades|Cadastra um pokemon
| /api/pokemons | GET| ---- | Recebe lista pokemons
| /api/pokemons/<treinador> | PUT |treinador,nome,tipo,grupo,habilidades| Atualiza usu�rio
| /api/pokemons/<treinador> | GET|----|Recebe pokemons do treinador
| /api/users/byuser/<nome> |GET|---- |Recebe usu�rio pelo nome
| /api/users/<treinador>| DELETE|----|Deleta usu�rio

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


2)Abrir com Apache/Xampp ou qualquer servidor http, eu utilizei o http-server do nodejs, caso queira utilizar � s� utilizar os comandos:
```sh
npm install http-server -g
http-server -p <porta>
```
 # Pronto agora ja temos o front-end e o back-end rodando!
 No font-end possuimos as seguintes p�ginas:
 * Home - P�gina principal
 * Login - Pagina de autentica��o do usu�rio
 * Manage - Pagina para criar ou alterar o time de pokemons
 * Profile - Pagina para visualizar o time de pokemons
 * Register - Pagina para criar um usuario novo
 
  # Monte a sua equipe!

