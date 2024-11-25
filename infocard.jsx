// InfoCard.js
import React from 'react';

// Componente InfoCard
const InfoCard = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Estilos simples para o cartão
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '10px auto',
    backgroundColor: '#fff',
  },
};

export default InfoCard;
