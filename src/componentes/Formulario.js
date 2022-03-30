import React, { useState, useEffect } from "react";

const Formulario = ({ persona,guardarPersona }) => {
  const [person, setPerson] = useState({})

  useEffect(() => {
    console.log('persona', {...persona, ['nombre']:'value'});
  }, [])

  const guardarDatos =(e)=>{

    const {name, value} = e.target;

    person[name] = value
    setPerson(person)
  }

  const enviar =(e)=>{
    e.preventDefault()
    guardarPersona([...persona, person])
  }
  return (
    <div>
    <form action="" onSubmit={enviar}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese Nombre"
        onChange={guardarDatos}
      />
      <input
        type="text"
        name="imagen"
        placeholder="Ingrese Link"
       
        onChange={guardarDatos}
      />
      <input
        type="text"
        name="ciudad"
        placeholder="Ingrese ciudad"
       
        onChange={guardarDatos}
      />
      <input
        type="text"
        name="empresa"
        placeholder="Ingrese Trabajo"
        
        onChange={guardarDatos}
      />
      <input
        type="text"
        name="testimonio"
        placeholder="Ingrese Testimonio"
        
        onChange={guardarDatos}
      />

      <button type="submit">Guardar</button>
    </form>
    </div>
  );
};

export default Formulario;
