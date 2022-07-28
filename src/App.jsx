import React, { useState } from 'react';
import './App.css';
import productData from './products.json';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (productId) => {
    const filteredProducts = products.filter(el => {
      return el._id !== productId

    })
    setProducts(filteredProducts)
  }

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setProducts(productData)
    } else {
      const filtered = products.filter(el => el.name.toLocaleLowerCase().includes((e.target.value).toLocaleLowerCase()))
      setProducts(filtered)
    }

  }
  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type='text' placeholder='search' onChange={(e) => handleSearch(e)} />

      {products.map(el => {
        return (
          <div key={el._id}>
            <p >{el.name}</p>
            <button onClick={() => handleDelete(el._id)}>Delete</button>
          </div>
        )
      })}

    </div>
  );
}

export default App;
