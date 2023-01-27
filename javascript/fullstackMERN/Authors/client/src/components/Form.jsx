import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    const newName = { name };
    e.preventDefault();
    console.log("Form Submitted!");
    axios
      .post("http://127.0.0.1:8000/api/authors/add", newName)
      .then((res) => {
        console.log("A Post request submitted", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("A Post error occured on AddAuthor component", err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/author/${id}`)
      .then((res) => {
        console.log("This is my get request for Update Component", res);
        const author = res.data;
        setName(author.name);
      })
      .catch((err) => {
        console.log("This is an error on my edit component", err);
      });
  }, [id]);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {errors.map((err, idx) => {
        return (
          <p className="text-danger" key={idx}>
            {err}
          </p>
        );
      })}
      <div className="bg-light w-25 p-4 d-block mt-3">
        <p>Name:</p>
        {"  "}
        <input
          value={name === "CastError" ? "" : name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <Link className="btn btn-danger my-3" to="/">
          Cancel
        </Link>
        <button type="submit" className="btn btn-outline-primary mx-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
