import React, {useState, useContext} from 'react'

const CartContext=React.createContext('')
export const useCartContext=()=> useContext(CartContext);

function CartProvider({children}) {
  
 const [cart,setCart]= useState([]);

 const totalPrecio =()=>{
  return cart.reduce((prev,act) =>prev + act.quantity * act.precio, 0);
 }

 const totalProductos=()=>cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);

 const limpiarCart=()=>setCart([]);

 const isInCart=(id)=>cart.find(product=>product.id===id)? true: false;

 const removeProducto=(id)=> setCart(cart.filter(product=>product.id !== id));

 
 const addProduct = (item,quantity) =>{
  if(isInCart(item.id)){
    setCart(cart.map(product=>{
      return product.id === item.id ? {...product, quantity : product.quantity} : product
    }));
  } else{
    setCart([...cart, {...item, quantity}]);
  }
 }






 return (
    <CartContext.Provider value={{
      limpiarCart,
      isInCart,
      removeProducto,
      addProduct,
      totalPrecio,
      totalProductos,
      cart
  
    }}>
  
      {children}
    </CartContext.Provider>
    )
  }
  
  export default CartProvider