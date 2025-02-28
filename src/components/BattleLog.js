import React from 'react';

const BattleLog = ({ logEntries }) => {
  return (
    <div 
      className="battle-log p-3 rounded w-100"
      style={{
        height: '250px',
        overflowY: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
      }}
    >
      <h4 className="font-cinzel-semibold text-center mb-3">Battle Log</h4>
      <div className="d-flex flex-column gap-2">
        {logEntries.map((entry, index) => (
          <div 
            key={index}
            className="log-entry p-2 rounded"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div className="font-lora-bold">Turn {entry.turn}</div>
            <div>{entry.playerName} used {entry.cardName}</div>
            <div className="text-muted small">{entry.cardEffect}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattleLog; 