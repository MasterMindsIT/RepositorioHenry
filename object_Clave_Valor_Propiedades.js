//El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. 
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);



//El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

//acceder a clave y valor por searado
var mundo = {oceanos:7 , paises: 195, continentes:5};
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }



 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueno: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    }
 };
 mascota.info();

 const Employee = {
    firstname: 'John',
    lastname: 'Doe',
  };
  
  console.log(Employee.firstname);
  // Expected output: "John"
  
  delete Employee.firstname;
  console.log(Employee);