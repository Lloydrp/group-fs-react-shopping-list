import "./Product.css";
import ProductButtons from "./ProductButtons";
import { useState } from "react";

function Product(props) {
  const [toggleMode, setToggleMode] = useState(false);

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

export default Product;
