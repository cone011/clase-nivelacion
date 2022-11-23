const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  const table = document.querySelector("table");
  fetch("https://s3.amazonaws.com/makeitreal/countries.json")
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const pais = data[i];
        const tr = document.createElement("tr");
        tr.innerHTML = `<td><img src="${pais.flag_url}" alt="${pais.name}"></td>
        <td>${pais.code}</td>
        <td>${pais.name}</td>`;
        table.appendChild(tr);
      }
    })
    .catch(console.log("Error"));
});
