import './App.css'
import Greet from './components/Greet'

function App() {
  return (
    <>
      <Greet name="NK"/>
      <Greet name="Max"/>
      <Greet name="Jerry"/>
      <Greet name ="Stewart">
        <p>This is Stewart block</p>
        <hr />
        <p>Yes it is indeed!!!</p>
        <hr />
      </Greet>
    </>
  )
}

export default App
