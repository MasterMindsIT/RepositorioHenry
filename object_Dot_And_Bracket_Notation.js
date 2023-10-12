// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

//uso y diferencia

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos){
    comidas.propUno = ['Coke','Burguer'];
    comidas['propDos'] = ['Banana','Onion'];
};
diferenciaDeNotaciones('noSaludable','saludables');
console.log(comidas);  //salida con el mismo nombre que las nombradas de forma interna

var comidas1 = {};
var diferenciaDeNotaciones = function(propUno, propDos){
    comidas1[propUno] = ['Coke','Burguer'];
    comidas1[propDos] = ['Banana','Onion'];
};
diferenciaDeNotaciones('noSaludable','saludables');
console.log(comidas1); //salida con el mismo nombre que las nombradas de forma externa