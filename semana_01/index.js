const Curso = require('./Curso.js');
const Alumno = require('./Alumno.js');
/*
let mensaje = "Hola Mundo";
console.log(mensaje);
*/

const c1 = new Curso('Aplicaciones Híbridas', 'DW');
c1.agregarEstudiantes({ nombre: 'Lisa', email: 'lisa@gamil.com'});
c1.agregarEstudiantes({ nombre: 'Valeria', email: 'valeria@gamil.com'});
c1.agregarEstudiantes({ nombre: 'Tomas', email: 'tomas@gamil.com'});

const datos = c1.retornarDatos();
const lista = c1.obtenerEstudiantes();
//console.log(datos);
//console.table(lista);

const a1 = new Alumno('Sofia', 'Ruiz', 27, 'DW');
console.log( a1.obtenerCarrera() );
console.log( a1.obtenerDatos() );
a1.modificarEdad(30);
console.log(`La edad es ${a1.retornarEdad()}`);

a1.agregarMateria('Aplicaciones Híbridas')
a1.agregarMateria('Aplicaciones Web Progresivas');
a1.agregarMateria('Aplicaciones para dispositivos Moviles');
a1.agregarMateria('Lógica de programación');


/* const save = async () => {
    const cantidad = await a1.guardarMaterias()
    console.log({cantidad});
}

save();
 */
a1.guardarMaterias().then( (r) => {
    console.log('Materias guardadas ', r)
})

/*  async function guardarMaterias(){
    await a1.agregarMateria('Aplicaciones Híbridas')
    await a1.agregarMateria('Aplicaciones Web Progresivas');
    await a1.agregarMateria('Aplicaciones para dispositivos Moviles');
}

guardarMaterias();
 */
/* 
guardarMaterias().then( (r) => {
    console.log('Guardado')
    const data = a1.obtenerMaterias();
    console.table(data);

} )
 */
