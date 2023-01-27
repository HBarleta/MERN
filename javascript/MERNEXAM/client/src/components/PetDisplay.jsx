import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
const PetDisplay = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pets/all")
      .then((res) => {
        console.log(
          "This is a get all request from PetDisplay component",
          res.data
        );
        setPetList(res.data);
      })
      .catch((err) =>
        console.log(
          "This is a get request error from PetDisplay component",
          err
        )
      );
  }, []);
  return (
    <Typography>
      <div className="container">
        <div className="d-flex">
          <div className="text-start">
            <Typography variant="h1">Pet Shelter</Typography>
            <Typography variant="h4">
              These pets are looking for a good home
            </Typography>
          </div>
          <Typography variant="h6">
            <Link to="/pets/add">Add a pet to the shelter</Link>
          </Typography>
        </div>
        <table className="table my-5">
          <thead>
            <th>Name:</th>
            <th>Type:</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {petList.map((one, idx) => {
              return (
                <tr>
                  <td key={idx}>{one.name}</td>
                  <td>{one.type}</td>
                  <td>
                    <Button variant="contained" color="success">
                      <Link className="btn" to={`/pets/view/${one._id}`}>
                        Details
                      </Link>
                    </Button>
                    {"  "}
                    <Button variant="contained" color="secondary">
                      <Link className="btn mx-3" to={`/pets/edit/${one._id}`}>
                        Edit
                      </Link>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Typography>
  );
};

export default PetDisplay;
