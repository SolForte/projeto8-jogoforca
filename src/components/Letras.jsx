import React from "react";

export default function Letras(props){
    const {alfabeto, disabled}=props
    return(
    <div className="Letras">
    <div className="keyboard">
        {alfabeto.map(
            (letra, index) =>

            <button className="keyboard__key" key={index} disabled={disabled}>
                {letra.toUpperCase()}
            </button>
        )}
    </div>
    </div>
    )
};