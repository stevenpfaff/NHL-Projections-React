import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import teamsData from '../../data/vibes.json';
import './Divisions.css'; // Ensure this path is correct

class Vibes extends Component {
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
        .sort((a, b) => a.place - b.place);
    };

    const centralTeams = getSortedTeams('Central');
    const pacificTeams = getSortedTeams('Pacific');
    const atlanticTeams = getSortedTeams('Atlantic');
    const metroTeams = getSortedTeams('Metropolitan');

    return (
      <div className="divisions-container">
        <div className="division-column">
          <h1>Central</h1>
          <Table striped bordered hover>
            <thead className="headerStyleWest">
              <tr>
                <th className="pointsColumn">Team</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <h1>Pacific</h1>
          <Table striped bordered hover>
            <thead className="headerStyleWest">
              <tr>
                <th className="pointsColumn">Team</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <h1>Atlantic</h1>
          <Table striped bordered hover>
            <thead className="headerStyleEast">
              <tr>
                <th className="pointsColumn">Team</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="division-column">
          <h1>Metropolitan</h1>
          <Table striped bordered hover>
            <thead className="headerStyleEast">
              <tr>
                <th className="pointsColumn">Team</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Vibes;
