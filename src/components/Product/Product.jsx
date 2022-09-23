import "./Product.css";
import ProductButtons from "./ProductButtons";

function Product(props) {
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
          />
        )}
      </div>
    </div>
  );
}

export default Product;
