export default function Jogo(props){
    const {forca, erro, jogar, oculta, disabled} = props
    let altDescription = undefined
    const x = function (){
        if(erro === 0){
            altDescription="Imagem da forca com nenhum erro"
        }else if (erro === 1){
            altDescription=`Imagem da forca com ${erro} erro`
        }else{
            altDescription=`Imagem da forca com ${erro} erros`
        }
    }
    x()
    return (
        <div className="Jogo">
            <div className="forca">
                <img src={forca[erro]} alt={altDescription}/>
            </div>
            <div className="display">
                <button onClick={jogar} className="play">
                    Escolher Palavra
                </button>
                <p>
                    {
                        //(condition) ? (exprIfTrue) : (exprIfFalse)
                        (disabled) ? ("") : (oculta.join(" "))
                    }
                </p>
            </div>
        </div>
    )
}