import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Typography, Button, Paper } from "@mui/material";

const PetForm = () => {
  // required fields
  const [name, setPetName] = useState("");
  const [type, setPetType] = useState("");
  const [description, setPetDesc] = useState("");
  // not required fields
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [editName, setEditName] = useState("");
  const handleSubmit = (e) => {
    const newPet = { name, type, description, skill1, skill2, skill3 };
    let editName = "";

    e.preventDefault();
    console.log("Form Submitted!");
    axios
      .post("http://127.0.0.1:8000/api/pets/add", newPet)
      .then((res) => {
        console.log("A Post request submitted", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("A Post error occured on PetForm component", err);
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
      .get(`http://127.0.0.1:8000/api/pet/${id}`)
      .then((res) => {
        console.log("This is a get request from PetForm component", res);
        const pet = res.data;
        setPetName(pet.name);
        setPetType(pet.type);
        setPetDesc(pet.description);
        setSkill1(pet.skill1);
        setSkill2(pet.skill2);
        setSkill3(pet.skill3);
        setEditName(pet.name);
      })
      .catch((err) => {
        console.log("This error came from my PetForm component", err);
      });
  }, [id]);

  return (
    <Typography>
      <div>
        <Link to="/">Home</Link>
        <div className="container text-start">
          <Typography variant="h1">Pet Shelter</Typography>
          <Typography variant="h3">
            {id === undefined
              ? "Know a pet needing a home"
              : `Edit ${editName}`}
          </Typography>
          <Paper elevation={3}>
            <div className="form-control">
              {errors.map((err, idx) => {
                return (
                  <p className="text-danger" key={idx}>
                    {err}
                  </p>
                );
              })}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                  <div className="col-sm">
                    <p>Pet Name:</p>
                    <input
                      value={name === "CastError" ? "" : name}
                      onChange={(e) => setPetName(e.target.value)}
                      type="text"
                    />
                    <p>Pet Type:</p>
                    <input
                      value={type === "CastError" ? "" : type}
                      onChange={(e) => setPetType(e.target.value)}
                      type="text"
                    />
                    <p>Pet Description</p>
                    <input
                      value={description === "CastError" ? "" : description}
                      onChange={(e) => setPetDesc(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="col-sm">
                    <h3>Skills</h3>
                    <p>Skill 1:</p>
                    <input
                      value={skill1 === "CastError" ? "" : skill1}
                      onChange={(e) => setSkill1(e.target.value)}
                      type="text"
                    />
                    <p>Skill 2:</p>
                    <input
                      value={skill2 === "CastError" ? "" : skill2}
                      onChange={(e) => setSkill2(e.target.value)}
                      type="text"
                    />
                    <p>Skill 3:</p>
                    <input
                      value={skill3 === "CastError" ? "" : skill3}
                      onChange={(e) => setSkill3(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <Button variant="contained" color="primary" type="submit">
                  {" "}
                  {id === undefined ? "Add Pet" : "Update Pet"}
                </Button>

                <Link className="btn btn-danger" to="/">
                  Cancel
                </Link>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    </Typography>
  );
};

export default PetForm;
