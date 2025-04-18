function imprimir(){
    document.getElementById('demo').style.visibility='visible';
    let nom = document.getElementById('nombre').value;
    let ed = document.getElementById('edad').value;
    let dir = document.getElementById('direccion').value;
    document.getElementById('demo').innerHTML= "Tu nombre es " + nom +
    " tienes  " + ed + " años y vives en " + dir;
}
