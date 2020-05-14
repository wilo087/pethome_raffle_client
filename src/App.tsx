import React from 'react';

import './assets/styles/App.scss';
import carImage from './assets/images/car@2x.png';
import logoPetHome from './assets/images/pethomeRD@2x.png';
import logoNavi from './assets/images/navi@2x.png';
// import Dog from './components/Dog'

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [winner, setWinner] = React.useState(0);

  return (
    <div className="w7e-page">
      <div className="w7e-left">
        <h1>Datos Una pata</h1>
        <h2>
          Para construir un albergue 
          de mascotas que sea seguro, 
          amplio y esté lleno de amor.
        </h2>

        <div className="w7e-logos">
          <img src={logoPetHome} alt="@petHomeRD" />
          <img src={logoNavi} alt="@navi69" />
        </div>
        {/* <button type="button" className="w7e" onClick={(): void => setWinner(winner + 1)}>
          Buscar ganador
        </button> */}

      </div>
      <div className="w7e-card">
        <img src={carImage} width="845" height="413" alt="Honda Fix 2015" />
      </div>
      <footer />
    </div>
  );
};

export default App;
