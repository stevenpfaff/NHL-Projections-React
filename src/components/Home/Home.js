import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div>
                <section id="about">
                    <h1 style={{ marginTop: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <img 
                          src="../../Images/OnlyNorthCircle.png" 
                          alt="Mini Logo" 
                          style={{ width: '50px', height: '50px', marginLeft: '10px' }} 
                        />
                        Only North Hockey
                    </h1>
                    <p>
                        Only North Hockey is an NHL analytics site that uses advanced simulation to project season outcomes. 
                        We run 100,000 full-season simulations using player ratings based on Patrick Bacon’s WAR model.
                        Daily updates are ran throughout the season to show projected standings and playoff odds.
                    </p>  

                    {/* Links Section */}
                    <h2>Explore the site:</h2>
                    <ul>
                        <li><Link to="https://www.advancedhockeystats.com/">Patrick Bacon's Website</Link></li>
                        <li><Link to="/Divisions">2025/2026 Projected Standings</Link></li>
                        <li><Link to="/PlayoffOdds">2025/2026 Playoff Odds</Link></li>
                        <li><Link to="/Timeline">2025 Stanley Cup Timeline</Link></li>
                        <li><Link to="/PreseasonStandings">2024/2025 Preseason Projected Standings</Link></li>
                        <li><Link to="/PreseasonOdds">2024/2025 Preseason Playoff Odds</Link></li>
                        <li><Link to="/finalresults">2024/2025 Final Results</Link></li>
                    </ul>

                </section>
            </div>
        );
    }
}

export default Home;
