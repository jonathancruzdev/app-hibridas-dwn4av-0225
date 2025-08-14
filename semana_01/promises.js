const fs = require('fs/promises'); 
const path = "README.mdd";
let texto = '# Semana 01 - Node Basico';

fs.readFile(path).then( (data) =>{
    console.log('Lectura de archivo');
    console.log(data.toString());
}).then( () => {
    fs.writeFile( path, texto).then( ()=> {
        console.log('Escritura correcta');
    })
}).catch ( (error) =>{
    console.error(error);
}); 



