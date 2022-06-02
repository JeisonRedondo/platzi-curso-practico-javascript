// Código del Cuadrado
console.group("Código del Cuadrado");

function perimetroCuadrado (lado){
    return lado*4;
}

function areaCuadrado (lado){
    return lado**2;
}
console.groupEnd();

// Código del Triangulo
console.group("Código del Triangulo")

function perimetroTriangulo (lado1, lado2, base){
    return (Number(lado1) + Number(lado2) + Number(base));
}

function areaTriangulo (base, altura){
    return ((Number(base) * Number(altura))/2);
}
// areaTriangulo2 = (base, altura) => (Number(base)*Number(altura)/2);
console.groupEnd();

// Código del Circulo
console.group("Código del Circulo");

function diametroCirculo (radio){
    return (Number(radio))*2;
}

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

function perimetroCirculo (radio){
    const radioN = Number(radio);
    const diametro = diametroCirculo(radioN);
    return diametro * PI ;
}

function areaCirculo (radio){
    return (Number(radio) * Number(radio)) * PI;
}
console.groupEnd();


// Aqui interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("Input-Cuadrado"); 
    const value = parseFloat(input.value);
    const perimetro = perimetroCuadrado(value);

    alert(`El perimetro del cuadrado es: ${perimetro}`)
}
const squarePerimeter = () => {
    const side = Number(document.getElementById("Input-Cuadrado").value),
          perimeter = perimetroCuadrado(side);
          alert(`El perimetro del cuadrado es: ${perimeter}`)
}


function calcularÁreaCuadrado(){
    const input = document.getElementById("Input-Cuadrado"); 
    const value = parseInt(input.value);

    const area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area}`)
}

// Triangulo

function calcularPerimetroTriangulo(){
    
    const lado1 = document.getElementById("Input-Triangulo_lado1").value;
     
    const lado2 =document.getElementById("Input-Triangulo_lado2").value;
    
    const base =document.getElementById("Input-Triangulo_base").value;
    
    const perimetroDelTriangulo = perimetroTriangulo(lado1, lado2, base);
    alert(`El perimetro del triangulo es: ${perimetroDelTriangulo}`);
   
}

function calcularÁreaTriangulo(){
    const base = document.getElementById("Input-Triangulo_base").value;
    
    const altura = document.getElementById("Input-Triangulo_altura").value;

    const areaDelTriangulo = areaTriangulo(base, altura);
    alert(`El área del triangulo es: ${areaDelTriangulo}`);
}

// Circulo

function calcularDiametroCirculo(){
    const radio = document.getElementById("Input-Circulo_radio").value;

    const diametroDelCirculo = diametroCirculo(radio);
    alert(`El diametro del Circulo es: ${diametroDelCirculo}`)
}


function calcularPerimetroCirculo(){
    const radio = document.getElementById("Input-Circulo_radio").value;

    const perimetroDelCirculo = perimetroCirculo(radio);
    alert(`El perimetro del Circulo es: ${perimetroDelCirculo}`);
}

function calcularÁreaCirculo(){
    const radio = document.getElementById("Input-Circulo_radio").value;

    const areaDelCirculo = areaCirculo(radio);
    alert(`El perimetro del Circulo es: ${areaDelCirculo}`);
}