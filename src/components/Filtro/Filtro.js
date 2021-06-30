import React from 'react';
import { useState } from "react";


const Filtro = ({tasks}) => {
  
  const[search,setSearch]=useState("");

  const Busqueda = (e) => {
        /*console.log(document.getElementById("categoria").value);*/
        e.preventDefault();

        setSearch (e.target.value);

        console.log("1111");
  };

/*names.filter(name => name.includes('J'))*/

  return (
    <>
    <hr></hr>
      <label>Buscar</label>
      <input type="text" name="searching" placeholder="" onChange={Busqueda} 
      value={search}/>
      <h3>Muestra el listado</h3>
      <h1>El valor de search es {search}</h1>
    </>
   );
};

export default Filtro;
