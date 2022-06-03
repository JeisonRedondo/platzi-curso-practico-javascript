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
function alturaTriangulo(lado1,lado2,base){
    
    switch(true){
        case lado1===lado2&&lado1!=base :
            return Math.sqrt((lado1**2)-((base**2)/4));
        case lado1===base&&base!=lado2 :
            return Math.sqrt((lado1**2)-((lado2**2)/4));
        case lado2===base&&base!=lado1 :
            return Math.sqrt((base**2)-((lado1**2)/4));
    }
};

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

const squarePerimeter = () => {
    const side = Number(document.getElementById("Input-Cuadrado").value),
          perimeter = perimetroCuadrado(side);
          alert(`El perimetro del cuadrado es: ${perimeter}`)
}


const squareÁrea = () => {
    const side = Number(document.getElementById("Input-Cuadrado").value),
          area = areaCuadrado(side);
          alert(`El área del cuadrado es: ${area}`);
}

// Triangulo

 const trianglePerimeter = () => {
    const side1 = Number(document.getElementById("Input-Triangulo_lado1").value),
          side2 = Number(document.getElementById("Input-Triangulo_lado2").value),
          base =  Number(document.getElementById("Input-Triangulo_base").value),
          perimeter = perimetroTriangulo(side1, side2, base);
          alert(`El perimetro del triangulo es: ${perimeter}`);
 };

const triangleÁrea = () => {
    const base = Number(document.getElementById("Input-Triangulo_base").value),
          height = Number(document.getElementById("Input-Triangulo_altura").value),
          area = areaTriangulo(base, height);
          alert(`El área del triangulo es: ${area}`);
};
const triangleHeight = () => {
    const side1 = Number(document.getElementById("Input-Triangulo_lado1").value),
          side2 = Number(document.getElementById("Input-Triangulo_lado2").value),
          base =  Number(document.getElementById("Input-Triangulo_base").value),
          triangleHeight = alturaTriangulo(side1, side2, base);
          alert(`La altura del triangulo es: ${triangleHeight}`);
};

// Circulo

const circleDiameter = () => {
    const radio = Number(document.getElementById("Input-Circulo_radio").value),
          diameter = diametroCirculo(radio);
          alert(`El diametro del Circulo es: ${diameter}`)
};

const circlePerimeter = () => {
    const radio = Number(document.getElementById("Input-Circulo_radio").value),
          perimeter = perimetroCirculo(radio);
          alert(`El perimetro del Circulo es: ${perimeter}`);
};

const circleÁrea = () => {
    const radio = Number(document.getElementById("Input-Circulo_radio").value),
          area = areaCirculo(radio);
          alert(`El perimetro del Circulo es: ${area}`);
};

