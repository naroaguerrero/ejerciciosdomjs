let nombre = window.prompt("¿Cómo te llamas?");
let edad = parseInt(window.prompt("¿Cuántos años tienes?"));

if (edad >= 18) {
  document.getElementById("edad").innerHTML = `
    <p>Hola ${nombre} eres mayor de edad </p>   
    `;
} else {
  document.getElementById("edad").innerHTML = `
    <p>Hola ${nombre} eres menor de edad </p>
    `;
}

switch (edad >= 18) {
  case true:
    document.getElementById("edad").innerHTML = `
        <p>Hola ${nombre} eres mayor de edad </p>
        `;
    break;
  case false:
    document.getElementById("edad").innerHTML = `
        <p>Hola ${nombre} eres menor de edad </p>
        `;
}

edad >= 18
  ? (document.getElementById("edad").innerHTML = `
<p>Hola ${nombre} eres mayor de edad </p>
`)
  : (document.getElementById("edad").innerHTML = `
<p>Hola ${nombre} eres menor de edad </p>
`);
