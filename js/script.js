
window.onload = function () {
    alert("Usted recargó la página");
    // Ocultar video al cargar la página
    var video = document.getElementById("video");
    if(video) video.classList.add("oculto");
};

function recargarPagina() {
    location.reload();
}

function mostrar() {
    document.getElementById("caja").style.display = "block";
}

function ocultar() {
    document.getElementById("caja").style.display = "none";
}

function mostrarVideo() {
    var video = document.getElementById("video");
    if(video) video.classList.remove("oculto");
}

function ocultarVideo() {
    var video = document.getElementById("video");
    if(video) video.classList.add("oculto");
}

function Creador() {
    let objeto = new Object();
    objeto.nombre = "Douglas Lisandro";
    objeto.apellido = "Chamalé Sam";
    objeto.carnet = "0909-24-4732";
    objeto.curso = "Programacion 2";
    objeto.universidad = "Mariano Gálvez";
    objeto.correo = "dchamales@miumg.edu.gt"
    console.log(objeto.correo)
    console.log(objeto);
    funcionAnidas(objeto);
}

function funcionAnidas(objeto) {
    console.log(objeto.nombre);
}

function agregarTextoEnConsola() {
    let elemento=document.getElementById("cajaTexto").value;
    console.log(elemento);
}

function crearElementosEnEjecucion() {
    let e=document.createElement("div");
    let conteiner = document.getElementById("contenedor");
    e.append("Hola, soy un elemento creado en tiempo de ejecución");
    conteiner.appendChild(e);
    console.log(e);
}