import "./ShoppingList.css";
import Product from "../Product/Product.jsx";

function ShoppingList(props) {
  return props.list.map((item) => (
    <Product
      getShoppingList={props.getShoppingList}
      key={item.id}
      product={item}
    />
  ));
}

export default ShoppingList;
