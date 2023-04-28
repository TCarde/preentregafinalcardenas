import React from 'react'
import { useCartContext } from './context/CartContext'

function ItemCart({product}) {
    const {removeProducto} = useCartContext();
  return (
    <div className='col-md-4 offset-md-4'>
    <img src={product.imagen} className="img-fluid" alt={product.nombre}/>
     <div>
      <p>Titulo: {product.nombre} </p>
      <p>Cantidad: {product.quantity} </p>
      <p>Precio u.: {product.precio} </p>
      <p>Subtotal: $ {(product.quantity) * (product.precio)} </p>
      <button onClick={()=> removeProducto(product.id)}>Eliminar</button>

     </div>
    </div>
  )
}

export default ItemCart