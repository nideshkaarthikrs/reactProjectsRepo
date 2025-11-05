import { connect } from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from "../redux/counter/actions"

const Counter = (props) => {
  return (
    <div>
        <h1>Counter</h1>
        <h3>{props.count}</h3>
        <br /><hr /><br />
        <button onClick={props.increment} >Increment (+)</button>
        <br /><br />
        <button onClick={props.decrement}>Decrement (-)</button>
        <br /><br />
        <button onClick={props.reset}>Reset (0)</button>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter()),
        reset: () => dispatch(resetCounter())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (Counter)