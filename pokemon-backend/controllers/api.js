exports.main = function(req, res) {
    res.send('API Rest- MongoDB NoSQL Backend<br />Usuarios<br /><br />\
    URL [/api/users] METHOD [GET] - Retorna todos os usuarios<br />\
    URL [/api/users] METHOD [POST] - Cria um usuario<br />\
    URL [/api/users/:id] METHOD [GET] - Retorna um usuario<br />\
    URL [/api/users/:id] METHOD [PUT] - Atualiza um usuario<br />\
    URL [/api/users/:id] METHOD [DELETE] - Exclui um usuario<br />\
    ').status(200);
}