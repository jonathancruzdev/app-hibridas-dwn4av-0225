const fs = require('fs/promises');

class User {
    user = [];
    path = './data/users.json';

    constructor(users = []){
        this.users = users;
    }
    async saveJSON(){
        const data = JSON.stringify( this.users, null, 2 );
        try {
            await fs.writeFile(this.path, data);
            console.log('Datos Guardados')
        } catch (error) {
            console.error('No se guardo el JSON ');
        }
    }
    async readJSON(){
        const data = await fs.readFile(this.path);
        return JSON.parse( data );
    }
    async addUser( user ){
        this.users = await this.readJSON();
        const id = crypto.randomUUID();
        this.users.push({
            id: id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        this.saveJSON();
        return id;
    }
    async getUsers(){
        const users = await this.readJSON();
        return users;
    }
}

module.exports = User;