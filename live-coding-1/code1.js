let palabras = ['parangaricutirimicuaro', 'palitroche', 'Nezahuacoyotl', 'Chilpancingo'];
let totales  = [];
for(let palabra of palabras) {
  totales.push(palabra.length);
}

let maximo = Math.max.apply(null, totales);

for (let elemento of palabras) {
  if (elemento.length === maximo) {
    console.log(elemento);
  }
}