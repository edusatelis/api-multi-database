const express = require('express')
const connect = require('./src/connection/db');
const Routes = require('./src/routes');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const User = require('./src/model/userModel');

app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());

Routes.init(app);

app.listen(port, ()=>{
    console.log(`Backend is Running in port: ${port}`);
});

connect.dbpsql.authenticate()
.then(()=>{console.log('Postgress :: Connected')})
.catch(err => { console.error('Postgress :: Disconnected', err)});

connect.dbmongo
.then(()=>{console.log('MongoDB :: Connected')})
.catch(err => console.log('MongoDB :: Disconnected '+ err));