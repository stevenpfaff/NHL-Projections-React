import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import { useParams } from 'react-router-dom';
import './FinalResults.css';
// import html2canvas from 'html2canvas';

const FinalResults = () => {
  const { year } = useParams();

  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  // const handleDownloadImage = () => {
  //   const tableElement = document.getElementById('results-table');

  //   if (tableElement) {
  //     html2canvas(tableElement, { scale: 2 }).then((canvas) => {
  //       const link = document.createElement('a');
  //       link.download = `final-results-${year}.png`;
  //       link.href = canvas.toDataURL();
  //       link.click();
  //     });
  //   }
  // };

  useEffect(() => {
    Papa.parse(`/finalresults${year}.csv`, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {

        const parsedData = result.data.map((team) => ({
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
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });

  }, [year]);

  const sortData = (key) => {

    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {

      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return direction === 'ascending'
          ? a[key] - b[key]
          : b[key] - a[key];
      }

      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;

      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="results-table-container">

      <h1 style={{
        marginTop: '2%',
        marginBottom: '2%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <img
          src="../../Images/OnlyNorthCircle.png"
          alt="Mini Logo"
          style={{ width: '50px', height: '50px' }}
        />

        {year - 1}/{year} Final Results
      </h1>

      {/* Optional screenshot button */}
      {/* 
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={handleDownloadImage}>Download Table as Image</button>
      </div>
      */}

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
    <th rowSpan="2" onClick={() => sortData('playoffs')}>Playoff%</th>
    <th rowSpan="2" onClick={() => sortData('result')}>Playoffs?</th>
    <th rowSpan="2" onClick={() => sortData('pick')}>Pick</th>

    <th colSpan="3">Points</th>
    <th colSpan="2">Goals For</th>
    <th colSpan="2">Goals Against</th>
  </tr>

  <tr>
    <th onClick={() => sortData('proj_points')}>Proj</th>
    <th onClick={() => sortData('actual_points')}>Actual</th>
    <th onClick={() => sortData('error')}>Error</th>

    <th onClick={() => sortData('proj_goals')}>Proj</th>
    <th onClick={() => sortData('actual_goals')}>Actual</th>

    <th onClick={() => sortData('proj_goals_ag')}>Proj</th>
    <th onClick={() => sortData('actual_goals_ag')}>Actual</th>
  </tr>
</thead>

        <tbody>
          {data.map((team, index) => (
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

              <td className="stat-td">{team.playoffs}%</td>
              <td className="stat-td">{team.result?.trim() ? '✓' : 'X'}</td>
              <td className="stat-td">{team.pick?.trim() ? '✓' : 'X'}</td>
              <td className="stat-td">{team.proj_points}</td>
              <td className="stat-td">{team.actual_points}</td>
              <td className="stat-td">{team.error}</td>
              <td className="stat-td">{team.proj_goals}</td>
              <td className="stat-td">{team.actual_goals}</td>
              <td className="stat-td">{team.proj_goals_ag}</td>
              <td className="stat-td">{team.actual_goals_ag}</td>
            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
};

export default FinalResults;