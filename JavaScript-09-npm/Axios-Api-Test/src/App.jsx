import './App.css'
import axios from 'axios'

function App() {

  //funcion async-await para consumir API
const getUsers = async () => {
   try {
    const response = await axios.get ("https://jsonplaceholder.typicode.com/users"); 
    console.log(response);
    //Para mostrar solamente la info en consola
    console.log(response.data[1].name); //llamar solo al [1] y su nombre Ervin
   } catch(error) {
    console.log("¡Peligro!", error);
   }
}
//Funcion async await para enviar un usuario
const postUser = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const user = {
          userId: 1986,
          title: "Java Fullstack dev",
          body: "Cindy Rejon"
    }
    const response = await axios.post(url, user);
    console.log(response);
  } catch(error) {
    console.log("Cuidado", error);
  }
}
  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
