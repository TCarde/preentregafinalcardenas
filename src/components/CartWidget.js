import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "./context/CartContext";
import './styles/CartWidget.css';

function CartWidget() {
    const {totalProductos} = useCartContext();
      
    
      return (
        <>
        <i className="bi bi-cart-check"></i>
        <span>{totalProductos() ||''} </span>
        </>
      );
    }

export default CartWidget;