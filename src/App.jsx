import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <header className="m-2 h-14 p-5 flex items-center justify-between rounded-md bg-indigo-500 drop-shadow-lg">
        <h1>MoviesFlex🍿</h1>
        <div>
          <input
            type="text"
            className="input text-white w-96 p-2 rounded-md drop-shadow-md outline-none"
            placeholder="Search movies"
            autoFocus
          />
        </div>
        <div>
          <p>0 Movies found</p>
        </div>
      </header>
    </div>
  );
};

export default App;
