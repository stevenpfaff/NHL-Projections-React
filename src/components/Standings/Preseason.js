import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './Divisions.css';

class Preseason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsData: [],
    };
  }

  componentDidMount() {
    this.loadCSVData('/startdata.csv');
  }

  loadCSVData = (filePath) => {
    fetch(filePath)
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            this.setState({ teamsData: result.data });
          },
          error: (err) => {
            console.error('Error parsing CSV:', err);
          },
        });
      })
      .catch((err) => {
        console.error('Error fetching CSV:', err);
      });
  };

  render() {
    const { teamsData } = this.state;

    // Helper function to get sorted teams by division
    const getSortedTeams = (division) => {
      return teamsData
        .filter((team) => team.division === division)
        .sort((a, b) => b.proj_points - a.proj_points);
    };

    const centralTeams = getSortedTeams('Central');
    const pacificTeams = getSortedTeams('Pacific');
    const atlanticTeams = getSortedTeams('Atlantic');
    const metroTeams = getSortedTeams('Metropolitan');

    return (
      <div>
        <h1 style={{ marginTop: '2%' }}>2024/2025 NHL Preseason Projected Standings</h1>
        <div className="divisions-container">
          <div className="division-column">
            <Table striped bordered hover>
              <thead className="headerStyleWest">
                <tr>
                  <th className="pointsColumn">Central</th>
                  <th className="pointsColumn">Points</th>
                </tr>
              </thead>
              <tbody>
                {centralTeams.map((team) => (
                  <tr key={team.name}>
                    <td className='teamCell'>
                      <div className='teamWrapper'>
                      <img
                        src={team.logo}
                        className="imageColumn"
                        alt={`${team.name} logo`}
                      />
                      <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{Math.round(team.proj_points)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="division-column">
            <Table striped bordered hover>
              <thead className="headerStyleWest">
                <tr>
                  <th className="pointsColumn">Pacific</th>
                  <th className="pointsColumn">Points</th>
                </tr>
              </thead>
              <tbody>
                {pacificTeams.map((team) => (
                  <tr key={team.name}>
                                        <td className='teamCell'>
                      <div className='teamWrapper'>
                      <img
                        src={team.logo}
                        className="imageColumn"
                        alt={`${team.name} logo`}
                      />
                      <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{Math.round(team.proj_points)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="division-column">
            <Table striped bordered hover>
              <thead className="headerStyleEast">
                <tr>
                  <th className="pointsColumn">Atlantic</th>
                  <th className="pointsColumn">Points</th>
                </tr>
              </thead>
              <tbody>
                {atlanticTeams.map((team) => (
                  <tr key={team.name}>
                    <td className='teamCell'>
                      <div className='teamWrapper'>
                      <img
                        src={team.logo}
                        className="imageColumn"
                        alt={`${team.name} logo`}
                      />
                      <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{Math.round(team.proj_points)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="division-column">
            <Table striped bordered hover>
              <thead className="headerStyleEast">
                <tr>
                  <th className="pointsColumn">Metro</th>
                  <th className="pointsColumn">Points</th>
                </tr>
              </thead>
              <tbody>
                {metroTeams.map((team) => (
                  <tr key={team.name}>                        
                  <td className='teamCell'>
                      <div className='teamWrapper'>
                      <img
                        src={team.logo}
                        className="imageColumn"
                        alt={`${team.name} logo`}
                      />
                      <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{Math.round(team.proj_points)}</td>
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

export default Preseason;
