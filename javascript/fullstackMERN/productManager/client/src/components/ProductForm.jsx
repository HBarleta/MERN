import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/getall")
      .then((res, req) => {
        console.log(
          "This is a getAll request from DisplayProducts component",
          res.data
        );
        setProductList(res.data);
      })
      .catch((err) => {
        console.log("This is an error from DisplayProducts component", err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = { title, price, description };
    axios
      .post("http://127.0.0.1:8000/api/products/add", formObj)
      .then((res) => {
        console.log("This is your addproduct request form data", res);
      })
      .catch((err) => {
        console.log("This is an error from ProductForm component", err);
      });
  };

  return (
    <div className="container d-flex align-items-center">
      <div className="row mx-auto my-3">
        <div className="col-12">
          <h1>Add a Product</h1>
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
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                rows="3"
                cols="50"
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Create!
            </button>
          </form>
        </div>
        <hr />
        <h1>All Products</h1>
        {productList.map((p, idx) => {
          return (
            <div key={idx} className="m-3">
              <Link to={`/displayproduct/${p._id}`}>{p.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductForm;
