import logo from './logo.svg'; //importa la imagen 
import './App.css'; // importa estilo css


/*Esta funcion lo que hace es retornar codigo html jsx y se pone los parentesis asi para
poder escribir en varias lineas el html*/

function App() {
  
  return (
    <div className="App">

      

      <select>
          <option value= "meme0"> Meme 1 </option>
          <option value= "meme1"> Meme 2 </option>
          <option value= "meme2"> Meme 3 </option>
          <option value= "meme3"> Meme 4 </option>

      </select><br/>

        <input type="text" placeholder='Linea de arriba'/><br/>
        <input type="text" placeholder='Linea de abajo'/><br/>   

        <button> soy un boton </button><br/>


        <div>
            <span>Linea de arriba</span><br/>
            <span>Linea de abajo</span><br/>
            <img src='/meme/'/><br/>
        </div>

    </div>
  );
}

export default App;
