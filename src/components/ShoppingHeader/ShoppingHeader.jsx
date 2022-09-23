import { useState } from "react";
import axios from "axios";
import "./ShoppingHeader.css";

function ShoppingHeader(props) {
  function clearItems() {
    swal({
      title: "Delete all items?",
      text: "This will delete all saved items!",
      buttons: {
        cancel: true,
        confirm: {
          text: "Delete",
          className: "bg-red",
        },
      },
    }).then((results) => {
      if (results) {
        axios
          .delete(`/shopping/clear`)
          .then(() => props.getShoppingList())
          .catch((err) => console.log(err));
      }
    });
  }

  function resetItems() {
    swal({
      title: "Reset all purchases?",
      text: "Are you sure you want to reset all purchases?",
      buttons: {
        cancel: true,
        confirm: {
          text: "Reset",
          className: "bg-orange",
        },
      },
    }).then((results) => {
      if (results) {
        axios
          .put(`/shopping/reset`)
          .then(() => props.getShoppingList())
          .catch((err) => console.log(err));
      }
    });
  }

  return (
    <div className="container2">
      <div className="shopping-header-container">
        <h3>Shopping List</h3>
        <button className="shopping-btn" onClick={() => resetItems()}>
          Reset
        </button>
        <button className="shopping-btn" onClick={() => clearItems()}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default ShoppingHeader;
