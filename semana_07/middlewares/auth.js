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

    try {
        const decoded = jsonwebtoken.verify( jwt, SECRET_KEY );
        req.body.userId = decoded.id;
        return next();
    } catch (error) {
        return res.status(401).json({ msg: "Token invalido"});
    }
}

export { validarToken}