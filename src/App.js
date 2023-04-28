import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from './components/Error';
import Cart from './components/Cart';
import CartProvider  from './components/context/CartContext';
import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
          <Routes>
            <Route path={"/"} exact element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} exact element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} exact element={<ItemDetailContainer/>}/>
            {/* <Route path={"*"} exact element={<Error/>}/>    */}   
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>        
          <ToastContainer/>        
          </CartProvider>
        </BrowserRouter>     
    </div>
  );
}

export default App;