import React from "react";
import { useParams } from "react-router-dom";
const Routing = () => {
  const { par, textColor, bgColor } = useParams();
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      {isNaN(+par) === false ? (
        <p>The number is {par}</p>
      ) : (
        <p>The word is {par}</p>
      )}
    </div>
  );
};

export default Routing;
