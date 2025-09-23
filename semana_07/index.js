import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import routerAPI from "./routers/index.js";
dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

// Conexión con la DB
mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on('error', () => { console.error('No nos podemos conectar con la DB 🔴')});
db.once('open', () => { console.info('Conexión correcta con la DB 🟢')});


const app = express();

app.use(  express.json() );
app.use('/', express.static('public'));

/* app.use( (req, res, next) => {
    console.log('Estoy interceptando todo 🚨');
    next();
})
 */
app.get('/', (req, res) => {
    res.send('<h1>API REST </h1>');
})

routerAPI(app);

app.listen( PORT, () => {
    console.log('🟢 API en el puerto ' + PORT);

})