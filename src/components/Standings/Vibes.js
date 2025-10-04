import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import { useParams } from 'react-router-dom';
import './Divisions.css';

const Vibes = () => {
  const { year } = useParams(); // get year from route param
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    const loadCSVData = async () => {
      try {
        const response = await fetch(`/${year}vibes.csv`);
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setTeamsData(result.data);
          },
          error: (err) => {
            console.error('Error parsing CSV:', err);
          },
        });
      } catch (err) {
        console.error('Error fetching CSV:', err);
      }
    };

    loadCSVData();
  }, [year]); // refetch if year param changes

  const getSortedTeams = (division) =>
    teamsData
      .filter((team) => team.division === division)
      .sort((a, b) => a.division_standing - b.division_standing);

  const centralTeams = getSortedTeams('Central');
  const pacificTeams = getSortedTeams('Pacific');
  const atlanticTeams = getSortedTeams('Atlantic');
  const metroTeams = getSortedTeams('Metropolitan');

  return (
    <div>
      <h2 style={{ marginTop: '2%' }}>
        <img
          src="../../Images/OnlyNorthCircle.png"
          alt="Mini Logo"
          style={{ width: '50px', height: '50px', marginLeft: '10px' }}
        />
        {year === '2026'
          ? '2025/2026 NHL Preseason Picks'
          : '2024/2025 NHL Preseason Picks'}
      </h2>
      <div className="divisions-container">
        {[
          { name: 'Pacific', teams: pacificTeams, headerClass: 'headerStyleWest' },
          { name: 'Central', teams: centralTeams, headerClass: 'headerStyleWest' },
          { name: 'Metro', teams: metroTeams, headerClass: 'headerStyleEast' },
          { name: 'Atlantic', teams: atlanticTeams, headerClass: 'headerStyleEast' },
        ].map(({ name, teams, headerClass }) => (
          <div className="division-column" key={name}>
            <Table striped bordered hover>
              <thead className={headerClass}>
                <tr>
                  <th className="pointsColumn">{name}</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
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

export default Vibes;
