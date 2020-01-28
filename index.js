const express = require('express')
const connect = require('./src/connection/db');
const Routes = require('./src/routes');
const bodyParser = require('body-parser');
const app = express();
const port = 3500;
const User = require('./src/model/userModel');

app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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

connect.Redis.on('error', function (err, res){
    if(err){

        console.log('Error ' + err)
    }else if(res){

        console.log("Redis :: Connected")
    }
})
// connect.Redis.on()
// .then(()=>{ console.log("Redis :: Connected")})
// .catch(err => console.log("Redis :: Disconnected" + err))

// connect.Redis.on((err, res) => {
//     if(err)
//         console.log("Redis :: Disconnected");
//     if(res)
//         console.log("Redis :: Connected")
// })