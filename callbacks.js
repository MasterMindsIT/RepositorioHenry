//ejemplo 1
function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);

 //ejemplo2
 var devuelvoFrase = function (comida){
    return "Hoy comeré : " + comida;
 };

 var hablar = function(comida, unaFuncion){
    return unaFuncion(comida);
 };

 var fraseComida = hablar("Churrasco", devuelvoFrase);
 console.log(fraseComida);

