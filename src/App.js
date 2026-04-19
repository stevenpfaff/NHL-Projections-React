import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PlayoffOdds from './components/Playoff Odds/PlayoffOdds';
import PreseasonOdds from './components/Playoff Odds/PreseasonPO';
import TeamCard from './components/Teams/TeamCard';
import FinalResults from './components/Final Results/FinalResults';
import PlayoffBracket from './components/Playoff Odds/Bracket';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<PlayoffBracket />} />
                <Route path="/PlayoffOdds" element={<PlayoffOdds />} />
                <Route path="/About" element={<Home />} />
                <Route path="/PreseasonOdds/:year" element={<PreseasonOdds />} />
                <Route path="/team/:id" element={<TeamCard />} />
                <Route path="/finalresults/:year" element={<FinalResults />} />
            </Routes>
        </Router>
    );
}

export default App;
