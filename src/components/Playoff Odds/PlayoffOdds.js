import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import './PlayoffOdds.css';

class PlayoffOdds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortConfig: { key: 'current_win', direction: 'descending' },
    };
  }

  componentDidMount() {
    Papa.parse('/currentdata.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data.map((team) => ({
          ...team,
          current_playoffs: parseFloat(team.current_playoffs),
          current_round2: parseFloat(team.current_round2),
          current_conf: parseFloat(team.current_conf),
          current_final: parseFloat(team.current_final),
          current_win: parseFloat(team.current_win),
          current_points: parseFloat(team.current_points),
        }));
        const sortedData = [...parsedData].sort((a, b) => b.current_win - a.current_win);
        this.setState({ data: sortedData });
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });
  }

  sortData = (key) => {
    const { data, sortConfig } = this.state;
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return direction === 'ascending' ? a[key] - b[key] : b[key] - a[key];
      }
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
        <h1 style={{ marginTop: '2%' }}>NHL Playoff Odds</h1>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <p>Updated as of 1/7/2025</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('current_points')}>Proj PTS</th>
              <th onClick={() => this.sortData('current_playoffs')}>Playoff %</th>
              <th onClick={() => this.sortData('current_round2')}>Round 2 %</th>
              <th onClick={() => this.sortData('current_conf')}>Conf Final %</th>
              <th onClick={() => this.sortData('current_final')}>Cup Final %</th>
              <th onClick={() => this.sortData('current_win')}>Win Cup %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={index}>
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
                <td className='stat-td'>{team.current_points}</td>
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
