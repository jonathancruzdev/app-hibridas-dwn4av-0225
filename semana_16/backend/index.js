import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { createServer } from "http";
import { Server } from "socket.io";

import { postMessage, getMessages } from "./controllers/chatController.js";

import db from "./config/db.js";
dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use( cors() );
app.use( express.json())

// Creamos el servidor HTTP y Socket.io
const httpServer = createServer(app);

const io = new Server( httpServer, {
    cors: { origin: '*'}
})

io.on('connection', async (socket) => {
    console.log(`Cliente Socket conectado.... ${socket.id}`);
    // Enviamos los mensajes guardados al los clientes
    const mensajes = await getMessages();
    console.log({mensajes})
    socket.emit('mensajes_guardados', mensajes);

    // Recibe un mensaje de un cliente y lo guarda en la base de datos
    socket.on('mensaje', async (data) => {
        const mensaje = {
            user: data.user,
            body: data.body
        }
        const message = await postMessage( mensaje);
        console.log( message)
        io.emit('mensaje', message);
    })

    socket.on('disconnect', () => {
        console.log(`Cliente Socket desconectado ${socket.id}`);
    })
});

app.get('/', (req, res) => {
    res.send('<h1>Servidor Socket </h1>');
})


httpServer.listen( PORT,  () => {
    console.log(`Servidor en el puerto ${PORT}`)
})