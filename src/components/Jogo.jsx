export default function Jogo(props){
    const {forca, erro, jogar, palavra} = props
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
        <div>
            <div>
                <img src={forca[erro]} alt={altDescription}/>
            </div>
            <div>
                <button onClick={jogar}>
                    Escolher palavra
                </button>
            </div>
        </div>
    )
}