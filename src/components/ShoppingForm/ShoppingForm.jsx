import axios from "axios";
import { useState } from 'react';

function ShoppingForm(props) {
    let [newItem, setNewItem] = useState('');
    let [newQuantity, setNewQuantity] = useState('');
    let [newUnit, setNewUnit] = useState('');

    // This funciton will handle when the add item button is clicked
    // Validates that item and quantity have values enter or throw an alert
    // If validation passes the addItemToList function is called
    const handleSubmit = () => {
        if (!newItem.trim() || newItem.length > 80) {
            alert('Item is required and must be under 80 characters)');
        } else if (!newQuantity || !Number(newQuantity)) {
            alert('Quantity is required and must be a number');
        } else if (newUnit && newUnit.length > 20) {
            alert('Unit cannot be greater than 20 characters');
        }else {
            addItemToList();
        }
    }

    // This function will do a POST to /shopping
    // The post body is the name, quantity and (optional) unit of 
    // measurement for the item to be added
    const addItemToList = () => {
        axios.post('/shopping', {item: newItem, quantity: newQuantity, unit: newUnit})
             .then(response => {
            // Refresh the shopping list on DOM (function is in App.jsx)
            props.getShoppingList();
            //clear inputs
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');
            }).catch(err => {
            alert('Error adding item to list');
        });     
    };
        
    return (
      <>
        <label>Item:</label>
        <input
          id="itemInput"
          type="text"
          placeholder="Item Name (Required)"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <label>Quantity:</label>
        <input
          id="quantityInput"
          type="text"
          placeholder="Quantity (Required)"
          value={newQuantity}
          onChange={(event) => setNewQuantity(event.target.value)}
        />
        <label>Unit:</label>
        <input
          type="text"
          placeholder="Unit Type"
          value={newUnit}
          onChange={(event) => setNewUnit(event.target.value)}
        />
        <button onClick={handleSubmit}>Add Item</button>
      </>
    );
}

export default ShoppingForm;
