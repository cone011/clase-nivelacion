console.log("Hola mundo"[3]);
console.log("    "[2]);
console.log("Estoy aprendiendo"[7]);
console.log("El azul es mi color favorito"[12]);
console.log(""[0]);
console.log(" El cielo es azul"[20]);

function countingEs(cadena) {
  var count = 0;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === "e") {
      count += 1;
    }
  }
}

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6); // true
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios") === 6); // true
console.log(
  countingEs("Ejemplares son las personas de este hermoso pueblo") === 8
); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 5); // true

function message(arr) {
  var messageBack = arr.join(" ");

  return messageBack;
}

console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
console.log(
  message(["El", "método", "join", "me", "permite", "unir", "elementos"])
); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "muy", "útil"])); //JavaScript es muy útil

function generatePassword(string) {
  var password = "";
  for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();

    if (char === " ") {
      char = "";
    } else if (char === "a") {
      char = 4;
    } else if (char === "e") {
      char = 3;
    } else if (char === "i") {
      char = 1;
    } else if (char === "o") {
      char = 0;
    }

    password += char;
  }
  return password;
}

console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""
