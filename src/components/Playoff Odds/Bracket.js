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

const ROUNDS = [
  { key: "Round 1", odds: "current_round2" },
  { key: "Round 2", odds: "current_conf" },
  { key: "Conference Final", odds: "current_final" }
];

const CUP_FINAL = { key: "Cup Final", odds: "current_win" };

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

  const ROUND_MATCHUP_COUNT = {
  "Round 1": 4,
  "Round 2": 2,
  "Conference Final": 1,
  "Cup Final": 0
};

const PlaceholderMatchup = () => {
  return (
    <div className="matchup placeholder">
      <div className="team placeholder-team">
        <span className="abrv">TBD</span>
      </div>
      <div className="team placeholder-team">
        <span className="abrv">TBD</span>
      </div>
    </div>
  );
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

const Matchup = ({ m, oddsKey }) => {
  const team1 = getTeam(m.team1);
  const team2 = getTeam(m.team2);

  if (!team1 || !team2) return null;

  const team1Leading = m.team1_wins > m.team2_wins;
  const team2Leading = m.team2_wins > m.team1_wins;

  return (
    <div className="matchup">

      <div
  className={`team ${team1Leading ? "leading" : ""}`}
  style={{ backgroundColor: team1.primaryColor }}
>
        <span className="wins">{m.team1_wins}</span>
        <img src={team1.logo} className="bracket-logo" alt="" />
        <span className="abrv">{team1.abrv}</span>
        <span className="odds">{formatNumber(team1[oddsKey])}%</span>
      </div>

            <div
  className={`team ${team2Leading ? "leading" : ""}`}
  style={{ backgroundColor: team2.primaryColor }}
>
        <span className="wins">{m.team2_wins}</span>
        <img src={team2.logo} className="bracket-logo" alt="" />
        <span className="abrv">{team2.abrv}</span>
        <span className="odds">{formatNumber(team2[oddsKey])}%</span>
      </div>

    </div>
  );
};


const getMatchups = (conf, round) => {
  return matchups.filter(
    (m) => m.conf === conf && m.round === round
  );
};


const RoundColumn = ({ conf, round }) => {
  const roundMatchups = getMatchups(conf, round.key);
  const expected = ROUND_MATCHUP_COUNT[round.key] || 0;

  const placeholdersNeeded = expected - roundMatchups.length;

  return (
    <div className={`round-column round-${round.key.replace(" ", "-").toLowerCase()}`}>

      {roundMatchups.map((m, i) => (
        <Matchup key={`real-${i}`} m={m} oddsKey={round.odds} />
      ))}

      {Array.from({ length: placeholdersNeeded }).map((_, i) => (
        <PlaceholderMatchup key={`placeholder-${i}`} />
      ))}

    </div>
  );
};

const renderBracket = (conf, title, side) => {
  return (
    <div className={`conference-bracket ${side}`}>

      <h2>{title}</h2>

      <div className="bracket">
        {ROUNDS.map((round, i) => (
          <RoundColumn key={i} conf={conf} round={round} />
        ))}
      </div>

    </div>
  );
};

const renderCupFinal = () => {
  const finalMatchup = matchups.find(m => m.round === "Cup Final");

  return (
    <div className="cup-final">

      {finalMatchup ? (
        <Matchup m={finalMatchup} oddsKey={CUP_FINAL.odds} />
      ) : (
        <PlaceholderMatchup />
      )}

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

<div className="bracket-page">
  <div className="bracket-header">
    <img
      src="../../Images/OnlyNorthCircle.png"
      alt="Site Logo"
      className="site-logo"
    />
    <h1>NHL Playoff Bracket</h1>
    <p>Updated as of {date}</p>
  </div>

  <div className="bracket-grid">
    {renderBracket("Western", "Western Conference", "right")}
    {renderCupFinal()}
    {renderBracket("Eastern", "Eastern Conference", "left")}
  </div>
</div>
)}

  </div>
);
};

export default PlayoffBracket;