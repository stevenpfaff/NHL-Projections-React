import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Divisions.css';
import Papa from 'papaparse';

class OddsStandings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsData: [],
      loading: true,
      error: null,
    };
  }

  fetchTeamsData = async () => {
    try {
      const response = await fetch('/currentdata.csv');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      // Parse the CSV file
      const text = await response.text();
      Papa.parse(text, {
        complete: (result) => {
          this.setState({ teamsData: result.data, loading: false });
        },
        header: true,
      });
    } catch (error) {
      console.error('Error fetching teams data:', error);
      this.setState({ error: 'Failed to load data.', loading: false });
    }
  };

  componentDidMount() {
    this.fetchTeamsData();
  }

  getSortedTeams = (division) => {
    const { teamsData } = this.state;
    return teamsData
      .filter((team) => team.division === division)
      .sort((a, b) => a.current_standing - b.current_standing);
  };

  render() {
    const { loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const centralTeams = this.getSortedTeams('Central');
    const pacificTeams = this.getSortedTeams('Pacific');
    const atlanticTeams = this.getSortedTeams('Atlantic');
    const metroTeams = this.getSortedTeams('Metropolitan');

    return (
      <div>
        <h1 style={{ marginTop: '2%' }}>NHL Playoff Odds</h1>
        <p>Last Updated 2/2/2025</p>
      <div className="divisionOdds-container">
        <div className="division-column">
          <Table striped bordered hover>
            <thead className="headerStyleWest">
              <tr>
                <th className="oddsColumn">Central</th>
                <th className="oddsColumn">PO%</th>
                <th className="oddsColumn">Cup%</th>
              </tr>
            </thead>
            <tbody>
              {centralTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumnOdds" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumnOdds">{team.abrv}</span>
                  </td>
                  <td className="oddsColumn">{team.current_playoffs}</td>
                  <td className="oddsColumn">{team.current_win}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <Table striped bordered hover>
            <thead className="headerStyleWest">
              <tr>
                <th className="oddsColumn">Pacific</th>
                <th className="oddsColumn">PO%</th>
                <th className="oddsColumn">Cup%</th>
              </tr>
            </thead>
            <tbody>
              {pacificTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumnOdds" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumnOdds">{team.abrv}</span>
                  </td>
                  <td className="oddsColumn">{team.current_playoffs}</td>
                  <td className="oddsColumn">{team.current_win}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <Table striped bordered hover>
            <thead className="headerStyleEast">
              <tr>
                <th className="oddsColumn">Atlantic</th>
                <th className="oddsColumn">PO%</th>
                <th className="oddsColumn">Cup%</th>
              </tr>
            </thead>
            <tbody>
              {atlanticTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumnOdds" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumnOdds">{team.abrv}</span>
                  </td>
                  <td className="oddsColumn">{team.current_playoffs}</td>
                  <td className="oddsColumn">{team.current_win}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <Table striped bordered hover>
            <thead className="headerStyleEast">
              <tr>
                <th className="oddsColumn">Metropolitan</th>
                <th className="oddsColumn">PO%</th>
                <th className="oddsColumn">Cup%</th>
              </tr>
            </thead>
            <tbody>
              {metroTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumnOdds" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumnOdds">{team.abrv}</span>
                  </td>
                  <td className="oddsColumn">{team.current_playoffs}</td>
                  <td className="oddsColumn">{team.current_win}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    );
  }
}

export default OddsStandings;
