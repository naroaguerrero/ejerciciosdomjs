let numero1 = window.prompt("Dime un número");
let numero2 = window.prompt("Dime otro número");

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

document.getElementById("suma").innerHTML = `
            <p>${suma} </p>`;
document.getElementById("suma").style.color = "White";
document.getElementById("suma").style.backgroundColor = "red";

document.getElementById("resta").innerHTML = `
            <p>${resta} </p>`;
document.getElementById("resta").style.color = "yellow";
document.getElementById("resta").style.backgroundColor = "blue";

document.getElementById("multiplicacion").innerHTML = `
            <p>${multiplicacion} </p>`;
document.getElementById("multiplicacion").style.color = "red";
document.getElementById("multiplicacion").style.backgroundColor = "green";

document.getElementById("division").innerHTML = `
            <p>${division} </p>`;
document.getElementById("division").style.color = "blue";
document.getElementById("division").style.backgroundColor = "pink";

document.getElementById("resto").innerHTML = `
            <p>${resto} </p>`;
document.getElementById("resto").style.color = "violet";
document.getElementById("resto").style.backgroundColor = "black";
