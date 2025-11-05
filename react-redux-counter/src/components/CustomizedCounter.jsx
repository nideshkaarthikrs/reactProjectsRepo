import { useSelector, useDispatch } from "react-redux"
import { incrementCounter, resetCounter } from "../redux/counter/actions"
import { useState } from "react"

const CustomizedCounter = () => {
    const [c , setC] = useState(0)
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
  return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <br /><hr /><br />
            <input type="number" name="incrementNum" id="incNum" value={c} onChange={event => setC(event.target.value)} />
            <br /><hr /><br />
            <button onClick={() => dispatch(incrementCounter(c))} >Increment (+)</button>
            <br /><br />
            <button onClick={() => dispatch(resetCounter())}>Reset (0)</button>
        </div>
  )
}

export default CustomizedCounter