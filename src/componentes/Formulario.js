import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const Formulario = ({ persona,guardarPersona }) => {

  const guardarDatos =(e)=>{

    const {name, value} = e.target;
    guardarPersona({...persona, [name]:value})
  }

  const enviar =(e)=>{
    e.preventDefault()
    console.log (persona)

  }
  return (
    <div>
    <form action="" onSubmit={enviar}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese Nombre"
        value={persona.name}
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
    <ListaTareas persona={persona}/>
    </div>
  );
};

export default Formulario;
