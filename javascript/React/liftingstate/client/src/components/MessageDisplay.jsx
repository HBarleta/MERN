import React, { useState } from "react";

const MessageDisplay = (props) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-5">
          <h1>Current Message</h1>
          <pre>{props.message}</pre>
        </div>
      </div>
    </>
  );
};

export default MessageDisplay;
