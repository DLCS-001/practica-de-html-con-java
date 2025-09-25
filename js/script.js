var indice = 0;
var indice2 = 0;
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
    let e = document.createElement("div");
    let e2 = document.createElement("input");
    let contenedor = document.getElementById("contenedor");
    e.textContent = "Hola, soy un elemento creado en tiempo de ejecución";
    e2.setAttribute("type", "text");
    e2.setAttribute("value", "Elemento Creado En Ejecucion");
    if (contenedor) {
        contenedor.appendChild(e);
        contenedor.appendChild(e2);
    }
}

function eliminarElementosEnEjecucion() {
    let contenedor = document.getElementById("contenedor");
    if (contenedor) {
        contenedor.innerHTML = "";
    }
}

function agregarTexto() {
    try {
        let texto = prompt("Ingrese un texto:");
        if (texto === null || texto.trim() === "") {
            throw "Debe ingresar un texto válido";
        }
        document.getElementById("caja").innerHTML += "<p>" + texto + "</p>";
    } catch (error) {
        alert("Error: " + error);
    }
}

function eliminarTexto() {
    document.getElementById("caja").innerHTML = "";
}

function aplicarEstilo() {
    document.getElementById("caja").classList.add("resaltado");
}

function quitarEstilo() {
    document.getElementById("caja").classList.remove("resaltado");
}