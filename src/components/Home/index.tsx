import React, { useState, useEffect } from 'react';
import { promises } from 'fs';

import Dog from '../Dog';
import carImage from '../../assets/images/car@2x.png';
import logoPetHome from '../../assets/images/pethomeRD@2x.png';
import logoNavi from '../../assets/images/navi@2x.png';

const Home: React.FC = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState({ name: '', document: '', code: '' });

  useEffect(() => {
    const handleSpace = (event: any): void => {
      if (event.keyCode === 32) {
        event.preventDefault();
        // Each you press space bar (key code 32) go to next step.
        let count = step + 1;

        if (step === 1) {
          fetch('http://localhost:3001/api', { method: 'GET', redirect: 'follow' })
            .then((res) => res.json())
            .then((res) => {
              const { name, code } = res;
              const document = 'XXXXXXX'.concat(res.document.slice(-4));
              setResult({ name, document, code });

              // eslint-disable-next-line no-console
              console.log(res);
            })
            .catch((err) => console.log('error', err));
        }

        // If step is 3 or higher, return to step one.
        if (step >= 3) {
          count = 1;
        }
        setStep(count);
      }
    };
    window.addEventListener('keydown', handleSpace);

    return (): void => {
      window.removeEventListener('keydown', handleSpace);
    };
  }, [step]);

  return (
    <>
      <div className="w7e-left">
        <h1> Danos Una pata </h1>

        <h2>
          Para construir un albergue
          de mascotas que sea seguro,
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
      </div>

      <div className="w7e-right">
        <div className={`w7e-winner w7e-step1 ${step === 1 ? 'active' : ''}`}>
          En minutos, este Honda Fit 2015 puede ser tuyo
        </div>

        <div className={`w7e-winner w7e-step2 ${step === 2 ? 'active' : ''}`}>
          <div className="w7e-wleft">
            <Dog />
          </div>

          <div className="w7e-wright">
            Buscando Ganador
          </div>
        </div>

        <div className={`w7e-winner w7e-step3 ${step === 3 ? 'active' : ''}`}>
          ¡Felicidades!
          <div>{result.name}</div>
          {result.document}
          <div>
            {' '}
            {result.code}
            {' '}
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

export default Home;
