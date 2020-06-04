import React from 'react';

import './assets/styles/App.scss';
import carImage from './assets/images/car@2x.png';
import logoPetHome from './assets/images/pethomeRD@2x.png';
import logoNavi from './assets/images/navi@2x.png';
import Dog from './components/Dog/Dog';

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [winner, setWinner] = React.useState(0);

  return (
    <>
      <div className="w7e-left">
        <h1>
          Danos
          <br />
          Una pata
        </h1>
        <h2>
          Para construir un albergue
          <br />
          de mascotas que sea seguro,
          <br />
          amplio y esté lleno de amor.
        </h2>

        <div className="w7e-logos">
          <div className="w7e-pethome">
            <img src={logoPetHome} alt="@petHomeRD" />
          </div>
          <div className="w7e-navi">
            <img src={logoNavi} alt="@navi69" />
          </div>
        </div>
        {/* <button type="button" className="w7e" onClick={(): void => setWinner(winner + 1)}>
          Buscar ganador
        </button> */}

      </div>
      <div className="w7e-right">
        {/* <div className="w7e-winner"> En minutos, esteHonda Fit 2015 puede ser tuyo </div> */}
        <div className="w7e-winner w7e-looking">
          <div className="w7e-left">
            <Dog />
          </div>

          <div className="w7e-right">
            Buscando Ganador
          </div>
        </div>
        <div className="w7e-car">
          <img src={carImage} width="845" height="413" alt="Honda Fix 2015" />
        </div>
      </div>
      <footer />
    </>
  );
};

export default App;
