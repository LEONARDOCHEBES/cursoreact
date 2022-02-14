import logo from './logo.svg'; //importa la imagen 
import './App.css'; // importa estilo css
import { useState } from 'react';


/*Esta funcion lo que hace es retornar codigo html jsx y se pone los parentesis asi para
poder escribir en varias lineas el html*/

function App() {

  /* Se crea espacio constante en memoria reservado para una variable y una funcion que
  cuando se le envia un valor renderiza todo el dom y actualiza el valor de su variable asociada
  en forma de array que tiene su dato ligado al span*/

  const [lineaDeArriba, fncLineaDeArriba]= useState('');//captura un estado
  const [lineaDeAbajo, fncLineaDeAbajo]= useState('');

  const [imagenMeme, fncSetImagenMeme]= useState('');

  /*funcion que salta cuando se realiza cambios en el imput y captura el value del imput y lo mete
  en la variable para ser llamada por el span cuando se renderiza el dom */

  const onChangeLineaDeArriba = function(EventoValor){
    fncLineaDeArriba(EventoValor.target.value)
  }
  
  const onChangeLineaDeAbajo = function(EventoValor){
    fncLineaDeAbajo(EventoValor.target.value)
  }




  const onChangeImagenMeme = function(EventoValor){
    fncSetImagenMeme(EventoValor.target.value)
  }
  return (
    <div className="App">

      

      <select onChange={onChangeImagenMeme}>
          <option value= "meme00"> Meme 1 </option>
          <option value= "meme01"> Meme 2 </option>
          <option value= "meme02"> Meme 3 </option>
          <option value= "meme03"> Meme 4 </option>
          <option value= "meme04"> Meme 5 </option>
          <option value= "meme05"> Meme 6 </option>

      </select><br/>

        <input onChange={onChangeLineaDeArriba} type="text" placeholder='Linea de arriba'/><br/>
        <input onChange={onChangeLineaDeAbajo} type="text" placeholder='Linea de abajo'/><br/>   

        <button> Exportar </button><br/>


        <div className="claseMeme">
            <span>{lineaDeArriba}</span><br/>
            <span>{lineaDeAbajo}</span><br/>
            <img src={"/img/" +imagenMeme+ ".jpg"}/><br/>
        </div>

    </div>
  );
}

export default App;
