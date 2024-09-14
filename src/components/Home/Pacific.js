import React, { Component } from 'react';
import "./Home.css";
import teamData from '../../data/projections.json';

class Pacific extends Component {

    render() {
        const sharks = teamData.teams.find(team => team.name === "San Jose Sharks");
        const ducks = teamData.teams.find(team => team.name === "Anaheim Ducks");
        const flames = teamData.teams.find(team => team.name === "Calgary Flames");
        const kraken = teamData.teams.find(team => team.name === "Seattle Kraken");
        const knights = teamData.teams.find(team => team.name === "Vegas Golden Knights");
        const kings = teamData.teams.find(team => team.name === "Los Angeles Kings");
        const canucks = teamData.teams.find(team => team.name === "Vancouver Canucks");
        const oilers = teamData.teams.find(team => team.name === "Edmonton Oilers");
        return (
            <div>
          <header className="page-header">
          <h1>Pacific Division Projections</h1>
            </header>
                
                <section id="projections">
                    <h2><img src={ducks.logo} alt={`${ducks.name} Logo`} className="team-logo" />{ducks.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: ducks.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup  (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ducks.proj_points}</td>
                                <td>{ducks.proj_goals}</td>
                                <td>{ducks.proj_goals_against}</td>
                                <td>{ducks.playoffs}%</td>
                                <td>{ducks.second_round}%</td>
                                <td>{ducks.conf_final}%</td>
                                <td>{ducks.cup_final}%</td>
                                <td>{ducks.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                These guys are not good. Anaheim has been rebuilding since 2018 and haven’t shown any signs of being near competitive. 
                There are some exciting young pieces here, but I am skeptical of them taking the next step into a playoff team.
                </section>
                <section id="projections">
                    <h2><img src={flames.logo} alt={`${flames.name} Logo`} className="team-logo" />{flames.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: flames.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup  (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flames.proj_points}</td>
                                <td>{flames.proj_goals}</td>
                                <td>{flames.proj_goals_against}</td>
                                <td>{flames.playoffs}%</td>
                                <td>{flames.second_round}%</td>
                                <td>{flames.conf_final}%</td>
                                <td>{flames.cup_final}%</td>
                                <td>{flames.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Things have not been going well in Calgary. So many of their stars have left town and alot of players
                on this team lost a friend in a horrific way this summer. It could be a really tough season in Calgary for multiple reasons.
                They need to figure out a way to salvage the Jonathan Huberdeau disaster that's occurring. Their blueline might be one of 
                the worst in the league. If Dustin Wolf doesn’t take a step their goaltending could be at the bottom of the league as well. 
                I feel really bad for the Flames and their fans. I hope they prove me wrong and have an awesome season.

                </section>
                <section id="projections">
                    <h2><img src={oilers.logo} alt={`${oilers.name} Logo`} className="team-logo" />{oilers.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: oilers.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{oilers.proj_points}</td>
                                <td>{oilers.proj_goals}</td>
                                <td>{oilers.proj_goals_against}</td>
                                <td>{oilers.playoffs}%</td>
                                <td>{oilers.second_round}%</td>
                                <td>{oilers.conf_final}%</td>
                                <td>{oilers.cup_final}%</td>
                                <td>{oilers.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                What a season the Oilers had. They almost pulled off the impossible after being down 3-0 to Florida in the final. For the flaws that this team has, they have the best player in the sport to bail them out on any given night.

Minus hiring Stan Bowman, I like what Edmonton did this summer. Getting rid of Ceci was a nice bit of business. Coaches seem to love putting Mr. Ceci into situations he cannot handle, so taking him away is a plus. Viktor Arvidsson is an excellent add as well as Jeff Skinner. 

This team is going to score a ton of goals and are going to be cup contenders once again.


                </section>
                <section id="projections">
                    <h2><img src={kings.logo} alt={`${kings.name} Logo`} className="team-logo" />{kings.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: kings.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{kings.proj_points}</td>
                                <td>{kings.proj_goals}</td>
                                <td>{kings.proj_goals_against}</td>
                                <td>{kings.playoffs}%</td>
                                <td>{kings.second_round}%</td>
                                <td>{kings.conf_final}%</td>
                                <td>{kings.cup_final}%</td>
                                <td>{kings.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                This feels high for the Kings. They played very well under Jim Hiller last year but I think they had a very poor offseason. Losing Roy and Arvidsson in free agency hurts. Getting out from the Dubois deal was a success as it very clearly wasn’t a fit, but the situation still stings based on what they had to give up to get him in the first place. I am optimistic Kuemper can bounce back from a tough season in Washington. That contract they gave Joel Edmundson is insane. I don’t think he is worth half of that at half of the term.

It was great to see Byfield establish himself last year. I’d like to see him take the step into being a superstar. Trevor Moore continues to be found gold for them as well.

LA is a stingy defensive team and should still do a solid job of keeping pucks out of the net despite some key losses. The goal scoring might be middling to below average. I think this team gets into the playoffs.


                </section>
                <section id="projections">
                    <h2><img src={sharks.logo} alt={`${sharks.name} Logo`} className="team-logo" />{sharks.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: sharks.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup  (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{sharks.proj_points}</td>
                                <td>{sharks.proj_goals}</td>
                                <td>{sharks.proj_goals_against}</td>
                                <td>{sharks.playoffs}%</td>
                                <td>{sharks.second_round}%</td>
                                <td>{sharks.conf_final}%</td>
                                <td>{sharks.cup_final}%</td>
                                <td>{sharks.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                These guys are not good. Despite that, San Jose had an active offseason and I would say they did an alright job. 
                I love the Askarov trade for them. Trading for Walman was a nice piece of business as well. Obviously
                Mack Celebrini is a huge get for their rebuild. Will Smith appears to be an exciting young prospect as well. 
                Eklund should have a better year with some more talent in the lineup around him.
                The Sharks should be more competitive this year, but there are still going to be lots of tough nights in San Jose. 

                </section>
                <section id="projections">
                    <h2><img src={kraken.logo} alt={`${kraken.name} Logo`} className="team-logo" />{kraken.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: kraken.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{kraken.proj_points}</td>
                                <td>{kraken.proj_goals}</td>
                                <td>{kraken.proj_goals_against}</td>
                                <td>{kraken.playoffs}%</td>
                                <td>{kraken.second_round}%</td>
                                <td>{kraken.conf_final}%</td>
                                <td>{kraken.cup_final}%</td>
                                <td>{kraken.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Seattle took a major step back last season as they could not score goals. 
                They were plenty effective keeping the puck out of the net and got a pleasantly
                 surprising season from Joey Daccord in net. I really like the Kraken blueline. 
                 I’d bet Matty Beniers bounces back offensively this year. Seattle should be on the playoff bubble.
                </section>
                <section id="projections">
                    <h2><img src={canucks.logo} alt={`${canucks.name} Logo`} className="team-logo" />{canucks.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: canucks.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{canucks.proj_points}</td>
                                <td>{canucks.proj_goals}</td>
                                <td>{canucks.proj_goals_against}</td>
                                <td>{canucks.playoffs}%</td>
                                <td>{canucks.second_round}%</td>
                                <td>{canucks.conf_final}%</td>
                                <td>{canucks.cup_final}%</td>
                                <td>{canucks.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                The Canucks have finally arrived. This team rocks and is a legit cup contender. 

Miller and Pettersson are killers. Boeser returned to form when his time in Vancouver looked finished (not sure he is going to shoot 19% again). Joshua, Hoglander, and Garland are awesome depth pieces. They also added Jake DeBrusk who is awesome (so glad he is out of the Leafs division).

Hughes and Hronek have turned out to be a near perfect match. Forbort is a nice depth add on defense that will help out the PK. Tyler Myers is still Tyler Myers and plays way too much but the Canucks love him.

The only question is around Demko’s health. Silovs might be thrown into the fire once again to start the season.

                </section>
                <section id="projections">
                    <h2><img src={knights.logo} alt={`${knights.name} Logo`} className="team-logo" />{knights.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: knights.primaryColor }}>
                                <th>Projected Points</th>
                                <th>Projected Goals</th>
                                <th>Projected Goals Against</th>
                                <th>Playoff Odds (%)</th>
                                <th>Second Round (%)</th>
                                <th>Conference Final (%)</th>
                                <th>Cup Final (%)</th>
                                <th>Win Cup (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{knights.proj_points}</td>
                                <td>{knights.proj_goals}</td>
                                <td>{knights.proj_goals_against}</td>
                                <td>{knights.playoffs}%</td>
                                <td>{knights.second_round}%</td>
                                <td>{knights.conf_final}%</td>
                                <td>{knights.cup_final}%</td>
                                <td>{knights.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Vegas had a very on brand season last year. Slightly above league average in just about every category. 
                They cut bait with an original Golden Knight in Jonathan Marchessault which definitely leaves a hole on the wing. 
                Their newfound center depth with Tomas Hertl is very impressive. Hanifin is a nice add to an already strong blueline as well.
                 I think Vegas will do what they always do and cruise to a playoff spot.

                </section>
            </div>
        );
    }
}

export default Pacific;
