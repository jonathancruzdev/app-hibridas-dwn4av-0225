import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const validarToken = ( req, res, next) => {
    console.log('[ Validador ] : Estoy interceptando todo 🚨');
    // leemos el Token
    const token = req.headers.authorization;
    if( !token){
        res.status(401).json({ msg: "No se paso el JWT"});
        return;
    }

    const jwt = token.split(' ')[1];
    console.log(jwt);

    jsonwebtoken.verify(jwt, SECRET_KEY, ( error, decoded) => {
        if( error){
            res.status(403).json({ msg: "JWT Invalido"});
            return;
        }

        req.body.userId = decoded.id;
        console.log( {decoded});
    })

    next();
}

export { validarToken}