const Product = require('./Product');

const model = new Product();

model.addProduct ( {
    name: 'Teclado dos',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});
/* 
model.addProduct ( {
    name: 'Mouse',
    description: 'Mouse',
    price: 15000,
    stock: 20
}); */

const mostarProductos = async () => {
    const products = await model.getProducts();
    console.log('Con Asyn Await');
    console.table(products);
}

mostarProductos();

model.getProducts().then( data => {
    console.log('Con Promesa');
    console.table(data)
})

