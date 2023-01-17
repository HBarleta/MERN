import { useState } from "react";
import React from "react";

const Tabs = (props) => {
  const items = props;
  const [tab, setTab] = useState("");
  return (
    <div>
      <button onClick={() => setTab(0)}>Tab1</button>
      <button onClick={() => setTab(1)}>Tab2</button>
      <button onClick={() => setTab(2)}>Tab3</button>
      <div className="border">
        <h1>{items.content[tab]}</h1>
      </div>
    </div>
  );
};

export default Tabs;
