import "./Product.css";

function buyItem(id) {
  axios({
    method: "PUT",
    url: `/purchased/${id}`,
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
    url: `/remove/${id}`,
  })
    .then(() => {
      props.getShoppingList();
    })
    .catch((error) => {
      console.log("error caught in removeItem :>> ", error);
    });
}

function Product(props) {
  return (
    <div className="card">
      <div className="card-item">
        <p className="cardP">{props.product.item}</p>
      </div>
      <div className="card-item">
        <p className="cardP">
          {props.product.quantity}
          {props.product.unit}
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
