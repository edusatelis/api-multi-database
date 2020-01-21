const db = require('./../connection/db');

const User = db.dbpsql.define('user', {
    name: {type: db.Sequelize.STRING, allowNull: false},
    email: { type: db.Sequelize.STRING, allowNull: false},
    type: { type: db.Sequelize.INTEGER, allowNull: false }
});

//CRIAR TABELA

// User.sync({force: true});

module.exports = {User};