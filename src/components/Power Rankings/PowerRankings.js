import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../data/rankings.json';
import './PowerRankings.css';

class PowerRankings extends Component {
  constructor(props) {
    super(props);
    // Sort data by 'place' initially
    const sortedData = [...data].sort((a, b) => a.place - b.place);
    this.state = { data: sortedData, sortConfig: { key: 'place', direction: 'ascending' } };
  }

  // Sorting function
  sortData = (key) => {
    const { data, sortConfig } = this.state;
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    this.setState({ data: sortedData, sortConfig: { key, direction } });
  };

  // Group teams by tier
  groupByTier = () => {
    const { data } = this.state;
    return data.reduce((acc, team) => {
      const { tier } = team;
      if (!acc[tier]) {
        acc[tier] = [];
      }
      acc[tier].push(team);
      return acc;
    }, {});
  };

  render() {
    const tiers = this.groupByTier();

    return (
      <div className="table-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {Object.keys(tiers).map((tier) => (
          <div key={tier} className={`tier-section tier-${tier.toLowerCase().replace(/\s+/g, '-')}`}>
            <h2>{tier}</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th onClick={() => this.sortData('place')}>Rank</th>
                  <th onClick={() => this.sortData('name')}>Team</th>
                </tr>
              </thead>
              <tbody>
                {tiers[tier].map((team) => (
                  <tr key={team.name}>
                    <td className='stat-td'>{team.place}</td>
                    <td>
                      <div className="logo-container">
                        <img 
                          src={team.logo} 
                          className="logo" 
                          alt={`${team.name} logo`} 
                        />
                        <span>{team.name}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    );
  }
}

export default PowerRankings;
