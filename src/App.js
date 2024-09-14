import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Central from './components/Home/Central';
import Pacific from './components/Home/Pacific';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
import Divisions from './components/Standings/Divisions';
import TeamCard from './components/Teams/TeamCard';
import Percentiles from './components/Percentile Outcomes/Percentiles';
import Vibes from './components/Standings/Vibes';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Central" element={<Central />} />
                <Route path="/Pacific" element={<Pacific />} />
                <Route path="/PlayoffOdds" element={<PlayoffOdds />} />
                <Route path="/Divisions" element={<Divisions />} />
                <Route path="/Percentiles" element={<Percentiles />} />
                <Route path="/Picks" element={<Vibes />} />
                <Route path="/team/:id" element={<TeamCard />} />
            </Routes>
        </Router>
    );
}

export default App;
