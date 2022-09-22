import React from 'react';
import Header from '../Header/Header.jsx'
import ShoppingHeader from '../ShoppingHeader/ShoppingHeader.jsx';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingHeader />
                <ShoppingList />
            </main>
        </div>
    );
}

export default App;
