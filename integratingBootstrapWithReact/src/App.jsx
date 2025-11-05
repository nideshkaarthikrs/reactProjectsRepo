import './App.css'
import React from 'react';
import Header from './components/Header.jsx'
import TopicCard from './components/TopicCard.jsx'


function App() {
  return (
    <React.Fragment>
        <Header/>
        <TopicCard/>
        <TopicCard/>
        <TopicCard/>
        <TopicCard/>
    </React.Fragment>
  )
}

export default App
