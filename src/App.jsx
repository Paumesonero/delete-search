import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (productId) => {
    const filteredProducts = products.filter(el => {
      return el._id !== productId

    })
    setProducts(filteredProducts)
  }

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setProducts(productData)
    } else {
      const filtered = products.filter(el => el.name.toLocaleLowerCase().includes((searchValue).toLocaleLowerCase()))
      setProducts(filtered)
    }

  }
  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch={handleSearch} />

      {products.map(el => {
        return <ProductCard key={el._id} card={el} onDelete={handleDelete} />
      })}

    </div>
  );
}

export default App;
