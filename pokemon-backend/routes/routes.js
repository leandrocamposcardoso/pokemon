module.exports = function(app) {
    let api = require('../controllers/api');
    let users = require('../controllers/users');
    let pokemons = require('../controllers/pokemons');
    //User
    app.route('/')
        .get(api.main);

    app.route('/api/users')
        .post(users.post);

    app.route('/api/users')
        .get(users.get);

    app.route('/api/users/byuser/:name')
        .get(users.findUser);
    app.route('/api/users/login/:name/:password')
        .get(users.login);

    app.route('/api/users/:user_id')
        .get(users.getId)
        .put(users.putID)
        .delete(users.delete);

    //Pokemons
    app.route('/api/pokemons')
        .post(pokemons.post)
        .get(pokemons.get)
        .put(pokemons.putPokemon);

    app.route('/api/pokemons/:treinador')
        .get(pokemons.findPokemons)
        .delete(pokemons.delete);


};