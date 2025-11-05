# REDUX TOOLKIT (RTL):
-----------------------

## Redux Toolkit Overview

Redux Toolkit is the official, opinionated, batteries-included toolset for **efficient Redux development**.  
It is also intended to be the standard way to write redux logic in your application going forward.

Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best  
practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is beneficial  
to all Redux users regardless of skill level or experience.

## Why Redux Toolkit is needed?

There are two main reasons for that - it is about the concerns that developers had when using the library:

### 1. Configuring Redux in an app seems complicated
- Redux requires too much boilerplate code - for every state transition we define:  
  - an action type constant  
  - an action object  
  - an action creator  
  - and use that in a switch statement in a reducer  

A large scale application will have a lot of state transitions and repeating this pattern and boilerplate code will slowly start to annoy you.

### 2. A lot of other packages have to be installed to work with redux
- Simple state transitions don't need additional tools but for async actions you need the **redux-thunk** library.
- For handling nested state updates you need the **immer** library. Immer provides us with a `produce` function, which we can use to create a next state based on the current state.

Redux Toolkit comes bundled with Redux Thunk, so there is no need to manually go through middleware like Redux-Saga and Redux Thunk.

As a solution to these problems **redux-toolkit** was created and serves as an abstraction over redux.

React  ------  React-Redux  --------  Redux (Redux Toolkit)

**React-Redux** package is the official Redux UI binding library for React.

1. **react** is a library used to build user interfaces.  
2. **redux** is a library for managing state in a predictable way in JavaScript applications.  
3. **redux toolkit** is a library for efficient redux application development.  
4. **react-redux** is a library that provides bindings to use React and Redux Toolkit/Redux together in an application.


## RTL Installation and usage:

* Use command : npm install @reduxjs/toolkit react-redux
* Create folder named store (or anything) in src folder and a js file (store.js here)
* Create a folder named features (or anything) for storing all the functionality/feature related stuff
* We need to create a slice file (a convention used in RTL)
* We write action and reducer together with help of RTL, inside the slice file. (Slice is a conventional name used in RTL to name the files having the reducer+action logic)
* We use the createSlice() method inside the slice file.
* createsSlice() accepts an object containing, the name of the slice, initial state and the reducers
* createSlice({
  name: _____,
  initialState: _____,
  reducers: {
    
  },
})
* This will autoGenerate the action creators.