import React from "react";
import { useParams } from "react-router-dom";
const Teams = () => {
  const { city, color } = useParams();
  //useParams will take in variable names passed in through the Route path = "/teams/:city/:color" and apply it on this component
  return (
    <div>
      <h1>Teams</h1>
      {/* useParams variables can be inserted here as a variable for style or inside an h2 tag to display the VALUE of the useParams variable */}
      <h2 style={{ backgroundColor: color }}>Welcome to {city}</h2>
    </div>
  );
};

export default Teams;
