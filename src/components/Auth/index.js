const authSrv = require('./service')

async function getAll(req, res, next){
    try {
        const getUsers = await authSrv.getAllUsers();
        
        res.status(200).json(getUsers);
    } catch (error) {
        res.status(400).json(error.message);
    }
}


async function signup(req, res, next){
    try {
        const create = await authSrv.createUser(req.body);
        if(create)
        res.status(200).json("Usuario Criado com Sucesso  ");
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function getByEmail(req, res, next){
    try {
        const find = await authSrv.getByEmail(req.body);
        res.status(200).json(find);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function deleteUser(req, res, next){
    try {
        const deleteUser = await authSrv.deleteUser(req.body);
        res.status(200).json("usuario deletado com sucesso " + deleteUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function createOs(req, res, next){
    try {
        const newOs = await authSrv.createOs(req.body);
        res.status(200).json("Ordem de Serviço cadastrada com sucesso " + newOs);

    
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = {
    getAll,
    signup, 
    getByEmail, 
    deleteUser,
    createOs
}