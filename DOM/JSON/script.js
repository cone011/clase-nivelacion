const json = `[
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
  ]`;

// Escribe tu solución acá
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const table = document.querySelector("table");

  const countries = JSON.parse(json);
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const tr = document.createElement("tr");
    tr.innerHTML = `<td><img src="${country.flag_url}" alt="${country.name}"></td>
         <td>${country.code}</td>
         <td>${country.name}</td>
      `;
    table.appendChild(tr);
  }

  table.classList.remove("hide");
  button.classList.add("hide");
});
