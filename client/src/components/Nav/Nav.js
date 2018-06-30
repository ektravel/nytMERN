import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
     <Link className="navbar-brand" to="/">NYT Article Search</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Search</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/saved">Saved</Link>
      </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
