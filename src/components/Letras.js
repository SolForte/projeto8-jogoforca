import React from "react";

export default function Letras(props){
    const {alfabeto}=props
    return(
    <div>
        {alfabeto.map(
            (letra, index) =>
            <button key={index}>
                {letra}
            </button>
        )}
    </div>
    )
};