import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import '../styles/index.css'

// components
import Numero from './components/number'


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  const totalSeconds = counter;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const timeString =
    hours.toString().padStart(2, '0') +
    minutes.toString().padStart(2, '0') +
    seconds.toString().padStart(2, '0');

  const digitos = timeString.split("");

  root.render(
    <React.StrictMode>
      <div className='contenedorPrincipal'>
        <Numero Numeros={digitos} />
      </div>

    </React.StrictMode>
  );

  counter++;
}, 1000);
