function cambiaParrafo() {
    // document.getElementById("demo").style.display = 'block';
    document.getElementById("demo").innerHTML = "Párrafo cambiado.";
  }
  function borraParrafo() {
    document.getElementById("demo").style.display = 'none';
  }
  
  function muestraParrafo() {
	document.getElementById("demo").style.display = "block";
}

// existe otra forma de borrar y hacer aparecer el parrafo pero respetando 
// el espacio que ocupa el parrafo siempre
// para esconder --> document.getElementById("demo").style.visibility = 'hidden';
// para hacer aparecer --> document.getElementById("demo").style.visibility = "visible";