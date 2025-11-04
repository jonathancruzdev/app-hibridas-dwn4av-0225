import bcrypt from "bcrypt"
import dotenv from "dotenv"
import User from "../models/UserModel.js";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const getUsers = async ( req, res) => {
    const users = await User.find();
    res.status(200).json({msg:'ok', data: users});
}

const postUser = async(req, res) => {
    const { name, email, password } = req.body;
    if( !name) {
        res.status(400).json({msg: 'Falta el nombre'});
    }

    if( !email) {
        res.status(400).json({msg: 'Falta el Email'});
    }

    if( !password) {
        res.status(400).json({msg: 'Falta el Password'});
    }

    const passwordHash = await bcrypt.hash( password, 10);

    const user = new User( { name, email, password: passwordHash });
    console.log( {user});
    await user.save();
    res.status(202).json({
        msg: 'User Registrado', 
        data: {_id: user._id, fecha: user.created } 
    });


}

const auth = async(req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await User.findOne({email});
        if(!usuario){
            res.status(404).json({msg:'El email no existe'});
            return;
        }
        const status = await bcrypt.compare(password, usuario.password);
        if( !status){
            res.status(404).json({msg: 'Clave invalida'});
            return;
        }
        const payload = {
            id: usuario._id,
            name: usuario.name
        }
        const jwt = jsonwebtoken.sign( payload, SECRET_KEY, { expiresIn: '1h'} );
        res.json({msg: 'Credenciales correctas', data: jwt});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Tenemos un error en el servidor'});
    }
}

export { getUsers, postUser, auth}