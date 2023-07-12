import React, { useState } from "react";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import Cart from "./components/Cart";
import MyStore from "./contexts/MyStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDetail from "./components/CartDetail";

const productList = [
  { name: "Adidas", id: 1, price: 10, discount: 20 },
  { name: "Nike", id: 2, price: 15, discount: 30 },
  { name: "Puma", id: 3, price: 8, discount: 15 },
  { name: "Reebok", id: 4, price: 12, discount: 25 },
  { name: "Under Armour", id: 5, price: 20, discount: 10 },
  { name: "New Balance", id: 6, price: 11, discount: 18 },
  { name: "Asics", id: 7, price: 17, discount: 22 },
  { name: "Fila", id: 8, price: 14, discount: 28 },
  { name: "Saucony", id: 9, price: 13, discount: 17 },
  { name: "Vans", id: 10, price: 16, discount: 35 },
];

const App = () => {
  const [count, setCount] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const onDeleteHandler = () => {
    const filterDataList = count.filter((productItem) => {
      return count[0].id !== productItem.id;
    });
    setCount(filterDataList);
  };
  // const onCartItemHandler = () => {
  //   const filterCartItem = count.filter((productItem) => {
  //     console.log(productItem);
  //     return count[0].id == productItem.id;
  //   });
  //   setCount(filterCartItem);
  // };

  return (
    <BrowserRouter>
      <MyStore.Provider
        value={{
          count: count,
          setCount,
          selectedProduct: selectedProduct,
          setSelectedProduct,
          productList: productList,
          onDeleteHandler,
          // onCartItemHandler,
        }}
      >
        <div className="container-fluid mx-auto" style={{ maxWidth: "1280px" }}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomeBody
                  productList={productList}
                  setCount={setCount}
                  count={count}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                />
              }
            />
            <Route path="/cart" element={<Cart count={count} />} />
            <Route path="/cart/:cartId" element={<CartDetail />} />
            <Route path="*" element={<h1></h1>} />
          </Routes>
        </div>
      </MyStore.Provider>
    </BrowserRouter>
  );
};

export default App;
