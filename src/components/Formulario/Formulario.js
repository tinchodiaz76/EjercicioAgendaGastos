import { useState } from "react";
import ErrorMesage from "../ErrorMessage/ErrorMessage";
import shortid from "short-id";
import {useMemo} from "react";

const defaultListado = {
  id: '',
  categoria:'',
  razon: '',
  monto: '',
};


const Formulario = ({ agregarComprob })  => {
    const [error, setError] = useState(false);

    const [descripcion,setDescripcion]= useState(" ");

    const [task, setListado] = useState({defaultListado});

    // las funciones que se disparan a través de eventos (recibe de forma implicita el evento)
    
    const addTarea = (e) => {
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


          console.log("v_categoria=" + v_categoria);
          console.log("v_razon=" + v_razon);
          console.log("v_monto=" + v_monto);

   
         setListado({
          ...task,
          id: shortid.generate(),
          categoria: v_categoria,
          razon: v_razon,
          monto: v_monto,
        });

        agregarComprob({task});

/*        
          Con esta linea y sin el setListado, ni el agregarComprob({task}) anda!!!!
          agregarComprob({ ...task, categoria: v_categoria, razon: v_razon, monto: v_monto, id: shortid.generate() });
*/
    };


    return (
      <>
        <h3>Carga tu tarea</h3>
        <form onSubmit={addTarea}>
            <label>Ingrese la categoria</label>
            <input type="text" name="categoria" placeholder="Ingrese la categoria..." />
            <br/>
            <label>Ingrese la razon</label>
            <input type="text" name="razon" placeholder="Ingrese la razon..." />
            <br/>
            <label>Ingrese el monto</label>
            <input type="text" name="monto" placeholder="Ingrese el monto..." />
            <br />
            <button type="submit">Cargar tarea</button>
            <br />
        </form>
        <ErrorMesage visible={error} descripcion={descripcion} />
      </>
        );
  };
  
export default Formulario;
