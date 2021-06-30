import React from 'react';
import { Col, Table} from "react-bootstrap/";
// Arrow vs functions
// 1. Tiene return implicito
// 2. Sintaxis
// 3. Manejo operador this
// [{},{},{}]

const Listado = ({tasks}) => {
  return (
    <>
      <Col md={6} className="table-data">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Razon</th>
              <th>Monto</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
              {tasks?.length > 0 &&
                tasks.map(item => (
                  <tr key={item.id}>
                    <td>{item.categoria}</td>
                    <td>{item.razon}</td>
                    <td>{item.monto}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Col>
    </>
  );
};

export default Listado;
