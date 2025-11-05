# Packages to be installed
* redux
* react-redux
* You can install both using a single command : npm i redux react-redux

# Folder structure of this project for redux
* All redux related stuff are under src/redux folder that I created.
* Inside the redux folder we will create separate folders for separate features.
* Here, counter is the only feature of this application, so I created a counter folder inside the redux folder and I have created separate javascript files for separate purposes.
* So there are separate files for type of actions, action creators , reducer
* The store is created in a file inside the redux folder
* Since createStore() from redux is deprecated react 4.2 onwards we would get a deprecation warning.
* So in order to make it clear that we are using the older createStore() by knowing it is deprecated, we use legacy_createStore(), which can be aliased as createStore. legacy_createStore is identical in functionality to the original createStore function.

# Making the redux store accessible all over our react application:
* For us to be able to access the store and the state in it, throughout the application, we use a component called <Provider></Provider> from react-redux library.
* Since app is the root component, we are enclosing everything inside the app component with the <Provider/> component.
* And in order to specify what our store is, we use the store prop in the Provider component like: <Provider store = {store}> </Provider>

# Dipatching an action and making it subscribe to the changes in the state (Two ways : Old way and New way)

## Old way:
1) Define a function mapStateToProps which takes the state as parameter and returns the object
2) Define a function mapDispatchToProps which takes in the redux dispatch method as a parameter and returns an object
3) We need to connect these two functions with the react component using the connect(), which is a higher-order component. Connecting Process: In the export default Counter --> make the change as follows: export default connect(mapStateToProps, mapDispatchToProps) (Container). Obviously you've gotta also include import {connect} from 'react-redux'. 
* Now what this will do is, this will enable us to access the state (count here) and the functions (increment, decrement, reset) through the props of the Counter component
 
## New way (using hooks):
1) We use the hooks : useSelector() and useDispatch() from react-redux library
2) useSelector() is similar to mapStateToProps() from the previous method. (Refer to the HooksCounter.js file for the implementation)