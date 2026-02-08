import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './PlayoffOdds.css';
import { Link, useParams } from 'react-router-dom';

const PreseasonOdds = () => {
  const { year } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: 'proj_points',
    direction: 'descending',
  });

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch(`/${year}startdata.csv`);
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const processedData = result.data.map((team) => ({
              ...team,
              playoffs: parseFloat(team.playoffs),
              second_round: parseFloat(team.second_round),
              conf_final: parseFloat(team.conf_final),
              cup_final: parseFloat(team.cup_final),
              cup_win: parseFloat(team.cup_win),
              proj_points: parseFloat(team.proj_points),
            }));

            setData(processedData);
            setLoading(false);
          },
          error: (err) => {
            console.error('Error parsing CSV:', err);
            setError('Failed to load data.');
            setLoading(false);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
        setError('Failed to fetch data.');
        setLoading(false);
      }
    };

    fetchCSVData();
  }, [year]);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sorted = [...data].sort((a, b) => {
      const aVal = parseFloat(a[key]);
      const bVal = parseFloat(b[key]);

      if (!isNaN(aVal) && !isNaN(bVal)) {
        return direction === 'ascending' ? aVal - bVal : bVal - aVal;
      }

      return a[key].localeCompare(b[key]);
    });

    setData(sorted);
    setSortConfig({ key, direction });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const seasonTitle =
    year === '2026'
      ? '2025/2026 Preseason Playoff Odds'
      : '2024/2025 Preseason Playoff Odds';

  const atlantic = data.filter(team => team.division === 'Atlantic');
  const metro = data.filter(team => team.division === 'Metropolitan');
  const central = data.filter(team => team.division === 'Central');
  const pacific = data.filter(team => team.division === 'Pacific');

  const sortTeams = (teams, key = 'proj_points') =>
    [...teams].sort((a, b) => b[key] - a[key]);

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
            <th onClick={() => sortData('name')}>Team</th>
            <th onClick={() => sortData('proj_points')}>PTS</th>
            <th onClick={() => sortData('playoffs')}>PO%</th>
            <th onClick={() => sortData('second_round')}>R2%</th>
            <th onClick={() => sortData('conf_final')}>R3%</th>
            <th onClick={() => sortData('cup_final')}>Final%</th>
            <th onClick={() => sortData('cup_win')}>Cup%</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={team.name || index}>
              <td>
                <div className="logo-container">
                  <img
                    src={team.logo}
                    className="logo"
                    alt={`${team.name} logo`}
                  />
                  <Link to={`/team/${team.id}`}>
                    <span>{team.abrv}</span>
                  </Link>
                </div>
              </td>

              <td className="stat-td">{team.proj_points}</td>
              <td className="stat-td">{team.playoffs}%</td>
              <td className="stat-td">{team.second_round}%</td>
              <td className="stat-td">{team.conf_final}%</td>
              <td className="stat-td">{team.cup_final}%</td>
              <td className="stat-td">{team.cup_win}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="table-container">
      <h2
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
        {seasonTitle}
      </h2>

      <div className="division-grid">
        {renderTable(sortTeams(pacific), 'Pacific')}
        {renderTable(sortTeams(central), 'Central')}
        {renderTable(sortTeams(metro), 'Metropolitan')}
        {renderTable(sortTeams(atlantic), 'Atlantic')}
      </div>
    </div>
  );
};

export default PreseasonOdds;
