import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import { DotLoader  } from "react-spinners";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("0");
  const [isLoading, setIsLoading] = useState(true); // State for loading

  useEffect(() => {
    // Simulate loading delay (e.g., data fetching or asset loading)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      {isLoading ? ( // Conditionally render the loader or the main app
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <DotLoader  color="#101820"/> {/* Loader */}
        </div>
      ) : (
        <>
          <Navbar setQuery={setQuery} results={results} />
          <Movies query={query} setResults={setResults} />
        </>
      )}
    </div>
  );
};

export default App;
