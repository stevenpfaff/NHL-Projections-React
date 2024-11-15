import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import data from '../../data/rankings.json';
import './PowerRankings.css';

class PowerRankings extends Component {
  constructor(props) {
    super(props);
    const sortedData = [...data].sort((a, b) => a.place - b.place);
    this.state = {
      data: sortedData,
      sortConfig: { key: 'place', direction: 'ascending' },
      viewMode: 'tiered',
    };
  }

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

  toggleView = () => {
    this.setState((prevState) => ({
      viewMode: prevState.viewMode === 'tiered' ? 'ranked' : 'tiered',
    }));
  };

  render() {
    const { viewMode, data } = this.state;
    const tiers = this.groupByTier();

    return (
      <div className="power-table-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Button onClick={this.toggleView} variant="primary" style={{ marginBottom: '15px' }}>
          Toggle {viewMode === 'tiered' ? 'Ranked' : 'Tiered'} View
        </Button>
      <h1>NHL Power Rankings</h1>
      <p>Last Updated 11/11/2024</p>
        {viewMode === 'tiered' ? (
          Object.keys(tiers).map((tier) => (
            <div key={tier} className={`tier-section tier-${tier.toLowerCase().replace(/\s+/g, '-')}`}>
              <h2>{tier}</h2>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th onClick={() => this.sortData('place')}>Rank</th>
                    <th onClick={() => this.sortData('name')}>Team</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers[tier].map((team) => (
                    <tr key={team.name}>
                      <td className="stat-td">{team.place}</td>
                      <td>
                        <div className="logo-container">
                          <img src={team.logo} className="logo" alt={`${team.name} logo`} />
                          <span>{team.name}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))
        ) : (
          <div className="ranked-grid">
            {data.map((team) => (
              <div key={team.name} className="grid-item">
                <div className="rank">{team.place}</div>
                <div className="logo-container-grid">
                  <img src={team.logo} className="logo-grid" alt={`${team.name} logo`} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PowerRankings;