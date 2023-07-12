import React from "react";
import { useContext } from "react";
import CartItem from "./CartItem";
import MyStore from "../contexts/MyStore";

const Cart = () => {
  const myStore = useContext(MyStore);
  const count = myStore.count;
  return (
    <div
      className="border border-gray-400 rounded-md mb-10"
      style={{ background: "#F5EFE7" }}
    >
      <h2 className="fw-bold fs-4 p-4">Cart</h2>
      <div className="d-flex flex-row align-items-center justify-content-center gap-4 flex-wrap p-8">
        {count.length === 0 ? (
          <h3 className="text-danger">No data</h3>
        ) : (
          count.map((productItem) => {
            return (
              <CartItem
                index={productItem.id}
                name={productItem.name}
                price={productItem.price}
                discount={productItem.discount}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
