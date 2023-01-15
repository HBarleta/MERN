import { useState } from "react";
import React from "react";

const UserForm = (props) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { userName, email, password };
    console.log("Welcome", newUser);
  };

  return (
    <form onSubmit={createUser}>
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <label>Username:</label>
          <input
            type="text"
            className="input-group input-group-sm mb-3"
            onChange={(e) => setUsername(e.target.value)}
            value={userName}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <label>Email Address: </label>
          <input
            type="text"
            className="input-group input-group-sm mb-3"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <label>Password:</label>
          <input
            type="password"
            className="input-group input-group-sm mb-3"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <input type="submit" value="Create User" />
    </form>
  );
};
export default UserForm;
