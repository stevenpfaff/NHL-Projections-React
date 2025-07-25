import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './PlayoffOdds.css';

class PreseasonOdds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
      sortConfig: { key: 'cup_win', direction: 'descending' },
    };
  }

  fetchCSVData = async () => {
    try {
      const response = await fetch('/2025startdata.csv');
      const csvData = await response.text();

      // Parse the CSV data
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const processedData = result.data.map((team) => ({
            ...team,
            playoffs: parseFloat(team.playoffs), 
            second_round: parseFloat(team.second_round),
            conf_final: parseFloat(team.conf_final),
            cup_final: parseFloat(team.cup_final),
            cup_win: parseFloat(team.cup_win),
            proj_points: parseFloat(team.proj_points),
          }));

          const sortedData = [...processedData].sort((a, b) => b.cup_win - a.cup_win);
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
      let aValue = a[key];
      let bValue = b[key];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

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
        <h1 style={{ marginTop: '2%', marginBottom: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src="../../Images/OnlyNorthCircle.png" 
            alt="Mini Logo" 
            style={{ width: '50px', height: '50px', marginLeft: '10px' }} 
          />
          2024/2025 Preseason Playoff Odds
        </h1> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Table striped bordered hover responsive size="sm">
        <thead>
            <tr>
              <th onClick={() => this.sortData('name')}>Team</th>
              <th onClick={() => this.sortData('proj_points')}>Proj Points</th>
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
                      <span>{team.abrv}</span>      
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

export default PreseasonOdds;
