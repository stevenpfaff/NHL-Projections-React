import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import teamsData from '../../data/data.json';
import './Divisions.css'; // Ensure this path is correct

class Divisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsData: teamsData,
    };
  }

  render() {
    const { teamsData } = this.state;

    const getSortedTeams = (division) => {
      return teamsData
        .filter((team) => team.division === division)
        .sort((a, b) => b.current_points - a.current_points);
    };

    const centralTeams = getSortedTeams('Central');
    const pacificTeams = getSortedTeams('Pacific');
    const atlanticTeams = getSortedTeams('Atlantic');
    const metroTeams = getSortedTeams('Metropolitan');

    return (
      <div className="divisions-container">
        <div className="division-column">
          <Table bordered hover>
            <thead className="headerStyleWest">
              <tr>
                <th className="pointsColumn">Central</th>
                <th className="pointsColumn">Points</th>
              </tr>
            </thead>
            <tbody>
              {centralTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumn" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumn">{team.abrv}</span>
                  </td>
                  <td className="pointsColumn">{team.current_points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <Table bordered hover>
            <thead className="headerStyleWest">
              <tr>
                <th className="pointsColumn">Pacific</th>
                <th className="pointsColumn">Points</th>
              </tr>
            </thead>
            <tbody>
              {pacificTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumn" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumn">{team.abrv}</span>
                  </td>
                  <td className="pointsColumn">{team.current_points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <Table bordered hover>
            <thead className="headerStyleEast">
              <tr>
                <th className="pointsColumn">Atlantic</th>
                <th className="pointsColumn">Points</th>
              </tr>
            </thead>
            <tbody>
              {atlanticTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumn" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumn">{team.abrv}</span>
                  </td>
                  <td className="pointsColumn">{team.current_points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <Table bordered hover>
            <thead className="headerStyleEast">
              <tr>
                <th className="pointsColumn">Metropolitan</th>
                <th className="pointsColumn">Points</th>
              </tr>
            </thead>
            <tbody>
              {metroTeams.map((team) => (
                <tr key={team.name}>
                  <td>
                    <img 
                      src={team.logo} 
                      className="imageColumn" 
                      alt={`${team.name} logo`} 
                    />
                    <span className="abrvColumn">{team.abrv}</span>
                  </td>
                  <td className="pointsColumn">{team.current_points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Divisions;
