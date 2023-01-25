import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
const Update = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState(5);
  const [top100, setTop100] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/songs/${id}`)
      .then((res) => {
        console.log("This is my update get request", res);
        const song = res.data;
        setTitle(song.title);
        setArtist(song.artist);
        setRating(song.rating);
        setTop100(song.top100);
      })
      .catch((err) => {
        console.log("This is an error on my update component", err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    const putObj = { title, artist, rating, top100 };
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/song/${id}`, putObj)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log("Error in update PUT request", err));
  };

  return (
    <div className="container">
      <h1>Update Song!</h1>
      <form onSubmit={handleUpdate}>
        <div className="row ">
          <div>
            <label>Title: </label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label>Artist: </label>
            <input
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label>Rating: </label>
            <input
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              type="number"
            />
          </div>
          <div>
            <label>Top 100 ? : </label>
            <input
              checked={top100}
              //   checked is a boolean value
              onChange={(e) => {
                setTop100(e.target.checked);
              }}
              type="checkbox"
            />
            <button type="submit">Update Song!</button>
            <Link className="btn btn-outline-danger" to={"/"}>
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
