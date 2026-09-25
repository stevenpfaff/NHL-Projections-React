import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import './PlayoffOdds.css';

const PlayoffOdds = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState('division');
  const [date, setLastUpdated] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'current_points',
    direction: 'descending',
  });

  // Fetch CSV data on mount
  useEffect(() => {
    Papa.parse('/currentdata.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data.map((team) => ({
          ...team,
          current_playoffs: parseFloat(team.current_playoffs),
          current_round2: parseFloat(team.current_round2),
          current_conf: parseFloat(team.current_conf),
          current_final: parseFloat(team.current_final),
          current_win: parseFloat(team.current_win),
          current_points: parseFloat(team.current_points),
        }));

        // const filteredData = parsedData.filter(
        //   (team) => team.current_playoffs > 0
        // );

        const sortedData = [...parsedData].sort(
          (a, b) => b.current_win - a.current_win
        );

        const csvDate = parsedData[0]?.date || '';
        setLastUpdated(csvDate);

        setData(sortedData);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });
  }, []);

  // Sorting function
const sortData = (key) => {
  let direction = 'ascending';

  if (
    sortConfig.key === key &&
    sortConfig.direction === 'ascending'
  ) {
    direction = 'descending';
  }

  setSortConfig({ key, direction });
};

  const atlantic = data.filter(team => team.division === 'Atlantic');
  const metro = data.filter(team => team.division === 'Metropolitan');
  const central = data.filter(team => team.division === 'Central');
  const pacific = data.filter(team => team.division === 'Pacific');
  const east = data.filter(
  team => team.division === 'Atlantic' || team.division === 'Metropolitan'
);

  const west = data.filter(
    team => team.division === 'Central' || team.division === 'Pacific'
  );

const sortTeams = (teams) => {
  return [...teams].sort((a, b) => {
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    // Numeric columns
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortConfig.direction === 'ascending'
        ? aVal - bVal
        : bVal - aVal;
    }

    // Team/name columns
    const aString = String(aVal ?? '').toLowerCase();
    const bString = String(bVal ?? '').toLowerCase();

    if (aString < bString) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }

    if (aString > bString) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }

    return 0;
  });
};

const formatNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) return '';
  return Math.round(num);
};


const renderTable = (teams, title) => (
  <div className="conference-table">
    <h2>{title}</h2>
    <Table
      className="playoff-odds-table"
      striped
      bordered
      hover
      responsive
    >
      <thead>
        <tr>
          <th onClick={() => sortData('name')}>Team</th>
          <th onClick={() => sortData('current_points')}>PTS</th>
          <th onClick={() => sortData('current_playoffs')}>PO%</th>
          <th onClick={() => sortData('current_round2')}>R2%</th>
          <th onClick={() => sortData('current_conf')}>R3%</th>
          <th onClick={() => sortData('current_final')}>Final%</th>
          <th onClick={() => sortData('current_win')}>Cup%</th>
        </tr>
      </thead>

      <tbody>
        {teams.map((team, index) => (
          <tr key={index}>
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
            <td className="stat-td">{formatNumber(team.current_points)}</td>
            <td className="stat-td">{formatNumber(team.current_playoffs)}%</td>
            <td className="stat-td">{formatNumber(team.current_round2)}%</td>
            <td className="stat-td">{formatNumber(team.current_conf)}%</td>
            <td className="stat-td">{formatNumber(team.current_final)}%</td>
            <td className="stat-td">{formatNumber(team.current_win)}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);


const renderCupOddsTable = () => (
  <div className="league-table">
    <Table
      className="playoff-odds-table"
      striped
      bordered
      hover
      responsive
    >
<thead>
  <tr>
    <th onClick={() => sortData('name')}>Team</th>
    <th onClick={() => sortData('current_points')}>PTS</th>
    <th onClick={() => sortData('current_playoffs')}>PO%</th>
    <th onClick={() => sortData('current_round2')}>R2%</th>
    <th onClick={() => sortData('current_conf')}>R3%</th>
    <th onClick={() => sortData('current_final')}>Final%</th>
    <th onClick={() => sortData('current_win')}>Cup%</th>
  </tr>
</thead>

<tbody>
  {sortTeams(data).map((team, index) => (
    <tr key={team.id}>
      <td>
        <div className="logo-container">
          <img
            src={team.logo}
            className="logo"
            alt={team.name}
          />
          <Link to={`/team/${team.id}`}>
            <span>{team.abrv}</span>
          </Link>
        </div>
      </td>

      <td className="stat-td">
        {formatNumber(team.current_points)}
      </td>

      <td className="stat-td">
        {formatNumber(team.current_playoffs)}%
      </td>

      <td className="stat-td">
        {formatNumber(team.current_round2)}%
      </td>

      <td className="stat-td">
        {formatNumber(team.current_conf)}%
      </td>

      <td className="stat-td">
        {formatNumber(team.current_final)}%
      </td>

      <td className="stat-td">
        {formatNumber(team.current_win)}%
      </td>
    </tr>
  ))}
</tbody>
    </Table>
  </div>
);

  return (
    <div className="table-container">
            <div className="view-toggle">
  <button
    className={view === 'division' ? 'active' : ''}
    onClick={() => setView('division')}
  >
    Division View
  </button>

  <button
  className={view === 'conference' ? 'active' : ''}
  onClick={() => setView('conference')}
>
  Conference View
</button>

  <button
    className={view === 'cup' ? 'active' : ''}
    onClick={() => setView('cup')}
  >
    League View
  </button>
</div>
      <h1
        style={{
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
        NHL Playoff Odds
      </h1>
      <p>Updated as of {date}</p>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
{view === 'division' && (
  <div className="division-grid">
{renderTable(sortTeams(pacific), 'Pacific')}
{renderTable(sortTeams(central), 'Central')}
{renderTable(sortTeams(metro), 'Metropolitan')}
{renderTable(sortTeams(atlantic), 'Atlantic')}
  </div>
)}

{view === 'conference' && (
  <div className="division-grid">
    {renderTable(sortTeams(west), 'West')}
    {renderTable(sortTeams(east), 'East')}
  </div>
)}

{view === 'cup' && renderCupOddsTable()}

    </div>
  );
};

export default PlayoffOdds;