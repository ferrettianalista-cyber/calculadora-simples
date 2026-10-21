const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

const resultado = document.getElementById("resultado");


somar.addEventListener("click", function() {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const total = n1 + n2;

    resultado.innerHTML = total;

});


subtrair.addEventListener("click", function() {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const total = n1 - n2;

    resultado.innerHTML = total;

});


multiplicar.addEventListener("click", function() {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const total = n1 * n2;

    resultado.innerHTML = total;

});


dividir.addEventListener("click", function() {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const total = n1 / n2;

    resultado.innerHTML = total;

});