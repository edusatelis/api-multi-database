const db = require('./../connection/db');

const User = db.dbpsql.define('user', {
    name: {type: db.Sequelize.STRING},
    email: { type: db.Sequelize.STRING},
    type: { type: db.Sequelize.INTEGER }
});

//CRIAR TABELA

// User.sync({force: true});

module.exports = {User};