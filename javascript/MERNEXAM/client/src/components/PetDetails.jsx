import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Typography, Paper } from "@mui/material";
const PetDetails = () => {
  const [pet, setPet] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/pet/${id}`)
      .then((res) => {
        setPet(res.data);
      })
      .catch((err) =>
        console.log("An error occured in petDetails component", err)
      );
  }, [pet, id]);

  const handleDelete = (petId) => {
    console.log("Deleting pet!");
    axios
      .delete(`http://127.0.0.1:8000/api/pet/${petId}`)
      .then((res) => {
        console.log(`Deleted ${pet.name}`, res);
        navigate("/");
      })
      .catch((error) => {
        console.log("An error occured on PetDetails delete component", error);
      });
  };

  return (
    <Typography>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Typography variant="h1">Pet Shelter</Typography>
            <Typography variant="h3">Details about {pet.name}</Typography>
          </div>
          <div className="col-sm">
            <div>
              <Link className="d-block my-3" to="/">
                Back to Home
              </Link>
              <button
                className="btn btn-danger"
                onClick={(e) => handleDelete(pet._id)}
              >
                Adpot {pet.name}
              </button>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <Paper elevation={3}>
            <div className="row w-75 p-5 align">
              <div className="col-sm text-end">
                <h5>Pet Type:</h5>
                <h5>Description: </h5>
                <h5>Skills: </h5>
              </div>
              <div className="col-sm text-start">
                <p>{pet.type}</p>
                <p>{pet.description}</p>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </Typography>
  );
};

export default PetDetails;
