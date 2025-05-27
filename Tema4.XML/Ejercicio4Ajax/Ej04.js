let datos = null; 

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  datos = JSON.parse(this.responseText);
};
xhttp.open("GET", "json_demo.txt", true);
xhttp.send();

function mostrarEdad() {
  document.getElementById("resultadoEdad").textContent = "Edad: " + datos.age;
}

function mostrarTipoPrimeraMascota() {
  document.getElementById("resultadoTipo").textContent = "Tipo de la primera mascota: " + datos.pets[0].animal;
}

function mostrarNombrePrimeraMascota() {
  document.getElementById("resultadoNombre").textContent = "Nombre de la primera mascota: " + datos.pets[0].name;
}

function mostrarNumeroMascotas() {
  document.getElementById("resultadoCantidad").textContent = "Número de mascotas: " + datos.pets.length;
}

function mostrarNombresMascotas() {
  const nombres = datos.pets.map(pet => pet.name).join(", ");
  document.getElementById("resultadoNombres").textContent = "Nombres de mascotas: " + nombres;
}

function mostrarTodosDatos() {
  const detalles = datos.pets.map(p => `${p.animal} (${p.name})`).join(", ");
  document.getElementById("resultadoParrafo").textContent = `Nombre: ${datos.name}, Edad: ${datos.age}, Mascotas: ${detalles}`;
}

function mostrarTabla() {
  const tabla = document.getElementById("tablaMascotas");
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  datos.pets.forEach(pet => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${pet.animal}</td><td>${pet.name}</td>`;
    tabla.appendChild(fila);
  });
}