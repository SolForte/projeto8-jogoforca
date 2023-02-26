import React from "react";

export default function Letras(props){
    const {alfabeto, disabled, selecionadas, palpite}=props
    return(
    <div className="Letras">
    <div className="keyboard">
        {alfabeto.map(
            (letra, index) =>

            <button 
            className="keyboard__key" 
            key={index} 
            disabled={disabled || selecionadas.includes(letra)}
            onClick={()=>palpite(letra)}>
                {letra.toUpperCase()}
            </button>
        )}
    </div>
    </div>
    )
};