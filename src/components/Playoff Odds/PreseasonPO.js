import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './PlayoffOdds.css';
import { useParams } from 'react-router-dom';

const PreseasonOdds = () => {
  const {year} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'cup_win', direction: 'descending' });

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

            const sortedData = [...processedData].sort((a, b) => b.cup_win - a.cup_win);
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
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

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
      ? '2025/2026 Preseason Playoff Odds'
      : '2024/2025 Preseason Playoff Odds';

  return (
    <div className="table-container">
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
        {seasonTitle}
      </h1>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th onClick={() => sortData('name')}>Team</th>
            <th onClick={() => sortData('proj_points')}>Proj Points</th>
            <th onClick={() => sortData('playoffs')}>Playoff %</th>
            <th onClick={() => sortData('second_round')}>Round 2 %</th>
            <th onClick={() => sortData('conf_final')}>Conf Final %</th>
            <th onClick={() => sortData('cup_final')}>Cup Final %</th>
            <th onClick={() => sortData('cup_win')}>Win Cup %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => (
            <tr key={team.name || index}>
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
              <td className='stat-td'>{team.proj_points}</td>
              <td className='stat-td'>{team.playoffs}%</td>
              <td className='stat-td'>{team.second_round}%</td>
              <td className='stat-td'>{team.conf_final}%</td>
              <td className='stat-td'>{team.cup_final}%</td>
              <td className='stat-td'>{team.cup_win}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PreseasonOdds;
