import React, { Component } from 'react';
import "./Home.css";
import teamData from '../../data/projections.json';

class Atlantic extends Component {

    render() {
        const bruins = teamData.teams.find(team => team.name === "Boston Bruins");
        const sabres = teamData.teams.find(team => team.name === "Buffalo Sabres");
        const redwings = teamData.teams.find(team => team.name === "Detroit Red Wings");
        const panthers = teamData.teams.find(team => team.name === "Florida Panthers");
        const canadiens = teamData.teams.find(team => team.name === "Montreal Canadiens");
        const senators = teamData.teams.find(team => team.name === "Ottawa Senators");
        const lightning = teamData.teams.find(team => team.name === "Tampa Bay Lightning");
        const leafs = teamData.teams.find(team => team.name === "Toronto Maple Leafs");
        return (
            <div>
          <header className="page-header">
          <h1>Atlantic Division Projections</h1>
            </header>
                <section id="projections">
                    <h2><img src={bruins.logo} alt={`${bruins.name} Logo`} className="team-logo" />{bruins.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: bruins.primaryColor }}>
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
                                <td>{bruins.proj_points}</td>
                                <td>{bruins.proj_goals}</td>
                                <td>{bruins.proj_goals_against}</td>
                                <td>{bruins.playoffs}%</td>
                                <td>{bruins.second_round}%</td>
                                <td>{bruins.conf_final}%</td>
                                <td>{bruins.cup_final}%</td>
                                <td>{bruins.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Despite regressing from their record setting 135 point season, Boston once again found themselves near the top of the Eastern Conference. Pastrnak put together another fantastic season. Coyle, Zacha, Geekie, and Frederic all put up career high in points in bigger roles. The Lindholm-McAvoy pair continues to be one of the best top pairs in the league. Their goaltending, while not otherworldly like 22/23, was one of the best tandems in the league once again as well.

                The Bruins parted ways with Ullmark in a questionable trade to acquire Joonas Korpisalo and Mark Kastelic. Korpisalo was one of the worst goalies in the league last season and really sunk Ottawa’s season. Kastelic seems like he might be a perfect Bruin and I wouldn’t be surprised if they unlock 12-15 goals out of him.

                The big fish free agents were Elias Lindholm and Nikita Zadorov. I am not huge on either of these signings, especially in the long term. I think E. Lindholm is good and probably an upgrade on Coyle or Zacha, but there are still holes in his 5 on 5 play. I do believe he and Pastrnak could be a great duo. Zadorov is an effective player but I always worry about how skaters who play the physical style like Zadorov do age. Overall these deals will help Boston in the immediate future but could be disasters past year 3.

                This is a well coached team with good roster depth and some star power. Having an emerging star goalie in Jeremy Swayman is huge too. Boston will once again find themselves near the top of the Eastern Conference and are a Stanley Cup threat.

                </section>
                <section id="projections">
                    <h2><img src={sabres.logo} alt={`${sabres.name} Logo`} className="team-logo" />{sabres.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: sabres.primaryColor }}>
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
                                <td>{sabres.proj_points}</td>
                                <td>{sabres.proj_goals}</td>
                                <td>{sabres.proj_goals_against}</td>
                                <td>{sabres.playoffs}%</td>
                                <td>{sabres.second_round}%</td>
                                <td>{sabres.conf_final}%</td>
                                <td>{sabres.cup_final}%</td>
                                <td>{sabres.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                I bought into the Buffalo hype coming into the 2023/2024 season. Unfortunately the high flying offensive team fell from 296 goals in 2023 to 246 in 2024. Thompson, Cozens, and Tuch regressed in terms of offensive production. In what continues to be one of the most bizarre careers, Jeff Skinner had a below average Jeff Skinner season which led to his buyout.

                Buffalo was a lot better at keeping pucks out of the net last year. UPL took a huge step last year and looks to be a legitimate answer for a starting goalie. If Levi takes a step, this could be a solid goaltending tandem. Rasmus Dahlin has established himself as a truly elite number 1 on defense. Owen Power took a huge stride in his defensive game last season as well. Bowen Byrams career has obviously been disappointing so far (at least he played 73 games last year) hopefully Buffalo can unlock something there. 

                I think there are exciting pieces here. JJ Peterka has been developing into a nice scoring option. Jack Quinn has looked great when he has been available. Zach Benson had a nice enough rookie year.

                Buffalo didn’t do much this offseason to get better. Acquiring Ryan McLeod in exchange for Matthew Savoie sounds like a disaster to me. This is a team I am pulling for to make a step but I don’t foresee Buffalo taking a spot from any of the Atlantic teams.

                </section>
                <section id="projections">
                    <h2><img src={redwings.logo} alt={`${redwings.name} Logo`} className="team-logo" />{redwings.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: redwings.primaryColor }}>
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
                                <td>{redwings.proj_points}</td>
                                <td>{redwings.proj_goals}</td>
                                <td>{redwings.proj_goals_against}</td>
                                <td>{redwings.playoffs}%</td>
                                <td>{redwings.second_round}%</td>
                                <td>{redwings.conf_final}%</td>
                                <td>{redwings.cup_final}%</td>
                                <td>{redwings.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            
                <section id="about">
                After seven years of non-competitive hockey, the Red Wings found themselves in the playoff conversation until game 82. Detroit went 8-12-3 down the stretch after holding a playoff spot for most of the year. They rode a high shooting percentage pretty much all year and finished top 10 in league scoring.

                There are some nightmare contracts on this team, especially on defense. Justin Holl is being paid $3.4 million for the next two years to be a healthy scratch and Ben Chiarot is just plain bad. Andrew Copp was another bad deal from the day it was signed.

                I like the addition of Erik Gustafsson and it looks like Simon Edvinsson is ready to take on a full NHL season. Seider has not been able to replicate his fantastic rookie season, but he has been stapled to Chiarot and faces the leagues toughest competition. 

                The forward group is pretty similar to last year. Tarasenko is a scoring upgrade on Perron from last year. Having Kane for a full season will help the offense as well.

                The Wings got made fun of for signing a ton of goalies, but I actually like it. Talbot, while on the wrong side of 30, has been pretty consistent since 2020. Lyon was huge for them when Husso went down/was bad last season after doing the same thing for the Panthers in 2023. There are much worse 4th goalies you can have than Jack Campbell. I will always cheer for Jack Campbell. Being close to home whether he is in the NHL or AHL might be awesome for him.

                I am skeptical of this team and I think they overperformed last season. I don’t like the way Steve Yzerman has handled free agency the past few years. There are exciting players on this team and in the system that they need to step up to truly turn this franchise around. Detroit is young, not bad enough to be a lottery team, and stuck behind good Atlantic teams.

                </section>
                <section id="projections">
                    <h2><img src={panthers.logo} alt={`${panthers.name} Logo`} className="team-logo" />{panthers.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: panthers.primaryColor }}>
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
                                <td>{panthers.proj_points}</td>
                                <td>{panthers.proj_goals}</td>
                                <td>{panthers.proj_goals_against}</td>
                                <td>{panthers.playoffs}%</td>
                                <td>{panthers.second_round}%</td>
                                <td>{panthers.conf_final}%</td>
                                <td>{panthers.cup_final}%</td>
                                <td>{panthers.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </section>
                
                <section id="about">
                Florida has been one of the best teams in the East for the past four seasons. After falling short to Vegas on a miracle cup final appearance in 2023, they were able to finish the job in 2024. This was one of the best defensive teams in the NHL last season and they got excellent goaltending from Bobrovsky and Stolarz. Sam Reinhart had a career year scoring 57 goals. It was business as usual for Barkov, Tkachuk, and Verhaeghe. Everything came together for this group last year. Safe to say the Tkachuk era is off to an okay start.

                They lost some key pieces on defense in Ekman-Larsson and Montour and patched the holes with Nate Schmidt and Adam Boqvist. A downgrade, but a more than survivable situation. Their forward core remained intact with the Reinhart extension. 

                These guys are skilled, tough, and relentless. They are very clearly bought in to their process. This team is a cup threat again.
                
                </section>
                <section id="projections">
                    <h2><img src={canadiens.logo} alt={`${canadiens.name} Logo`} className="team-logo" />{canadiens.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: canadiens.primaryColor }}>
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
                                <td>{canadiens.proj_points}</td>
                                <td>{canadiens.proj_goals}</td>
                                <td>{canadiens.proj_goals_against}</td>
                                <td>{canadiens.playoffs}%</td>
                                <td>{canadiens.second_round}%</td>
                                <td>{canadiens.conf_final}%</td>
                                <td>{canadiens.cup_final}%</td>
                                <td>{canadiens.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Montreal was slightly more competitive last year, but these guys need to take a step.

                Nick Suzuki had another awesome year, Caufield set career highs in a fully healthy season (despite shooting 8%), and Alex Newhook took a step offensively. Most importantly, Juraj Slafkovsky was way better last year, especially in the second half of the season. Adding Patrik Laine to this core should help given he stays healthy. Past this group of skaters, it’s an incredibly weak forward group. Josh Anderson and his contract have aged exactly as we all thought it would. Brendan Gallagher appears to be pretty well cooked. Christian Dvorak and Jake Evans are just not great NHL players.

                I’m not bullish on their blueline either. Mike Matheson is fine but very flawed as a number 1 guy. David Savard is declining and limited defensively. Guhle and Barron were fine in their second NHL seasons but nothing more than that. Hutson could be a very nice young piece. Xhekaj is a fun story but not a quality NHL player.

                Montembeault is a little below average but not awful by any means. Caden Primeau had a nice run after Jake Allen left town. This feels like an average to below average tandem.

                I am pretty surprised there are people picking this team to make noise. Montreal looks to be a lottery team again especially considering the division they are in.


                </section>
                <section id="projections">
                    <h2><img src={senators.logo} alt={`${senators.name} Logo`} className="team-logo" />{senators.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: senators.primaryColor }}>
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
                                <td>{senators.proj_points}</td>
                                <td>{senators.proj_goals}</td>
                                <td>{senators.proj_goals_against}</td>
                                <td>{senators.playoffs}%</td>
                                <td>{senators.second_round}%</td>
                                <td>{senators.conf_final}%</td>
                                <td>{senators.cup_final}%</td>
                                <td>{senators.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Not much has gone right in Ottawa since their 2017 run to the conference finals. After taking a step in 2022/2023, they pretty much treaded water. They could not get a save last year as Joonas Korpisalo was one of the worst goalies in the NHL. Anton Forsberg has not been the same since getting knee surgery following the 2022 season. 

                Ottawa’s top 4 defenders are very solid. Sanderson has emerged as a solid top pair guy. Chabot, while flawed defensively, is an elite offensive defenseman (who could use a fully healthy season). Newly acquired Nick Jensen could bring some stability to Chabot’s game. Jensen has been a steady defensive defenseman for years, and could be a better fit than Chychrun was. Zub is also as steady as they come back there. Kleven and Bernard-Docker are interesting enough pieces on the third pair, hopefully they keep Travis Hamonic out of the lineup.
                Their top 9 forwards are solid as well. Giroux has aged and fit in wonderfully with Tkachuk and Stutzle. Drake Batherson has sort of underrated as a second line winger in my opinion. David Perron was brought in to bolster the power play. A healthy season from Josh Norris would go a long way for the Sens, but that appears to be a longshot at this point.

                Some peace and quiet could go a long way for Ottawa. New ownership has to be a little bit settled in now, they shouldn’t be losing a first round pick for the previous regimes errors, and one of their players shouldn’t be facing any gambling suspensions. Ottawa addressed their biggest issue in goal and I believe it will go a long way for them. 

                </section>
                <section id="projections">
                    <h2><img src={lightning.logo} alt={`${lightning.name} Logo`} className="team-logo" />{lightning.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: lightning.primaryColor }}>
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
                                <td>{lightning.proj_points}</td>
                                <td>{lightning.proj_goals}</td>
                                <td>{lightning.proj_goals_against}</td>
                                <td>{lightning.playoffs}%</td>
                                <td>{lightning.second_round}%</td>
                                <td>{lightning.conf_final}%</td>
                                <td>{lightning.cup_final}%</td>
                                <td>{lightning.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                Tampa has been bounced out of the first round in back to back seasons following three straight finals appearances. They were slaughtered by their cross-state rivals in the Florida Panthers. This was one of the weaker Tampa teams we have seen in a few years, but they were still a very solid group.

                Tampa had no problems scoring goals thanks to their usual cast of characters. Brayden Point flirted with 50 goals and 100 points again, Brandon Hagel set a career high in points, Nick Paul set career highs across the board, Steven Stamkos was Steven Stamkos, and Nikita Kucherov put together an MVP caliber season.

                Their issues lied in goaltending of all places. Vasilevskiy came back from major surgery mid-season and he did not play up to his standard. We can probably expect a bounceback from him this year. Joonas Johansson is a bad NHL goalie. He saved the early part of Tampa’s season, but outside of that hot streak there is very little to show that he can play at the NHL level.

                Obviously the big news out of Tampa this offseason was letting their best player in franchise history walk in free agency. It’s going to be absolutely bizarre not seeing him on this Lightning squad. Stamkos has been my favorite player for more than a decade and I hope he kills it in Nashville. Tampa signed Jake Guentzel to fill the Stamkos hole. A more than suitable replacement, in fact it is an upgrade at this stage of their careers. 

                Losing Sergachev as a cap casualty hurts but they still made out well on the deal. Tanner Jeannot was another cap dump but that was clearly not working out for either the player or team. Getting Ryan McDonagh back from Nashville for essentially nothing was a nice move. 

                Despite the controversy in letting Stamkos walk, I think Tampa made some solid moves this summer and they should be competitive again.

                </section>
                <section id="projections">
                    <h2><img src={leafs.logo} alt={`${leafs.name} Logo`} className="team-logo" />{leafs.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: leafs.primaryColor }}>
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
                                <td>{leafs.proj_points}</td>
                                <td>{leafs.proj_goals}</td>
                                <td>{leafs.proj_goals_against}</td>
                                <td>{leafs.playoffs}%</td>
                                <td>{leafs.second_round}%</td>
                                <td>{leafs.conf_final}%</td>
                                <td>{leafs.cup_final}%</td>
                                <td>{leafs.cup_win}%</td>
                            </tr>
                        </tbody>  
                    </table>
                    </section>
                    <section id="about">
                    My dear sweet Maple Leafs. Another year of regular season success followed by a painful playoff exit. Auston Matthews scored 69 goals. My wife and I were on vacation in Miami during game 81 against Florida really hoping to catch Matthews score his 70th. We were treated to a craptastic Leafs performance and no 70th goal obviously.

                    I like the Chris Tanev add but the term takes him up to his age 40 season. Stolarz and Woll splitting time in net should be a decent enough tandem, if Woll stays healthy. Stolarz has never played more than 28 games in a season, so that could get interesting real quick if Woll goes down.

                    I don’t expect anything different from the Leafs this year. They will probably finish 2nd or 3rd in the Atlantic and who knows maybe they’ll win a round.       
                </section>
            </div>
        );
    }
}

export default Atlantic;
