const userModel = require('./../../model/userModel');
const OsModel = require('./../../model/osModel');

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

    async deleteUser (body){
        return await userModel.User.destroy({where: {email: body.email}});

    },

    async createOs(body){
        const Os = new OsModel({
            employee: body.employee,
            requester: body.requester,
            text: body.text
        })

        Os.save((err, user) => {
            if(err)
                return err
            if(user)
                return user
        });
    }
}


module.exports = AuthService;