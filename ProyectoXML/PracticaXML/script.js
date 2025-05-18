let num = 0; //indica en todo momento el número de la pregunta que estamos mostrando
let xmlDoc; // aqui se carga el documento XML con sus preguntas y respuestas
let questions; // aqui se almacena cada nodo del XMl(question)
let correctas = 0; //contabiliza las respuestas correctas
let segundos = 0; // contador de tiempo del test
let cronometro; // contador de tiempo

// muestra por pantalla el cuestionario elegido y en el idioma elegido y comienza su ejecución
function cargarXML() {
    //Se resetean todos los valores para iniciar desde 0
    resetTest();
    
      // se toman los valores de idioma y tema elegidos y se almacenan en variables
    const idioma = document.getElementById("idioma").value;
    const tema = document.getElementById("tema").value;

    // Se cambia el fondo según el tema seleccionado
    document.body.classList.remove("fondo_inicial", "fondo_ia", "fondo_python");

    if (tema === "ia") {
      document.body.classList.add("fondo_ia");
    } else {
      document.body.classList.add("fondo_python");
    }

    // en funcion de los valores recogidos en idioma y tema se mete en archivo el test a mostrar
    let archivo = "";
    if (tema === "ia") {
      archivo = idioma === "es" ? "preguntas_ia.xml" : "questions_ai.xml";
    } else {
      archivo = idioma === "es" ? "preguntas_python.xml" : "questions_python.xml";
    }

    //Se inicia nuevo cronómetro que suma 1 segundo cada 1000 ms
    cronometro = setInterval(() => {
      segundos++;
      document.getElementById("timer").innerText = `Tiempo: ${segundos} segundos`;
    }, 1000);
    

    // solicitamos el achivo XML elegido
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        xmlDoc = this.responseXML; // aqui se asigna a xmlDoc el archivo XML
        questions = xmlDoc.getElementsByTagName("question"); // almacena los nodos question
        mostrarPregunta(num);
      }
    };
    xhttp.open("GET", archivo, true);
    xhttp.send();
}


function mostrarPregunta(n) {
    // primero se verifica si hay preguntas cargadas o si quedan más preguntas por hacer o no
    if (!questions || n >= questions.length) { // si no termina y muestra el resultado
      clearInterval(cronometro); // se detiene el cronómetro
      document.getElementById("demo").innerHTML = 
      `Fin del test.<br> Respuestas correctas: ${correctas} de ${questions.length}<br>
      Tiempo empleado: ${segundos} segundos`;
      return;
    }

    // de lo contrario
    const pregunta = questions[n]; //almacena el nodo n en pregunta
    const wording = pregunta.getElementsByTagName("wording")[0].textContent; //almacena la pregunta
    const choices = pregunta.getElementsByTagName("choice");//almacena todas las posibles respuestas

    let txt = `<strong>${wording}</strong><br><br>`; //se mete la pregunta en txt

    // aqui vamos metiendo cada respuesta en el txt
    for (let i = 0; i < choices.length; i++) {
      // se lee la respuesta i-esima y metemos su contenido en la variable resp
      let resp = choices[i].textContent;
      // se crea un boton radio que usaremos para seleccionar la respuesta que creamos correcta
      // además todos los radio button tendran el mismo nombre para que solo pueda ser selecionado uno
      let radio = `<input type="radio" name="respuesta" value="${i}" onclick="verificarRespuesta(${i})">`;
      //se van introduciendo las diferentes respuestas en la variable txt
      txt += radio + " " + resp + "<br>";
    }

    // se muestra por pantalla la pregunta con sus respuestas
    document.getElementById("demo").innerHTML = txt;
}



function verificarRespuesta(seleccionada) {
    const choices = questions[num].getElementsByTagName("choice");
    const esCorrecta = choices[seleccionada].getAttribute("correct") === "yes";

    if (esCorrecta) {
      correctas++;
    }

    //contador que permite acceder a la siguiente pregunta
    num++;
    setTimeout(() => {
      mostrarPregunta(num);
    }, 300); // pequeña pausa antes de pasar a la siguiente pregunta
}


function resetTest() {
    // Detener el cronómetro si está activo
    if (cronometro) clearInterval(cronometro);

    // Resetear variables
    num = 0;
    correctas = 0;
    segundos = 0;
    xmlDoc = null;
    questions = null;

    // Restaurar fondo inicial
    document.body.classList.remove("fondo_ia", "fondo_python");
    document.body.classList.add("fondo_inicial");

    // Restaurar contenido visual
    document.getElementById("timer").innerText = "Tiempo: 0 segundos";
    // vacio el contenido de la ultima pregunta
    document.getElementById("demo").innerHTML = "";
}