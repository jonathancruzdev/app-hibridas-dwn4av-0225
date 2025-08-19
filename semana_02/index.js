const Product = require('./Product.js');
const model = new Product();
model.getProducts().then( lista => {
    console.table(lista);
})

model.deleteProductById('8d0ffe35-d600-45b3-a10a-fb0597791bf4').then( product => {
    console.log(product);
})


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