import {getFirestore, addDoc, getDoc, collection, doc} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlBLYvjxCwYuu80JIt4WknpF1jc6pU8Ws",
  authDomain: "ecommerce-17a3a.firebaseapp.com",
  projectId: "ecommerce-17a3a",
  storageBucket: "ecommerce-17a3a.appspot.com",
  messagingSenderId: "691960526215",
  appId: "1:691960526215:web:dfa52a4c059f55243a8f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const createOrdenCompra = async (cliente, preTotal, fecha, cart) => {

  const ordenCompra = await addDoc(collection(db, "Orders"), {
    name: cliente.name,
    email: cliente.email,
    address: cliente.address,
    phone: cliente.phone,
    fecha: fecha,
    precioTotal: preTotal,
    Productos: cart
  })

  return ordenCompra
}


const getOrdenCompra =  async (id) => {
  const ordenCompra = await getDoc(doc(db, "Orders", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}


export { createOrdenCompra,getOrdenCompra }
