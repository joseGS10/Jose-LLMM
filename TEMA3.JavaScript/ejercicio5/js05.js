function cambiaestilo(numero) {
    if (numero == 1) document.getElementById('fuente').style.fontFamily="arial";
    else if (numero == 2) document.getElementById('fuente').style.fontFamily="verdana";
    else if (numero == 3) document.getElementById('fuente').style.fontFamily="courier";

 }

 function cambiaimagen(numero) {
     if (numero == 1) document.getElementById('foto').src="./imagenes/logotiponatacion.png";
     else if (numero == 2) document.getElementById('foto').src="./imagenes/logotipociclismo.png";
     if (numero == 3) document.getElementById('foto').src="./imagenes/logotiporunning.png";

 }

 function cambiafrase(numero) {
     if (numero == 1) document.getElementById('mensaje').innerHTML="Cada día es una nueva oportunidad para cambiar tu vida. Anónimo";
     else if (numero == 2) document.getElementById('mensaje').innerHTML="El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace. León Tolstói";
     if (numero == 3) document.getElementById('mensaje').innerHTML="El éxito es la suma de pequeños esfuerzos repetidos día tras día. Robert Collier";

 }