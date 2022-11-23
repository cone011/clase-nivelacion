const btn = document.querySelector("#append");

btn.addEventListener("click", function () {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseenter", function (event) {
    square.removeAttribute("squere");
  });

  const squares = document.querySelector("squares");
  squares.appendChild(square);
});
