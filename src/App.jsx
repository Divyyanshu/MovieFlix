import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";

const App = () => {
  const [query, setQuery] = useState("");
  console.log(query)
  return (
    <div>
      <Navbar setQuery={setQuery} />
      <Movies query={query} />
    </div>
  );
};

export default App;
