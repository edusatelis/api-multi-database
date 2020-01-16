const express = require('express');
const authRouter = require('./Auth/AuthRoute')

function init(app){
    const router = express.Router();

    app.use('/open',authRouter );

    app.use((req, res, next) => {
        res.send("API SEQUELIZE v0.1");
    });

    app.use(router);
}

module.exports = { init }