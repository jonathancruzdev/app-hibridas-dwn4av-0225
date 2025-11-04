import taskRouter from './taskRoute.js'
import userRouter from './userRoute.js'

const routerAPI = (app) =>{
    app.use('/api/tasks', taskRouter);
    app.use('/api/users', userRouter);
}

export default routerAPI;