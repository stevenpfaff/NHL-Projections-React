import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './PowerRankings.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

class PowerRankings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortConfig: { key: 'place', direction: 'ascending' },
      viewMode: 'tiered',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadCSVData();
  }

  loadCSVData = () => {
    fetch('/rankings.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data.map((item) => ({
              ...item,
              place: parseInt(item.place, 10),
              rankChange: parseInt(item.rankChange, 10),
            }));
            const sortedData = [...parsedData].sort((a, b) => a.place - b.place);
            this.setState({ data: sortedData, isLoading: false });
          },
        });
      })
      .catch((error) => {
        console.error('Error loading CSV file:', error);
        this.setState({ isLoading: false });
      });
  };

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

  renderRankChange(rankChange) {
    if (rankChange > 0) {
      return (
        <span className="rank-change up">
          <FaArrowUp /> {rankChange}
        </span>
      );
    } else if (rankChange < 0) {
      return (
        <span className="rank-change down">
          <FaArrowDown /> {Math.abs(rankChange)}
        </span>
      );
    } else {
      return <span className="rank-change unchanged">–</span>;
    }
  }

  render() {
    const { viewMode, data, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    const tiers = this.groupByTier();

    return (
      <div className="power-table-container">
        <Button onClick={this.toggleView} variant="primary" style={{ marginBottom: '15px' }}>
          Toggle {viewMode === 'tiered' ? 'Ranked' : 'Tiered'} View
        </Button>
        <h1>NHL Power Rankings</h1>
        <p>Last Updated 2/2/2025</p>
        {viewMode === 'tiered' ? (
          Object.keys(tiers).map((tier) => (
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
                      <td className="stat-td">
                        {team.place} {this.renderRankChange(team.rankChange)}
                      </td>
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
                <div className="rank">
                  {team.place} {this.renderRankChange(team.rankChange)}
                </div>
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