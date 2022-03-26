const CategoriaProduto = require('./CategoriaProduto');
const Categorias = require('./Categorias');
const Produtos = require('./Produtos');

Produtos.belongsTo(Categorias, {
    foreingkey: 'categorias_id',
});

Categorias.hasMany(Produtos, {
    foreingKey: 'categorias',
});

Produtos.belongsToMany(Categorias, {
    foreingKey: 'produto_id',
    through: CategoriaProduto,
});
Categorias.belongsToMany(Produtos, {
    foreingKey: 'categoria_id',
    through: CategoriaProduto,
});

module.exports = {
    Categorias,
    Produtos    
}