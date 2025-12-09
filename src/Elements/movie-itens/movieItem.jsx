function MovieItem({ movie, onClick }) {
  return (
    <img
      className="movie-item"
      src={movie.img}
      alt={movie.titulo}
      onClick={() => onClick(movie)}
    />
  );
}

export default MovieItem;
