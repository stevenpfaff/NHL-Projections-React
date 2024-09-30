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
                    <p>
                    Anaheim has been rebuilding since 2018 and haven’t shown any signs of being near competitive. The Ducks have had back to back sub 60 point seasons.
                    </p>
                    <p>
                    John Gibson hasn’t been good in half of a decade and it appears he is going to miss some time to begin the year. They are allegedly working on shipping 
                    Cam Fowler out of town. It’s hard to make out what Trevor Zegras’ future with the team is after a year riddled with contract negotiations, injuries, and 
                    trade rumors. Ryan Strome has really fallen off since coming to Anaheim.
                    </p>
                    <p>
                    It isn’t all bad for Anaheim as they have a very promising young core. Mason McTavish took a step forward, Leo Carlsson was spectacular in limited action 
                    as a rookie, and Pavel Mintyukov had a great rookie season as well. There is also hope for this Ducks team that my model doesn’t currently take into account. 
                    They have high end prospects with little to no NHL experience that are going to crack the lineup and play significant roles. Cutter Gauthier is one of the most 
                    exciting prospects in hockey and had a monster sophomore year at Boston College. Sam Colangeo also had a great senior year in the NCAA. 
                    </p>
                    <p>
                    Anaheim probably isn’t a playoff team this year, but I wouldn’t be surprised for them to wind up on the bubble. They are in a pretty weak division and young talent 
                    goes a long way in today’s NHL. 
                    </p>
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
                <p>
                Things have not been going well in Calgary. So many of their stars have left town and alot of players on this team lost a friend in a horrific way this summer. 
                This could be a really tough season in Calgary for a multitude of reasons.  
                </p>
                <p>
                The best part of this team is their forward core and that is pretty uninspiring. Andrei Kuzmenko was awesome in 29 games after coming over from Vancouver. Nazem 
                Kadri had a much better second year in Calgary. Connor Zary looks like he could be an awesome two-way forward. They need to figure out a way to salvage the Jonathan 
                Huberdeau disaster that's occurring. 
                </p>
                <p>
                Their blueline might be one of the worst in the league. Weegar and Andersson are good, after that it is pretty scary to look at. They are banking pretty heavily on 
                Dustin Wolf to be ready to take on the starter role. Otherwise it’s Dan Vladar time and that sounds horrifying.
                </p>
                <p>
                I feel really bad for the Flames and their fans. I hope they prove me wrong and have an awesome season.  Unfortunately this might be a bottom 5 team in the league.
                </p>
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
                    <p>
                    What a season the Oilers had. They almost pulled off the impossible after being down 3-0 to Florida in the final. For the flaws that this team has, they have 
                    the best player in the sport to bail them out on any given night. 
                    </p>
                    <p>
                    Minus hiring Stan Bowman, I like what Edmonton did this summer. Extending Draisaitl is huge. Getting rid of Ceci and his contract was a nice bit of business. 
                    Coaches seem to love putting Mr. Ceci into situations he cannot handle, so taking him away is a plus. Viktor Arvidsson is an excellent addition as well as Jeff 
                    Skinner. Losing Broberg does hurt, as it looked like he began to figure it out at the NHL level during their cup run. Ty Emberson, Josh Brown, and Troy Stetcher 
                    are now their 5, 6, and 7 on defense which definitely isn't great!
                    </p>
                    <p>
                    This team is going to score a ton of goals and are going to be cup contenders once again.
                    </p>
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
                <p>
                The Kings had another solid regular season, which did not come without ups and downs. Todd McLellan was fired after going 23-15-10 and replaced by Jim Hiller who 
                led them to a 21-12-1 stretch to end the season.  
                </p>
                <p>
                The Kings had a tough offseason. Losing Matt Roy and Viktor Arvidsson in free agency hurts. That contract they gave Joel Edmundson is insane. I don’t think he is 
                worth half of what he got. Getting out from the Dubois deal was a success as it very clearly wasn’t a fit, but the situation still stings based on what they had to 
                give up to get him in the first place. As I am writing this, the Kings just announced that Drew Doughty will be out month to month with an ankle break, ouch. Despite 
                all of this, the situation isn’t bleak in Los Angeles.  
                </p>
                <p>
                Kopitar, Kempe, and Fiala continue to be awesome. It was great to see Quinton Byfield establish himself last year. We might be looking at him turning into a superstar this
                year. Trevor Moore continues to be found gold for them. Phillip Danault has been one of the best two-way forwards in the game for the past eight seasons. 
                </p>
                <p>
                The Kings have great young pieces on the blueline with Mikey Anderson, Jordan Spence, and Brandt Clarke. Clarke looks primed and ready to take on a full NHL season after dominating 
                the American league last year. I am optimistic Kuemper can bounce back from a tough season in Washington, especially playing behind this group of guys.
                </p>
                <p>
                LA is a stingy defensive team and should still do a solid job of keeping pucks out of the net. The offense will probably hover around the middle of the pack to slightly above average. 
                This is more than likely a playoff team but I am hesitant to call them a cup contender. 
                </p>
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
                <p>
                San Jose barely finished better than the 2017 Avalanche last year. Unlike Colorado, San Jose does not have the talent in house to make the turnaround the Avalanche did.
                </p>
                <p>
                Mike Grier was able to capitalize on some teams who were in a bind this summer. Cody Ceci is not an awesome player by any means. However he can at least play at the NHL 
                level and fetch a mid round pick at the trade deadline. Jake Walman is an awesome addition from a team improvement standpoint and they didn’t have to give up much for him. 
                They got their goalie of the future in Yaroslav Askarov in a nice deal with Nashville as well. 
                </p>
                <p>
                The biggest prize of the summer was obviously drafting Mack Celebrini. Getting Tyler Toffoli to play with him was a great move. Toffoli is still an awesome player who should 
                help Celebrini out in his first few years.
                </p>
                <p>
                It’s going to be another rough year in San Jose, but the Sharks should be more watchable than they were last year with some young talent in the lineup.
                </p>
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
                <p>
                Seattle took a major step back last season as they could not score goals. They were plenty effective keeping the puck out of the 
                net and got a pleasantly surprising season from Joey Daccord in net. 
                </p>
                <p>
                Seattle’s 5 on 5 shooting percentage dropped from 9.5% in 2023 to 7.1% in 2024. Eeli Tolvanen, Matty Beniers, and Andre Burakovsky 
                each experienced a five point drop in shooting percentage, resulting in only 38 combined goals between the three of them. Burakovsky 
                is a different circumstance as he had another season plagued with injuries. Jared McCann came back to Earth from a 19% back to roughly 
                his career average. Jordan Eberle regressed to typical Jordan Eberle numbers (which are still more than fine). I think the offensive 
                truth about Seattle lies somewhere in the middle of the 2023 and 2024 results, and they are due for a bit more shooting percentage luck 
                this year. Chandler Stephenson got way too much money this summer, but he does add some scoring to the lineup as well.
                </p>
                <p>
                The Kraken blueline is solid in that five of their top six guys are well above average. Adam Larsson being the outlier here, who Seattle 
                really likes and my model does not. Brandon Montour was a big add this summer and should fit in nicely alongside Oleksiak.
                </p>
                <p>
                Seattle should bounce back towards the playoff bubble with what I am expecting will be a better offensive season. 
                </p>
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
                <p>
                It took awhile but the Canucks finally arrived and burst onto the scene with a 109 point season in 2024.
                </p>
                <p>
                Miller and Pettersson are killers. Boeser returned to form when his time in Vancouver looked finished (not sure he is going to shoot 19% again). 
                Joshua, Hoglander, and Garland are awesome depth pieces. They also added Jake DeBrusk who my model absolutely loves (so glad he is out of the 
                Leafs division).
                </p>
                <p>
                Hughes and Hronek have turned out to be a near perfect match. Forbort is a nice depth add on defense that will help out the PK. Tyler Myers is still 
                Tyler Myers and plays way too much but the Canucks love him.
                </p>
                <p>
                There is some mystery around Thatcher Demko’s health. It looks like they are going to try and patch the hole with a mixture of Kevin Lankinen and Arturs 
                Silovs. Tampa survived a similar situation with Andrei Vasilevskiy last year, Vancouver can probably be expected to do the same without Demko.
                </p>
                <p>
                Despite a high PDO last year, I think Vancouver improved over the summer and have established themselves as cup contenders.
                </p>
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
                <p>
                Vegas had a very on brand season last year. Slightly above league average in just about every category. 
                </p>
                <p>
                They cut bait with an original Golden Knight in Jonathan Marchessault which definitely leaves a hole on the wing. 
                They are attempting to patch it with the likes of Victor Olofsson and Alexander Holtz. Jack Eichel, William Karlsson, 
                and Tomas Hertl as a three headed monster down the middle will more than suffice for their lack of talent on the wings.
                </p>
                <p>
                Noah Hanifin came over from Calgary at the trade deadline and earned himself a nice extension with Vegas. There are no holes 
                on this blueline. Adin Hill and Ilya Samsonov should be a more than capable tandem (as long as Samsonov doesn’t randomly forget 
                how to play again).
                </p>
                <p>
                It will be business as usual in Vegas and they will more than likely cruise to a playoff spot. This is not as strong as their cup 
                winning team, but they are still a major threat in the Western Conference.
                </p>
                </section>
            </div>
        );
    }
}

export default Pacific;
