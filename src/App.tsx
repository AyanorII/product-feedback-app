import React, { useState } from 'react';

type Product = {
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();

  const getProducts = () => {
    fetch('/api/products').then(res => res.json()).then(setProducts);
  }

  return (
    <div className="App">

    </div>
  );
};

export default App;
