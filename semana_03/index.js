const Product = require('./model/Product.js');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use( express.json() );
const model = new Product();

app.get('/', ( request, response) => {
    response.send(`
                <h1>Soy una API 👋</h1>
                <ul>
                    <li><a href="/api/products">Productos</a></li>
                </ul>
            `);
})

app.get('/api/products', async (request, response) =>{
    try {
        const list = await model.getProducts();
        response.json( list);
    } catch (error) {
        console.error(error)
        response.status(500).json({ msg: 'Tenemos un error'});
    }
})

app.get('/api/products/:id', async (request, response) =>{
    const { id } = request.params;
    const data = await model.getProductById(id);
    if( data == 'Not found'){
        response.status(404).json({ msg: 'Producto no encontrado'});
        return;
    } 
    //console.log(id, typeof(id));
    response.json( data);
})

app.post('/api/products', async (request, response) =>{
    try {
        const product = request.body;
        console.log(request.body);
        const { name, description, price, stock } = product;
        if( !name || !description || !price || !stock){
            response.status(400).json({ msg: 'Faltan campos'})
            return;
        }
        const id = await model.addProduct( product);
        response.status(200).json({ msg: 'Producto guardado', id})
    } catch (error) {
        console.error(error)
        response.status(500).json({ msg: 'Tenemos un error'});
    }
})

app.delete('/api/products/:id', async (request, response) =>{
    const { id } = request.params;
    const data = await model.deleteProductById(id);
    if( data == 'Not Found'){
        response.status(404).json({ msg: 'Producto no encontrado'});
        return;
    } 
    response.json( data);
})


app.put('/api/products/:id', async (request, response) =>{
    try {
        const { id } = request.params;
        const product = request.body;
        const { name, description, price, stock } = product;
        if( !name || !description || !price || !stock){
            response.status(400).json({ msg: 'Faltan campos'})
            return;
        }

    const data = await model.updateProductById(id, product);
    if( data == 'Not Found'){
        response.status(404).json({ msg: 'Producto no encontrado'});
        return;
    } 
    response.json( data);
    } catch (error) {
        response.status(500).json({ msg: 'Tenemos un error'});
        console.error(error);
    }
})

console.log('API REST');

app.listen( port, () => {
    console.log(`Servidor Web en el puerto ${port}`);
})