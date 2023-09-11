//----------ELEMENTOS DEL DOM
const ele1 = document.getElementById("ele1");
const ele2 = document.getElementById("ele2");
const ele3 = document.getElementById("ele3");

//----------FUNCIONES

function pintarElemento(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

//----------EVENTOS

ele1.addEventListener("click", () => {
  pintarElemento(ele1, "yellow");
  if (ele1.style.backgroundColor == "yellow") {
    ele1.style.color = "yellow";
  }
});

ele2.addEventListener("click", () => {
  pintarElemento(ele2, "blue");
  if (ele2.style.backgroundColor == "blue") {
    ele2.style.color = "white";
  }
});

ele3.addEventListener("click", () => {
  pintarElemento(ele3, "red");
  if (ele3.style.backgroundColor == "red") {
    ele3.style.color = "red";
  }
});
