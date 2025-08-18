const fs = require('fs/promises');
const path = './data/products.json';

class Product{
    products = [];
    constructor(products=[]){
        this.products = products
    }
/*     saveJSON2(){
        const data = JSON.stringify( this.products, null, 2 );
        fs.writeFile(path, data).then( (r)=> {
            console.log('Archivo guardado')
        }).catch( (error) => console.error(error))
    } */
    async saveJSON(){
        const data = JSON.stringify( this.products, null, 2);
        await  fs.writeFile(path, data);
    }
    async readJSON(){
        const data = await fs.readFile(path);
        const products = JSON.parse(data);
        return products;
    }
    addProduct(product){
        // Validar datos!
        const id = crypto.randomUUID();
        product.id = id;
        this.products.push(product);
        this.saveJSON();
    }
    async getProducts(){
        this.products = await this.readJSON();
        return this.products
    }

    getProductById(id){
        return
    }
}

module.exports = Product;