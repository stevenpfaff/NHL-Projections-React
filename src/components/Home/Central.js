import React, { Component } from 'react';
import "./Home.css";
import teamData from '../../data/projections.json';

class Central extends Component {

    render() {
        const blackhawks = teamData.teams.find(team => team.name === "Chicago Blackhawks");
        const blues = teamData.teams.find(team => team.name === "St. Louis Blues");
        const hockey = teamData.teams.find(team => team.name === "Utah Hockey Club");
        const wild = teamData.teams.find(team => team.name === "Minnesota Wild");
        const jets = teamData.teams.find(team => team.name === "Winnipeg Jets");
        const predators = teamData.teams.find(team => team.name === "Nashville Predators");
        const avalanche = teamData.teams.find(team => team.name === "Colorado Avalanche");
        const stars = teamData.teams.find(team => team.name === "Dallas Stars");
        return (
            <div>
          <header className="page-header">
          <h1>Central Division Projections</h1>
            </header>
                <section id="projections">
                    <h2><img src={blackhawks.logo} alt={`${blackhawks.name} Logo`} className="team-logo" />{blackhawks.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: blackhawks.primaryColor }}>
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
                                <td>{blackhawks.proj_points}</td>
                                <td>{blackhawks.proj_goals}</td>
                                <td>{blackhawks.proj_goals_against}</td>
                                <td>{blackhawks.playoffs}%</td>
                                <td>{blackhawks.second_round}%</td>
                                <td>{blackhawks.conf_final}%</td>
                                <td>{blackhawks.cup_final}%</td>
                                <td>{blackhawks.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                <p>
                Believe it or not, I saw the Blackhawks beat the Senators in person last year. The Hawks were nothing short of abysmal 
                in season 1 of the Bedard era. They finished 7 standings points worse in 2024 than 2023. I don’t believe Chicago had any 
                playoff intentions last season but I’m sure they wanted to be far more competitive than they were. Getting 54 combined 
                games out of Perry, Hall, and Athanasiou was a big blow in terms of having NHL caliber talent on the ice. Lukas Reichel 
                not taking a step forward was also a bummer. Despite all of this, Petr Mrazek was… good? 
                </p>
                <p>
                I like what Chicago did this offseason. I think they have improved in all categories. 
                Getting actual NHL players to surround Bedard should help him out quite a bit after being fed to the wolves last season. 
                Brodie and Martinez to patch up the third pair (Jarred Tinordi played 59 games?!) is a huge improvement. 
                Taking starts away from Soderblom is a win on its own with the Brossoit signing. Chicago will still have problems scoring goals, 
                but I don’t think a 25 point improvement is too crazy to call for with less injury trouble and a way deeper lineup.
                </p>
                </section>
                <section id="projections">
                    <h2><img src={avalanche.logo} alt={`${avalanche.name} Logo`} className="team-logo" />{avalanche.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: avalanche.primaryColor }}>
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
                                <td>{avalanche.proj_points}</td>
                                <td>{avalanche.proj_goals}</td>
                                <td>{avalanche.proj_goals_against}</td>
                                <td>{avalanche.playoffs}%</td>
                                <td>{avalanche.second_round}%</td>
                                <td>{avalanche.conf_final}%</td>
                                <td>{avalanche.cup_final}%</td>
                                <td>{avalanche.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                    <p>
                    Talk about a top heavy roster. The Avs are still a strong team but their cap situation has left them in a bit of a tizzy.
                    <p>
                    Val Nichushkin not being available
                    is a huge blow and who knows what or how much they are going to get out of Landeskog. Hopefully Lehkonen can put together a healthy season as well. Jonathan 
                    Drouin reviving his career is an awesome story. Mittelstadt appears to be developing into a very capable 2C. Ross Colton and Logan O’Connor are nice depth 
                    pieces as well. After that, it gets real thin real quick.
                    </p>
                    </p>
                    <p>
                Makar and Toews are a ridiculous top pair. Girard and Manson are fine enough as a second pair. I like 
                the Brannstrom acquisition, it never felt like he got a full look in Ottawa. Georgiev was not great last year. Not sure if it was a workload issue for him or
                what, but they will need him to bounce back. Annunen was spectacular in 14 games as a backup, they may need to give him a few more starts this year.
                </p>
                <p>
                This is a great 
                team with top tier talent to bail them out on any given night. I expect the Avs near the top of the West again and they should contend for the cup.
                </p>
                </section>
                <section id="projections">
                    <h2><img src={stars.logo} alt={`${stars.name} Logo`} className="team-logo" />{stars.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: stars.primaryColor }}>
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
                                <td>{stars.proj_points}</td>
                                <td>{stars.proj_goals}</td>
                                <td>{stars.proj_goals_against}</td>
                                <td>{stars.playoffs}%</td>
                                <td>{stars.second_round}%</td>
                                <td>{stars.conf_final}%</td>
                                <td>{stars.cup_final}%</td>
                                <td>{stars.cup_win}%</td>
                            </tr>
                        </tbody>  
                    </table>
                    </section>
                    <section id="about">
                        <p>
                        Dallas lost in the Western Conference final for a second consecutive year. Unfortunately this was the end of the 
                        road for Joe Pavelski and another missed opportunity for Jamie Benn and Tyler Seguin to lift the cup in Dallas.
                        Fortunately, the Stars are still in great shape.
                        </p>
                        <p>
                        Robertson-Hintz-Johnston might be the best line in hockey. After that, their forward depth is excellent and has 
                        a good mix of veterans and young guys. I am fully expecting a Logan Stankoven breakout and I am excited to see 
                        Mavrik Bourque get a full slate of NHL games this year as well.
                        </p>
                        <p>
                        Between Miro Heiskanen, Esa Lindell, and Thomas Harley, Dallas might have the best left side defense core in the 
                        league. The weakness in this team lies on the right side of their blue line. They are slated to have Nils Lundkvist, 
                        Matt Dumba, and Ilya Lyubushkin there. Luckily these guys should have a competent partner at all times. 
                        </p>
                        <p>
                        Jake Oettinger had a fine year, but performed below his standards. I'd imagine he is poised to bounce back especially
                        in a contract year. Casey DeSmith had a rough year in Vancouver as a backup, but has a pretty good track record as a
                        backup prior to that. 
                        </p>
                        <p>
                        This team rocks. Dallas is a juggernaut in the Western Conference and a threat for the cup once again. 
                        </p>
                </section>
                <section id="projections">
                    <h2><img src={wild.logo} alt={`${wild.name} Logo`} className="team-logo" />{wild.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: wild.primaryColor }}>
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
                                <td>{wild.proj_points}</td>
                                <td>{wild.proj_goals}</td>
                                <td>{wild.proj_goals_against}</td>
                                <td>{wild.playoffs}%</td>
                                <td>{wild.second_round}%</td>
                                <td>{wild.conf_final}%</td>
                                <td>{wild.cup_final}%</td>
                                <td>{wild.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </section>
                
                <section id="about">
                    <p>
                    Of all simulation results this one might be the most on brand. The Wild are a great defensive team who could not get 
                    a save last year, really struggled on the PK, and were in the bottom half of the league in scoring.    
                    </p>
                    <p>
                    This team has a decent core of players up front and on defense. The Kaprizov-Ek-Boldy combo is absolutely deadly. Marco 
                    Rossi established himself as a full-time NHLer after all he has been through since being drafted.
                    </p>
                    <p>
                    Brock Faber was excellent as a rookie. He should be able to play a more sheltered role with the return of Jared Spurgeon. 
                    Between the two of those guys and Jonas Brodin, this is a very strong blueline.
                    </p>
                    <p>
                    Gustavsson took a step back and Fleury is 40. I think Gus bounces back and I would imagine Fleury is motivated to finish 
                    his Hall of Fame career on a high note. I am banking on this tandem to produce a save percentage higher than .897 this year. 
                    Wallstedt might be close to ready if things go sideways.
                    </p>
                    <p>
                    I don’t think Minnesota had a spectacular offseason by any means. They are still very hindered by the Suter and Parise 
                    buyouts so it’s hard for them to really do anything. I do believe Minnesota will be back in the playoff hunt with a save 
                    or two this year.
                    </p>
            
                </section>
                <section id="projections">
                    <h2><img src={predators.logo} alt={`${predators.name} Logo`} className="team-logo" />{predators.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: predators.primaryColor }}>
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
                                <td>{predators.proj_points}</td>
                                <td>{predators.proj_goals}</td>
                                <td>{predators.proj_goals_against}</td>
                                <td>{predators.playoffs}%</td>
                                <td>{predators.second_round}%</td>
                                <td>{predators.conf_final}%</td>
                                <td>{predators.cup_final}%</td>
                                <td>{predators.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                    <p>
                    Did anyone have more fun this summer than Nashville Predator fans? Brady Skjei, Jonathan Marchessault, and Steven Stamkos all came to town via free agency. 
                    They also extended their pending superstar free agent Juuse Saros. The lone low point was the Yaroslav Askarov trade saga that went down at the end of summer.
                    </p>
                    <p>
                    Nashville was already a bit of a surprise success last year. They looked dead in the water after a 9-2 loss at the hand of Dallas in mid February. They went 
                    20-5-3 from that point on. Filip Forsberg set a career high in points with new linemates Ryan O’Reilly and Gustav Nyquist. Roman Josi was once again a Norris 
                    candidate. Despite a uncharacteristically poor start from Saros, he righted the ship at the end of the season. 
                    </p>
                    <p>
                    Nashville is a very interesting team in the fact they are not exactly a young team and are carried by solid veterans. Evangelista is the only NHL mainstay of their “young” 
                    players. Parssinen and Tomasino split time between the AHL and NHL again. It would be nice to see one of those two take a spot and keep it. Overall I think this is a contender 
                    in the Western Conference and I am excited to see what they can do.
                </p>

                </section>
                <section id="projections">
                    <h2><img src={blues.logo} alt={`${blues.name} Logo`} className="team-logo" />{blues.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: blues.primaryColor }}>
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
                                <td>{blues.proj_points}</td>
                                <td>{blues.proj_goals}</td>
                                <td>{blues.proj_goals_against}</td>
                                <td>{blues.playoffs}%</td>
                                <td>{blues.second_round}%</td>
                                <td>{blues.conf_final}%</td>
                                <td>{blues.cup_final}%</td>
                                <td>{blues.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                    <p>
                    This might be a bit too low of a projection for the Blues. They played much better after the coaching change last season. 
                    </p>
                    <p>
                    I really like Kyrou, Thomas, and Buchnevich. Neighbours, while limited, might be a 30+ goal guy too. 
                    Binnington and Hofer were a surprisingly solid tandem last year giving them a .913 save percentage.
                    </p>
                    <p>
                    I love that Doug Armstrong went out and offersheeted Holloway and Broberg for the entertainment value. 
                    I think more GM’s need to capitalize on situations like this despite the full diaper syndrome that comes with it from the team it happens to. 
                    Broberg has big shoes to fill as he will likely be filling into a top 4 role with Krug sidelined for the year. 
                    </p>
                    <p>
                    Overall this roster doesn’t really excite me outside of their top line. I think they will have a tough time scoring goals. 
                    I’m not confident they will get as good of goaltending as they got last year either. 
                    </p>
                </section>
                <section id="projections">
                    <h2><img src={hockey.logo} alt={`${hockey.name} Logo`} className="team-logo" />{hockey.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: hockey.primaryColor }}>
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
                                <td>{hockey.proj_points}</td>
                                <td>{hockey.proj_goals}</td>
                                <td>{hockey.proj_goals_against}</td>
                                <td>{hockey.playoffs}%</td>
                                <td>{hockey.second_round}%</td>
                                <td>{hockey.conf_final}%</td>
                                <td>{hockey.cup_final}%</td>
                                <td>{hockey.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            
                <section id="about">
                    <p>
                    As bad as I feel for hockey fans in Arizona, I am glad the Frankenstein experiment with the Coyotes is finally over. Arizona looked to be a fringe playoff 
                    team until around the time the rumors of relocation came about last year.
                    </p>
                    <p>
                    There is an exciting core of young players here starting with Dylan Guenther and Logan Cooley. Josh Doan got off to an exciting start in his NHL career with 9 points 
                    in 11 games. Matias Maccelli built off of a strong rookie campaign as well. Sean Durzi has continued to get better every year since breaking into the league. Connor 
                    Ingram had been an interesting goalie prospect for awhile. He seems to be forming into a nice 1A option for Utah. 
                    </p>
                    <p>
                    Utah made big moves on their blueline this summer. They acquired Mikhail Sergachev from the Lightning in exchange for JJ Moser and Connor Geekie. Geekie looks to be a 
                    star in the making, but Sergachev is an established top pair guy that Utah needs. John Marino also is coming in via trade after he sort of got forced out of the New 
                    Jersey lineup. The reliable Ian Cole was brought in via free agency as well. 
                    </p>
                    <p>
                    New ownership and a concrete direction should 
                    go a long way for this group. I’d love to see them sneak into the playoffs.
                    </p>
                </section>
                <section id="projections">
                    <h2><img src={jets.logo} alt={`${jets.name} Logo`} className="team-logo" />{jets.name}</h2>
                    
                    <table className="projection-table">
                        <thead>
                        <tr style={{ backgroundColor: jets.primaryColor }}>
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
                                <td>{jets.proj_points}</td>
                                <td>{jets.proj_goals}</td>
                                <td>{jets.proj_goals_against}</td>
                                <td>{jets.playoffs}%</td>
                                <td>{jets.second_round}%</td>
                                <td>{jets.conf_final}%</td>
                                <td>{jets.cup_final}%</td>
                                <td>{jets.cup_win}%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="about">
                    <p>
                    Connor Hellebuyck went supernova again and propelled the Jets into a 110 point season. Josh Morrissey has solidified himself as a legit Number 1 defenseman. 
                    Scheifele, Connor, and Ehlers did a good enough job doing the heavy lifting on offense too. 
                    </p>
                    <p>
                    I am dying for a fully healthy season for Gabe Vilardi. The Jets 
                    could benefit from Perfetti taking a step this year as well. I am skeptical on Winnipeg’s center depth behind Scheifele and Lowry. Outside of that, they have 
                    pretty solid depth on the wings. Alex Iaffalo is still incredibly effective defensively, but has taken on a lesser role in Winnipeg that seems to have limited 
                    his offensive ceiling.
                    </p>
                    <p>
                    This blueline has potential to be a disaster outside of Morrissey and DeMelo. Gone are the days of underrated Colin Miller. Neal Pionk 
                    on the second pair is a nightmare. Logan Stanley can’t stay healthy and isn’t very good when he is in the lineup. Maybe they have something in Samberg?
                    </p>
                    <p>
                    The Jets ace in their back pocket is obviously Mr. Hellebuyck. Kaapo Kahkonen and Eric Comrie being behind him in case of emergency causes concerns to say the least. You 
                can argue that every hockey team lives and dies by their goaltender. However, the situation in Winnipeg feels a bit more extreme with the lack of goaltending and 
                defensive depth. I think Winnipeg is closer to a bubble playoff team rather than a 110 point juggernaut regardless of health.
                    </p>
                </section>
            </div>
        );
    }
}

export default Central;
