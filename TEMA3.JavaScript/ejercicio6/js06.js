const frases =[
    {
        texto: "La libertad no consiste en hacer lo que se quiere, sino lo que se debe.",
        autor: "Robert Frost"
    },
    {
        texto: "No hay que ir para atrás ni para darse impulso.",
        autor: "Lao Tsé"
    },
    {
        texto: "No hay caminos para la paz; la paz es el camino.",
        autor: "Mahatma Gandhi"
    },
    {
        texto: "Haz el amor y no la guerra.",
        autor: "John Lennon"
    },
    {
        texto: "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos.",
        autor: "Bob Marley"
    },
    {
        texto: "Cada día sabemos más y entendemos menos.",
        autor: "Albert Einstein"
    }
];

function nuevafrase() {
    //Math.floor redondea por debajo y Math.random genera un nº aleatorio entre 0 y 4.(por ser la matriz frases de 5 elementos)
    const indice = Math.floor(Math.random() * frases.length);
    const fraseElegida = frases[indice];

    document.getElementById("frase").innerHTML = `"${fraseElegida.texto}"`;
    document.getElementById("autor").innerHTML = fraseElegida.autor;
}
