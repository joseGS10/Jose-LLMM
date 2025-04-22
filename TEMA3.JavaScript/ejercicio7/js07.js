var imagenes = ["flor0", "flor1", "flor2", "flor3", "flor4"];
var contador = 0;
document.getElementById("img-fondo").style.backgroundImage = 
    "url('./imagenes/" + imagenes[contador] + ".avif')";

function pasarimagenatras(){
    if (contador > 0) {
        contador--;
    }
    else {
        contador = imagenes.length - 1;
    }
    document.getElementById('img-fondo').style.backgroundImage = 
        "url('./imagenes/" + imagenes[contador] + ".avif')";
}

function pasarimagenadelante(){
    if (contador < imagenes.length -1) {
        contador ++;
    }
    else {
        contador = 0;
    }
    document.getElementById("img-fondo").style.backgroundImage =
        "url('./imagenes/" + imagenes[contador] + ".avif')";

}