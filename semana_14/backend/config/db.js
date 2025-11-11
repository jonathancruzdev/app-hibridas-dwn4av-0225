import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const URI_DB = process.env.URI_DB;
mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on('error', () => console.error('Error de conexión la Base de Datos'));
db.once('open', () => console.info('Conexión correcta con la Base de Datos'));

export default db
