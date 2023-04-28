import React from "react";
import { useState } from "react";

const ItemCount = ({inicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(inicial);
    
    const sumar = () => contador < stock && setContador(contador + 1);

    const restar = () => contador > 1 && setContador(contador - 1);
    
    const agregarAlCarrito = () => onAdd(contador);

    return (
        <div className="contador">
            <button className="resta" onClick={restar}>-</button>
            <span>
                {contador}
            </span>                   
            <button className="suma"  onClick={sumar}>+</button>
            <div>
                <button className="agregarCarrito" onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>            
        </div>
    );
}

export default ItemCount;