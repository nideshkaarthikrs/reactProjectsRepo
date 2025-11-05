For routing in react applications we use:

react-router-dom => for webapps
react-router-native => for mobile apps

--> INSTALLATION OF REACT ROUTER:
---------------------------------
In the project folder use the command: 

npm install react-router-dom 

--> USING THE REACT ROUTER:
---------------------------
1) Connect the URL in the browser to our react application by wrapping the App component in BrowserRouter component provided by react router library
In main.jsx/index.jsx
import {BrowserRouter} from 'react-router-dom'
<BrowserRouter>
<App />
</BrowserRouter>
By doing this, it will enable us to use all the features of the react router in all the child components of <App/>

2) For configuring the routes/path, we need to use the Route and Routes component from react router library
In App.jsx
import { Route, Routes } from 'react-router-dom'
<Routes>
    <Route path='' element= { <ComponentToBeRendered/> } > 
    Here we are configuring the path and the element to be rendered at that path
</Routes> 

3) For creating links, we use the Link component from react router library instead of the normal anchor tag in HTML , which might have some issues... (i.e. it migh not work as a single page application)
Do this in the component wherever it is required
import {Link} from 'react-router-dom'
<Link className="" to="">Home</Link>
Specify the path in the 'to' attribute
We can also style it using the className attribute


4) Especially for navbars, there is another component called the NavLink.
import { NavLink } from 'react-router-dom'
<NavLink to="">
This is designed to add styling or classes based on whether the link is active.
It doesn't just take a string for className. Instead, it can take a function that receives isActive and returns a class name.
i.e. NavLink is used to conditionally apply styles when the link is active and not all the time (static)
isActive is true if the current route matches the to path.
This lets you apply different styles or class names based on the active state.
<NavLink
  to="/"
  className = { ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  Home
</NavLink>
In React Router, a link is considered "active" when:
The 'to' path of the link matches the current URL in the browser.