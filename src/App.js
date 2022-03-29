import React,{useState} from 'react';
import './App.css';
import Formulario from './componentes/Formulario'

function App() {

  const [persona,guardarPersona] = useState ([
    
  {
    imagen:"https://picsum.photos/350/350",
    nombre:"Andrea",
    ciudad:"Arequipa",
    testimonio:"five <zdsad sad asd asda sd asd asedsad sad asd asdas das das dsad wqerewesdfdsafsd sdf sdf dsfdsf dsf",
    empresa:"caja"
  }, {
    imagen:"https://picsum.photos/350/350",
    nombre:"Pedro",
    ciudad:"Arequipa",
    testimonio:"five <zdsad sad asd asda sd asd asedsad sad asd asdas das das dsad wqerewesdfdsafsd sdf sdf dsfdsf dsf",
    empresa:"caja"
  },

]
)

  return (
    <div className="primer">
    <Formulario persona={persona} guardarPersona={guardarPersona}/>
    </div>
  );
}

export default App;
