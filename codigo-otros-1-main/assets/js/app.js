//Rodrigo Macedo y karen Maldonado 
//Karen tiene un puntaje 5/5.Avanzado.

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//cambiar anotación de clase
const $b = document.querySelector('.blog');//cambiar anotación de clase
const $l = document.querySelector('.location');

//definir función asíncrona con palabra reservada async
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //manejamos la resolución de la promesa con try
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);//llamar a response
  const data = await response.json();

  console.log(data); //llamamos un console.log para verificar que existan las claves de name, blog y location
  $n.textContent = `${data.name}`; //corregimos las comillas a graves 
  $b.textContent = `${data.blog}`;//corregimos las comillas a graves 
  $l.textContent = `${data.location}`;//corregimos las comillas a graves 
  } catch(err){
  handleError(err); //llamamos la función para ver si la promesa no se resuelve
}

}

function handleError(err) {
  //console.log('OH NO!');
  console.log(err);
$n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);