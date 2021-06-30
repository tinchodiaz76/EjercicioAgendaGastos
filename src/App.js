import logo from './logo.svg';
import Formulario from './components/Formulario/index.js';
import Listado from './components/Listado/index.js';
import Total from './components/Total/index.js';
import Filtro from './components/Filtro/index.js';
import Header from './components/Header/index.js';
import {Row, Container} from 'react-bootstrap/';
import { useState } from "react";

import './App.css';

const App = () => {
  
  const [tasks, addTask] = useState([]);

  const agregarComprob = (task) => {
    addTask([...tasks, task]);
  };


  return (
      <Container className="base-elements">
        <Header/>
        <Row>
          <Formulario agregarComprob= {agregarComprob}/>
          <Listado tasks = {tasks} />
          <Total tasks = {tasks} />
          <Filtro tasks = {tasks} />
        </Row>
      </Container>
  );
}


export default App;
