import "./Product.css";
import axios from "axios";

function ProductButtons(props) {
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
    <>
      <button onClick={() => buyItem(props.product.id)}>Buy</button>
      <button onClick={() => removeItem(props.product.id)}>Remove</button>
    </>
  );
}

export default ProductButtons;
