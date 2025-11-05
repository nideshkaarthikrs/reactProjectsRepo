import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkActiveStyle = (linkProperties) => {
    // the linkProperties contains the isActive property... it returns true only when the link is active
    return{
      fontFamily: "Lucida Console",
      color: linkProperties.isActive ? "red" : "black" , 
      fontWeight: linkProperties.isActive ? "bold" : "normal" ,
    }
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MySite
          </Link>

          <NavLink to="/" style={navLinkActiveStyle}>
            Home
          </NavLink>

          <NavLink to="/about" style={navLinkActiveStyle}>
            About
          </NavLink>

          <NavLink to="/contact" style={navLinkActiveStyle}>
            Contact
          </NavLink>

          <NavLink to="/users" style={navLinkActiveStyle}>
            User Dashboard
          </NavLink>          

          <NavLink to="/products" style={navLinkActiveStyle}>
            Products
          </NavLink>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
