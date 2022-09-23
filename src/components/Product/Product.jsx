import "./Product.css";
import axios from "axios";

function Product(props) {
  function buyItem(id) {
    axios({
      method: "PUT",
      url: `/shopping/purchased/${id}`,
    })
      .then(() => {
        props.getShoppingList();
      })
      .catch((error) => {
        console.log("error caught in buyItem :>> ", error);
      });
  }

  function removeItem(id) {
    axios({
      method: "DELETE",
      url: `/shopping/remove/${id}`,
    })
      .then(() => {
        props.getShoppingList();
      })
      .catch((error) => {
        console.log("error caught in removeItem :>> ", error);
      });
  }

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
        <button onClick={() => buyItem(props.product.id)}>Buy</button>
        <button onClick={() => removeItem(props.product.id)}>Remove</button>
      </div>
    </div>
  );
}

export default Product;
