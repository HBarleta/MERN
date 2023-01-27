import React from "react";

import { Link } from "react-router-dom";
import Form from "./Form";
const EditAuthor = () => {
  return (
    <div className="container text-start">
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <p>Edit this Author</p>
      <Form></Form>
    </div>
  );
};

export default EditAuthor;
