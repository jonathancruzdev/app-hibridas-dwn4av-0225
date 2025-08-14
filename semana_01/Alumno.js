const fs = require('fs/promises');
class Alumno {
    nombre = "";
    apellido = "";
    edad = "";
    carrera = "";
    materias = [];
    path = "data/materias.json";
    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias =  materias;
    }
    obtenerCarrera(){
        return this.carrera;
    }
    obtenerDatos(){
        return `Nombre ${this.nombre} | Apellido ${this.apellido}`;
    }
    modificarEdad(edad){
        this.edad = edad;
    }
    async guardarMaterias(){
        const data = JSON.stringify(this.materias, null, 2);
        await fs.writeFile(this.path, data);
        console.log(this.materias.length)
        return `Materias guardadas ${this.materias.length}`;
    }
    agregarMateria(materia){
        const id = crypto.randomUUID();
        this.materias.push({
            id: id,
            nombre: materia
        });
    }
    obtenerMaterias(){
        return this.materias;
    }
    retornarEdad(){
        return this.edad;
    }
}

module.exports = Alumno;
