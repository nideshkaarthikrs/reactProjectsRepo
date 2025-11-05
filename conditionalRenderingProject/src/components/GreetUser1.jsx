import React from "react";

const GreetUser1 = () => {
  const isLoggedIn = false;

  // Approach 1: Plain old JavaScript if...else statements
  if (isLoggedIn) {
    return <h1>Welcome User!</h1>;
  } else {
    return <h1>Welcome Guest!</h1>;
  }
};

export default GreetUser1;
