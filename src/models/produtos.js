const db = require('../database');
const { DataTypes } = require('sequelize');

const Produtos = db.define('Produtos', {
    id_Produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    imagem: {
        type: DataTypes.STRING,
    },
    composicao: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'produtos'
});

module.exports = Produtos;