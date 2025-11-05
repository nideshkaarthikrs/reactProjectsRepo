import "./App.css";
import Counter from "./components/Counter";
import { Provider } from 'react-redux';
import store from "./redux/store";
import HooksCounter from "./components/HooksCounter";
import CustomizedCounter from "./components/CustomizedCounter";

function App() {
  return (
    <Provider store={store} >
      <>
        <Counter />
        <hr /><hr /><hr />
        <HooksCounter />
        <hr /><hr /><hr />
        <CustomizedCounter />
      </>
    </Provider>
  );
}

export default App;
