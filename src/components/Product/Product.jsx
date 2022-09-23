import "./Product.css";
import ProductButtons from "./ProductButtons";
import { useState, useEffect } from "react";
import axios from "axios";

function Product(props) {
  const [toggleMode, setToggleMode] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const iconCancel = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
    </svg>
  );
  const iconConfirm = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );

  function updateProduct(id) {
    axios({
      method: "PUT",
      url: `/shopping/edit/${id}`,
      data: {
        item: newItem,
        quantity: newQuantity,
        unit: newUnit,
      },
    })
      .then(() => {
        getShoppingList();
      })
      .catch((error) => {
        console.log("error caught in edit PUT :>> ", error);
      });
  }

  useEffect(() => {
    setNewItem(props.product.item);
    setNewQuantity(props.product.quantity);
    setNewUnit(props.product.unit);
  }, []);

  if (toggleMode) {
    return (
      <div className="card">
        <div className="card-item">
          <input
            className="input-card"
            value={newItem}
            type="text"
            onChange={(event) => setNewItem(event.target.value)}
          />
        </div>
        <div className="card-item">
          <input
            className="input-card input-quantity"
            value={newQuantity}
            type="text"
            onChange={(event) => setNewQuantity(event.target.value)}
          />
          <input
            className="input-card input-unit"
            value={newUnit}
            type="text"
            onChange={(event) => setNewUnit(event.target.value)}
          />
        </div>
        <div className="card-item">
          <button
            className="item-btn-confirm"
            onClick={() => updateProduct(props.product.id)}
          >
            {iconConfirm}
          </button>
          <button
            className="item-btn-cancel"
            onClick={() => {
              setNewItem(props.product.item);
              setNewQuantity(props.product.quantity);
              setNewUnit(props.product.unit);
              setToggleMode(false);
            }}
          >
            {iconCancel}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.product.purchased ? "card purchased-item" : "card"}>
        <div className="card-item">
          <p className="cardP">{props.product.item}</p>
        </div>
        <div className="card-item">
          <p className="cardP">
            {props.product.quantity} {props.product.unit}
          </p>
        </div>
        <div className="card-item">
          {props.product.purchased ? (
            <span className="purchased-text">Purchased!</span>
          ) : (
            <ProductButtons
              iconConfirm={iconConfirm}
              getShoppingList={props.getShoppingList}
              product={props.product}
              setToggleMode={setToggleMode}
              toggleMode={toggleMode}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Product;
