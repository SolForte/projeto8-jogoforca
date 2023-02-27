import React from "react";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import forca0 from "./assets/img/forca0.png";
import forca1 from "./assets/img/forca1.png";
import forca2 from "./assets/img/forca2.png";
import forca3 from "./assets/img/forca3.png";
import forca4 from "./assets/img/forca4.png";
import forca5 from "./assets/img/forca5.png";
import forca6 from "./assets/img/forca6.png";
import palavras from "./palavras";
import { useState } from "react";

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const imagem = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
export default function App() {
  const [erro, setErro] = useState(0);
  const [palavra, setPalavra] = useState([]);
  const [palavraOculta, setPalavraOculta] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [selecionadas, setSelecionadas] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [palavraBruta, setPalavraBruta] = useState("");
  function gameStart() {
    //Fonte: https://www.programiz.com/javascript/examples/get-random-item
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const palavraAleatoria = palavras[randomIndex];
    const palavraDividida = palavraAleatoria.split("");
    const palavraDivididaOculta = palavraDividida.map(() => "_");
    setPalavra(palavraDividida);
    setPalavraOculta(palavraDivididaOculta);
    setErro(0);
    setDisabled(false);
    setSelecionadas([]);
    setWin(false);
    setLose(false);
    setPalavraBruta(palavraAleatoria);
  }

  function palpite(letra) {
    //copia e adiciona a letra ao array
    setSelecionadas([...selecionadas, letra]);
    const normal = palavraBruta.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    if (normal.includes(letra)) {
      const reveladas = [...palavraOculta];
      palavra.forEach((elemento, index) => {
        //Fonte: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
        if (
          elemento.normalize("NFD").replace(/\p{Diacritic}/gu, "") === letra
        ) {
          reveladas[index] = palavra[index];
        }
      });

      if (reveladas.every((element, index) => element === palavra[index])) {
        setWin(true);
      }

      setPalavraOculta(reveladas);
    } else if (erro < imagem.length - 1) {
      setErro(erro + 1);
      if (erro + 1 >= imagem.length - 1) {
        setLose(true);
        setPalavraOculta(palavra);
      }
    }
  }

  return (
    <div className="App">
      <Jogo
        forca={imagem}
        erro={erro}
        jogar={() => gameStart()}
        oculta={palavraOculta}
        disabled={disabled}
        win={win}
        lose={lose}
        tentativas={imagem.length - 1}
      />
      <Letras
        alfabeto={alfabeto}
        disabled={disabled}
        selecionadas={selecionadas}
        palpite={palpite}
        win={win}
        lose={lose}
      />
    </div>
  );
}
