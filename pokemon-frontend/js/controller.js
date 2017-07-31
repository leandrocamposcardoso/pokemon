 var pokeApp = angular.module('pokeApp', ['ngRoute'])

 // Init

 .run(function($rootScope, $location) {
         $rootScope.BackendURL = "http://127.0.0.1:8001";  //Alterar para o ip e porta do backend
         $rootScope.user = {
             nome: "",
             login: "",
             senha: "",
             logged: false
         };

         $rootScope.logout = function() {
             $rootScope.user.logged = false;

         };

         $rootScope.$on("$routeChangeStart", function(event, next, current) {
             if ($rootScope.user.logged == false) {
                 if (next.templateUrl === "views/register.html") {

                 } else if (next.templateUrl === "views/home.html") {

                 } else {

                     $location.path("/login");
                 }
             }

         });

     })
     //Routes
     .config(function($routeProvider) {
         $routeProvider

         //route para home
             .when('/home', {
             templateUrl: 'views/home.html',
             controller: 'mainController'
         })

         // route para login
         .when('/login', {
             templateUrl: 'views/login.html',
             controller: 'loginController'
         })

         // route para register
         .when('/register', {
             templateUrl: 'views/register.html',
             controller: 'registerController'
         })

         // route para manage
         .when('/manage', {
             templateUrl: 'views/manage.html',
             controller: 'manageController'
         })

         // route para profile
         .when('/profile', {
             templateUrl: 'views/profile.html',
             controller: 'profileController'
         })

         .otherwise({
             redirectTo: '/home'
         });
     });

 //Controllers
 //Main
 pokeApp.controller('mainController', function($scope) {

 });
 //Login
 pokeApp.controller('loginController', function($scope, $rootScope, $http) {
     $scope.status = "";
     $scope.login = function(user) {
         $http.get($rootScope.BackendURL + '/api/users/login/' + user.user + '/' + user.password).then(function(response) {
             if (response.data.message) {
                 $scope.status = response.data.message;
             } else {
                 $scope.status = "Logado - Redirecionando.";
                 $rootScope.user = response.data;
                 $rootScope.user.logged = true;
                 $scope.status = "";
                 window.location = '#!/profile';

             }
         });
     };
 });
 //Register
 pokeApp.controller('registerController', function($scope, $rootScope, $http) {
     //Register function
     $scope.status = "";
     $scope.register = function(user) {
         var data = { nome: user.name, login: user.user, senha: user.password };
         $http.post($rootScope.BackendURL + '/api/users', JSON.stringify(data))
             .then(function(response) {
                 $scope.status = response.data.message;
                 if ($scope.status == "Usuário criado!") {
                     $rootScope.user = response.data;
                     $rootScope.user.logged = true;
                     window.location = '#!/profile';

                 }

             });
     };


 });
 //Manage
 pokeApp.controller('manageController', function($scope, $rootScope, $http) {
     $scope.user = $rootScope.user.nome;

     //Recebendo lista de pokemons
     $scope.loading = "Carregando a lista de pokemons!";
     $http({
         method: 'GET',
         url: 'http://pokeapi.co/api/v2/pokedex/1',
         data: {
             applicationId: 3
         }
     }).then(function(success) {
         $scope.loading = "";
         $scope.pokemons = success.data.pokemon_entries;
     }, function(error) {
         $scope.loading = "Falha ao receber os pokemons, verifique a conexão coma internet.";
     });

     //Pega habilidades
     $scope.loading2 = "Carregando habilidades";
     $scope.getMove = function(offset) {
         var timecont = 0;
         var timeout = 10000;
         setTimeout(function() {
             $http({
                 method: 'GET',
                 url: 'https://pokeapi.co/api/v2/move/?offset=' + offset,
                 data: {
                     applicationId: 3
                 }
             }).then(function(success) {
                 success.data.results.forEach(function(move) {
                     $scope.moves.push({
                         'name': move.name
                     });
                 })

                 $scope.loading2 = "";
             }, function(error) {
                 $scope.loading2 = "Falha ao receber as habilidades!";
             });
         }, timeout);
         timecont++;
         timeout = timeout * timecont;
     }
     for (i = 0; i <= 620; i += 20) {
         $scope.getMove(i);
     }

     $scope.selected = "selected";
     $scope.pokemonSelected = "-";
     $scope.checkedcount = 0;
     $scope.checkedcountMove = 0;

     //Limita numero de pokemons
     $scope.checkChanged = function(pokemon) {
             if (pokemon.selected) $scope.checkedcount++;
             else $scope.checkedcount--;
         }
         //Limita numero de habilidades
     $scope.checkChangedMove = function(move) {
         if (move.selected) $scope.checkedcountMove++;
         else $scope.checkedcountMove--;
     }

     $scope.selectPokemon = function(pokemon) {
         $scope.pokemonSelected = pokemon.name;
         angular.forEach($scope.moves, function(move) {
             move.selected = false;

         })
         $scope.checkedcountMove = 0;
     }

     $scope.moves = []

     $scope.updateMove = function changeDesc(name) {
         for (var i in $scope.pokemonDetail) {
             if ($scope.pokemonDetail[i].name == name) {
                 $scope.pokemonDetail[i].moves = []
                 $scope.selectedMoves.forEach(function(move) {
                     $scope.pokemonDetail[i].moves.push(move.name);
                 })
                 break;
             }
         }
     }

     $scope.addMoves = function(moves) {
         $scope.selectedMoves = moves.filter(function(move) {
             if (move.selected) return move;
         });
     }

     $scope.addPokemon = function(pokemons) {
         $scope.selectedPokemon = pokemons.filter(function(pokemon) {
             if (pokemon.selected) return pokemon;
         });
         $scope.pokemonDetail = [];
         $scope.selectedPokemon.forEach(function(pokemon) {
             $scope.loading2 = "Carregando time"
             $http({
                 method: 'GET',
                 url: pokemon.pokemon_species.url,
                 data: {
                     applicationId: 3
                 }
             }).then(function(success) {
                 $scope.pokemonDetail.push({
                     'name': success.data.name,
                     'type': success.data.genera[0].genus,
                     'group': success.data.egg_groups[0].name,
                     'moves': []
                 })
                 $scope.loading2 = "";
             }, function(error) {
                 $scope.loading2 = "Falha ao receber o time!";
             });

             $scope.loading2 = "Carregando habilidades";
             $scope.pokemonMoves = [];
             $http({
                 method: 'GET',
                 url: pokemon.pokemon_species.url,
                 data: {
                     applicationId: 3
                 }
             }).then(function(success) {
                 $scope.pokemonMoves.push({
                     'name': success.data.name,
                     'type': success.data.genera[0].genus,
                     'group': success.data.egg_groups[0].name,
                     'moves': []
                 })
                 $scope.loading2 = "";
             }, function(error) {
                 $scope.loading2 = "Falha ao receber o time!";
             });
         });
     };
     $scope.savePokemon = function() {
         //Deleta pokemons antigos
         $http({
             method: 'DELETE',
             url: $rootScope.BackendURL + '/api/pokemons/' + $rootScope.user.nome,
             data: {
                 applicationId: 3
             }
         }).then(function(success) {
             $scope.loading2 = "Removendo time antigo";
         }, function(error) {
             $scope.loading2 = "Erro ao deletar time";
         });
         //Salva os novos
         $scope.loading2 = "Salvando time";
         $scope.pokemonDetail.forEach(function(pokemon) {
             var data = { nome: pokemon.name, tipo: pokemon.type, grupo: pokemon.group, habilidades: pokemon.moves, treinador: $rootScope.user.nome };
             console.log(data);
             $http.post($rootScope.BackendURL + '/api/pokemons', JSON.stringify(data))
                 .then(function(response) {
                     $scope.status = response.data.message;
                     if ($scope.status == "Time de pokemons criado!") {
                         window.location = '#!/profile';

                     } else {
                         $scope.status == "Erro ao salvar o time";

                     }

                 });

         });
     }



 });


 //Profile
 pokeApp.controller('profileController', function($scope, $rootScope, $http) {
     $scope.user = $rootScope.user;
     $scope.pokemonList = [];
     $scope.images = [];
     $http({
         method: 'GET',
         url: $rootScope.BackendURL + '/api/pokemons/' + $rootScope.user.nome,
         data: {
             applicationId: 3
         }
     }).then(function(success) {
         $scope.pokemonList = success.data;
     });
     //Pega imagens

     setTimeout(function() {
         $scope.pokemonList.forEach(function(data) {
             $http({
                 method: 'GET',
                 url: 'http://pokeapi.co/api/v2/pokemon/' + data.nome,
                 data: {
                     applicationId: 3
                 }
             }).then(function(success) {
                 $scope.images.push(success.data.sprites.front_default);
             })
         }, function(error) {
             console.log(error);
         });

     }, 500);




 });