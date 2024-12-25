import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { debounce } from "lodash";

const Movies = ({ query }) => {
  console.log(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(movies);

  const fetchData = useCallback(
    debounce(async (query) => {
      setLoading(true);
      try {
        const data = await axios.get(
          `http://www.omdbapi.com/?apikey=a17e11af&s=${query}`
        );
        setMovies(data.data.Search);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div>
      {loading ? <div className="max-h-[80vh] flex justify-center items-center"><CircularProgress sx={{ color: "white" }} /></div> : <p>{JSON.stringify(movies)}</p>}
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

