import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Dog from '../Dog';
import carImage from '../../assets/images/car@2x.png';
import logoPetHome from '../../assets/images/pethomeRD@2x.png';
import logoNavi from '../../assets/images/navi@2x.png';


const WINNER_MUTATION = gql`
mutation {
  selectWinner{
    name
    identificationCard
  }
}`;

const Home: React.FC = (): JSX.Element => {
  const [step, setStep] = useState(1);

  const [selectWinner, { data }] = useMutation(WINNER_MUTATION);

  useEffect(() => {
    const handleSpace = async (event: any): Promise<void> => {
      if (event.keyCode === 32) {
        event.preventDefault();
        // Each you press space bar (key code 32) go to next step.
        let count = step + 1;

        // If step is 3 or higher, return to step one.
        if (step >= 3) {
          count = 1;
        }

        if (step === 1) {
          /* eslint-disable react-hooks/exhaustive-deps */
          await selectWinner();
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
          <div>{data ? data.selectWinner.name : ''}</div>
          {data ? data.selectWinner.identificationCard : ''}
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
