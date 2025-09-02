import userRouter from './userRouter.js';

const routerAPI = ( app) =>{
    app.use('/api/users', userRouter);
}

export default routerAPI;