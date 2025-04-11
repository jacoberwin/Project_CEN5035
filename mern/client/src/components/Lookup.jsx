import React from 'react';

const Lookup = () => {
  const records = [
    { date: "2025-04-10", distance: "12 km", credits: 3 },
    { date: "2025-04-09", distance: "8 km", credits: 2 },
  ];

  return (
    <div>
      <h2>Travel Log Lookup</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Distance</th>
            <th>Credits Earned</th>
          </tr>
        </thead>
        <tbody>
          {records.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.distance}</td>
              <td>{log.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lookup;
