function muestraCelsius() {
    f = document.getElementById("tbf").value;
    c = toCelsius(f)
    document.getElementById("imprimeC").innerHTML = "Los " + f + " grados Fahrenheit equivalen a " + c + " grados Celsius.";
}

function toCelsius(f) {
  return (5/9) * (f-32);
}

function muestraFarhenheit() {
    c = document.getElementById("tbc").value;
    f = toFarhenheit(c);
    document.getElementById("imprimeF").innerHTML = "Los " + c + " grados Celsius equivalen a " + f + "grados Farhenheit.";
}

function toFarhenheit(c) {
    return c*1.8 + 32;
}