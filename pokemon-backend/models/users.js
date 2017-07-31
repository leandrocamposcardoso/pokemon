var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nome: {
        type: String,
        unique: true,
        required: true
    },
    login: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);