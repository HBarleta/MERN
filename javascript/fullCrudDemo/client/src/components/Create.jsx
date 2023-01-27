import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState(5);
  const [top100, setTop100] = useState(false);
  // error validations
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleForm = (e) => {
    const songObj = { title, artist, rating, top100 };

    e.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/api/songs/`, songObj)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("This error is from our create page", err);
        // Front end validations to be stored in this array
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
          // this loop will push all error messages from catch to error array
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="container">
      <h1>Add a Song - create</h1>
      <form onSubmit={handleForm}>
        {/* error validations */}
        {errors.map((err, index) => (
          <p className="text-danger" key={index}>
            {err}
          </p>
        ))}
        {/* error validations array */}
        <div className="row ">
          <div>
            <label>Title: </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label>Artist: </label>
            <input
              onChange={(e) => {
                setArtist(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label>Rating: </label>
            <input
              onChange={(e) => {
                setRating(e.target.value);
              }}
              type="number"
            />
          </div>
          <div>
            <label>Top 100 ? : </label>
            <input
              onChange={(e) => {
                setTop100(e.target.checked);
              }}
              type="checkbox"
            />
            <button type="submit">Add a Song!</button>
            <Link className="btn btn-outline-danger" to={"/"}>
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
