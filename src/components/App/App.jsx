import React from "react";
import Header from "../Header/Header.jsx";
import ShoppingHeader from "../ShoppingHeader/ShoppingHeader.jsx";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingForm />
        <ShoppingHeader />
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
