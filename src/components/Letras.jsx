import React from "react";

export default function Letras(props){
    const {alfabeto}=props
    return(
    <div className="keyboard">
        {alfabeto.map(
            (letra, index) =>
            <button className="keyboard__key" key={index}>
                {letra.toUpperCase()}
            </button>
        )}
    </div>
    )
};