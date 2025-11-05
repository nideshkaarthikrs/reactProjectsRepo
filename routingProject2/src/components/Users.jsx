import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  // here the searchParams is an object, setSearchParams() is a method used to set the filter or do anything related to search parameters
  // it will be like URLSearchParams {filter -> 'active'} when we set the filter
  // it will be like URLSearchParams(0) when we reset the filter
  // searchParams has a method called get() which can be used to get the filter
  //like searchParams.get("filter") => this will return "active" when the filter is set and null if the filter is removed(reset)

  const areActiveUsers =
    searchParams.get("filter") === "active" ? true : false;

  return (
    <>
      <div>
        <h3>
          <Link to="1">User-1</Link>
        </h3>
        <h3>
          <Link to="2">User-2</Link>
        </h3>
        <h3>
          <Link to="3">User-3</Link>
        </h3>
      </div>{" "}
      <br />
      <div>
        <button
          className="btn btn-secondary mx-2"
          onClick={() => setSearchParams({ filter: "active" })}
        >
          Active Users
        </button>
        <button className="btn btn-dark" onClick={() => setSearchParams({})}>
          Reset Filter
        </button>
      </div>
      <div>
        {
            areActiveUsers ? <h1>Active Users</h1> : <h1>All Users</h1>
        }
      </div>
    </>
  );
};

export default Users;
