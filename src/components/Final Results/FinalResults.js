import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import { useParams } from 'react-router-dom';
import './FinalResults.css';

const FinalResults = () => {

  const { year } = useParams();

  const [data, setData] = useState([]);
  const [avgError, setAvgError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: 'proj_points',
    direction: 'descending'
  });

  useEffect(() => {

    Papa.parse(`/finalresults${year}.csv`, {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (result) => {

        const parsedData = result.data.map(team => ({
          ...team,
          playoffs: parseFloat(team.playoffs),
          proj_goals: parseFloat(team.proj_goals),
          proj_goals_ag: parseFloat(team.proj_goals_ag),
          actual_goals: parseFloat(team.actual_goals),
          actual_goals_ag: parseFloat(team.actual_goals_ag),
          proj_points: parseFloat(team.proj_points),
          actual_points: parseFloat(team.actual_points),
          error: Math.abs(team.actual_points - team.proj_points)
        }));

        setData(parsedData);
          const totalError = parsedData.reduce((sum, t) => sum + (t.error || 0), 0);
  const avg = parsedData.length ? totalError / parsedData.length : 0;

  setAvgError(avg);
      },

      error: (err) => {
        console.error('CSV error:', err);
      }

    });

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
        return direction === 'ascending'
          ? aVal - bVal
          : bVal - aVal;
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


  const renderTable = (teams, title) => (

    <div className="conference-table">

      <h2>{title}</h2>

      <Table
        className="results-table"
        striped
        bordered
        hover
        responsive
        size="sm"
      >

<thead>
  <tr>
    <th rowSpan="2" onClick={() => sortData('name')}>Team</th>
    <th rowSpan="2" onClick={() => sortData('playoffs')}>PO%</th>
    <th rowSpan="2" onClick={() => sortData('result')}>PO?</th>

    <th colSpan="3">PTS</th>
    {/* <th colSpan="2">GF</th>
    <th colSpan="2">GA</th> */}
  </tr>

  <tr>
    <th onClick={() => sortData('proj_points')}>Proj</th>
    <th onClick={() => sortData('actual_points')}>Act</th>
    <th onClick={() => sortData('error')}>Err</th>

    {/* <th onClick={() => sortData('proj_goals')}>Proj</th>
    <th onClick={() => sortData('actual_goals')}>Actual</th>

    <th onClick={() => sortData('proj_goals_ag')}>Proj</th>
    <th onClick={() => sortData('actual_goals_ag')}>Actual</th> */}
  </tr>
</thead>

        <tbody>

          {teams.map((team, index) => (

            <tr key={index}>

              <td>
                <div className="results-logo-container">
                  <img
                    src={team.logo}
                    className="logo"
                    alt={`${team.name} logo`}
                  />
                  <span>{team.abrv}</span>
                </div>
              </td>

              <td className="final-stat-td">{team.playoffs}%</td>
              <td className="final-stat-td">{team.result?.trim() ? '✓' : 'X'}</td>

              <td className="final-stat-td">{team.proj_points}</td>
              <td className="final-stat-td">{team.actual_points}</td>
              <td className="final-stat-td">{team.error}</td>

            </tr>

          ))}

        </tbody>

      </Table>

    </div>
  );


  return (

    <div className="table-container">

    <div className="results-header">
    <img
      src="../../Images/OnlyNorthCircle.png"
      alt="Site Logo"
      className="site-logo"
    />
    <h1>{year - 1}/{year} Final Results</h1>
  </div>

<p style={{
  textAlign: 'center',
  fontSize: '16px',
  marginBottom: '10px',
  fontWeight: '600'
}}>
  Avg Projection Error: <span>
    {avgError !== null ? avgError.toFixed(1) : 'Loading...'}
  </span> points
</p>
      <div className="division-grid">

        {renderTable(west, "Western Conference")}
        {renderTable(east, "Eastern Conference")}

      </div>

    </div>

  );

};

export default FinalResults;