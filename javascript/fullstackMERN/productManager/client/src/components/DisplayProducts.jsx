import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const DisplayProducts = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/getone/${id}`)
      .then((res, req) => {
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

  return (
    <div className="container mx-auto my-5">
      <div>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default DisplayProducts;
