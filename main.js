//variable local
var mi_variable = 'Prueba';
var numero = 15;
var verdadero = true;
var lo_quesea = 'cualquier cosa';
//constantes
var nombre = 'Matias';
//reasignando
mi_variable = 'hola mundo';
console.log(mi_variable, numero, verdadero);
//arrays
var persona = ['Matias', 'Camila', 'Gabriel', 'Lucia'];
var persona2 = ['Matias', 'Camila', 'Gabriel', 'Lucia'];
var div_personas = document.querySelector('#personas');
persona.map(function (persona) {
    div_personas.innerHTML += "<li>".concat(persona, "</li>");
});
