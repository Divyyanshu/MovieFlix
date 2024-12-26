import React from "react";

const Navbar = ({setQuery , results}) => {
  // for serch handleChange
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(results)
  return (
    <div className="sticky top-0 z-10">
      <header className="m-2 h-16 p-5 flex items-center justify-between rounded-md bg-[#F2AA4C] drop-shadow-lg">
        <h1 className="font-mono text-xl font-semibold bg-white p-1 text-[#101820]">MoviesFlex🍿</h1>
        <div>
          <input
            type="text"
            onChange={handleChange}
            className="input text-[#101820] w-96 p-2 rounded-md drop-shadow-md outline-none placeholder-[#101820]"
            placeholder="Search movies"
            autoFocus
          />
        </div>
        <div>
          <p className="text-[#101820] font-semibold border-white border px-3 py-1 rounded-md">{results} Movies found</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
