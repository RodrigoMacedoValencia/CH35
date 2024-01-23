const container = document.getElementById("container-div");
const button = document.getElementById("card-btn");
//Agregando estilos al container para visibilidad
container.style.visibility = "visible";

//Manejando eventos para ocultar el container desde el boton
button.addEventListener("click", () => {  //el evento es cuando haga click
    container.style.visibility = (container.style.visibility === "visible")
    ? "hidden" : "visible"; }); // es un ternario, solo aplica 3 condiciones, el true y false: if-elseif-else