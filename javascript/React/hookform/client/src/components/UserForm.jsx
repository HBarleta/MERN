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
            {firstName.length < 2 && firstName.length > 0 ? (
              <p className="text-danger">
                First name must be 2 characters long
              </p>
            ) : (
              ""
            )}
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
            {lastName.length < 2 && lastName.length > 0 ? (
              <p className="text-danger">Last name must be 2 characters long</p>
            ) : (
              ""
            )}
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
            {email.length < 5 && email.length > 0 ? (
              <p className="text-danger">
                First name must be 5 characters long
              </p>
            ) : (
              ""
            )}
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
            {password.length < 8 && password.length > 0 ? (
              <p className="text-danger">Password be 8 characters long</p>
            ) : (
              ""
            )}
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
            {confPassword.length < 8 && confPassword.length > 0 ? (
              <p className="text-danger">
                Password must be atleast 8 characters long
              </p>
            ) : (
              ""
            )}

            {confPassword !== password && confPassword.length > 0 ? (
              <p className="text-danger">Passwords must match!</p>
            ) : (
              ""
            )}
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
