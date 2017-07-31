var Pokemons = require('../models/pokemons');

exports.post = function(req, res) {
    var pokemons = new Pokemons();
    pokemons.id = req.body.id;
    pokemons.treinador = req.body.treinador;
    pokemons.nome = req.body.nome;
    pokemons.tipo = req.body.tipo;
    pokemons.grupo = req.body.grupo;
    pokemons.habilidades = req.body.habilidades;


    pokemons.save(function(error) {
        if (error) {
            res.send({ message: 'Erro ao criar time de pokemons!' });
        } else {
            res.json({ message: 'Time de pokemons criado!' });
        }


    });

};
exports.get = function(req, res) {
    Pokemons.find(function(err, pokemons) {
        if (err)
            res.json({ 'error': 'nao foi possivel listar os pokemons' });
        res.json(pokemons);
    });
};

exports.putPokemon = function(req, res) {
    Pokemons.findById(req.params.treinador, function(error, pokemons) {
        if (error)
            res.json({ 'error': 'Nao foi possivel atualizar o usuario' });
        pokemons.id = req.body.id;
        pokemons.treinador = req.body.treinador;
        pokemons.nome = req.body.nome;
        pokemons.tipo = req.body.tipo;
        pokemons.grupo = req.body.grupo;
        pokemons.habilidades = req.body.habilidades;

        pokemons.save(function(error) {
            if (error)
                res.send(error);
            res.json({ message: 'Pokemons Atualizado!' });
        });
    });
};

exports.findPokemons = function(req, res) {
    Pokemons.find({ treinador: req.params.treinador }, function(error, pokemons) {
        if (pokemons)
            res.json(pokemons);
        else
            res.json({ message: "nenhum registo encontrado" });

    });
};

exports.delete = function(req, res) {
    Pokemons.remove({ treinador: req.params.treinador }, function(error) {
        if (error)
            res.send(error);

        res.json({ message: 'Pokemons excluídos com Sucesso! ' });
    });
};