import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const DisplayProducts = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/getone/${id}`)
      .then((res) => {
        console.log(
          "This is a getAll request from DisplayProducts component",
          res.data
        );
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("This is an error from DisplayProducts component", err);
      });
  }, [id]);

  const handleDelete = (id) => {
    console.log("This is a delete function");
    axios
      .delete(`http://127.0.0.1:8000/api/product/deleteone/${id}`)
      .then((res) => {
        console.log("item was deleted", res);
        navigate("/");
      })
      .catch((err) => {
        console.log(
          "An error occured in ProductForm component delete call",
          err
        );
      });
  };

  return (
    <div className="container mx-auto my-5">
      <div>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button
          onClick={() => {
            handleDelete(product._id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayProducts;
