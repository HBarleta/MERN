import { useState } from "react";
import React from "react";

const Boxes = () => {
  const [boxColor, setBoxColor] = useState("");

  return (
    <div>
      <div className="my-5">
        <form>
          <label>Color: </label>
          <input onChange={(e) => setBoxColor(e.target.value)} type="text" />
          <button type="submit" className="btn btn-outline-primary mx-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Boxes;
