const productRouter = require('./productRouter.js');
const userRouter = require('./userRouter.js');

const routerAPI = (app) =>{
    // Definimos los endPoints
    app.use('/api/users', userRouter);
    app.use('/api/products', productRouter);
}

module.exports = routerAPI;