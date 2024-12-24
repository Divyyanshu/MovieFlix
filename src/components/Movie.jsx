import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = ({ query }) => {
  console.log(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovie = async (query) => {
    setLoading(true);
    try {
      const data = await axios.get(
        `https://www.omdbapi.com/?apikey=a17e11af&=${query}`
      );
      setMovies(data.data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  },[query]);
  return <>
  <div>movie</div>
  </>;
};

export default Movie;
