import React from "react";
import ItemCount from "../components/ItemCount";
import {useCartContext} from "./context/CartContext";
import {Link} from 'react-router-dom';
import {useState} from 'react'

const ItemDetail = ({item}) => {

    const[goToCart,setGoToCart]= useState(false);
    const {addProduct} = useCartContext()
    
    const onAdd = (contador) => {
        setGoToCart(true);
        addProduct(item, contador)
    }   

    return (
 
            <div className="row" id="itemdetail">
                <div className="col-md-4 offset-md-4">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p>${item.precio}</p>
                    <p>{item.stock}</p>
                </div>
                <div>
                {/* <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/> */}
                {goToCart ? <Link to='/cart'>Finalizar Compra</Link> :<ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>}
                {/* <ItemCount stockItems={10} />*/}
                </div> 
                
            </div>    
    )
 
}

export default ItemDetail;