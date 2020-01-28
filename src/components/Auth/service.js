const userModel = require('./../../model/userModel');
const OsModel = require('./../../model/osModel');
const connect = require('../../connection/db');


OsModel.methods(["get", "post", "put", "delete"]);


const AuthService = {

    async getAllUsers(){
        return await userModel.User.findAll()
    },

    async createUser(body){
     const signup = await userModel.User.create({
            name: body.name,
            email: body.email,
            type: body.type
        });

        return signup;
    },

    async getByEmail(body){
        return await userModel.User.findAll({where: {email: body.email}});
    },

    async getByName(body){
        return await userModel.User.findAll({where: {name: body}});
    },

    async deleteUser (body){
        return await userModel.User.destroy({where: {email: body.email}});

    },

    async createOs(body){

    
        const getid = await this.getByName(body.employee); 
        const getid2 = await this.getByName(body.requester); 

        var time = new Date('DD,MM,YYYY');
        console.log(time)
        var data = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`;
        var dataf = `${time.getDate() + 5}/${time.getMonth()+1}/${time.getFullYear()}`;  

        const Os = new OsModel({
            ide: getid[0].id,
            idr: getid2[0].id,
            employee: body.employee,
            requester: body.requester,
            text: body.text,
            date: data,
            finalDate: dataf
        })

        
        
        
        Os.save((err, user) => {
            if(err)
            return err
            if(user)
            return user
        });

        connect.Redis.lpush("os", JSON.stringify(Os));
        console.log(connect.Redis.lrange("os", 0,-1))

    },

    async getOs(body){
        return await OsModel.find({ide: body});
    }


}


module.exports = AuthService;