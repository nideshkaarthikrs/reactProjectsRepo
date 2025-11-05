Hooks  
=============  
Hooks are a new feature addition in React 16.8.
Before React 16.8 , state management can only be done with the help of class components

Hooks are special functions, that allow us to use state and other React features in functional components

Hooks are functions that make functional components work like class components

A Hook is just a special function that lets you "hook into" react features

Most commonly used hooks are --> useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer, useLayoutEffect, also we can create our own Custom Hooks in React

=== Rules of Hooks ===  
1. Only call Hooks at the Top Level - Don't call Hook inside loops, conditions, or nested functions  
2. Only call Hooks from React functions - Call them from within React functional components and not just any regular javascript functions


useState() hook:
________________

Used to create a state variable which helps us to track state in components and update the UI when the state is changed.

useState() returns an array
useState() returns a stateful value and a function to update it

const [state, setState] = useState(initialState) // state is the value