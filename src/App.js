import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
import Divisions from './components/Standings/Divisions';
import OddsStandings from './components/Standings/OddsStandings';
import Preseason from './components/Standings/Preseason';
import PreseasonOdds from './components/Playoff Odds/PreseasonPO';
import TeamCard from './components/Teams/TeamCard';
import Percentiles from './components/Percentile Outcomes/Percentiles';
import Vibes from './components/Standings/Vibes';
import PowerRankings from './components/Power Rankings/PowerRankings';
import PlayoffOddsChart from './components/Playoff Odds/OddsChart';
// import SimulatedPoints from './components/Standings/SimulatedPoints';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PlayoffOdds" element={<PlayoffOdds />} />
                <Route path="/Divisions" element={<Divisions />} />
                <Route path="/OddsDivisional" element={<OddsStandings />} />
                <Route path="/PreseasonStandings" element={<Preseason />} />
                <Route path="/PreseasonOdds" element={<PreseasonOdds />} />
                <Route path="/Percentiles" element={<Percentiles />} />
                <Route path="/Picks" element={<Vibes />} />
                <Route path="/team/:id" element={<TeamCard />} />
                <Route path="/PowerRankings" element={<PowerRankings />} />
                <Route path="/Timeline" element={<PlayoffOddsChart />} />
                {/* <Route path="/SimulatedPoints" element={<SimulatedPoints />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
