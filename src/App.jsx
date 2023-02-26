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
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const imagem = [forca0,forca1,forca2,forca3,forca4,forca5,forca6]

export default function App() {

  const [image, setImage] = useState(image[0]);

  return (
    <div>
      <Jogo/>
      <Letras alfabeto={alfabeto}/>
    </div>
  );
}