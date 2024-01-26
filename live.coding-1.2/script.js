// Definir la función para imprimir el array como lista
function printArrayToHTML(stringArray) {
    // Obtener el elemento de la lista en el HTML
    const listElement = document.getElementById('stringList');
  
    // Limpiar cualquier contenido previo en la lista
    listElement.innerHTML = '';
  
    // Iterar sobre el array y agregar cada elemento como un elemento de lista
    stringArray.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      listElement.appendChild(listItem);
    });
  }
  
  // Ejemplo de uso
  const myArray = ['insecto', 'bootcamp', 'escritorio'];
  printArrayToHTML(myArray)