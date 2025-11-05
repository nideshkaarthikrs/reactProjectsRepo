const redux = require("redux");

// CREATING THE STORE
const createStore = redux.createStore; // This is a function that acccepts one parameter i.e, the reducer function

// STATE OBJECT
const initialState = {
  numOfCakes: 10,
};

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

// ACTION CREATOR FUNCTION
function orderCake() {
  // ACTION OBJECT
  return {
    type: CAKE_ORDERED,
    payload: 1,
    info: "Buy a cake",
  };
}

function restockCake(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity,
        info: "Cake is restocked",
    }
}


// REDUCER FUNCTION
const reducer = (prevState = initialState, action) => {
  console.log("Reducer executed!");
  if (prevState.numOfCakes > 0) {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...prevState,
          numOfCakes: prevState.numOfCakes - 1,
        }
      case CAKE_RESTOCKED:
        return {
            ...prevState,
            numOfCakes: prevState.numOfCakes + action.payload,
        }
      default:
        return prevState;
    }
  }
  return prevState;
};

// ACTUALLY CREATING THE STORE
const store = createStore(reducer);

console.log("Initial State -", store.getState());

//If any state change happens, then the callback function inside subscribe function gets executed
//  subscribe creates a listener which listens for state change
// subscribe function also returns a function that can be used to stop the listener from listening (here i've named it unsubscribe)
let unsubscribe = store.subscribe(() =>
  console.log("State got updated to -", store.getState())
);

// Dispatching an action
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake())
store.dispatch(orderCake());
store.dispatch(restockCake(7))


unsubscribe();
