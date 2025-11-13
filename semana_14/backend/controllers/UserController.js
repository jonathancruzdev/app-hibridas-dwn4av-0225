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

const getUserById = async( req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findById( id );
        if( !result) {
            return res.status(404).json( { msg: 'No se encontro el usuario', data: {}})
        }
        res.status(200).json({msg: 'ok', data: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Tenemos un error en el servidor'});
    }
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
    await user.save();
    res.status(202).json({
        msg: 'User Registrado', 
        data: {_id: user._id, fecha: user.created } 
    });
}

const deleteUser = async( req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findByIdAndDelete( id );
        if( !result) {
            return res.status(404).json( { msg: 'No se encontro el usuario', data: {}})
        }
        res.status(200).json({msg: 'Usuario eliminado'})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Tenemos un error en el servidor'});
    }
}

const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await User.findOne({email});
        if(!usuario){
            return res.status(404).json({msg:'El email no existe'});
        }
        const status = await bcrypt.compare(password, usuario.password);
        if( !status){
            return res.status(404).json({msg: 'Clave invalida'});
        }
        const payload = {
            id: usuario._id,
            name: usuario.name,
            rol: usuario.rol
        }
        const jwt = jsonwebtoken.sign( payload, SECRET_KEY, { expiresIn: '1h'} );
        res.json({msg: 'Credenciales correctas', data: jwt});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Tenemos un error en el servidor'});
    }
}

export { getUsers, getUserById, postUser, deleteUser, login}