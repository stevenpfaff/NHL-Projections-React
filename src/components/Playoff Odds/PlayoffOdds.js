import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './PlayoffOdds.css';

class PlayoffOdds extends Component {
  constructor(props) {
    super(props);
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
      <div className="table-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('proj_points')}>Points</th>
              <th onClick={() => this.sortData('playoffs')}>Playoff %</th>
              <th onClick={() => this.sortData('second_round')}>Round 2 %</th>
              <th onClick={() => this.sortData('conf_final')}>Conf Final %</th>
              <th onClick={() => this.sortData('cup_final')}>Cup Final %</th>
              <th onClick={() => this.sortData('cup_win')}>Win Cup %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team) => (
              <tr key={team.name}>
                <td>
                  <div className="logo-container">
                    <img 
                      src={team.logo} 
                      className="logo" 
                      alt={`${team.name} logo`} 
                    />
                    <Link to={`/team/${team.id}`} style={{ marginLeft: '8px' }}>
                      <span>{team.abrv}</span>
                    </Link>
                  </div>
                </td>
                <td className='stat-td'>{team.proj_points}</td>
                <td className='stat-td'>{team.playoffs}%</td>
                <td className='stat-td'>{team.second_round}%</td>
                <td className='stat-td'>{team.conf_final}%</td>
                <td className='stat-td'>{team.cup_final}%</td>
                <td className='stat-td'>{team.cup_win}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PlayoffOdds;
