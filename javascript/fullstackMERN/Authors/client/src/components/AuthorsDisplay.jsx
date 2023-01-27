import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
const AuthorsDisplay = () => {
  const [authorList, setAuthorList] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/authors/all`)
      .then((res) => {
        console.log("this is get all request from Display component", res.data);
        setAuthorList(res.data);
      })
      .catch((err) =>
        console.log("This is a get request error from display component", err)
      );
  }, [deleteToggle]);

  const handleDelete = (id) => {
    console.log("you deleted me!");
    axios
      .delete(`http://127.0.0.1:8000/api/author/${id}`)
      .then((res) => {
        console.log("Deleted", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => {
        console.log(
          "An error occured in Delete request from Display component",
          err
        );
      });
  };

  return (
    <div className="container">
      <h1>Favorite authors</h1>
      <Link to="/author/add">Add an Author</Link>
      <table>
        <thead>
          <th>Name</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {authorList.map((one, idx) => {
            return (
              <tr>
                <td key={idx}>{one.name}</td>
                <td>
                  <Link
                    className="btn btn-outline-success"
                    to={`/author/edit/${one._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(one._id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsDisplay;
