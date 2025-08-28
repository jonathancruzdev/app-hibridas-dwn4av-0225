const User = require('../model/User');
const userModel = new User();

const addUser = async (request, response) =>{
    try {
        const user = request.body;
        const { name, email, password } = user;
        if( !name || !email || !password ){
            response.status(400).json({ msg: 'Faltan campos'})
            return;
        }
        const id = await userModel.addUser( user);
        response.status(200).json({ msg: 'Usuario guardado', id})
    } catch (error) {
        console.error(error)
        response.status(500).json({ msg: 'Tenemos un error'});
    }
}

const getUsers = async ( request, response) => {
    try {
        const list = await userModel.getUsers();
        response.json( list );
    } catch (error) {
        console.error(error)
        response.status(500).json({ msg: 'Tenemos un error'});
    }
}

module.exports = { getUsers, addUser };