const Product = require('./Product.js');
const chalk = require('chalk');
const express = require('express');
const port = 8080;

const server = express();
const model = new Product();
console.log( chalk.green( 'API REST') );
// console.log( chalk.red( 'ERROR') );

const rutaRaiz = ( request, response ) => {
    response.send('Hola desde Express 👋');
}

server.get( '/', rutaRaiz);

server.get('/products', async ( request, response) => {
    ///model.getProducts().then( list => { response.json(list); })
    const list = await model.getProducts();
    console.table(list);
    response.json(list);
})

server.get('/products/:id', async ( request, response) => {
    const id = request.params.id;
    const data = await model.getProductById(id);
    console.log(data);
    response.json(data);
})


server.get('/users', ( request, response) => {
    response.send('Lista de usuarios')
})


server.listen( port, () => {
    console.log( chalk.green(`Servidor en el puerto ${port}`));
})