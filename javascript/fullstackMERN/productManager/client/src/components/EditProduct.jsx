import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/getone/${id}`)
      .then((res) => {
        console.log("This is a get request for Edit component", res.data);
        const product = res.data;
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
      })
      .catch((err) => {
        console.log("This error comes from Edit component", err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = { title, price, description };
    axios
      .put(`http://127.0.0.1:8000/api/product/updateone/${id}`, formObj)
      .then((res) => {
        console.log("This is your addproduct request form data", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("This is an error from Edit resquest component", err);
      });
  };
  return (
    <div className="container">
      <h1>EditProduct</h1>
      <form onSubmit={handleSubmit} className="m-5">
        <div className="input-group m-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Title:
            </span>
          </div>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group m-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Price:
            </span>
          </div>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group m-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Description:
            </span>
          </div>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            rows="3"
            cols="50"
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Update Product
        </button>
        <Link to="/" className="btn btn-danger mx-5">
          {" "}
          Cancel{" "}
        </Link>
      </form>
    </div>
  );
};

export default EditProduct;
