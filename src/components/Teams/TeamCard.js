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


    const headerStyle = {
        backgroundColor: team.primaryColor,
        height: '30px'
    };

    return (
        <div className='card-container'>
            <div className="logo-section">
                <h1>{team.name}</h1>
                <img src={team.logo} className="big-logo" alt={`${team.name}`} />
            </div>
            <div className="stats-section-card">
                <Table striped bordered hover>
                    <thead>
                        <tr style={headerStyle}>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='category-td'>Projected Points</td>
                            <td className='stat-td'>{team.proj_points}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Projected Goals</td>
                            <td className='stat-td'>{team.proj_goals}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Projected Goals Against</td>
                            <td className='stat-td'>{team.proj_goals_against}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Playoffs</td>
                            <td className='stat-td'>{team.playoffs}%</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Second Round</td>
                            <td className='stat-td'>{team.second_round}%</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Conference Final</td>
                            <td className='stat-td'>{team.conf_final}%</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Cup Final</td>
                            <td className='stat-td'>{team.cup_final}%</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Win Cup</td>
                            <td className='stat-td'>{team.cup_win}%</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TeamCard;
