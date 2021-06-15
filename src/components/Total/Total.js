import { useState } from "react";
import ErrorMesage from "../ErrorMessage/ErrorMessage";

const Total = ({ tasks })  => {

    
    let precioTotal= tasks.reduce((acumulador, item)=>{
    //Suma todos los precios del objetos productos.
      return acumulador + item.monto;
    },0);


    return (
      <>
        <hr></hr>
        <h4> El monto total es: {precioTotal} </h4>
      </>
    );
}
  
export default Total;
