import { useState } from "react";
import React from "react";

const Boxes = () => {
  const [boxColor, setBoxColor] = useState("");
  let [listOfBoxes, setListOfBoxes] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    let boxObj = { boxColor };
    console.log("Color was submitted!", boxObj);
    setListOfBoxes([...listOfBoxes, boxObj]);
  };

  return (
    <>
      <div>
        <div className="my-5">
          <form onSubmit={submitHandler}>
            <label>Color: </label>
            <input onChange={(e) => setBoxColor(e.target.value)} type="text" />

            <button type="submit" className="btn btn-outline-primary mx-2">
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <h1>Your Boxes</h1>
        {listOfBoxes.map((box) => {
          return (
            <div
              className="col-2 m-3"
              style={{
                backgroundColor: box.boxColor,
                height: "300px",
                width: "300px",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Boxes;
