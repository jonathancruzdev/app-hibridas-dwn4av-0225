
const postUser =  async ( req, res ) => {
    try {
        const { name, email, password } = req.body;
        if( !name || !email || !password ){
            response.status(400).json({ msg: 'Faltan campos'})
            return;
        }

        const id = crypto.randomUUID();
        res.status(200).json({ msg: 'ok', id });


    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'No se pudo guardar el usuario'});
        
    }
}

const getUsers =  async ( req, res ) => {
    try {
        const users = [
            { id:1, name: "Jonathan", email: "jonathan@gamil.com"},
            { id:2, name: "Josefina", email: "josefina@gamil.com"},
            { id:3, name: "Julieta", email: "julieta@gamil.com"},
        ];

        res.status(200).json({ msg: 'ok', data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'No se pudo obtener los usuarios'})
    }
}

export { postUser, getUsers }