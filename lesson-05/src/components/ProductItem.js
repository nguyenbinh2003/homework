import React from "react";

const ProductItem = ({ index = 1, onClick, name, price, discount }) => {
  return (
    <>
      <div className="d-inline-flex flex-column  rounded-md py-4 px-2">
        <div className="card text-bg-light mb-3" style={{ width: "18rem" }}>
          <img
            src={`https://source.unsplash.com/random/?Cryptocurrency& ${index}`}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}$</p>
            <p class="card-text text-danger">{discount}% off</p>
            <button
              type="button"
              href="#"
              className="btn btn-secondary"
              onClick={onClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
