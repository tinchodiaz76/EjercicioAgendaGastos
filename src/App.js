import logo from './logo.svg';
import Formulario from './components/Formulario/index.js';
import Listado from './components/Listado/index.js';
import Total from './components/Total/index.js';
import Filtro from './components/Filtro/index.js';

import './App.css';

var tasks = [
  {id: 0, categoria: "Alimento", razon: "Fideos", monto: 20},
  {id: 1, categoria: "Bazar", razon: "Copas", monto: 20},
  {id: 2, categoria: "Auto", razon: "Neumaticos", monto: 20},
];


const App = () => {
  return (
    <>
    <div className="App">
       <Formulario tasksi= {tasks}/>
       <Listado tasks = {tasks} />
       <Total tasks = {tasks} />
       <Filtro tasks = {tasks} />
    </div>
    </>
  );
}

export default App;
