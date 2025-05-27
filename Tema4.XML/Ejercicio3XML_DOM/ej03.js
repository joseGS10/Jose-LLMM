let xmlDoc = null;

// Cargar el XML al iniciar
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "books.xml", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      xmlDoc = xhr.responseXML;
    }
  };
  xhr.send();
};



function mostrarTitulo() {
  const titulo = xmlDoc.getElementsByTagName("book")[0]
                .getElementsByTagName("title")[0].textContent;
  document.getElementById("resultado").innerHTML = `${titulo}`; 
}

function mostrarTitulos() {
  const libros = xmlDoc.getElementsByTagName("book");
  let titulos = "";
  for (let i = 0; i < libros.length; i++) {
    titulos += libros[i].getElementsByTagName("title")[0].textContent + "<br>";
  }
  document.getElementById("resultado").innerHTML = `${titulos}`; 
}

function mostrarNumeroAtributosLibro4() {
  const libro4 = xmlDoc.getElementsByTagName("book")[3];
  const numAtribu = libro4.attributes.length;
  document.getElementById("resultado").innerHTML = `${numAtribu}`; 
}

function mostrarValoresAtributosLibro4() {
  const libro4 = xmlDoc.getElementsByTagName("book")[3];
  let valores = "";
  for (let i = 0; i < libro4.attributes.length; i++) {
    valores += `${libro4.attributes[i].name}: ${libro4.attributes[i].value}<br>`;
  }
  document.getElementById("resultado").innerHTML = `${valores}`; 
}

function mostrarNumeroAutoresLibro3() {
  const autores = xmlDoc.getElementsByTagName("book")[2]
                 .getElementsByTagName("author");
  document.getElementById("resultado").innerHTML = `${autores.length}`; 
}

function mostrarAutoresLibro3() {
  const autores = xmlDoc.getElementsByTagName("book")[2]
                 .getElementsByTagName("author");
  let lista = "";
  for (let i = 0; i < autores.length; i++) {
    lista += autores[i].textContent + "<br>";
  }
  document.getElementById("resultado").innerHTML = `${lista}`; 
}

function mostrarTabla() {
  const libros = xmlDoc.getElementsByTagName("book");
  let tabla = `<table><tr><th>Título</th><th>Primer autor</th><th>Precio</th><th>Año</th></tr>`;
  for (let i = 0; i < libros.length; i++) {
    const title = libros[i].getElementsByTagName("title")[0]?.textContent;
    const author = libros[i].getElementsByTagName("author")[0]?.textContent;
    const price = libros[i].getElementsByTagName("price")[0]?.textContent;
    const year = libros[i].getElementsByTagName("year")[0]?.textContent;
    tabla += `<tr><td>${title}</td><td>${author}</td><td>${price}</td><td>${year}</td></tr>`;
  }
  tabla += `</table>`;
  document.getElementById("resultado").innerHTML = `${tabla}`; 
}
