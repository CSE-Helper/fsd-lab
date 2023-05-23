//App.js
import React, { useState, useEffect } from "react";
import Axios from "axios";
import MovieComponent from "./components/MovieComponent";

export const API_KEY = "API_KEY"; //5c5f3a759b53bde8f244cf7431113834

function App() {
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    updateMovieList(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app__container">
      <div className="app__header">
        <div className="app__name">Popular Movies </div>
      </div>

      <div className="app__movielist">
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieComponent key={index} movie={movie} />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;

//MovieComponent.js
import React from "react";
import Axios from "axios";

import "./MovieComponent.css";
import "../App.css";

const API_KEY = "API_KEY"; //5c5f3a759b53bde8f244cf7431113834

const MovieComponent = (props) => {
  const { movie } = props;

  const getVideo = async (searchString) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
    );
    window.open(
      `https://www.youtube.com/watch?v=${response.data.results[0].key}`
    );
  };

  return (
    <div className="movie__card_container" onClick={getVideo}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
        className="movie__card_img"
      />
      <div className="movie__card_name">{movie.title}</div>
    </div>
  );
};
export default MovieComponent;
