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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const hoveredLine = payload[0];
    const teamName = hoveredLine.dataKey;
    const odds = hoveredLine.value;

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
        <p><strong>Team:</strong> {teamName}</p>
        <p><strong>Playoff Odds:</strong> {odds}%</p>
      </div>
    );
  }
  return null;
};

const CustomLogoLabel = ({ x, y, logo }) => {
    return (
      <image
        href={logo}
        x={x + 5}
        y={y - 15}
        width={30}
        height={30}
        alt="team logo"
      />
    );
  };

const PlayoffOddsChart = () => {
  const [chartData, setChartData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamColors, setTeamColors] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [teamLogos, setTeamLogos] = useState({});

  const handleSelectAll = () => {
    setSelectedTeams([...teams]);
    };
    
    const handleDeselectAll = () => {
    setSelectedTeams([]);
    };

  useEffect(() => {
    const fetchData = async () => {
      const csvFilePath = '/timelineOdds.csv';
      Papa.parse(csvFilePath, {
        download: true,
        header: true,
        complete: (results) => {
          const rawData = results.data.map((row) => ({
            date: row.date,
            team: row.name,
            abrv: row.abrv,
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
        },
      });
    };
      

    fetchData();
  }, []);

  const handleTeamSelection = (event) => {
    const { value, checked } = event.target;
    setSelectedTeams((prevSelectedTeams) => {
      if (checked) {
        return [...prevSelectedTeams, value];
      } else {
        return prevSelectedTeams.filter((team) => team !== value);
      }
    });
  };

  return (
    <div>
      <h1 style={{ marginTop: '2%' }}>NHL Playoff Odds Timeline</h1>
      <TeamSelectorDropdown
    teams={teams}
    selectedTeams={selectedTeams}
    handleTeamSelection={handleTeamSelection}
    handleSelectAll={handleSelectAll}
    handleDeselectAll={handleDeselectAll}
    />
      <ResponsiveContainer width="100%" height={750}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 50, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            label={{ value: 'Playoff Odds (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          {selectedTeams.length === 0
            ? teams.map((team) => (
                <Line
                  key={team}
                  type="monotone"
                  dataKey={team}
                  name={team}
                  stroke={teamColors[team]}
                  dot={{ r: 4 }}
                  label={({ x, y, value, index }) =>
                    index === chartData.length - 1 ? (
                      <CustomLogoLabel x={x} y={y} logo={teamLogos[team]} />
                    ) : null
                  }
                />
              ))
            : selectedTeams.map((team) => (
                <Line
                  key={team}
                  type="monotone"
                  dataKey={team}
                  name={team}
                  stroke={teamColors[team]}
                  dot={{ r: 4 }}
                  label={({ x, y, value, index }) =>
                    index === chartData.length - 1 ? (
                      <CustomLogoLabel x={x} y={y} logo={teamLogos[team]} />
                    ) : null
                  }
                />
              ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlayoffOddsChart;
