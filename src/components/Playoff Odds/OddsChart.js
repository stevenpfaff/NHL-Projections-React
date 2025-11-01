import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import TeamSelectorDropdown from './TeamSelector';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label, hoveredTeam }) => {
  if (active && payload && payload.length) {
      // Find the hovered team in the payload
      const hoveredLine = payload.find(item => item.dataKey === hoveredTeam);
      
      if (hoveredLine) {
          return (
              <div
                  style={{
                      backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      padding: '10px',
                      borderRadius: '5px',
                  }}
              >
                  <p><strong>Date:</strong> {label}</p>
                  <p><strong>Team:</strong> {hoveredLine.dataKey}</p>
                  <p><strong>Playoff Odds:</strong> {hoveredLine.value}%</p>
              </div>
          );
      }
  }
  return null;
};


const PlayoffOddsChart = () => {
  const [chartData, setChartData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamColors, setTeamColors] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [teamLogos, setTeamLogos] = useState({});
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSelectAll = () => {
    setSelectedTeams([...teams]);
  };

  const handleDeselectAll = () => {
    setSelectedTeams([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const csvFilePath = '/timelineOdds2026.csv';
      Papa.parse(csvFilePath, {
        download: true,
        header: true,
        complete: (results) => {
          const rawData = results.data.map((row) => ({
            date: row.date,
            team: row.name,
            odds: parseFloat(row.current_playoffs.replace('%', '')) || 0,
            primaryColor: row.primaryColor,
            logo: row.logo,
          }));

          const uniqueTeams = {};
          const logos = {};
          rawData.forEach((row) => {
            if (!uniqueTeams[row.team]) {
              uniqueTeams[row.team] = row.primaryColor;
              logos[row.team] = row.logo;
            }
          });

          setTeamColors(uniqueTeams);
          setTeamLogos(logos);

          const groupedData = {};
          rawData.forEach((row) => {
            if (!groupedData[row.date]) groupedData[row.date] = { date: row.date };
            groupedData[row.date][row.team] = row.odds;
          });

          const processedData = Object.values(groupedData);
          setTeams(Object.keys(uniqueTeams));
          setChartData(processedData);
          setFilteredData(processedData);
        },
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = chartData.filter(
        (entry) => entry.date >= startDate && entry.date <= endDate
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(chartData);
    }
  }, [startDate, endDate, chartData]);

  const handleTeamSelection = (event) => {
    const { value, checked } = event.target;
  
    if (value === "selectAll") {
      setSelectedTeams(teams);  // Select all teams
    } else if (value === "deselectAll") {
      setSelectedTeams([]);  // Deselect all teams
    } else {
      setSelectedTeams((prevSelectedTeams) =>
        checked ? [...prevSelectedTeams, value] : prevSelectedTeams.filter((team) => team !== value)
      );
    }
  };
  

  return (
    <div style={styles.chartContainer}>
      <h1 style={{ marginTop: '2%' }}>
        <img 
        src="../../Images/OnlyNorthCircle.png" 
        alt="Mini Logo" 
        style={{ width: '50px', height: '50px', marginLeft: '10px' }} 
        />
          NHL Playoff Odds Timeline
        </h1>
      <div style={styles.dateFilter}>
        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date: </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <TeamSelectorDropdown
        teams={teams}
        selectedTeams={selectedTeams}
        handleTeamSelection={handleTeamSelection}
        handleSelectAll={handleSelectAll}
        handleDeselectAll={handleDeselectAll}
      />

      <div style={styles.chartWrapper}>
        <ResponsiveContainer width="80%" height={800}>
          <LineChart data={filteredData} margin={{ top: 20, right: 50, left: 20, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
            />
            <YAxis label={{ value: 'Stanley Cup Odds (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip hoveredTeam={hoveredTeam} />} />

            {/* Ensure filtering works and logos are retained */}
            {(selectedTeams.length === 0 ? teams : selectedTeams).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                name={team}
                stroke={hoveredTeam === team ? '#ff0000' : teamColors[team]}
                strokeWidth={hoveredTeam === team ? 4 : 2}
                dot={{ r: 4 }}
                label={({ x, y, index }) =>
                  index === filteredData.length - 1 && teamLogos[team] ? (
                    <image href={teamLogos[team]} x={x} y={y - 15} width={30} height={30} />
                  ) : null
                }
                onMouseEnter={() => setHoveredTeam(team)}
                onMouseLeave={() => setHoveredTeam(null)}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const styles = {
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    flexDirection: 'column',
  },
  chartWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '10px',
  },
  dateFilter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
};

export default PlayoffOddsChart;
