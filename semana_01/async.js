const fs = require('fs/promises'); 
const path = "README.md";
let texto = '# Semana 01 - Node Basico';

// async function lectura(path){ }

const lectura = async (path) => {
    try {
        const data = await fs.readFile(path);
        console.log('Lectura de archivo');
        console.log(data.toString());

        await fs.writeFile(path, texto);
        console.log('Escritura correcta'); 
    } catch (error) {
        console.log(`Tenemos un error ${error}`);
    }

}




lectura(path);