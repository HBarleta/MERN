import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nb-div">
      <ul className="nav-bar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {/* Link to will direct the link to the correct page */}
        <li>
          <Link to={"aboutus"}>About Us</Link>
        </li>
        <li>
          <Link to={"contacts"}>Contacts</Link>
        </li>
        <li>
          <Link to={"players"}>Players</Link>
        </li>
        <li>
          <Link to={"teams"}>Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
