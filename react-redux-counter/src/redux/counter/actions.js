import { INCREMENT, DECREMENT, RESET } from "./types";

export function incrementCounter(incrementBy = 1) {
    return {
        type: INCREMENT,
        payload: incrementBy
    }
}
export function decrementCounter() {
    return {
        type: DECREMENT
    }
}
export function resetCounter() {
    return {
        type: RESET
    }
}