import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>SK Stores - Shopping Cart</h1>
      <h2>Products</h2>
      <ul>
        <li>
          Product 1
          <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>Add to Cart</button>
        </li>
        <li>
          Product 2
          <button onClick={() => addToCart({ id: 2, name: 'Product 2' })}>Add to Cart</button>
        </li>
        <li>
          Product 3
          <button onClick={() => addToCart({ id: 3, name: 'Product 3' })}>Add to Cart</button>
        </li>
      </ul>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

