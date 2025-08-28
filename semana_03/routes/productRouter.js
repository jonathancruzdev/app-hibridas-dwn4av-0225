const express = require('express');
const Product = require('../model/Product');
const modelProduct = new Product();
const router = express.Router();

router.get('/', async (request, response) =>{
    try {
        const list = await modelProduct.getProducts();
        response.json( list);
    } catch (error) {
        console.error(error)
        response.status(500).json({ msg: 'Tenemos un error'});
    }
})

router.get('/:id', async (request, response) =>{
    const { id } = request.params;
    const data = await modelProduct.getProductById(id);
    if( data == 'Not found'){
        response.status(404).json({ msg: 'Producto no encontrado'});
        return;
    } 
    //console.log(id, typeof(id));
    response.json( data);
})

router.post('/', async (request, response) =>{
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

router.delete('/:id', async (request, response) =>{
    const { id } = request.params;
    const data = await model.deleteProductById(id);
    if( data == 'Not Found'){
        response.status(404).json({ msg: 'Producto no encontrado'});
        return;
    } 
    response.json( data);
})

router.put('/:id', async (request, response) =>{
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

module.exports = router;