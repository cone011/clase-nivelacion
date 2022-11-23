// 1. Inserta 4 cuadrados más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor (el div con clase container).
for (let i = 3; i < 7; i++) {
  const container = document.querySelector(".container");

  const div = document.createElement("div");
  div.classList.add("item");
  div.appendChild(document.createTextNode(i));

  container.appendChild(div);
}

// 2. Agrégales a todos los items la clase error
const items = document.querySelectorAll(".item");
items.forEach((e) => e.classList.add("error"));

//3 agregar el texto 2 al circulo
document.querySelector("circle").appendChild(document.createTextNode("2"));

//4 eliminar parrafo
const p = document.querySelector("p");
p.parentNode.removeChild(p);
