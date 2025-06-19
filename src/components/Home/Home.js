import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./Home.css";

class Home extends Component {

    render() {
        const percentileData = [
            { scale: 80, range: '98% – 100%' },
            { scale: 70, range: '90% – 97%' },
            { scale: 65, range: '80% – 89%' },
            { scale: 60, range: '66% – 79%' },
            { scale: 55, range: '60% – 65%' },
            { scale: 50, range: '41% – 59%' },
            { scale: 45, range: '35% – 40%' },
            { scale: 40, range: '21% – 34%' },
            { scale: 35, range: '11% – 20%' },
            { scale: 30, range: '3% – 10%' },
            { scale: 20, range: '0% – 2%' },
        ];

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
                        This website displays the results of a program written to simulate the entire NHL season.
                        This simulation is run 100,000 times to get the widest range of outcomes.
                    </p>

                    <h2>Player Evaluation</h2>
                    <p>
                        We use Patrick Bacon's WAR model to evaluate players. We take each skaters WAR Percentile and apply it on a 20-80 scale.
                        The 6 WAR categories we use in our simulation are Shooting, Offensive Impact, Defensive Impact, Penalties, Powerplay, and
                        Penalty Kill. Each team has ratings compiled from their associated skaters in these categories. 
                    </p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Rating</th>
                                <th>Percentile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {percentileData.map((item) => (
                                <tr key={item.scale}>
                                    <td>{item.scale}</td>
                                    <td>{item.range}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </section>
            </div>
        );
    }
}

export default Home;
