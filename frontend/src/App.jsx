import React from 'react'
import Game from "./components/Game";
import Dashboard from "./components/Dashboard";
import './App.css'

const App = () => {
  return (
    <>
    <div id='game'>
      <div className='blocks'>
        <Game />
      </div>

      <div className='blocks'>
        <Dashboard />
      </div>
    
    </div>
    
    </>
  )
}

export default App