import React from 'react'
// Arrow vs functions
// 1. Tiene return implicito
// 2. Sintaxis
// 3. Manejo operador this
// [{},{},{}]

import Formulario from "../Formulario/index.js"

const Listado = ({tasks}) => {
  return (
    <>
      <hr></hr>
      <h3>Muestra el listado</h3>
      {tasks.map(({id, categoria, monto, razon}) => (
         <p key={id}>{id} {categoria} {razon} {monto} </p>
      ))}
    </>
  );
};

export default Listado;
