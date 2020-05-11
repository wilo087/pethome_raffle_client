import React from 'react';
import './assets/styles/App.scss'
import Doc from './components/Dog'

const { useState } = React;

function getData() {
  return new Promise(resolve => setTimeout(() => resolve(Math.random()), 1000))
}


function App() {
  const [data, setData] = useState(0)

  function onClick() {
    console.info('Send request');
    // getData().then(setData)
  }


  return (
    <div className='w7e-page'>
      <header>
        Danos una pata
      </header>

      <div className='w7s-center'>
        <div className='w7s-container'>
          <button className='' onClick={onClick}>
            Buscar ganador
           </button>
        </div>
      </div>

      {/* <Doc /> */}

      <footer>
        <div className='w7s-left'>
          @pethomeRD
        </div>

        <div className='w7s-right'>
          @navi69
        </div>
      </footer>
    </div>
  );
}

export default App;
