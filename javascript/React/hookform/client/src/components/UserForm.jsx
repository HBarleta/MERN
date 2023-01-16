import { useState } from "react";
import React from "react";

const UserForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");

  return (
    <div className="col-5">
      <div>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                First Name:
              </span>
            </div>
            <input
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Last Name:
              </span>
            </div>
            <input
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email:
              </span>
            </div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Password:
              </span>
            </div>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Confirm Password:
              </span>
            </div>
            <input
              onChange={(e) => {
                setconfPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </div>
      <div className="col-5">
        <h1>Your Form Data</h1>
        <h3>First Name: {firstName}</h3>
        <h3>Last Name:{lastName}</h3>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
        <h3>Confirm Password: {confPassword}</h3>
      </div>
    </div>
  );
};

export default UserForm;
