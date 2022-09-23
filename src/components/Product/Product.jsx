import "./Product.css";
import ProductButtons from "./ProductButtons";
import { useState, useEffect } from "react";
import axios from "axios";

function Product(props) {
  const [toggleMode, setToggleMode] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnit, setNewUnit] = useState("");

  function updateProduct(id) {
    axios({
      method: "PUT",
      url: `/edit/${id}`,
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
            onChange={(event) => setNewItem(event.target.value)}
          />
          <input
            className="input-card input-unit"
            value={newUnit}
            type="text"
            onChange={(event) => setNewItem(event.target.value)}
          />
        </div>
        <div className="card-item">
          <button onClick={() => updateProduct(props.product.id)}>
            Confirm
          </button>
          <button onClick={() => setToggleMode(false)}>Cancel</button>
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
