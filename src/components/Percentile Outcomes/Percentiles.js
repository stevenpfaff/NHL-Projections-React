import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Papa from 'papaparse';

const Percentiles = () => {
  const { year } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'proj_points', direction: 'descending' });

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch(`/${year}startdata.csv`);
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (result) => {
            const sortedData = [...result.data].sort((a, b) => b.proj_points - a.proj_points);
            setData(sortedData);
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

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      const aValue = typeof a[key] === 'number' ? a[key] : parseFloat(a[key]);
      const bValue = typeof b[key] === 'number' ? b[key] : parseFloat(b[key]);

      if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const seasonTitle =
    year === '2026'
      ? '2025/2026 Preseason Percentile Outcomes'
      : '2024/2025 Preseason Percentile Outcomes';

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th onClick={() => sortData('name')}>Team</th>
            <th onClick={() => sortData('low_points')}>25th PTS</th>
            <th onClick={() => sortData('proj_points')}>50th PTS</th>
            <th onClick={() => sortData('high_points')}>75th PTS</th>
            <th onClick={() => sortData('low_goals')}>25th GF</th>
            <th onClick={() => sortData('proj_goals')}>50th GF</th>
            <th onClick={() => sortData('high_goals')}>75th GF</th>
            <th onClick={() => sortData('low_goals_against')}>25th GA</th>
            <th onClick={() => sortData('proj_goals_against')}>50th GA</th>
            <th onClick={() => sortData('high_goals_against')}>75th GA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => (
            <tr key={team.name || index}>
              <td>
                <div className="logo-container">
                  {team.logo && <img src={team.logo} className="logo" alt={`${team.name} logo`} />}
                  <Link to={`/team/${team.id}`}>
                    <span>{team.abrv}</span>
                  </Link>
                </div>
              </td>
              <td className="stat-td">{team.low_points}</td>
              <td className="stat-td">{team.proj_points}</td>
              <td className="stat-td">{team.high_points}</td>
              <td className="stat-td">{team.low_goals}</td>
              <td className="stat-td">{team.proj_goals}</td>
              <td className="stat-td">{team.high_goals}</td>
              <td className="stat-td">{team.low_goals_against}</td>
              <td className="stat-td">{team.proj_goals_against}</td>
              <td className="stat-td">{team.high_goals_against}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Percentiles;
