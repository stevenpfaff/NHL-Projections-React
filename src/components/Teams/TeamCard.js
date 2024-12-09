import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import { Table } from 'react-bootstrap';
import './TeamCard.css';

const TeamCard = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndCombineData = async () => {
            try {
                // Parse both CSVs
                const [startData, currentData] = await Promise.all([
                    parseCSV('/startdata.csv'),
                    parseCSV('/currentdata.csv'),
                ]);

                const combinedData = combineData(startData, currentData);
                const foundTeam = combinedData.find((obj) => obj.id === parseInt(id));

                setTeam(foundTeam);
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndCombineData();
    }, [id]);

    if (loading) {
        return <div>Loading team data...</div>;
    }

    if (!team) {
        return <div>Team not found</div>;
    }

    const headerStyle = {
        backgroundColor: team.primaryColor,
        color: 'white',
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
                        <tr>
                            <th style={headerStyle}>Category</th>
                            <th style={headerStyle}>Start</th>
                            <th style={headerStyle}>Current</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='category-td'>Projected Points</td>
                            <td className='stat-td'>{team.start_proj_points}</td>
                            <td className='stat-td'>{team.current_points}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Playoffs</td>
                            <td className='stat-td'>{team.start_playoffs}%</td>
                            <td className='stat-td'>{team.current_playoffs}%</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Second Round</td>
                            <td className='stat-td'>{team.start_second_round}%</td>
                            <td className='stat-td'>{team.current_round2}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Conference Final</td>
                            <td className='stat-td'>{team.start_conf_final}%</td>
                            <td className='stat-td'>{team.current_conf}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Reach Cup Final</td>
                            <td className='stat-td'>{team.start_cup_final}%</td>
                            <td className='stat-td'>{team.current_final}</td>
                        </tr>
                        <tr>
                            <td className='category-td'>Win Cup</td>
                            <td className='stat-td'>{team.start_cup_win}%</td>
                            <td className='stat-td'>{team.current_win}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TeamCard;

// Helper function to parse CSV
const parseCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        Papa.parse(filePath, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result) => resolve(result.data),
            error: (error) => reject(error),
        });
    });
};

// Helper function to combine data from two CSV files
const combineData = (startData, currentData) => {
    // Convert IDs to integers for proper comparison
    const normalizedStartData = startData.map((item) => ({
        ...item,
        id: parseInt(item.id, 10),
    }));
    const normalizedCurrentData = currentData.map((item) => ({
        ...item,
        id: parseInt(item.id, 10),
    }));

    // Combine the data by matching IDs
    return normalizedStartData.map((startItem) => {
        const currentItem = normalizedCurrentData.find(
            (current) => current.id === startItem.id
        );

        return {
            ...startItem,
            ...currentItem,
            start_proj_points: parseFloat(startItem.proj_points),
            current_proj_points: parseFloat(currentItem.proj_points),
            start_playoffs: parseFloat(startItem.playoffs),
            current_playoffs: parseFloat(currentItem.current_playoffs),
            start_second_round: parseFloat(startItem.second_round),
            current_second_round: parseFloat(currentItem.second_round),
            start_conf_final: parseFloat(startItem.conf_final),
            current_conf_final: parseFloat(currentItem.conf_final),
            start_cup_final: parseFloat(startItem.cup_final),
            current_cup_final: parseFloat(currentItem.cup_final),
            start_cup_win: parseFloat(startItem.cup_win),
            current_cup_win: parseFloat(currentItem.cup_win),
        };
    });
};
