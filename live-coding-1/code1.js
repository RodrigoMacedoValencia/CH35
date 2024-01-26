//Entrevista. Me tocó con Marco. hice el ejercicio de una manera simple 
let palabras = ['parangaricutirimicuaro', 'palitroche', 'Nezahuacoyotl', 'Chilpancingo'];//se mandaron a llamar con let la función. se escribieron palabras
let totales  = [];
for(let palabra of palabras) {//se usó el for  para el tamaño de las palabras
  totales.push(palabra.length);
}

let maximo = Math.max.apply(null, totales)

for (let elemento of palabras) {
  if (elemento.length === maximo) {
    console.log(elemento);//se pide a consola al elemento
  }
}