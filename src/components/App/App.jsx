import React from "react";
import Header from "../Header/Header.jsx";
import ShoppingHeader from "../ShoppingHeader/ShoppingHeader.jsx";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  function getShoppingList() {
    axios({
      method: "GET",
      url: "/shopping",
    })
      .then((results) => {
        setShoppingList(results.data);
      })
      .catch((error) => {
        console.log("error caught in GET :>> ", error);
      });
  }
  useEffect(() => {
    getShoppingList();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingForm getShoppingList={getShoppingList} />
        <ShoppingHeader getShoppingList={getShoppingList} />
        <div className="container">
          <ShoppingList getShoppingList={getShoppingList} list={shoppingList} />
        </div>
      </main>
    </div>
  );
}

export default App;
