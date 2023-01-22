//variable local
let mi_variable: string= 'Prueba';
let numero:number=15;
let verdadero:boolean= true;
let lo_quesea:any='cualquier cosa'

//constantes
const nombre:string='Matias'

//reasignando
mi_variable='hola mundo';

console.log(mi_variable,numero,verdadero);

//arrays
let persona:string[]=['Matias','Camila','Gabriel','Lucia']
let persona2:Array<string>=['Matias','Camila','Gabriel','Lucia']

let div_personas:HTMLElement | null = document.querySelector('#personas')

persona.map( (persona) =>{
    div_personas.innerHTML+= `<li>${persona}</li>`
});


