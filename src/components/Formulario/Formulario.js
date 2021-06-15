import { useState } from "react";
import ErrorMesage from "../ErrorMessage/ErrorMessage";

const Formulario = ({ tasksi })  => {
    const [error, setError] = useState(false);

    const [descripcion,setDescripcion]= useState(" ");

    /*const [items, AddItems] = useState(tasks);*/
    const [tasks, AddItems] = useState(tasksi);

    
    // las funciones que se disparan a través de eventos (recibe de forma implicita el evento)
    const addTask = (e) => {

        /*console.log(document.getElementById("categoria").value);*/
        e.preventDefault();
        console.log(e.target.elements);
        const v_categoria=e.target.elements.categoria.value.trim();
        const v_razon    =e.target.elements.razon.value.trim();
        const v_monto    =e.target.elements.monto.value.trim();

        if (v_categoria === "") {
            setDescripcion("La Categoria no puede ser nula");
            setError(true);
            return;
          }
          else
          {
            setDescripcion("");
            setError(false);
          }

          if (v_razon === "") {
            setDescripcion("La Razon no puede ser nula");
            setError(true);
            return;
          }
          else
          {
            setDescripcion("");
            setError(false);
          }

          if (v_monto === "") {
            setDescripcion("El Monto no puede ser nulo");
            setError(true);
            return;
          }
          else
          {
            setDescripcion("");
            setError(false);
          }      

          AddItems(prevItems => [...prevItems, {
            id: prevItems.length,
            categoria: v_categoria,
            razon: v_razon,
            monto: v_monto
          }]);

    };


    return (
      <>
        <h3>Carga tu tarea</h3>
        <form onSubmit={addTask}>
            <label>Ingrese la categoria</label>
            <input type="text" id="categoria" name="categoria" placeholder="Ingrese la categoria..." />
            <br/>
            <label>Ingrese la razon</label>
            <input type="text" name="razon" placeholder="Ingrese la razon..." />
            <br/>
            <label>Ingrese el monto</label>
            <input type="text" name="monto" placeholder="Ingrese el monto..." />
            <br />
            <button type="submit">Cargar tarea</button>
            <br />
            <pre>{JSON.stringify(tasks)}</pre>
        </form>
        <ErrorMesage visible={error} descripcion={descripcion} />
      </>
    );

  };
  
export default Formulario;
