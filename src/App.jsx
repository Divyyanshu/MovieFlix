import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar setQuery={setQuery} />
      <Movie query={query} />
    </div>
  );
};

export default App;
