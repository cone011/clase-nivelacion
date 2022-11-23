var vector = ["Simón", "Natalia", "Nayib", "Diana", "Germán"];

vector.map((item) => console.log(item));

var numeros = [1, 2, 3, 4, 5];

console.log(`Los elementos a imprimir son ${numeros[1]} y ${numeros[3]}`);

var letrasNuemros = ["Primero", "Segundo", "Tercero", "Cuarto"];

letrasNuemros.push("Soy el ultimo elemento");

letrasNuemros.map((item) => console.log(item));

var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];

var araryNew = ["Quinto", "Sexto"];

var newElement = arr.splice(4, 1)[0];

araryNew.push(newElement);

var recorrerElemento = 0;

for (recorrerElemento = 0; i < araryNew.length; i++) {
  arr.push(araryNew[recorrerElemento]);
}

for (recorrerElemento = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
