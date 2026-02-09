useEffect() hook:
-----------------

Used to perform side effects in our functional components

Side effects are some actions which we perform outside world (react component or code) 
eg: 1.fetching data from an API 
    2.posting data and deleting data using API
    3.directly updating DOM - using document or window object in JavaScript
    4.using JavaScript timer functions like - setTimeout(), setInterval()
    etc...

useEffect = componentDidMount + componentDidUpdate + componentWillUnmount (class component lifecycle methods)


Syntax for using useEffect() hook:
useState(callbackFunction, dependencies)
callbackFunction - what to run -> we write the sideEffect logic
dependencies - when to run

To use this:
------------
import {useEffect} from 'react';


--- Variations of useEffect ---

1) useEffect() without dependencies - useEffect(callback)
Here useEffect() gets called automatically first when the page is loaded and then whenever there is a render or a state change in the component where useEffect() is used ....

2) useEffect() with an empty array as a dependency - useEffect(callback, [])
Here useEffect() gets called automatically first when the page is loaded i.e. when our component renders for the first time and that's it... It will not be called if there is a state change or in case of any renders
example usecase of this:
if we want to fetch data from an API and display it on the page when the page is loaded and not change the data whenever there is a stateChange or something is rendered

3) useEffect() with dependencies - useEffect(callback, [dependency1, dependency2,...])
Here useEffect() gets called automatically first when the page is loaded i.e. when our component renders for the first time and then whenever our dependency/state changes


Example Implementation:
-------------------------
Changing the tite of the webpage on button click (DOM Manipulation)
So this is counted as a side effect. Hence we need to use the useEffect() hook
