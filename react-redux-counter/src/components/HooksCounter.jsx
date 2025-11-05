import { useSelector, useDispatch } from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from "../redux/counter/actions"

const HooksCounter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <br /><hr /><br />
        <button onClick={() => dispatch(incrementCounter())} >Increment (+)</button>
        <br /><br />
        <button onClick={() => dispatch(decrementCounter())}>Decrement (-)</button>
        <br /><br />
        <button onClick={() => dispatch(resetCounter())}>Reset (0)</button>
    </div>
  )
}


export default HooksCounter;