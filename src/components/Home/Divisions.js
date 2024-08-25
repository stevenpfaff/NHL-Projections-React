import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import teamsData from '../../data/data.json';
import './styles.css';

class Divisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsData: teamsData,
    };
  }

  render() {
    const { teamsData } = this.state;

    // Helper function to get teams sorted by points for a specific division
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
      <div style={{ margin: '5%' }}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <h1 style={{ fontFamily: 'inherit', textAlign: 'center' }}>Central</h1>
            <Table striped bordered hover>
              <thead className="headerStyleWest">
                <tr>
                  <th>Team</th>
                  <th>Projected PTS</th>
                </tr>
              </thead>
              <tbody>
                {centralTeams.map((team) => (
                  <tr key={team.name}>
                    <td>
                    <img 
                      src={team.logo} 
                      className="logo" 
                      alt={`${team.name} logo`}
                      style={{ marginRight: '10px' }} 
                      />
                    </td>
                    <td>{team.proj_points}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <h1 style={{ fontFamily: 'inherit', textAlign: 'center' }}>Pacific</h1>
            <Table striped bordered hover>
              <thead className="headerStyleWest">
                <tr>
                  <th>Team</th>
                  <th>Projected PTS</th>
                </tr>
              </thead>
              <tbody>
                {pacificTeams.map((team) => (
                  <tr key={team.name}>
                    <td>
                    <img 
                      src={team.logo} 
                      className="logo" 
                      alt={`${team.name} logo`}
                      style={{ marginRight: '10px' }} 
                      />
                    </td>
                    <td>{team.proj_points}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <h1 style={{ fontFamily: 'inherit', textAlign: 'center' }}>Atlantic</h1>
            <Table striped bordered hover>
              <thead className="headerStyleEast">
                <tr>
                  <th>Team</th>
                  <th>Projected PTS</th>
                </tr>
              </thead>
              <tbody>
                {atlanticTeams.map((team) => (
                  <tr key={team.name}>
                    <td>
                    <img 
                      src={team.logo} 
                      className="logo" 
                      alt={`${team.name} logo`}
                      style={{ marginRight: '10px' }} 
                      />
                    </td>
                    <td>{team.proj_points}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <h1 style={{ fontFamily: 'inherit', textAlign: 'center' }}>Metropolitan</h1>
            <Table striped bordered hover>
              <thead className="headerStyleEast">
                <tr>
                  <th>Team</th>
                  <th>Projected PTS</th>
                </tr>
              </thead>
              <tbody>
                {metroTeams.map((team) => (
                  <tr key={team.name}>
                    <td>
                    <img 
                      src={team.logo} 
                      className="logo" 
                      alt={`${team.name} logo`}
                      style={{ marginRight: '10px' }} 
                      />
                    </td>
                    <td>{team.proj_points}</td>
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
