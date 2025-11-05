import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MySite
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                } // Here, only if the link is active the 'active' class will be added to the NavLink or else just the nav-link class will be there. Now you can use css to style the tag when the link is active i.e. using the 'active' class
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
