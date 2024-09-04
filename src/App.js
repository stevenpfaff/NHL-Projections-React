import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
import Divisions from './components/Standings/Divisions';
import TeamCard from './components/Teams/TeamCard';
import Percentiles from './components/Percentile Outcomes/Percentiles';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<PlayoffOdds />} />
                <Route path="/Divisions" element={<Divisions />} />
                <Route path="/Percentiles" element={<Percentiles />} />
                <Route path="/team/:id" element={<TeamCard />} />
            </Routes>
        </Router>
    );
}

export default App;
