import { useState } from "react";
import ErrorMesage from "../ErrorMessage/ErrorMessage";
import shortid from "short-id";
import { Col, Form } from "react-bootstrap";

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
    
    const SetListado= (e) =>{
      console.log(e.target.name);
      console.log(e.target.value);

      var prop=e.target.name;
      var value=e.target.value;

      setListado({
        ...task,
        [prop]:value
      });

    };

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

          agregarComprob({...task, id:shortid.generate()});
    };


    return (
      <Col md={6}>
        <h3>Creación la tarea</h3>
        <Form onSubmit={addTarea}>
            <label>Ingrese la categoria</label>
            <input type="text" name="categoria" placeholder="Ingrese la categoria..." onChange={SetListado}/>
            <br/>
            <label>Ingrese la razon</label>
            <input type="text" name="razon" placeholder="Ingrese la razon..." onChange={SetListado}/>
            <br/>
            <label>Ingrese el monto</label>
            <input type="text" name="monto" placeholder="Ingrese el monto..." onChange={SetListado}/>
            <br />
            <button type="submit">Cargar tarea</button>
            <br />
        </Form>
        <ErrorMesage visible={error} descripcion={descripcion} />
      </Col>
         );
  };
  
export default Formulario;
