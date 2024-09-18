import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <div>
                <section id="about">
                <h2>NHL 2024/2025 Season Simulation Results</h2>
      <p>
        These are the results of a Python script written to simulate the 2024/2025 NHL season. 
        This simulation is run 100,000 times to get the widest range of outcomes.
      </p>

      <h2>Main Logic</h2>
      <p>
        Players are evaluated based on how they perform at even strength both offensively and defensively. 
        Passing and shooting ratings are also applied but weigh less than the even strength categories. 
        A version of the baseball scouting scale is used (20-80 ratings), where 20 is the minimum, 
        50 is average, and 80 is the top of the league. Superstars are given ratings between 85 and 90 to 
        weigh them a bit heavier.
      </p>

      <p>
        Skaters are grouped together by team and assigned a role. The higher the role, the heavier the weight 
        each skater has for their team rating.
      </p>

      <p>
        Similar logic is applied to goaltenders. Goalies are evaluated with one number, which is applied to 
        an expected save percentage. Starting goalies can only play a maximum of 65 games, and goalies rotate 
        dynamically based on their performance.
      </p>

      <p>
        Team offensive and defensive ratings are calculated by taking skater rankings into account and weighing 
        them with the parameters above. Offense and defense ratings are then compared to generate likely 
        outcomes for shots on goal by each team. A slight advantage is applied for the home team, and save 
        percentage logic is applied using each team's dynamically selected goalie.
      </p>
                </section>

            </div>
        );
    }
}

export default Home;