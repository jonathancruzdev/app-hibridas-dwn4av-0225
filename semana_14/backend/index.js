import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./config/db.js";
import routerAPI from "./routes/index.js";
dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use( cors() );
app.use( express.json())
app.use('/',express.static('public'));


routerAPI(app);



app.listen( PORT, () => console.log(`Servidor en el puerto ${PORT}`))