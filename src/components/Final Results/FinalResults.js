import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './FinalResults.css';

class FinalResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortConfig: { key: 'name', direction: 'ascending' },
    };
  }

  componentDidMount() {
    Papa.parse('/finalresults.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data.map((team) => ({
          ...team,
          playoffs: parseFloat(team.playoffs),
          proj_goals: parseFloat(team.proj_goals),
          proj_goals_ag: parseFloat(team.proj_goals_ag),
          actual_goals: parseFloat(team.actual_goals),
          actual_goals_ag: parseFloat(team.actual_goals_ag),
          proj_points: parseFloat(team.proj_points),
          actual_points: parseFloat(team.actual_points),
          error: parseFloat(Math.abs(team.actual_points - team.proj_points)),
        }));
        const sortedData = [...parsedData].sort((a, b) => b.name - a.name);
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
      <div className="final-results-page">
        <h1 style={{ marginTop: '2%', marginBottom: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src="../../Images/OnlyNorthCircle.png" 
            alt="Mini Logo" 
            style={{ width: '50px', height: '50px', marginLeft: '10px' }} 
          />
          Final Results
        </h1>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('playoffs')}>Playoff%</th>
              <th onClick={() => this.sortData('result')}>Playoffs?</th>
              <th onClick={() => this.sortData('proj_points')}>Proj PTS</th>
              <th onClick={() => this.sortData('actual_points')}>PTS</th>
              <th onClick={() => this.sortData('error')}>Error</th>
              <th onClick={() => this.sortData('pick')}>Pick</th>
              <th onClick={() => this.sortData('proj_goals')}>Proj GF</th>
              <th onClick={() => this.sortData('proj_goals_ag')}>Proj GA</th>
              <th onClick={() => this.sortData('actual_goals')}>GF</th>
              <th onClick={() => this.sortData('actual_goals_ag')}>GA</th>
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
                      <span>{team.abrv}</span>
                  </div>
                </td>
                <td className="stat-td">{team.playoffs}%</td>
                <td className="stat-td">{team.result && team.result.trim() !== '' ? '✓' : 'X'}</td>
                <td className="stat-td">{team.proj_points}</td>
                <td className="stat-td">{team.actual_points}</td>
                <td className="stat-td">{team.error}</td>
                <td className="stat-td">{team.pick && team.pick.trim() !== '' ? '✓' : 'X'}</td>
                <td className="stat-td">{team.proj_goals}</td>
                <td className="stat-td">{team.proj_goals_ag}</td>
                <td className="stat-td">{team.actual_goals}</td>
                <td className="stat-td">{team.actual_goals_ag}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
    
  }
}

export default FinalResults;
