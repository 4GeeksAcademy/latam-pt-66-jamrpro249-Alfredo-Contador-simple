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
  const digitos = counter.toString().padStart(4, '0').split("");

  root.render(
    <React.StrictMode>
      <div className='contenedorPrincipal'>
        <Numero Numeros={digitos} />
      </div>
    </React.StrictMode>
  );

  counter++;
}, 1000);


