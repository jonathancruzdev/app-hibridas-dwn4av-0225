const http = require('http');
const Product = require('./Product.js');
const model = new Product();
model.getProducts().then( lista => {
    //console.table(lista);
})

const port = 3000;
const server = http.createServer( (request, response) => {
    const url = request.url;
    const method = request.method;
    
    console.log(url, method);
    if( url == '/'){
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1>Hola desde Node!</h1>');
    } else if ( url == '/users'){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('JSON');
    } else if ( url == '/products'){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('Productos');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>404 | Not Found</h1>');
    }

});

server.listen( port, () => {
    console.log(`Servidor Web en el puerto ${port}`);
})
/* model.deleteProductById('8d0ffe35-d600-45b3-a10a-fb0597791bf4').then( product => {
    console.log(product);
}) */


/* model.addProduct({
    name: 'Teclado Mec',
    description: 'Teclado RGB',
    price: 15000,
    stock: 5
})
model.addProduct({
    name: 'Mouse',
    description: 'Gamer',
    price: 12000,
    stock: 20
})
model.addProduct({
    name: 'Web Cam',
    description: 'HD',
    price: 30000,
    stock: 50
}) */