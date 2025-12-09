function Card_movie({ movie, onClose }) {
  if (!movie) return null;

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

              <div>Classificação:<div className="Classisficacao">{movie.classificacao}</div></div>
            <h3>{movie.titulo}</h3>
            <p>{movie.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card_movie;
