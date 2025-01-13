import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import { CircularProgress } from "@mui/material";
import { debounce } from "lodash";
import { Pagination } from "@mui/material";
import hero_image from "../assets/images/movie-hero.jpg";

const Movies = ({ query, setResults }) => {
  console.log(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // pagination
  const [totalPages, setTotalPages] = useState(0);
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);

  console.log(movies);

  const fetchData = useCallback(
    debounce(async (query, currentPage) => {
      console.log(currentPage);
      setLoading(true);
      try {
        const data = await axios.get(
          `https://www.omdbapi.com/?apikey=a17e11af&s=${query}&page=${currentPage}`
        );
        setMovies(data.data.Search);
        //showing result total movies in navbar
        setResults(data.data.totalResults);
        // for pagination satate math.ceil for divison of 10
        setTotalPages(Math.ceil(data.data.totalResults / 10));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchData(query, currentPage);
  }, [query, currentPage]);

  return (
    <div>
      {loading ? (
        <div className="h-[100vh] flex justify-center items-center">
          <CircularProgress sx={{ color: "white" }} />
        </div>
      ) : (
        <div>
          {movies?.length > 0 ? (
            <div className="grid grid-cols-3">
              {movies.map((movie) => (
                <Card movie={movie} />
              ))}
            </div>
          ) : (
            <img src={hero_image} alt="" className="relative object-contain" />
          )}
        </div>
      )}
      <div className="flex justify-center pb-10 items-center -z-20">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          className=" fixed bottom-3 rounded-lg bg-white"
        />
      </div>
    </div>
  );
};

export default Movies;
