import './App.css'
import Counter from './components/Counter'
import CounterWithInput from './components/CounterWithInput'
import MultifunctionalCounter from './components/MultifunctionalCounter'
import ObjectAsAStateValue from './components/ObjectAsAStateValue'

function App() {

  return (
    <div className="bg-danger-subtle m-2 text-center">
      {/* <Counter /> */}
      {/* <CounterWithInput /> */}
      {/* <ObjectAsAStateValue /> */}
      <MultifunctionalCounter />
    </div>
  )
}

export default App
