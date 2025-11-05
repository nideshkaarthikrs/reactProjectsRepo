import { INCREMENT, DECREMENT, RESET } from "./types";

const initialState = {
    count: 0
}

function reducer(prevState = initialState, action){
    switch(action.type) {
        case INCREMENT:
            return {
                ...prevState,
                count: prevState.count + parseInt(action.payload)
            }
        case DECREMENT:
            return {
                ...prevState,
                count: prevState.count - 1
            }
        case RESET:
            return {
                ...prevState,
                count: 0
            }
        default:
            return prevState
    }
}

export default reducer;