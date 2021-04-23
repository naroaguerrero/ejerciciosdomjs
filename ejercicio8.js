let mayorEdad = parseInt(window.prompt("¿Cuántos años tienes?"));
let carnet;
let nombre;
let ciudad;
let dias;
mayorEdad >= 18
  ? (carnet = window.prompt("¿Tienes carnet de conducir"))
  : (document.getElementById("alquiler").innerHTML = `
        <p>Lo siento, eres menor de edad, no puedes alquilar un coche.'</p>
        `);

if (carnet === "si") {
  nombre = window.prompt("¿Cómo te llamas y cuáles son tus apellidos?");
  ciudad = window.prompt("¿En qué ciudad recoges el vehículo?");
  dias = parseInt(window.prompt("¿Cuántos días alquilarás el coche?"));
  if (dias === 7) {
    dias = dias * 25 - 25;
    document.getElementById("alquiler").innerHTML = `
                <p>${nombre} ${ciudad} ${dias}</p>
                `;
  } else if (dias === 14) {
    dias = dias * 25 - 50;
    document.getElementById("alquiler").innerHTML = `
                <p>${nombre} ${ciudad} ${dias}</p>
                `;
  } else if (dias === 21) {
    dias = dias * 25 - 75;
    document.getElementById("alquiler").innerHTML = `
                <p>${nombre} ${ciudad} ${dias}</p>
                `;
  } else if (dias === 28) {
    dias = dias * 25 - 100;
    document.getElementById("alquiler").innerHTML = `
                <p>${nombre} ${ciudad} ${dias}</p>
                `;
  } else {
    document.getElementById("alquiler").innerHTML = `
            <p>${nombre} ${ciudad} ${dias * 25}</p>
            `;
  }
} else if (carnet === "no") {
  document.getElementById("div1").innerHTML = `
            <p>Lo siento, no puedes alquilar el coche porque no tienes carnet</p>
            `;
}
