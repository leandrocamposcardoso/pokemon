let express = require('express'),
    app = express();


//Json parse
const bodyParser = require('body-parser');
//Compressao resposta
const compression = require('compression');
//Adiconando rotas
const routes = require('./routes/routes');
//MongoDB
const mongoose = require('mongoose');
//Cors
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(compression())
routes(app);

if (process.argv.length <= 2) {
    console.log("Uso: node " + process.argv[1] + " <porta>");
    process.exit(-1);
} else {
    port = process.env.PORT || process.argv[2];
}




app.listen(port);
const dburl = 'mongodb://m4ster:m4ster@ds127983.mlab.com:27983/pokemongodb';
mongoose.connect(dburl, { useMongoClient: true })


console.log('Servidor rodando na porta [' + port + ']');