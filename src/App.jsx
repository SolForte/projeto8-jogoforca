import React from "react";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo"; 
import forca0 from "./assets/img/forca0.png"
import forca1 from "./assets/img/forca1.png"
import forca2 from "./assets/img/forca2.png"
import forca3 from "./assets/img/forca3.png"
import forca4 from "./assets/img/forca4.png"
import forca5 from "./assets/img/forca5.png"
import forca6 from "./assets/img/forca6.png"
import palavras from "./palavras";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const imagem = [forca0,forca1,forca2,forca3,forca4,forca5,forca6]

export default function App() {

  const [erro, setErro] = useState(0);
  const [palavra,setPalavra]=useState([])
  const [palavraOculta,setPalavraOculta]=useState([])
  const [disabled, setDisabled] = useState(true)

  function gameStart(){
    //Fonte: https://www.programiz.com/javascript/examples/get-random-item
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const palavraAleatoria = palavras[randomIndex];
    const palavraDividida = palavraAleatoria.split("")
    const palavraDivididaOculta = palavraDividida.map(()=>("_"))
    setPalavra(palavraDividida)
    setPalavraOculta(palavraDivididaOculta)
    setErro(0)
    setDisabled(false)


    console.log(palavraAleatoria)
    console.log(palavraDividida)
    console.log(palavraDivididaOculta)
  }

  return (
    <div className="App">
      <Jogo
        forca={imagem}
        erro={erro}
        jogar={() => gameStart()} 
        oculta={palavraOculta}
        disabled={disabled}/>
      <Letras
        alfabeto={alfabeto}
        disabled={disabled}/>
    </div>
  );
}