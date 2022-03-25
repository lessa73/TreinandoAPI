const express = require( 'express');
const routes = require('./routes');

const db = require('./database/index.js');

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(3000, () => { console.log('listening on port 3000')});