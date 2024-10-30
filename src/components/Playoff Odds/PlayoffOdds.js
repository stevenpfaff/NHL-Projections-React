import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './PlayoffOdds.css';

class PlayoffOdds extends Component {
  constructor(props) {
    super(props);
    const sortedData = [...data].sort((a, b) => b.current_win - a.current_win);
    this.state = { data: sortedData, sortConfig: { key: 'current_win', direction: 'descending' } };
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
        <p>Updated as of 10/30/2024</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('current_playoffs')}>Playoff %</th>
              <th onClick={() => this.sortData('current_round2')}>Round 2 %</th>
              <th onClick={() => this.sortData('current_conf')}>Conf Final %</th>
              <th onClick={() => this.sortData('current_final')}>Cup Final %</th>
              <th onClick={() => this.sortData('current_win')}>Win Cup %</th>
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
                <td className='stat-td'>{team.current_playoffs}%</td>
                <td className='stat-td'>{team.current_round2}%</td>
                <td className='stat-td'>{team.current_conf}%</td>
                <td className='stat-td'>{team.current_final}%</td>
                <td className='stat-td'>{team.current_win}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PlayoffOdds;
