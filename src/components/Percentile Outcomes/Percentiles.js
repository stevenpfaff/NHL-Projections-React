import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

class Percentiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
      sortConfig: { key: 'proj_points', direction: 'descending' },
    };
  }
  fetchCSVData = async () => {
    try {
      const response = await fetch('/2025startdata.csv');
      const csvData = await response.text();

      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: (result) => {
          const sortedData = [...result.data].sort((a, b) => b.proj_points - a.proj_points);
          this.setState({ data: sortedData, loading: false });
        },
        error: (err) => {
          console.error('Error parsing CSV:', err);
          this.setState({ error: 'Failed to load data.', loading: false });
        },
      });
    } catch (error) {
      console.error('Error fetching CSV:', error);
      this.setState({ error: 'Failed to fetch data.', loading: false });
    }
  };

  componentDidMount() {
    this.fetchCSVData();
  }

  sortData = (key) => {
    const { data, sortConfig } = this.state;
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      const aValue = typeof a[key] === 'number' ? a[key] : parseFloat(a[key]);
      const bValue = typeof b[key] === 'number' ? b[key] : parseFloat(b[key]);

      if (aValue < bValue) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    this.setState({ data: sortedData, sortConfig: { key, direction } });
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

   return (
         <div className="table-container">
           <h1 style={{ marginTop: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
             <img 
               src="../../Images/OnlyNorthCircle.png" 
               alt="Mini Logo" 
               style={{ width: '50px', height: '50px', marginLeft: '10px' }} 
             />
             2024/2025 Preseason Percentile Outcomes
           </h1>
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <Table striped bordered hover responsive size="sm">
           <thead>
            <tr>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('low_points')}>25th PTS</th>
              <th onClick={() => this.sortData('proj_points')}>50th PTS</th>
              <th onClick={() => this.sortData('high_points')}>75th PTS</th>
              <th onClick={() => this.sortData('low_goals')}>25th GF</th>
              <th onClick={() => this.sortData('proj_goals')}>50th GF</th>
              <th onClick={() => this.sortData('high_goals')}>75th GF</th>
              <th onClick={() => this.sortData('low_goals_against')}>25th GA</th>
              <th onClick={() => this.sortData('proj_goals_against')}>50th GA</th>
              <th onClick={() => this.sortData('high_goals_against')}>75th GA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={team.name || index}>
                <td>
                  <div className="logo-container">
                    {/* Ensure team.logo exists */}
                    {team.logo && <img src={team.logo} className="logo" alt={`${team.name} logo`} />}
                    <Link to={`/team/${team.id}`} style={{ marginLeft: '8px' }}>
                      <span>{team.abrv}</span>
                    </Link>
                  </div>
                </td>
                <td className="stat-td">{team.low_points}</td>
                <td className="stat-td">{team.proj_points}</td>
                <td className="stat-td">{team.high_points}</td>
                <td className="stat-td">{team.low_goals}</td>
                <td className="stat-td">{team.proj_goals}</td>
                <td className="stat-td">{team.high_goals}</td>
                <td className="stat-td">{team.low_goals_against}</td>
                <td className="stat-td">{team.proj_goals_against}</td>
                <td className="stat-td">{team.high_goals_against}</td>
              </tr>
            ))}
          </tbody>
           </Table>
         </div>
       );
  }
}

export default Percentiles;
