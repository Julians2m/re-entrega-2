import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css';



const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);
  

  const manejadorCantidad = (cantidad)  => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className="ItemDetail">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img className='img' src={img} alt={nombre} />
        <p className='Descripcion'>¡Siente la emoción y la velocidad en cada curva con nuestra moto de ensueño! Descubre la combinación perfecta entre estilo, potencia y adrenalina. Prepárate para dominar el asfalto y vivir una experiencia única sobre dos ruedas. ¡Haz que tus sueños se conviertan en realidad y despierta la pasión por la conducción!</p>
        {
        }
        
        <div className="ItemCount">
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
        </div>
    </div>
  )
}

export default ItemDetail