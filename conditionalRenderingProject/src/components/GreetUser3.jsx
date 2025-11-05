import React from 'react'

const GreetUser3 = () => {
    // Approach 3: Using ternary operator ?:
    let isLoggedIn = false;
//   return (
//         isLoggedIn ? <h1>Welcome User!</h1> : <h1>Welcome Guest!</h1> 
//   )
    return (
        <div>
            {isLoggedIn ? <h1>Welcome User!</h1> : <h1>Welcome Guest!</h1>}
        </div>
    )
}

export default GreetUser3
