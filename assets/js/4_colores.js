//---------------- Primera sección {cambio de color}

//........Elementos del DOM
const boxUno = document.querySelector("#box1");
const boxDos = document.getElementById("box2");
const boxTres = document.getElementById("box3");
const boxCuatro = document.getElementById("box4");

//........Variables

const fondo = "black";

//........funciones

const pintarElemento = function (elemento, color) {
  elemento.style.backgroundColor = color;
};

//........Eventos

boxUno.addEventListener("click", () => {
  pintarElemento(boxUno, fondo);
});

boxDos.addEventListener("click", () => {
  pintarElemento(boxDos, fondo);
});

boxTres.addEventListener("click", () => {
  pintarElemento(boxTres, fondo);
});

boxCuatro.addEventListener("click", () => {
  pintarElemento(boxCuatro, fondo);
});

//---------------- Primera sección {Creacion de elementos en el DOM}

//........Elementos del DOM

const boxContenedor = document.querySelector("#seccion");
const aditionalBox = document.querySelector("#key");

//........Variables

const newBox = `<div id="addedBox" style="height: 200px; width: 200px; border: 2px solid black; background-color: none;"></div>`;
var a = "pink";
var s = "orange";
var d = "lightblue";
var q = "purple";
var w = "gray";
var e = "brown";

//........Funciones

const agregarElementos = () => {
  boxContenedor.innerHTML = newBox;
};

function pintar(color) {
  const addedBox = document.querySelector("#addedBox");
  addedBox.style.backgroundColor = color;
}

//........Eventos

boxContenedor.addEventListener("click", function () {
  agregarElementos();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    aditionalBox.style.backgroundColor = a;
    console.log(aditionalBox);
  } else if (event.key === "s") {
    aditionalBox.style.backgroundColor = s;
  } else if (event.key === "d") {
    aditionalBox.style.backgroundColor = d;
  } else if (event.key === "q") {
    agregarElementos();
    pintar(q);
  } else if (event.key === "w") {
    agregarElementos();
    pintar(w);
  } else if (event.key === "e") {
    agregarElementos();
    pintar(e);
  }
});
