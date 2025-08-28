const express = require('express');
const dotenv = require('dotenv');
const routerAPI = require('./routes');
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use( express.json() );

app.get('/', ( request, response) => {
    response.send(`
                <h1>Soy una API 👋</h1>
                <ul>
                    <li><a href="/api/products">Productos</a></li>
                </ul>
            `);
})

routerAPI(app);

console.log('API REST');

app.listen( port, () => {
    console.log(`Servidor Web en el puerto ${port}`);
})