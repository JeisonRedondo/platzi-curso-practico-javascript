const originalPrice = 120;
const discount = 18;

const percentagePriceWithDiscount = 100 - discount ;
const priceWithDiscount = (originalPrice * percentagePriceWithDiscount) / 100;

console.log(`The original price is :$${originalPrice} 
with a discount that ${discount}% 
and the price with discount is :${priceWithDiscount}`);

// COSAS A COMENTAR(CONSOLE.LOG)
// 1.Recuerda que puedes usarun objeto para imprimir en "console.log"...
// 2.Con las comillas invertidas NO es necesario hacer un salto de linea
// , solo tienes que ordenarla talcual como la deseas aqui y asi saldra.

function calculatePricewithDiscount (price, discount){
    const percentagePriceWithDiscount = 100 - discount ;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}

function onClickPriceWithDiscount(){
    const inputPrice = document.getElementById("input-price");
    const price = inputPrice.value;

    const inputDiscount= document.getElementById("input-discount")
    const discount = inputDiscount.value;

    const priceWithDiscount = calculatePricewithDiscount (price, discount);
    
    const resultP = document.getElementById("resultP");

    resultP.innerText  = (`The price with discount is: ${priceWithDiscount}`);
}