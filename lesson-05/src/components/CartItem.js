import React from "react";
import { useContext } from "react";
import MyStore from "../contexts/MyStore";
import { useNavigate, useParams } from "react-router-dom";

const CartItem = ({ index = 1, name, price, discount }) => {
  const { onDeleteHandler, onCartItemHandler, count } = useContext(MyStore);

  const navigate = useNavigate();

  return (
    <div className="d-inline-flex flex-column gap-2 rounded py-2 px-2">
      <div className="card text-bg-light mb-3" style={{ width: "18rem" }}>
        <img
          src={`https://source.unsplash.com/random/?Cryptocurrency& ${index}`}
          className="card-img-top"
          style={{ height: "200px", cursor: "pointer" }}
          onClick={() => navigate("/cart/1")}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}$</p>
          <p className="card-text text-danger">{discount}% off</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDeleteHandler}
          >
            Delete cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
