import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../data/data.json';
import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
    // Sort data by projected points in descending order when initializing state
    const sortedData = [...data].sort((a, b) => b.proj_points - a.proj_points);
    this.state = { data: sortedData, sortConfig: { key: 'proj_points', direction: 'descending' } };
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => this.sortData('name')} style={{ textAlign: 'left' }}>Team</th>
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
                <td style={{ textAlign: 'left' }}>
                  <img 
                    src={team.logo} 
                    className="logo" 
                    alt={`${team.name} logo`}
                    style={{ marginRight: '10px', width: '30px', height: '30px' }} 
                  />
                  {team.name}
                </td>
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
