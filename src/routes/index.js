const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hello World!')
});

routes.get('/produto/:id/categoria', (req, res) => {
    console.log(req.params)
    res.send('Hello World')
});

routes.post( '/cadastrar', (req, res) => {
    console.log(req.body)
    res.json(req.body)
});

module.exports = routes;