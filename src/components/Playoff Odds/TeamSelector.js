import React, { useState } from 'react';

const TeamSelectorDropdown = ({ teams, selectedTeams, handleTeamSelection, handleSelectAll, handleDeselectAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
      <button
        onClick={toggleDropdown}
        style={{
          backgroundColor: '#013a68',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '200px',
          textAlign: 'center',
        }}
      >
        Select Teams
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '200px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            zIndex: 10,
            maxHeight: '300px',
            overflowY: 'auto',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: '#f5f5f5',
            }}
            onClick={handleSelectAll}
          >
            Select All
          </div>
          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: '#f5f5f5',
            }}
            onClick={handleDeselectAll}
          >
            Deselect All
          </div>
          {teams.map((team) => (
            <label
              key={team}
              style={{
                display: 'block',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: selectedTeams.includes(team) ? '#e0f7fa' : 'white',
              }}
            >
              <input
                type="checkbox"
                value={team}
                checked={selectedTeams.includes(team)}
                onChange={handleTeamSelection}
                style={{ marginRight: '8px' }}
              />
              {team}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamSelectorDropdown;
