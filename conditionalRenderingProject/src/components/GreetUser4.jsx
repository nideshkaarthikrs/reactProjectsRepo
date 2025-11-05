import React from 'react'

const GreetUser4 = () => {
    //Approach 4: Using short circuit operators && , ||

    // <condition> && <Thing to be displayed>
    // if the condition is true then the thing will be displayed else it won't be displayed (like logic gate "AND")


    let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <h1>Welcome User!</h1>}
    </div>
  )
}

export default GreetUser4


