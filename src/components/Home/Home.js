import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../data/data.json';
import './styles.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data, sortConfig: null };
  }

  sortData = (key) => {
    const { data, sortConfig } = this.state;
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    this.setState({ data: sortedData, sortConfig: { key, direction } });
  };

  render() {
    const { data } = this.state;

    return (
      <div style={{ marginRight: "20%", marginLeft: "20%",  marginTop: "5%", marginBottom: "5%" }}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Playoff Odds</h1> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('proj_points')}>Projected PTS</th>
              <th onClick={() => this.sortData('proj_goals')}>Projected GF</th>
              <th onClick={() => this.sortData('proj_goals_against')}>Projected GA</th>
              <th onClick={() => this.sortData('playoffs')}>Playoff %</th>
              <th onClick={() => this.sortData('second_round')}>Round 2 %</th>
              <th onClick={() => this.sortData('conf_final')}>Conference Final %</th>
              <th onClick={() => this.sortData('cup_final')}>Cup Final %</th>
              <th onClick={() => this.sortData('cup_win')}>Win Cup %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team) => (
              <tr key={team.name}>
              <td>
              <img 
                src={team.logo} 
                className="logo" 
                alt={`${team.name} logo`}
                style={{ marginRight: '10px' }} 
                />
              </td>
                <td>{team.name}</td>
                <td>{team.proj_points}</td>
                <td>{team.proj_goals}</td>
                <td>{team.proj_goals_against}</td>
                <td>{team.playoffs}%</td>
                <td>{team.second_round}%</td>
                <td>{team.conf_final}%</td>
                <td>{team.cup_final}%</td>
                <td>{team.cup_win}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
