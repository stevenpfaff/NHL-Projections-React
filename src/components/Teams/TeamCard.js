import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { Table } from 'react-bootstrap';
import './TeamCard.css';

const TeamCard = () => {
    const { id } = useParams();
    const team = data.find(obj => obj.id === parseInt(id));

    if (!team) {
        return <div>Team not found</div>;
    }

    return (
        <div className='card-container'>
            <div className="logo-section">
            <h1>{team.name}</h1>
                <img src={team.logo} className="big-logo" alt={`${team.name}`} />
            </div>
            <div className="stats-section">
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Projected Points</td>
                            <td>{team.proj_points}</td>
                        </tr>
                        <tr>
                            <td>Projected Goals</td>
                            <td>{team.proj_goals}</td>
                        </tr>
                        <tr>
                            <td>Projected Goals Against</td>
                            <td>{team.proj_goals_against}</td>
                        </tr>
                        <tr>
                            <td>Reach Playoffs</td>
                            <td>{team.playoffs}%</td>
                        </tr>
                        <tr>
                            <td>Reach Second Round</td>
                            <td>{team.second_round}%</td>
                        </tr>
                        <tr>
                            <td>Reach Conference Final</td>
                            <td>{team.conf_final}%</td>
                        </tr>
                        <tr>
                            <td>Reach Cup Final</td>
                            <td>{team.cup_final}%</td>
                        </tr>
                        <tr>
                            <td>Win Cup</td>
                            <td>{team.cup_win}%</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TeamCard;
