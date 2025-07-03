import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './Divisions.css';

class Divisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsData: [],
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
          current_points: parseFloat(team.current_points),
        }));
        console.log('Parsed Data:', parsedData);
        this.setState({ teamsData: parsedData });
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });
  }

  render() {
    const { teamsData } = this.state;
  
    const getSortedTeams = (division) => {
      return teamsData
        .filter((team) => team.division?.toLowerCase().trim() === division.toLowerCase().trim())
        .sort((a, b) => b.current_points - a.current_points);
    };
    
    const centralTeams = getSortedTeams('Central');
    const pacificTeams = getSortedTeams('Pacific');
    const atlanticTeams = getSortedTeams('Atlantic');
    const metroTeams = getSortedTeams('Metropolitan');
    const roundPoints = (points) => {
      return points.toFixed(0);
    };
  
    return (
      <div>
        <h1 style={{ marginTop: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src="../../Images/OnlyNorthCircle.png" 
            alt="Mini Logo" 
            style={{ width: '50px', height: '50px', marginLeft: '10px' }} 
          />
          2025/2026 NHL Projected Standings
        </h1>
        <p>Updated as of 7/3/2025</p>
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
                    <td className="teamCell">
                      <div className="teamWrapper">
                        <img 
                          src={team.logo} 
                          className="imageColumn" 
                          alt={`${team.name} logo`} 
                        />
                        <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{roundPoints(team.current_points)}</td>
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
                    <td className="teamCell">
                      <div className="teamWrapper">
                        <img 
                          src={team.logo} 
                          className="imageColumn" 
                          alt={`${team.name} logo`} 
                        />
                        <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{roundPoints(team.current_points)}</td>
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
                    <td className="teamCell">
                      <div className="teamWrapper">
                        <img 
                          src={team.logo} 
                          className="imageColumn" 
                          alt={`${team.name} logo`} 
                        />
                        <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{roundPoints(team.current_points)}</td>
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
                    <td className="teamCell">
                      <div className="teamWrapper">
                        <img 
                          src={team.logo} 
                          className="imageColumn" 
                          alt={`${team.name} logo`} 
                        />
                        <span className="abrvColumn">{team.abrv}</span>
                      </div>
                    </td>
                    <td className="pointsColumn">{roundPoints(team.current_points)}</td>
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
export default Divisions;
