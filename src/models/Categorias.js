const db = require('../database');
const { DataTypes } = require('sequelize');

const Categorias = db.define('Categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    imagem: {
        type: DataTypes.STRING,
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
        key:'id',        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'categorias'
});

module.exports = Categorias;