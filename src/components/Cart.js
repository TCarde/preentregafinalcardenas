import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import ItemCart from '../components/ItemCart';
import { getFirestore, collection, doc, addDoc, updateDoc } from 'firebase/firestore';


function Cart() {
    const {cart,totalPrecio} = useCartContext();

    if (cart.length === 0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Hacer Compra</Link>
            </>
        );
    }

    return (
        <>
        {cart.map(product =><ItemCart key={product.id} product={product}/>)
        }
        <p> total:$ {totalPrecio()} </p>
        <button><Link  className="nav-link" to={'/checkout'}>Generar Compra</Link></button>
        </>
    )
}

export default Cart;