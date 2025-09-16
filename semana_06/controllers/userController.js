import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const salt = 10;

const auth = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        if(  !email || !password ){
            res.status(400).json({ msg: 'Faltan campos'})
            return;
        }

        const userData = await UserModel.findOne({email});
        
        if( !userData){
            res.status(404).json({ msg: 'El email no existe' });
            return;
        }

        const isPasswordValid = await bcrypt.compare( password, userData.password);

        if( !isPasswordValid){
            res.status(404).json({msg: 'Contraseña Invalida'});
            return;
        }

        // Generamos el jwt
        const payload = {
            id: userData._id,
            email: userData.email
        }

        const jwt = jsonwebtoken.sign( payload, SECRET_KEY, { expiresIn: '2h'} );

        res.json({ msg: 'Credenciales Correctas', jwt});

    } catch (error) {
        res.status(500).json({ msg: 'Tenemos un error en el Servidor'});
        console.error(error);
        
    }

}



const postUser =  async ( req, res ) => {
    try {
        const { name, email, password } = req.body;
        if( !name || !email || !password ){
            res.status(400).json({ msg: 'Faltan campos'})
            return;
        }

        const userData = await UserModel.findOne({email});

        if( userData){
            res.status(400).json({ msg: 'El email ya existe' });
            return;
        }
        console.log( userData);

        const hash = await bcrypt.hash(password, salt );
        
        // Verificar si existe el email en db
        const user = new UserModel({ name, email, password:hash });
        const data = await user.save();
        res.status(201).json({ msg: 'ok', data });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'No se pudo guardar el usuario'});
    }
}

const getUsers =  async ( req, res ) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ msg: 'ok', data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'No se pudo obtener los usuarios'})
    }
}

const getUserById = async ( req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        if( user){
            res.status(200).json({msg:'Usuario por ID ', data: user});
        } else {
            res.status(404).json({msg:'No se encontro el usuario', data: {}});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});

    }
}

const deleteUserById = async ( req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndDelete(id);
        if( user){
            res.status(200).json({msg:'Usuario Eliminado ', data: user._id});
        } else {
            res.status(404).json({msg:'No se encontro el usuario', data: {}});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }

}

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, password } = req.body;
        if( !name || !password ){
            res.status(400).json({ msg: 'Faltan campos obligatorios'})
            return;
        }

        const hash = await bcrypt.hash(password, salt );

        const user = await UserModel.findByIdAndUpdate(id, {name, password: hash});
        res.status(202).json({msg: 'Usuario Actualizado'});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Tenemos un error :( en el servidor ', data: {}});
    }
}
export { postUser, getUsers, getUserById, deleteUserById, updateUserById, auth }