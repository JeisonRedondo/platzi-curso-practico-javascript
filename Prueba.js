
// function persona (nombre, apellido, usuario, edad, correo, mayorEdad, dineroAhorrado, deudas ){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.usuario = usuario; 
//     this.edad = edad ;
//     this.correo = correo ;
//     this.mayorEdad = mayorEdad;
//     this.dineroAhorrado = dineroAhorrado;
//     this.deudas = deudas;
// }

// let persona1 = new persona("Jeison","Redondo","JeisonR",27,"Jeida16@yahoo,es",true,300000,50000);

// function hombreHonesto (persona){
//     var nombreCompleto = persona.nombre +" "+persona.apellido;
//     var dineroReal = persona.dineroAhorrado - persona.deudas ;

//     console.log(nombreCompleto);
//     console.log(dineroReal);
// }

// hombreHonesto(persona1);

// --------------------------Primera parte del código-----------------------

// const myName = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = myName + lastname;
// const nickname = "juandc";

// function meGustaLlamarme (completeName,nickname){
//     console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// };
// meGustaLlamarme(completeName, nickname);

// --------------------------Segunda Parte del código-----------------------
// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
// case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
// break;
// case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// break;
// case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// break;
// case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// break;
// }


// if(tipoDeSuscripcion == "Free"){
//        console.log("Solo puedes tomar los cursos gratis");
// }else if(tipoDeSuscripcion == "Basic"){
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }else if(tipoDeSuscripcion == "Expert"){
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }else if(tipoDeSuscripcion == "ExpertPlus"){
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }

// if(tipoDeSuscripcion == "Free"){
//        console.log("Solo puedes tomar los cursos gratis");
// }
// if(tipoDeSuscripcion == "Basic"){
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }
// if(tipoDeSuscripcion == "Expert"){
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }
// if(tipoDeSuscripcion == "ExpertPlus"){
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }
// const tipoDeSuscripcion = "Basic";

// const planesPlatzi = {
//        "Free":"Solo puedes tomar los cursos gratis",
//        "Basic":"Puedes tomar casi todos los cursos de Platzi durante un mes",
//        "Expert":"Puedes tomar casi todos los cursos de Platzi durante un año",
//        "ExpertPlus":"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
// }

// if (planesPlatzi.hasOwnProperty(tipoDeSuscripcion)){
//        console.log(planesPlatzi[tipoDeSuscripcion]);
// }

// var arreglo = Object.keys(planesPlatzi );
// console.log(arreglo[1]);
// console.log(planesPlatzi[llave]);

// --------------------------Tercera Parte del código-----------------------

// for (let i = 0; i < 5; i++) {
//        console.log("El valor de i es: " + i);
//}    

//    let i = 0;
//    while(i < 5){
//        console.log("El valor de i es: " + i);
//        i++;
//    }

// for (let i = 10; i >= 2; i--) {
//        console.log("El valor de i es: " + i);
//    }

//    let i = 10;
//    while(i >= 2){
//        console.log("El valor de i es: " + i);
//        i--;
//    }

// function alerta() 
// {
// var mensaje;
// var opcion = prompt("Introduzca su nombre:", "Aner Barrena");
 
// if (opcion == null || opcion == "") {
//         mensaje = "Has cancelado o introducido el nombre vacío";
//         } else {
//             mensaje = "Hola " + opcion;
//             }
//             document.getElementById("ejemplo").innerHTML = mensaje;
// }

function suma(){
       
       while(respuesta != "4"){

              var mensaje = "Aca falla";
              var respuesta = prompt("Introduzca la respuesta aqui:","7 tal vez.");
              if(respuesta == "4"){
                     window.alert("Perfecto.");
                    mensaje = "Lo has conseguido";
              }else {
                     respuesta = prompt("Sigue Intentando.");
              }
              document.getElementById("mensaje_usuario").innerHTML = mensaje;    
       }
       
}

// --------------------------Cuarta Parte del código-----------------------

let arrayNumbers = [1,2,3,4];

let stringslol = ["dfsdf","dsfef343444","3434"];

function arrayFirstValue (array){
       console.log(array[0]);
};

// arrayFirstValue(stringslol);

function arrayPrintAll (array){
       for (const part of array) {
              console.log(part);
       }
};

// arrayPrintAll(arrayNumbers);

function persona (nombre, apellido, usuario, edad, correo, mayorEdad, dineroAhorrado, deudas ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario; 
    this.edad = edad ;
    this.correo = correo ;
    this.mayorEdad = mayorEdad;
    this.dineroAhorrado = dineroAhorrado;
    this.deudas = deudas;
}

let persona1 = new persona("Jeison","Redondo","JeisonR",27,"Jeida16@yahoo,es",true,300000,50000);

function printAllElements(persona){
       var elementos = Object.keys(persona);
       for (const identificador of elementos) {
              console.log(identificador+": "+persona[identificador]);
       }
};

printAllElements(persona1);