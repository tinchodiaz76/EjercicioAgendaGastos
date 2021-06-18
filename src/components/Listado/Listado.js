import React from 'react';
// Arrow vs functions
// 1. Tiene return implicito
// 2. Sintaxis
// 3. Manejo operador this
// [{},{},{}]

const Listado = ({tasks}) => {
  return (
  <div>
    <hr></hr>
      <h3>Muestra el listado</h3>
      {tasks.map(({id, categoria, razon, monto}) => (
        <p key={id}> {categoria} {razon} {monto}</p>
                        )
      )
    }
  </div>
  );
};

export default Listado;
