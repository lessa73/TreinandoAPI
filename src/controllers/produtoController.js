const res = require("express/lib/response");

const produtoController = {
    listarProduto: (req, res) => {
        res.json([{name: 'produto 1'}, {name: 'produto 2'}])
    },

    cadastrarProduto(req, res) {
        console.log(req.body)
        res.json('Produto cadastrado com sucesso')
    },    
};


module.exports = produtoController;