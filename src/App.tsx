import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";
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

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
};

export default App;
