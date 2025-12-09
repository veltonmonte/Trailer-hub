// src/components/List.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import MovieItem from "./movieItem";
import ButtonRight from "../Fragments/ButtonRight";
import ButtonLeft from "../Fragments/ButtonLeft";
import Card_movie from "../Fragments/Cards/Card_movie";

function List({ titleCategory, index }) {
  const [videos, setVideos] = useState([]);
  const [filmesAleatorios, setFilmesAleatorios] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);

  const uniqueListClass = `movie-list-${index}`;

  useEffect(() => {
    async function loadVideos() {
      setLoading(true);
      const { data, error } = await supabase.from("trailers").select("*");
      if (error) {
        console.error("Erro ao buscar vídeos:", error);
        setVideos([]);
      } else {
        setVideos(data || []);
      }
      setLoading(false);
    }
    loadVideos();
  }, []);

  useEffect(() => {
    const element = document.getElementsByClassName(uniqueListClass)[0];
    if (element) {
      element.scrollLeft = 0;
    }
  }, [uniqueListClass, filmesAleatorios.length]);

  useEffect(() => {
    if (videos.length > 0) {
      const filtrados = videos.filter((movie) =>
        movie.categoria?.includes(titleCategory)
      );
      const embaralhados = [...filtrados].sort(() => Math.random() - 0.5);
      setFilmesAleatorios(embaralhados.slice(0, 10));
    } else {
      setFilmesAleatorios([]);
    }
  }, [videos, titleCategory]);

  const moveScroll = (direction) => {
    const element = document.getElementsByClassName(uniqueListClass)[0];
    if (!element) return;
    const scrollAmount = element.clientWidth * 0.8;
    if (direction === 1) element.scrollLeft += scrollAmount;
    if (direction === 2) element.scrollLeft -= scrollAmount;
  };

  return (
    <div className="movie-category">
      <section className="list-container">
        <h2>{titleCategory}</h2>

        <ButtonLeft onClick={() => moveScroll(2)} />

        <div className={`movie-list ${uniqueListClass}`}>
          {loading && <div className="loader">Carregando...</div>}

          {!loading && filmesAleatorios.length === 0 && (
            <div className="empty">
              Nenhum filme encontrado nesta categoria.
            </div>
          )}

          {filmesAleatorios.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onClick={(filme) => setFilmeSelecionado(filme)}
            />
          ))}
        </div>

        <ButtonRight onClick={() => moveScroll(1)} />
      </section>

      {filmeSelecionado && (
        <Card_movie
          movie={filmeSelecionado}
          onClose={() => setFilmeSelecionado(null)}
        />
      )}
    </div>
  );
}

export default List;
