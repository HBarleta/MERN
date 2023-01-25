import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Display = () => {
  const [songList, setSongList] = useState([]);
  // songList will take in res data from useEffect API call
  const [deleteToggle, setDeleteToggle] = useState(false);
  useEffect(() => {
    // this will render page on first load
    axios
      .get("http://127.0.0.1:8000/api/songs/")
      .then((res) => {
        console.log("this is my display page data", res.data);
        setSongList(res.data);
      })
      .catch((err) => console.log("This is my display page error", err));
  }, [deleteToggle]);

  const handleDelete = (e, id) => {
    console.log(`Deleteing song ${id}`, id);

    axios
      .delete(`http://127.0.0.1:8000/api/song/${id}`)
      .then((res) => {
        console.log("Deleted", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) =>
        console.log(
          "There was an error with delete function in Display component",
          err
        )
      );
  };

  return (
    <div className="container">
      <h1>Song Bird</h1>
      <Link className="btn btn-outline-success" to={"/create"}>
        Add a Song
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Rating</th>
            <th>Top 100</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songList.map((song, idx) => {
            return (
              <tr key={idx}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.rating}</td>
                {/* this song.top100 is a boolean, it needs to render conditionally depending on its value (true/false) */}
                <td>{song.top100 ? "Yes" : "No"}</td>
                <td>
                  <Link
                    to={`update/${song._id}`}
                    className="btn btn-outline-success"
                  >
                    {" "}
                    Edit
                  </Link>
                  {" | "}
                  <button
                    onClick={(e) => {
                      handleDelete(e, song._id);
                    }}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                  {" | "}
                  <Link
                    to={`details/${song._id}`}
                    className="btn btn-outline-primary"
                  >
                    {" "}
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
