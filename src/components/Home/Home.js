import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <div>
                <section id="about">
                <h2>Only North</h2>
      <p>
        This website displays the results of a program written to simulate the 2024/2025 NHL season. 
        This simulation is run 100,000 times to get the widest range of outcomes.
      </p>

      <h2>Main Logic</h2>
      <p>
        We use JFresh's player cards in which he uses Patrick Bacon's WAR model to evaluate players.
        Their findings are then converted into a version of the baseball scouting scale (20-80 scale),
        where 20 is the minimum, 50 is average, and 80 is the top of the league. Skaters are grouped 
        together by team and assigned a role. The higher the role, the heavier the weight each skater
        has for their team rating.
      </p>

      <p>
        Similar logic is applied to goaltenders. Goalies are evaluated with one number, which is applied to 
        an expected save percentage. Starting goalies can only play a maximum of 65 games, and goalies rotate 
        dynamically based on their performance.
      </p>

      <p>
        Team offensive, defensive, powerplay, penalty kill, and penalty ratio ratings are calculated by taking skater
        rankings into account and weighing them with the parameters above. Offense and defense ratings are then compared
        to generate likely outcomes for each team. A slight advantage is applied for the home team, and save 
        percentage logic is applied using each team's dynamically selected goalie.
      </p>
      </section>
      </div>
        );
    }
}

export default Home;