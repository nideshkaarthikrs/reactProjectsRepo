import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-dark border border-info border-5 rounded-4 m-4">
      <div className="container-fluid">
        <a className="navbar-brand text-warning">Task Managing Application</a>
        <div className="d-flex">
          <a href="http://localhost:5173/" style={{ textDecoration: "none" }}
          className="text-warning">
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
