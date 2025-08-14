const fs = require('fs'); 
const path = "README.md";

fs.readFile(path, (err, data) =>{
    if( err) {
        console.error('Ocurrió un error');
    }else {
        console.log('Lectura de archivo')
        const texto = '# Semana 01 - Node Basico';
        fs.writeFile(path, texto, function(err){
            if(err){
                console.error('Ocurrió un error');
            } else {
                console.log('Escritura correcta')
            }
        })
        console.log(data.toString());
    }
});






