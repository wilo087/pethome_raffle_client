import React from 'react';
import './assets/styles/App.scss';
// import Dog from './components/Dog'

const App: React.FC = () => {
  const [winner, setWinner] = React.useState(0);

  return (
    <div className="w7e-page">
      <header>
        Danos una pata
      </header>

      <div className="w7e-center">
        <div className="w7e-container">
          <button type="button" className="w7e" onClick={(): void => setWinner(winner + 1)}>
            Buscar ganador
          </button>
        </div>
        <div className="w7e-winner">
          Nombre: Cosita
          Cédula: xxx-xxxx981-8
          Código:
          {winner}
        </div>
      </div>

      <footer>
        <div className="w7e-left">
          @pethomeRD
        </div>

        <div className="w7e-right">
          @navi69
        </div>
      </footer>
    </div>
  );
};

export default App;
