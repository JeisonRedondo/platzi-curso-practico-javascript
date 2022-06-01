// Código del Cuadrado
console.group("Código del Cuadrado");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

function perimetroCuadrado (lado){
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`);
function areaCuadrado (lado){
    return lado**2;
}

console.groupEnd();

// Código del Triangulo
console.group("Código del Triangulo")

// const ladoTriangulo1 = 6;
// const ladotriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladotriangulo2} cm, ${baseTriangulo} cm`);
// console.log(`La altura del triangulo es de: ${alturaTriangulo}`);

// const perimetroTriangulo = ladoTriangulo1 + ladotriangulo2 + baseTriangulo ;
// console.log(`El perimetro del triaungulo es: ${perimetroTriangulo} cm`);

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
// console.log(`El area del triangulo es: ${areaTriangulo} cm^2`);

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Código del Circulo
console.group("Código del Circulo");
// Radio
// const radioCirculo = 4 ;
// console.log(`El radio del circulo es: ${radioCirculo} cm`);
// Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es: ${diametroCirculo} cm`);

function diametroCirculo (radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);
// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log(`El perimetro es: ${perimetroCirculo} cm`);
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI ;
}
// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El área del circulo es: ${areaCirculo} cm^2`);
function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();