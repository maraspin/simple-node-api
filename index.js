/* REQUIRES */
const express = require('express');
let bodyParser = require('body-parser');
const serverConfig = require('./app/configs/server.config');
const noteRoute = require('./app/routes/note.routes');


/* APP USE CASES*/
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* ROUTING */
app.use('/', router);
app.use('/people', noteRoute);

app.listen(serverConfig.serverPort, () => {
    console.log('We are live on ' + serverConfig.serverPort);
});
