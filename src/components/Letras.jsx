import React from "react";

export default function Letras(props) {
  const { alfabeto, disabled, selecionadas, palpite, win, lose } = props;

  return (
    <div className="Letras">
      <div className="keyboard">
        {alfabeto.map((letra, index) => (
          <button
            className="keyboard__key"
            key={index}
            //Logic table
            //(false || false) : false
            //(false || true) : true
            //(true || false) :true
            //(true || true) : true
            disabled={disabled || selecionadas.includes(letra) || win || lose}
            onClick={() => palpite(letra)}
          >
            {letra.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
