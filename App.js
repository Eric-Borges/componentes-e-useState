import './styles.css';
import './App.css';
import React from 'react';
import InfoCard from './infocard';
import HobbyList from './HobbyList';

const App = () => {
  // Dados para o InfoCard
  const title = "Sobre Mim";
  const description = "Olá, sou um desenvolvedor apaixonado por criar novas soluções e aprender constantemente.";

  // Lista de hobbies
  const hobbies = ['Skatear', 'Programar', 'Correr', 'Treinar'];

  return (
    <div style={styles.container}>
      <h1>Meu Perfil</h1>

      {/* Renderizando o InfoCard */}
      <InfoCard title={title} description={description} />

      <h3>Meus Hobbies</h3>
      {/* Renderizando o HobbyList */}
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

// Estilos para o App
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
};

export default App;
