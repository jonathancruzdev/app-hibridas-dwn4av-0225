const fs = require('fs/promises');

class Product {
    products = [];
    path = './data/products.json';

    constructor(products=[]){
        this.products = products;
    }

    async saveJSON(){
        const data = JSON.stringify( this.products, null, 2 );
        try {
            await fs.writeFile(this.path, data);
            console.log('Datos Guardados')
        } catch (error) {
            console.error('No se guardo el JSON ');
        }
    }
    async readJSON(){
        try {
            const data = await fs.readFile(this.path);
            return JSON.parse( data );
        } catch (error) {
            console.error('No se pudimos leer el JSON ');
        }
    }
    // Agrega un producto al array
    addProduct( product ){
        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        })
        this.saveJSON();
    }
    // Retorna la lista de productos
    async getProducts(){
        const products = await this.readJSON();
        return products;
    }
    async getProductById(id){
        const products = await this.readJSON();
        const res = products.find( item => item.id == id);
        return res ? res : 'Not found';
    }
    async deleteProductById(id){
        // leemos el JSON local
        this.products = await this.readJSON();
        // Buscamos el elemento
        const index = this.products.findIndex( product => product.id == id);
        // Eliminamos el elemento del array
        if( index == -1){
            return 'Not Found';
        }else {
            this.products.splice(index, 1);
            await this.saveJSON();
            return index;
        }
    }
}

module.exports = Product;