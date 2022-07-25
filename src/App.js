import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import MyProfile from "./components/MyProfile";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    // NOTE: Don't use indexOf to get index of objects since two objects can't be equal in JS even though they have same data 
    // since equals operators in JS (== and ===) work on memory references
    // hence indexOf should only used for primitive types
    let indexOfCartProduct = cartItems.findIndex(item => item.id === selectedProduct.id)
    if (indexOfCartProduct === -1) {
      let newCartItems = [...cartItems]
      newCartItems.push(selectedProduct);
      setCartItems(newCartItems);
    }
  };

  const handleRemoveFromCart = (selectedProduct) => {
    let indexOfCartProduct = cartItems.findIndex(item => item.id === selectedProduct.id)
    if (indexOfCartProduct > -1) {
      let newCartItems = [...cartItems]
      newCartItems.splice(indexOfCartProduct, 1);
      setCartItems(newCartItems);
    }
  };

  return (
    <BrowserRouter>
      <Navbar cartItemsLength={cartItems.length}/>
      <Routes>
        <Route path='/' element={<HomePage handleAddToCartButton={handleAddToCart} />}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} handleRemoveFromCartButton={handleRemoveFromCart} />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
