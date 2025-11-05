!IMPORTANT THING BEFORE MOVING ON!
----------------------------------
While specifying path in 'to' attribute of Link of NavLink component, if we give the path with slash, then it is absolute path, and if we give it without slash then it is relative path.
eg:
let's say the current path is localhost:3000/products

if a link is clicked and it is implemented like <Link to="/featured" ></Link>
then we will be routed to localhost:3000/featured

but if it is implemented as <Link to="featured" ></Link> then we will be routed to localhost:3000/products/featured

ANOTHER WAY TO STYLE:
---------------------

Here we've discussed another way to style the NavLink component, that is by returning the style from a function and then passing the function to the style attribute of the NavLink compoenent/tag

The argument of the function has an object which contains the isActive property.
(In our example i've named the argument as linkProperties)

NAVIGATING PROGRAMATICALLY:
---------------------------

For example, sometimes when we click on a button, we might wanna route to another page/component. That is what we will be doing here.

1) Configure a route in App.jsx
2) Add the onClick attribute to the button and write a call back function to be executed when the button is clicked
3) Now, in order to programatically redirect to another page on button click, we will be using a hook called useNavigate() which is available in react-router-dom package
import {useNavigate} from 'react-router-dom';
4) initialise a variable as such
let navigate = useNavigate();
5) Now inside the callback function use the navigate method and pass the relative path as an argument like:
function handleButtonClick() {
    navigate("path")
}

*) Now we will learn how to navigate programatically back to the previous page based on history...
we will use the useNavigate() hook here too, like the previous one...
but here we will redirect to the previous page when the button is clicked
import {useNavigate} from 'react-router-dom';
let navigate = useNavigate();
//inside callback function
function handleButtonClick() {
    navigate(-1)
}
when we pass -1 as the parameter to navigate, we will be redirected to the previous page


*) Normally, when you navigate, React Router pushes a new entry into the browser’s history stack.
{replace: true} means: don’t push a new entry, replace the current one.
In practice, when you’re going back (-1), this prevents weird extra history entries from being created.

Example:
--------
User is on /dashboard.
User navigates to /settings.
On /settings, they click your button → navigate(-1, { replace: true }).
They are sent back to /dashboard.
If they now hit the browser’s back button, they won’t go back to /settings again, because it was replaced.


IMPLEMENTING PageNotFound:
--------------------------
So if an user unknowingly (or knowingly, hahaha), enters a non-existant URL, we have to show then PageNotFound... 
1) So create a component to be displayed when a page is not found, say PageNotFound component
2) Now we need to configure the route in App.jsx as such
<Route path='*' element={ <PageNotFound /> } />
In react routing * has the least precedence and it means 'anything'
i.e. this will get matched only when no other routes match with the given url/path
(to test this functionality try giving random url paths in the address bar)


NESTED ROUTES:
--------------

-> Used to render a child component inside a parent component
-> It helps us to switch between a portion of the view inside the page
For example if we have a component called Products and its relative url is /products and it has two other links "Featured" and "New". Now if we click on Featured, we should be able to route to a relative path like products/featured. Similarly for new.

Two ways to implement this:

1) In App.jsx directly create new Route component with the desired path like:

<Route path="/products/featured" element={ <FeaturedProducts /> } />

2) Nest the Route component for the child element inside the parent element's Route component like:
 
<Route path="/products" element={ <Products /> } >
    <Route path="featured" element={ <FeaturedProducts /> } />
</Route>

But just by doing this the component will not be visible... The path will change correctly but in order for us to be able to see the component properly, we need to specify where the component should be displayed

For this, we need to use another component from react router library, called Outlet.
import { Outlet } from 'react-router-dom'

Just put that Outlet component like <Outlet /> wherever you want those child components to be displayed... then react will take care of the rest...

So if we just do the above things, just the product component code will be displayed until we click on Featured or New link... but by default if we want one of it to be displayed then we use the Route component with index attribute and give the element to be displayed... path is not needed...
like: <Route index element={ <FeaturedProducts /> } />
This should also be nested inside the parent component route


DYNAMIC ROUTES:
--------------

For example if we have a user dashboard containing the list of all users and if we click on any particular user, then the details of that user should be displayed then this is what we use.

Let's say we have a UserDetails component, which displays the data of specific users.

If the url of users dashboard is localhost:3000/users and if we click on user-1's details then we should go to localhost:3000/users/1 (This is called generally as Path Variable but in react-router it is called as URL Param)

In App.jsx
For implementing this we use :someThing in the path like
<Route path="users/:uid" element={ <UserDetails/> } >

Even multiple URL params can be given like path='users/:uid/:vid/:wid' and so on... as required

So now that we have configured the route with URL params, now we need to be able to get the value of the URL param to identify the user.

So for this we use a hook called useParams() from react router library
useParams() will return us an object which will contain the URL param. (whatever name we used in the path)

(For testing it out just give random url like localhost:3000/users/2)

eg:
In UserDetails.jsx
import { useParams } from 'react-router-dom'
let params = userParams()
const userId = params.uid

userParams() will return an object containing all the URL params that we give.

For eg:

In App.jsx
<Route path="users/:uid/:uname" element={ <UserDetails/> } >

In UserDetails.jsx
import { useParams } from 'react-router-dom'
let params = useParams()
const userId = params.uid
const userName = params.uname //now we can use these


There is another hook called useSearchParams() in react router library.
It works similar to useState() hook

Now we will learn what are path parameters/variables and query parameters/string and search parameters

Consider this example:

localhost:3000/users/1 --> Path parameters/variables as we saw already
localhost:3000/users?uid=1 --> Query parameters/string (Query parameters come with key:value pair)
localhost:3000/users?filter=active --> Search parameters (used to filter and return stuff)

So we will implement an example to understand search parameters:

We will create two buttons , one for filtering out the active users and another to reset the filter and display the entire list.
Refer to Users.jsx for its implementation. 
