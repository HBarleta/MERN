import React, { useState } from "react";

const Pokemon = () => {
  const [pokeContainer, setPokeContainer] = useState([]);
  const grabPokeNames = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log("the results are :", response.results);
        return setPokeContainer([...response.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Pokemon API!</h1>
      <button onClick={grabPokeNames}> Fetch Pokemon Names!</button>
      <div className="row">
        <ul>
          {pokeContainer.map((onePoke, idx) => {
            return (
              <li id={idx} className="text-capitalize">
                {idx + 1 + ". "}
                {onePoke.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
