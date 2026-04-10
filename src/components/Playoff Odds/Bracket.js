import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import './PlayoffOdds.css';

const PlayoffBracket = () => {
  const [data, setData] = useState([]);
  const [date, setLastUpdated] = useState('');
  const [matchups, setMatchups] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'current_win',
    direction: 'descending',
  });

  // Fetch CSV data on mount
  useEffect(() => {
    Papa.parse('/playoffs.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data.map((team) => ({
          ...team,
          current_round2: parseFloat(team.current_round2),
          current_conf: parseFloat(team.current_conf),
          current_final: parseFloat(team.current_final),
          current_win: parseFloat(team.current_win),
        }));

        Papa.parse('/matchups.csv', {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                setMatchups(result.data);
        },
        });

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
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sorted = [...data].sort((a, b) => {
      const aVal = parseFloat(a[key]);
      const bVal = parseFloat(b[key]);

      if (!isNaN(aVal) && !isNaN(bVal)) {
        return direction === 'ascending' ? aVal - bVal : bVal - aVal;
      }
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setData(sorted);
    setSortConfig({ key, direction });
  };

  const east = data.filter(
  team => team.division === 'Atlantic' || team.division === 'Metropolitan'
);

  const west = data.filter(
    team => team.division === 'Central' || team.division === 'Pacific'
  );

  const sortTeams = (teams, key = 'current_win') => {
  return [...teams].sort((a, b) => b[key] - a[key]);
};

const formatNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) return '';
  return Math.round(num);
};

const [view, setView] = useState("bracket");

const getTeam = (abrv) => {
  return data.find((t) => t.abrv === abrv);
};

const Matchup = ({ m }) => {
  const team1 = getTeam(m.team1);
  const team2 = getTeam(m.team2);

  if (!team1 || !team2) return null;

  return (
    <div className="matchup">

      <div className="team">
        <img src={team1.logo} className="logo" alt="" />

        <span className="abrv">{team1.abrv}</span>

        {/* WINS replaces seed */}
        <span className="wins">{m.team1_wins}</span>

        <span className="odds">
          {formatNumber(team1.current_round2)}%
        </span>
      </div>

      <div className="team">
        <img src={team2.logo} className="logo" alt="" />

        <span className="abrv">{team2.abrv}</span>

        {/* WINS replaces seed */}
        <span className="wins">{m.team2_wins}</span>

        <span className="odds">
          {formatNumber(team2.current_round2)}%
        </span>
      </div>

    </div>
  );
};


const eastMatchups = matchups.filter(
  (m) => m.conf === "Eastern" && m.round === "Round 1"
);

const westMatchups = matchups.filter(
  (m) => m.conf === "Western" && m.round === "Round 1"
);

const buildRounds = (series) => {

  const round1 = series;

  const round2 = [
    [series[0], series[1]],
    [series[2], series[3]]
  ];

  const confFinal = [
    [round2[0], round2[1]]
  ];

  return { round1, round2, confFinal };
};

const eastRounds = buildRounds(eastMatchups);
const westRounds = buildRounds(westMatchups);

const RoundColumn = ({ matchups }) => (
  <div className="round-column">

    {matchups.map((m, i) => {

      if (Array.isArray(m)) {
        return (
          <div key={i} className="matchup placeholder">
            TBD
          </div>
        );
      }

      return <Matchup key={i} m={m} />;
    })}

  </div>
);

const renderBracket = (rounds, title, side) => {

  const roundColumns = [rounds.round1, rounds.round2, rounds.confFinal];

  return (
    <div className={`conference-bracket ${side}`}>

      <h2>{title}</h2>

      <div className="bracket">

        {roundColumns.map((round, i) => (
          <RoundColumn key={i} matchups={round} />
        ))}

      </div>

    </div>
  );
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
                  <span>{team.abrv}</span>
              </div>
            </td>
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
      NHL Playoff Bracket
    </h1>

    <p>Updated as of {date}</p>

    <div className="view-toggle">
    <button onClick={() => setView("bracket")}>Bracket</button>
    <button onClick={() => setView("table")}>Table</button>
    </div>  

{view === "table" ? (

  <div className="division-grid">
    {renderTable(sortTeams(west), "Western Conference")}
    {renderTable(sortTeams(east), "Eastern Conference")}
  </div>

) : (

<div className="bracket-grid">
  {renderBracket(westRounds, "Western Conference", "right")}
  {renderBracket(eastRounds, "Eastern Conference", "left")}
</div>
)}

  </div>
);
};

export default PlayoffBracket;