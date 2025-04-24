let operacion = "";

function imprimir(tecla) {
    const valor = tecla.getAttribute('data-num');
    operacion += valor;
    document.getElementById('pantalla').value = operacion;

}

function borrar() {
    operacion = "";
    document.getElementById('pantalla').value = "";
}

function operar() {
    const resultado = eval(operacion);
    document.getElementById('pantalla').value = resultado;
    operacion = resultado.toString();
}