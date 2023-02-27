export default function Jogo(props) {
    const { forca, erro, jogar, oculta, disabled, win, lose, tentativas} = props;
    let altDescription = undefined;
    let check = undefined;
    const imageDescript = function () {
      if (erro === 0) {
        altDescription = "Imagem da forca com nenhum erro";
      } else if (erro === 1) {
        altDescription = `Imagem da forca com ${erro} erro`;
      } else if (erro === tentativas) {
        altDescription = `Imagem da forca com ${erro} erros. Você perdeu o jogo`;
      } else {
        altDescription = `Imagem da forca com ${erro} erros`;
      }
    };
    const classCheck = function () {
      if (win === true) {
        check = "green";
      } else if (lose === true) {
        check = "red";
      } else {
        check = "black";
      }
    };
    imageDescript();
    classCheck();
    return (
      <div className="Jogo">
        <div className="forca">
          <img src={forca[erro]} alt={altDescription} data-test="game-image"/>
        </div>
        <div className="display">
          <button onClick={jogar} className="play" data-test="choose-word">
            Escolher Palavra
          </button>
          <p className={check} data-test="word">{disabled ? "" : oculta.join(" ")}</p>
        </div>
      </div>
    );
  }
  