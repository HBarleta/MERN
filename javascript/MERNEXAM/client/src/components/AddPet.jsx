import React from "react";
import PetForm from "./PetForm";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const AddPet = () => {
  return (
    <div>
      <Typography>
        <PetForm></PetForm>
      </Typography>
    </div>
  );
};

export default AddPet;
