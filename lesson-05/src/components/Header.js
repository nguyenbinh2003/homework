import React from "react";
import { BiCart } from "react-icons/bi";

const Header = ({ count }) => {
  return (
    <>
      <nav
        className="navbar shadow p-3"
        style={{ background: " #e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">SHOP APP</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Nhập tên sản phẩm ..."
              aria-label="Search"
            />
            <h4 style={{ paddingRight: "5px" }}>
              <BiCart size={32} />
            </h4>
            <h4 className="text-danger fs-3" style={{ paddingRight: "5px" }}>
              ({count.length})
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
