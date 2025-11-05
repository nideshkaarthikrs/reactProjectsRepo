import './App.css';
// import logo from './assets/letsgoologo.png';
import React from 'react';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //       <img src={logo} alt="logo" class="App-logo" style={{boxShadow: "0.1rem 0.1rem" }} /> 
    //   </header>
    // </div>

    // WRITING REACT COMPONENTS WITHOUT JSK
    // React.createElement(typeOfElement, properties, children/text)

    // React.createElement('div', null, <h2>React Course</h2>)
    // React.createElement('div', null, React.createElement('h2', null, "I am inside a h2 in div"))
    // React.createElement('div', {id:'header', className:'myClass'}, React.createElement('h2', {style: {color:"red", backgroundColor:'black'}}, "I am inside a h2 in div"))

    React.createElement('div', null, 
      React.createElement('h1', null, "Welcome to my website!!!"),
      React.createElement('h3', null, "Wie geht's"),
      React.createElement('img', {src: 'https://picsum.photos/200', alt:"Image"})
    )
  );
}

export default App;
