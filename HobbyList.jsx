// HobbyList.js
import React from 'react';

// Componente HobbyList
const HobbyList = ({ hobbies }) => {
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
};

export default HobbyList;
