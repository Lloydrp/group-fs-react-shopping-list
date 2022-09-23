import "./Product.css";
import ProductButtons from "./ProductButtons";

function Product(props) {
  return (
    <div className="card">
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
          "Purchased!"
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
