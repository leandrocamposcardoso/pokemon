//Usuarios
var User = require('../models/users');

exports.post = function(req, res) {
    var user = new User();
    user.nome = req.body.nome;
    user.login = req.body.login;
    user.senha = req.body.senha;


    user.save(function(error) {
        if (error) {
            res.send({ message: 'Usuário já existe!' });
        } else {
            res.json({ message: 'Usuário criado!' });
        }


    });
};


exports.get = function(req, res) {
    User.find(function(err, user) {
        if (err)
            res.json({ 'error': 'nao foi possivel listar os usuarios' });
        res.json(user);
    });
};

exports.getId = function(req, res) {
    User.findById(req.params.user_id, function(error, user) {
        if (error)
            res.json({ 'error': 'Nao foi possivel encontrar o usuario' });
        res.json(user);
    });
}

exports.putID = function(req, res) {
    User.findById(req.params.user_id, function(error, user) {
        if (error)
            res.json({ 'error': 'Nao foi possivel atualizar o usuario' });

        user.nome = req.body.nome;
        user.login = req.body.login;
        user.senha = req.body.senha;

        user.save(function(error) {
            if (error)
                res.send(error);
            res.json({ message: 'Usuário Atualizado!' });
        });
    });
};

exports.findUser = function(req, res) {
    User.findOne({ user: req.params.user }, function(error, user) {
        if (user)
            res.json(user);
        else
            res.json({ message: "nenhum registo encontrado" });

    });
};

exports.login = function(req, res) {
    User.findOne({ user: req.params.user, senha: req.params.password }, function(error, user) {
        if (user)
            res.json(user);
        else
            res.json({ message: "usuario e/ou senha incorretos" });

    });
};

exports.delete = function(req, res) {
    User.remove({ _id: req.params.user_id }, function(error) {
        if (error)
            res.send(error);

        res.json({ message: 'Usuário excluído com Sucesso! ' });
    });
};