import express from "express";
import dotenv from "dotenv"
import routerAPI from "./routers/index.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(  express.json() );
app.use('/', express.static('public'));
//app.use('/statc', express.static('public'))


app.use( (req, res, next) => {
    console.log('Estoy interceptando todo 🚨');
    next();
})

app.get('/', (req, res) => {
    res.send('<h1>API REST </h1>');
})

app.get('/api/users', (req, res) => {
    const users = [
        { id:1, name: "Jonathan", email: "jonathan@gamil.com"},
        { id:2, name: "Josefina", email: "josefina@gamil.com"},
        { id:3, name: "Julieta", email: "julieta@gamil.com"},
    ];
    res.status(200).json( users);
})

routerAPI(app);

app.listen( PORT, () => {
    console.log('🟢 API en el puerto ' + PORT);

})