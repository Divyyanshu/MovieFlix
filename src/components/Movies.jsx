import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import { CircularProgress } from "@mui/material";
import { debounce, values } from "lodash";
import { FaRegSadCry } from "react-icons/fa";
import { Pagination } from "@mui/material";

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
    debounce(async (query ,currentPage) => {
      console.log(currentPage)
      setLoading(true);
      try {
        const data = await axios.get(
          `http://www.omdbapi.com/?apikey=a17e11af&s=${query}&page=${currentPage}`
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
    fetchData(query ,currentPage);
  }, [query,currentPage]);

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
            <p className="h-[100vh] flex justify-center items-center font-semibold font-mono text-[#F2AA4C] text-lg">
              No Movies Found Search in the serch bar !
              <span className="px-2">
                <FaRegSadCry />
              </span>
            </p>
          )}
        </div>
      )}
      <Pagination count={totalPages} page={currentPage} onChange={(e,value)=> setCurrentPage(value)}
      variant="outlined" shape="rounded" className="fixed bottom-0" />
    </div>
  );
};

export default Movies;

// import React, { useCallback, useEffect, useState } from "react";
// import axios from "axios";
// import { CircularProgress } from "@mui/material";
// import debounce from "lodash/debounce"; // Correct import for debounce

// const Movie = ({ query }) => {
//   console.log(query);
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   console.log(movies);

//   // Debounced fetchData function
//   const fetchData = useCallback(
//     debounce(async (query) => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `http://www.omdbapi.com/?apikey=a17e11af&s=${query}`
//         );
//         setMovies(response.data.Search || []); // Handle empty results
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setMovies([]); // Reset movies on error
//       } finally {
//         setLoading(false);
//       }
//     }, 1000),
//     []
//   );

//   useEffect(() => {
//     if (query) {
//       fetchData(query); // Trigger debounced function
//     }
//     return () => {
//       fetchData.cancel(); // Cleanup debounced function on unmount
//     };
//   }, [query, fetchData]);

//   return (
//     <div>
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <ul>
//           {movies?.length > 0 ? (
//             movies.map((movie) => (
//               <li key={movie.imdbID}>{movie.Title}</li>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Movie;
