const isAdmin = ( req, res, next) => {
    if( req.user?.rol !== 'admin' ){
        return res.status(403).json({msg: 'Acceso denagado, solo Admin'});
    }
    next();
}
export default isAdmin;