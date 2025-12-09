function Card_movie({ movie, onClose }) {
  if (!movie) return null;



  function getClassificacaoColor(classificacao) {
    if (classificacao <= 12) return "green" ;
    if (classificacao > 12 && classificacao <= 16) return "yellow";
    if (classificacao === 17) return "red";
    if (classificacao === 18) return "gray";
  }

  return (
    <div className="card">
      <div className="card_movie">
        <div className="card_movie_content">
          <button onClick={onClose} className="Button_close">
            <img src="./Imgs/cruz.png" alt="" />
          </button>
          <div className="img_wrapper">
            <img
              src={movie.img}
              alt={movie.titulo}
              className="img_movie_card"
            />
            <div className="button_play">
              <img src="./Imgs/toque.png" alt="" />
              Assistir
            </div>
            <div className="overlay_card_movie"></div>
          </div>
          <div className="card_movie_info">
            <div className="Classificacao_content">
              Classificação:
              <div className={getClassificacaoColor(movie.Classificacao)}><p>{movie.Classificacao}</p></div>
            </div>
            <h3>{movie.titulo}</h3>
            <p>{movie.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card_movie;
