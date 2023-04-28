import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../productos.json";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import {ToastContainer, toast} from 'react-toastify';

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams ();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'items');
        if(id){
            const queryFilter = query(queryCollection, where('categoria','==', id))
            getDocs(queryFilter)
            .then(res=>setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res=>setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }        
        },[id])

    return (
        
        <div className="container">
            <div className="row">
                <ItemList item={item} />                
            </div>       
        </div>            
        
    )
}

export default ItemListContainer;