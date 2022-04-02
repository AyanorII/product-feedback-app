import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductInterface from "./types/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>();

  const getProducts = (): void => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  };

  useEffect((): void => {
    getProducts();
  }, []);

  return <div className="App"></div>;
};

export default App;
