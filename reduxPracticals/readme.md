# State Management with Redux.

* This project is purely to learn redux.
* I created the package.json file by using : npm init --yes
* Here we will be using an older version of redux (4.1.2)
* Installed redux using: npm install redux@4.1.2
* To run the JS file use : node <filename>

## Core concepts in Redux:

1) Store:
- Analogy: Shelf in cake shop
- Holds the state of our application
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- It registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener)

2) Action:
- Analogy: Intention of coming to a cake shop (For buying a cake)
- Describes what to happen (No. of cakes to be reduced by one in the shelf)
- An action that describes the changes in the state of the application
- An action is an object (JS object) with type property that indicates the type of action being performed
- The type properties are typically defined as string constants
- An action creator is a function that returns an action
- Actions are the only way for our application to interact with the store
- Actions carry some information form the application to redux store
-

3) Reducer:
- Analogy : Shopkeeper of the cake shop
- Receives the action and performs it (Removes the cake from the shelf)
- Carries out the state change

## Three principles in Redux:

- These principles describe the redux pattern   

1) The state of the whole application is stored in an object within a single store.
- eg: {
    numOfCakes: 10
} 

2) The only way to change the state is to emit/dispatch an action, an object describing what happened. (There are many properties , but 'type' property is must.)
- eg: {
    type: "BUY_CAKE"
}

3) To specify how the state tree is transformed by actions, we write pure reducers (functions)
- eg: (prevStates, action) => newState