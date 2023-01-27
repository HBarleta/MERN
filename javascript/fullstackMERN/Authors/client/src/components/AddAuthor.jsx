import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";
const AddAuthor = () => {
  return (
    <div className="container text-start">
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <Form></Form>
    </div>
  );
};

export default AddAuthor;
