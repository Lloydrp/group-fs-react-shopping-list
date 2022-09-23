import {useState} from 'react';
import axios from 'axios';
import "./ShoppingHeader.css";

function ShoppingHeader() {
    
    function clearItems(){ // <<<--- need to take in an argument??
        axios.delete(`/shopping/clear`)
        .then(() => props.getShoppingList())
        .catch(err => console.log(err));
    }

    function resetItems(){
        axios.put(`/shopping/reset`)
        .then(()=> props.getShoppingList())
        .catch(err => console.log(err));
    }
    
    return ( 
        <>
        <h3>Shopping List</h3>
        <button onClick={()=>resetItems}>Reset</button>
        <button onClick={()=>clearItems}>Clear</button>
        </>
     );
}

export default ShoppingHeader;