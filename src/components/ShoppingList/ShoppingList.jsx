import "./ShoppingList.css";
import Product from "../Product/Product.jsx";

function ShoppingList() {
  return (
    <>
      <h3>This is a ShoppingList</h3>
      <div>
        This is a Product in the List
        <Product />
      </div>
    </>
  );
}

export default ShoppingList;
