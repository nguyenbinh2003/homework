import React from "react";
import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import MyStore from "../contexts/MyStore";
import { Link } from "react-router-dom";

const Header = () => {
  const myStore = useContext(MyStore);
  return (
    <>
      <nav
        className="navbar shadow p-3 rounded"
        style={{ background: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <strong>SHOP APP</strong>
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Nhập tên sản phẩm ..."
              aria-label="Search"
            />
            <Link to="/cart" className="text-dark">
              <h4 style={{ paddingRight: "5px" }}>
                <BiCart size={32} />
              </h4>
            </Link>
            <h4 className="text-danger fs-3" style={{ paddingRight: "5px" }}>
              ({myStore.count.length})
            </h4>
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
