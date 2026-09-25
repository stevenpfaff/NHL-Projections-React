import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './PlayoffOdds.css';
import { useParams } from 'react-router-dom';

const Picks = () => {
  const { year } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch('/picks.csv');
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const processedData = result.data
              .map((team) => ({
                ...team,
                rank: parseInt(team.rank, 10),
              }))
              .sort((a, b) => a.rank - b.rank);

            setData(processedData);
            setLoading(false);
          },
          error: (err) => {
            console.error('Error parsing CSV:', err);
            setError('Failed to load picks.');
            setLoading(false);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
        setError('Failed to fetch picks.');
        setLoading(false);
      }
    };

    fetchCSVData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const seasonTitle = year
    ? `${Number(year) - 1}/${year} Preseason Picks`
    : 'Preseason Picks';

  const atlantic = data.filter(team => team.division === 'Atlantic');
  const metro = data.filter(team => team.division === 'Metropolitan');
  const central = data.filter(team => team.division === 'Central');
  const pacific = data.filter(team => team.division === 'Pacific');

  // Keep each division in personal ranking order
  const sortTeams = (teams) =>
    [...teams].sort((a, b) => a.rank - b.rank);

  const renderTable = (teams, title) => (
    <div className="conference-table">
      <h2>{title}</h2>

      <Table
        className="playoff-odds-table"
        striped
        bordered
        hover
        responsive
        size="sm"
      >
        <thead>
          <tr>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team) => (
            <tr key={team.abrv}>

              <td>
                <div className="logo-container">
                  <img
                    src={team.logo}
                    className="logo"
                    alt={`${team.name} logo`}
                  />
                  <span>{team.abrv}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="table-container">

      <div className="bracket-header">
        <img
          src="../../Images/OnlyNorthCircle.png"
          alt="Site Logo"
          className="site-logo"
        />
        <h1>{seasonTitle}</h1>
      </div>

      <div className="picks-grid">
        {renderTable(sortTeams(pacific), 'Pacific')}
        {renderTable(sortTeams(central), 'Central')}
        {renderTable(sortTeams(metro), 'Metropolitan')}
        {renderTable(sortTeams(atlantic), 'Atlantic')}
      </div>

    </div>
  );
};

export default Picks;