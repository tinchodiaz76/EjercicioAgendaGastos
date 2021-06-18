import logo from './logo.svg';
import Formulario from './components/Formulario/index.js';
import Listado from './components/Listado/index.js';
import Total from './components/Total/index.js';
import Filtro from './components/Filtro/index.js';
import { useState } from "react";


import './App.css';

const App = () => {
  
  const [tasks, addTask] = useState([]);

  const agregarComprob = (task) => {
    addTask([task, ...tasks]);
  };
  
  return (
    <div className="App">
       <Formulario agregarComprob= {agregarComprob}/>
       <Listado tasks = {tasks} />
       <Total tasks = {tasks} />
       <Filtro tasks = {tasks} />
    </div>
  );
}

export default App;
