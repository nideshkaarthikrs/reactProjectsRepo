import React from "react";

const GreetUser1 = () => {
  // Approach 2: Using Element Variables (Single return statement)
  const isLoggedIn = true;
  let message;
  if (isLoggedIn) {
    message = <h1>Welcome User!</h1>;
  } else {
    message = <h1>Welcome Guest!</h1>;
  }
  return (
    <div>
        {message}
    </div>
  )
};

export default GreetUser1;
