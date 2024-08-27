import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
import Divisions from './components/Standings/Divisions';


function App() {
  return (
    <div>
        <NavBar />
          <Route path="/" exact component={PlayoffOdds} />
          <Route path="/Divisions" exact component={Divisions} />
    </div>
  )
}


export default App;