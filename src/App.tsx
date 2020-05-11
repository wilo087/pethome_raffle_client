import React, { useState } from 'react';
import './assets/styles/App.scss';
// import Dog from './components/Dog'

function App() {
  const [data, setWinner] = useState(2216);


  return (
    <div className="w7e-page">
      <header>
        Danos una pata
      </header>

      <div className="w7e-center">
        <div className="w7e-container">
          <button type="button" className="w7e" onClick={() => setWinner(data + 1)}>
            Buscar ganador
          </button>
        </div>
        <div className="w7e-winner">
          Nombre: Cosita
          Cédula: xxx-xxxx981-8
          Código: {data}
        </div>
        {/* <Doc /> */}
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
}

export default App;
