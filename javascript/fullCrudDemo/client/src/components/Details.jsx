import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const [song, setSong] = useState([]);
  // variable to hold song data from API call
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => console.log("Error occured in details component: ", err));
  }, [song, id]);

  return (
    <div>
      <h1>Song Details</h1>
      <p>Title: {song.title}</p>
      <p>Artist: {song.artist}</p>
      <p>Rating: {song.rating}</p>
      <p>Top100: {song.top100 ? "Yes" : "No"}</p>
      <Link to={"/"} className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default Details;
