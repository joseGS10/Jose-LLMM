function imprimir() {
  document.getElementById('demo').style.visibility='visible';
  //almacenamos toda la información introducida en el formulario en la variable x
  //x hace referencia a todos el formulario completo, por lo que se puede acceder 
  // a todos sus campos a traves de ella
  let x = document.getElementById("formulario");
  let valores = [];// declaro un array vacio

  for (let i = 0; i < x.length ;i++) { //x.lenght me da el numero de campos(input) que tiene el formulario
    valores.push(x.elements[i].value); //metemos valor en array
  }
  document.getElementById("demo").innerHTML = "Su nombre es " + valores[0] + " su edad es "
   + valores[1] + " y su dirección es " + valores[2];
}
