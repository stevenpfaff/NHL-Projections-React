import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './Divisions.css';

const OddsStandings = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const response = await fetch('/currentdata.csv');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          complete: (result) => {
            setTeamsData(result.data);
            setLoading(false);
          },
        });
      } catch (err) {
        console.error('Error fetching teams data:', err);
        setError('Failed to load data.');
        setLoading(false);
      }
    };

    fetchTeamsData();
  }, []);

  const getSortedTeams = (division) => {
    return teamsData
      .filter((team) => team.division === division)
      .sort((a, b) => parseFloat(b.current_points) - parseFloat(a.current_points));
  };

  const roundPoints = (points) => {
    const num = Number(points);
    if (isNaN(num)) return '-';
    return num.toFixed(0);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const centralTeams = getSortedTeams('Central');
  const pacificTeams = getSortedTeams('Pacific');
  const atlanticTeams = getSortedTeams('Atlantic');
  const metroTeams = getSortedTeams('Metropolitan');

  return (
    <div>
      <h1
        style={{
          marginTop: '2%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <img
          src="../../Images/OnlyNorthCircle.png"
          alt="Mini Logo"
          style={{ width: '50px', height: '50px', marginLeft: '10px' }}
        />
        NHL Projected Standings
      </h1>
      <p>Updated as of 10/10/2025</p>
      <div className="divisionOdds-container">
        {[
          { title: 'Pacific', teams: pacificTeams, headerStyle: 'headerStyleWest' },
          { title: 'Central', teams: centralTeams, headerStyle: 'headerStyleWest' },
          { title: 'Metro', teams: metroTeams, headerStyle: 'headerStyleEast' },
          { title: 'Atlantic', teams: atlanticTeams, headerStyle: 'headerStyleEast' },
        ].map(({ title, teams, headerStyle }) => (
          <div className="division-column" key={title}>
            <Table striped bordered hover>
              <thead className={headerStyle}>
                <tr>
                  <th className="oddsColumn">{title}</th>
                  <th className="oddsColumn">PTS</th>
                  <th className="oddsColumn">PO%</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.name}>
                    <td>
                      <img
                        src={team.logo}
                        className="imageColumnOdds"
                        alt={`${team.name} logo`}
                      />
                      <span className="abrvColumnOdds">{team.abrv}</span>
                    </td>
                    <td className="oddsColumn">{roundPoints(team.current_points)}</td>
                    <td className="oddsColumn">{team.current_playoffs}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OddsStandings;