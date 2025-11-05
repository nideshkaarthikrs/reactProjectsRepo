import './App.css'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Welcome actualName="Tony Stark" heroName="Iron Man"></Welcome>
      <Welcome actualName="Peter Parker" heroName="Spider Man"></Welcome>
      <Welcome actualName="Bruce Banner" heroName="Hulk"></Welcome>
      <Welcome actualName="Chris Woakes"></Welcome>
    </>
  )
}

export default App
