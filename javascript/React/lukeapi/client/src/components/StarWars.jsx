import React, { useState } from "react";
import axios from "axios";

const StarWars = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchParam, setSearchParam] = useState("people");
  const [searchId, setSearchId] = useState("");
  const searchOptions = [
    { label: "People", value: "people", count: 82 },
    { label: "Planets", value: "planets", count: 60 },
    { label: "Vehicles", value: "vehicles", count: 39 },
    { label: "Starships", value: "starships", count: 36 },
    { label: "Films", value: "films", count: 6 },
  ];

  const searchUniverse = () => {
    console.log("my function works");
    axios
      .get("https://swapi.dev/api/" + searchParam + "/" + searchId)
      //   base url will be concatenated with search values for the particular search
      .then((res) => {
        setSearchData(...[res.data]);

        console.log("This is my Api call", res.data);
      })
      .catch((err) => {
        console.log("This is my errors", err);
      });
  };

  return (
    <div>
      <label>Search for : </label>
      <select onChange={(e) => setSearchParam(e.target.value)}>
        {searchOptions.map((options, idx) => {
          return (
            <option key={idx} value={options.value}>
              {options.label}
            </option>
          );
        })}
      </select>
      {/* this will populate with the correct amount of IDs available for current search param */}
      <label>ID: </label>

      <input
        onChange={(e) => setSearchId(e.target.value)}
        type="number"
        min={1}
      />
      <button onClick={searchUniverse}> SEARCH </button>

      {/* on click of this button should initiate a filter method to parse through entire universe data set */}
      <div>
        <h1>{searchData.name}</h1>
      </div>
    </div>
  );
};

export default StarWars;

// search bar with drop down menu that is prepopulated with available people, vehicles, planets
// id drop down menu with prepopulated id for each vehicle, planet or people
// search button will filter out API call from axios and useEffect will add all available data to universe const once page loads
// div below search will display requested information
