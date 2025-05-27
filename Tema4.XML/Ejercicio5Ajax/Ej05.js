let datos = null;

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  datos = JSON.parse(this.responseText);
};
xhttp.open("GET", "nasa_json.txt", true);
xhttp.send();

function mostrarFecha() {
  if (datos) {
    document.getElementById("fecha").textContent = datos.date;
  }
}

function mostrarExplicacion() {
  if (datos) {
    document.getElementById("explicacion").textContent = datos.explanation;
  }
}

function mostrarURL() {
  if (datos) {
    const direc = document.getElementById("url");
    direc.textContent = datos.url;
    direc.href = datos.url;
  }
}

function mostrarImagen() {
  if (datos) {
    const imagen = document.getElementById("imagen");
    imagen.src = datos.url;
    imagen.alt = datos.title;
  }
}

