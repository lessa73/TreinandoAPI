const { Produtos} = require('../models');

const produtoController = {
    listarProduto: async (req, res) => {

        const listaDeProdutos = await Produtos.findAll({
            include: Categorias
        });

        res.json(listaDeProdutos);
    },

    async cadastrarProduto(req, res) {
        const { nome, descricao, imagem, categoria_id } = req.body;

        const novoProduto = await Produtos.create({
            nome,
            descricao,
            imagem,
            categoria_id,
        });

        res.status(201).json(novoProduto);
    },    

    async deletarProduto(req, res) {
        try {
        const { id } = req.params;

        await Produtos.destroy({
            where: {
                id,
            }
        });

        res.json(204);
    } catch (error) {
        return res.status(500).json('Ocorreu algum problema');
    }
    },

    async atualizarProduto( req, res ) {
        const { id } = req.params;
        const { nome, descricao, imagem } = req.body;

        if (!id) return res.status(400).json('id não enviado');

        const produtoAtualizado = await Produtos.update({
          nome,
          descricao,
          imagem,  
        },
        {
            where: {
                id,
            }
        });

        res.json('Produto atualizado');
    },
};


module.exports = produtoController;