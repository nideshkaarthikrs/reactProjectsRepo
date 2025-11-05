import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <input
        type="search"
        autoFocus="autoFocus"
        placeholder="Search a product"
      />
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="featured">
                Featured
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="new">
                New
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{margin: "30px"}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
