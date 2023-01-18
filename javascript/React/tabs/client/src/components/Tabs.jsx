import { useState } from "react";
import React from "react";

const Tabs = (props) => {
  const items = props;
  const [tab, setTab] = useState("");
  return (
    <div className="row justify-content-around">
      <div className="col-5">
        <button className="m-4" onClick={() => setTab("tab1")}>
          Tab1
        </button>
        <button className="m-4" onClick={() => setTab("tab2")}>
          Tab2
        </button>
        <button className="m-4" onClick={() => setTab("tab3")}>
          Tab3
        </button>
      </div>
      <div className="border">
        <h1>{items.content[tab]}</h1>
      </div>
    </div>
  );
};

export default Tabs;
