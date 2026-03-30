import React, { useState } from 'react'
import Game from "./components/Game";
import Dashboard from "./components/Dashboard";
import './App.css'

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshDashboard = () => {
    setRefresh(prev => !prev);
  };

  return (
    <div id='game'>
      <div className='blocks'>
        <Game refreshDashboard={refreshDashboard} />
      </div>

      <div className='blocks'>
        <Dashboard refresh={refresh} />
      </div>
    </div>
  )
}

export default App