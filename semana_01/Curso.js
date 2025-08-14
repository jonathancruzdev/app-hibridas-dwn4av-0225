class Curso {
    // Atributo
    nombre = "";
    carrera = "";
    estudiates = [];

    constructor(nombre, carrera, estudiates=[]){
        this.nombre = nombre;
        this.carrera = carrera;
        this.estudiates = estudiates;
    }
    // Métodos
    retornarDatos(){
        return `Nombre: ${this.nombre} | Carrera ${this.carrera} | Inscriptos ${this.estudiates.length}`;
    }
    agregarEstudiantes(estudiate){
        this.estudiates.push( estudiate );
    }
    obtenerEstudiantes(){
        return this.estudiates;
    }

}
//const key = '123';
module.exports = Curso;