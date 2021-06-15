import { useState } from "react";

const Filtro = ({ tasks })  => {
    const [error, setError] = useState(false);
    
    // las funciones que se disparan a través de eventos (recibe de forma implicita el evento)
    const addTask = (e) => {

        /*console.log(document.getElementById("categoria").value);*/
        e.preventDefault();
        console.log(e.target.elements);

    };


    return (
      <>
        <form onSubmit={addTask}>
             <hr></hr>
            <input type="text" id="categoria" name="categoria" placeholder="Ingrese la categoria..." />
            <button>Buscar Categoria</button>
        </form>
      </>
    );

  };
  
export default Filtro;
