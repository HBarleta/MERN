import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const SearchResults = () => {
  const [searchData, setSearchData] = useState([]);
  // searchData and setSearchData are used to get and set response from axios call
  const { search, id } = useParams();
  // search, id are params passed from StarWars component to be used in API call
  const navigate = useNavigate();
  // navigate is used to display an error page when an invalid API call is made
  useEffect(() => {
    // useEffect will render when page fist loads after search parameters have been chosen and submitted
    axios
      .get("https://swapi.dev/api/" + search + "/" + id)
      .then((res) => {
        setSearchData(...[res.data]);
        // captures response from API call and sets it into searchData
        console.log("This is my response from API call", res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          navigate("/displayerror");
          // navigates to displayerror page when an invalid request is made
        }
        console.log("This was your error", err);
        // logs error into console
      });
  }, [search, id, navigate]);
  // dependancy array will monitor any changes in search, id variables to determine a change in search request

  return (
    <div className="container">
      <div className="text-start my-5">
        {/* First attribute will always have a name attribute in both planets and people */}
        <h3>
          Name: {/* {" "} was used for extra space between name and data */}
          <span className="fw-normal text-capitalize">{searchData.name}</span>
        </h3>
        {/* second attribute and all subsequent attributes will use a conditional depending on what search parameter is used*/}
        {search === "planets" ? (
          // ternary statement to check if search parameter is planets or people
          <h3>
            Climate:{" "}
            <span className="fw-normal text-capitalize">
              {searchData.climate}
              {/* different attributes are available in people or planets resources. most are exclusive to that particular resource */}
            </span>
          </h3>
        ) : (
          <h3>
            Hair Color:{" "}
            <span className="fw-normal text-capitalize">
              {searchData.hair_color}
            </span>
          </h3>
        )}
        {/* third attribute */}
        {search === "planets" ? (
          <h3>
            Terrain:{" "}
            <span className="fw-normal text-capitalize">
              {searchData.terrain}
            </span>
          </h3>
        ) : (
          <h3>
            Gender:{" "}
            <span className="fw-normal text-capitalize">
              {searchData.gender}
            </span>
          </h3>
        )}
        {/* fourth attribute */}
        {search === "planets" ? (
          <h3>
            Gravity:{" "}
            <span className="fw-normal text-capitalize">
              {searchData.gravity}
            </span>
          </h3>
        ) : (
          <h3>
            Eye Color:{" "}
            <span className="fw-normal text-capitalize">
              {searchData.eye_color}
            </span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
