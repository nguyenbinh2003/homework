import React from "react";

const CartItem = ({ index = 1, name, price, discount }) => {
  return (
    <div className="d-inline-flex flex-column gap-2 rounded py-2 px-2">
      <div className="card text-bg-light mb-3" style={{ width: "18rem" }}>
        <img
          src={`https://source.unsplash.com/random/?Cryptocurrency& ${index}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}$</p>
          <p class="card-text text-danger">{discount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
