import React, { useState } from "react";
import { Link } from "react-router-dom";

const StarWars = () => {
  const [searchParam, setSearchParam] = useState("people");
  // searchParam is used to gather and set desired resource from drop down menu
  const [searchId, setSearchId] = useState("1");
  // searchId is used to gather and store desired ID for chosen resource
  const searchOptions = [
    // searchOptions is used to populate dropdown menu and pass in a value to searchParam to be used in Link / search button
    { label: "People", value: "people" },
    { label: "Planets", value: "planets" },
  ];

  return (
    <div className="container text-start my-5">
      <label>Search for : </label>
      <select className="m-3" onChange={(e) => setSearchParam(e.target.value)}>
        {searchOptions.map((options, idx) => {
          // mapping over searchOptions array to provide fixed search options
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
        className="m-3"
        type="number"
        onChange={(e) => setSearchId(e.target.value)}
      />
      {/* onClick will take in the variable holding the searchParam word and route it to the correct page.  */}
      <Link
        className="btn btn-primary"
        to={"results/" + searchParam + "/" + searchId}
        // this Link utilizes useParams to pass in searchParm and searchId into the route
      >
        Search
      </Link>
    </div>
  );
};

export default StarWars;

// search bar with drop down menu that is prepopulated with available people and planets options
// clicking on search will link to results page and pass in searchId and searchParams variables in the route
//
