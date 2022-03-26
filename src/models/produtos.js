const db = require('../database');
const { DataTypes } = require('sequelize');

const Produtos = db.define('Produtos', {
    id_Produto: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Datatype.STRING,
    },
    descricao: {
        type: Datatype.STRING,
    },
    imagem: {
        type: Datatype.STRING,
    },
    composicao: {
        type: Datatype.STRING,
    },
    createdAt: {
        type: Datatype.DATE,
    },
    updatedAt: {
        type: Datatype.DATE,
    },
},
{
    tableName: 'produtos'
});