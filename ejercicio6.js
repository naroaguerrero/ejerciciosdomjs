let eleccion = window
  .prompt(
    "Escribe la operacion deseas realizar: suma, resta, multiplicacion, division o resto"
  )
  .toLowerCase();
let numero1 = parseInt(window.prompt("Escribe un número"));
let numero2 = parseInt(window.prompt("Escribe otro número"));

switch (eleccion) {
  case "suma":
    document.getElementById("operaciones").innerHTML = `
    <p>Los número elegidos son ${numero1} y ${numero2} y el resultado de la suma es : ${
      numero1 + numero2
    }</p>
    `;
    break;
  case "resta":
    document.getElementById("operaciones").innerHTML = `
    <p>los número elegidos son ${numero1} y ${numero2} y el resultado de la resta es : ${
      numero1 - numero2
    }</p>
    `;
    break;
  case "multiplicacion":
    document.getElementById("operaciones").innerHTML = `
    <p>los número elegidos son ${numero1} y ${numero2} y el resultado de la multiplicacion es : ${
      numero1 * numero2
    }</p>
    `;
    break;
  case "division":
    document.getElementById("operaciones").innerHTML = `
    <p>los número elegidos son ${numero1} y ${numero2} y el resultado de la division es : ${
      numero1 / numero2
    }</p>
    `;

    break;
  case "resto":
    document.getElementById("operaciones").innerHTML = `
    <p>los número elegidos son ${numero1} y ${numero2} y el resultado de la resto es : ${
      numero1 % numero2
    }</p>
    `;
    break;
  default:
    document.getElementById("operaciones").innerHTML = `
    <p>Inténtalo de nuevo</p> `;
}
