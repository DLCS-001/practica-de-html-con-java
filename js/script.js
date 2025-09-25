
window.onload = function () {
    alert("Usted recargó la página");
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
    document.getElementById("video").style.display = "block";
}

function ocultarVideo() {
    document.getElementById("video").style.display = "none";
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