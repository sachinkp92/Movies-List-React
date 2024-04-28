import { useState } from "react";
import "./App.css";
import data from "./components/Data.json";
import Card from "./components/Card/Card";

function App() {
  // const [count, setCount] = useState(0)
  const [searchInput, setSearchInput] = useState("");
  const [moviesData, setMoviesData] = useState(data);

  // const onSearchInput = (event) => {
  //   setSearchInput(event.target.value);
  // };

  let searchResults = moviesData.filter((eachUser) =>
    eachUser.movietitle.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="bg-container">
        <header>
          <h2 className="mb-2">Movies List</h2>
          <input
            type="search"
            placeholder="search movie"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </header>
        <div className="container">
          <div className="row">
            {searchResults.map((eachItem) => (
              <Card cardDetails={eachItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
