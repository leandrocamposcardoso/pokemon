var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    treinador: {
        type: String,
        required: true
    },
    nome: {
        type: String
    },
    tipo: {
        type: String
    },
    grupo: {
        type: String
    },
    habilidades: {
        type: []
    }
});

module.exports = mongoose.model('Pokemons', PokemonSchema);