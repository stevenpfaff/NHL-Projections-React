import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
import Divisions from './components/Standings/Divisions';
import TeamCard from './components/Teams/TeamCard';


function App() {
  return (
    <div>
        <NavBar />
          <Route path="/" exact component={PlayoffOdds} />
          <Route path="/Divisions" exact component={Divisions} />
          <Route path="/Team/:id" exact component={TeamCard} />
    </div>
  )
}


export default App;