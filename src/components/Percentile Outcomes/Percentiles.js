import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';

class Percentiles extends Component {
    constructor(props){
        super(props);
        const sortedData = [...data].sort((a, b) => b.proj_points - a.proj_points);
        this.state = { data: sortedData, sortConfig: { key: 'proj_points', direction: 'descending' } };
      }
      sortData = (key) => {
        const { data, sortConfig } = this.state;
        let direction = 'ascending';
    
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
    
        const sortedData = [...data].sort((a, b) => {
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Table striped bordered hover>
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
                {data.map((team) => (
                  <tr key={team.name}>
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
                    <td className='stat-td'>{team.low_points}</td>
                    <td className='stat-td'>{team.proj_points}</td>
                    <td className='stat-td'>{team.high_points}</td>
                    <td className='stat-td'>{team.low_goals}</td>
                    <td className='stat-td'>{team.proj_goals}</td>
                    <td className='stat-td'>{team.high_goals}</td>
                    <td className='stat-td'>{team.low_goals_against}</td>
                    <td className='stat-td'>{team.proj_goals_against}</td>
                    <td className='stat-td'>{team.high_goals_against}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        );
      }
    }
export default Percentiles;