import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
// import OddsStandings from './components/Standings/OddsStandings';
import Preseason from './components/Standings/Preseason';
import PreseasonOdds from './components/Playoff Odds/PreseasonPO';
import TeamCard from './components/Teams/TeamCard';
import Vibes from './components/Standings/Vibes';
import PlayoffOddsChart from './components/Playoff Odds/OddsChart';
import FinalResults from './components/Final Results/FinalResults';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PlayoffOdds" element={<PlayoffOdds />} />
                {/* <Route path="/OddsDivisional" element={<OddsStandings />} /> */}
                <Route path="/PreseasonStandings/:year" element={<Preseason />} />
                <Route path="/PreseasonOdds/:year" element={<PreseasonOdds />} />
                <Route path="/Picks/:year" element={<Vibes />} />
                <Route path="/team/:id" element={<TeamCard />} />
                <Route path="/Timeline" element={<PlayoffOddsChart />} />
                <Route path="/FinalResults" element={<FinalResults />} />
            </Routes>
        </Router>
    );
}

export default App;
