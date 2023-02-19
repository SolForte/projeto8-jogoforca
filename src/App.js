import React from "react";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo"; 

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {
  return (
    <div>
      <Jogo/>
      <Letras alfabeto={alfabeto}/>
    </div>
  );
}
