import React, { useState } from "react";
import Data from "./city.json";

const Search = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div>
      <center>
        <h1>City Search</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {Data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </center>
    </div>
  );
};

export default Search;
