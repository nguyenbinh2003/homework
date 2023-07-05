import React from "react";

const ProductItem = ({ index = 1, onClick, productName, price, discount }) => {
  return (
    <>
      <div className="d-inline-flex flex-column  rounded-md py-4 px-2">
        <div className="card text-bg-light" style={{ width: "18rem" }}>
          <img
            src={`https://source.unsplash.com/random/?Cryptocurrency& ${index}`}
            className="card-img-top img-thumbnail"
            style={{ width: "auto", height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">{price}$</p>
            <p class="card-text text-danger">{discount}% off</p>
            <button type="button" className="btn btn-danger" onClick={onClick}>
              Delete cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
