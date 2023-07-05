import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";


const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://64a38b89c3b509573b56409d.mockapi.io/cart")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
  return (
    <div className="container-fluid mx-auto" style={{ maxWidth: "1280px" }}>
      <Header />
      <HomeBody data={data} setData={setData} />
    </div>
  );
};

export default App;

