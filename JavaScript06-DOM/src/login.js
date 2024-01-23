const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//Regex: expresiones regulares. Determina patrones que se deben cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/; //engloba los caracteres que son dif todos y debe contener un gmail

//Desahabilitar el boton
submitButton.disabled = true; // si le pongo false, se vuelve habilitar
/*
Evento para input, el cual evaluará el patrón de expresión regular y en caso
de cumplir con el patrón, habilitará el buton y podremos ser redirigidos a la
pagina index.html
*-Se obtiene el valor actual del campo email (input) usando e.target.
value y se almacena en una variable (text.)
*-Se evalua la REGEX
 */
emailInput.addEventListener("input", (e) => { //introducimos evento
    const text = e.target.value; //e.target.value evalua el contenido del texto
    if (emailREGEX.test(text) == true) {  //si esto se cumple, escribe email
        submitButton.disabled = false; //
    }
})
