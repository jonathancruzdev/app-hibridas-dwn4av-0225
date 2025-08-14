const Curso = require('./Curso.js');

let mensaje = "Hola Mundo";
console.log(mensaje);


const c1 = new Curso('Aplicaciones Híbridas', 'DW');
c1.agregarEstudiantes({ nombre: 'Lisa', email: 'lisa@gamil.com'});
c1.agregarEstudiantes({ nombre: 'Valeria', email: 'valeria@gamil.com'});
c1.agregarEstudiantes({ nombre: 'Tomas', email: 'tomas@gamil.com'});

const datos = c1.retornarDatos();
const lista = c1.obtenerEstudiantes();
console.log(datos);
console.table(lista);