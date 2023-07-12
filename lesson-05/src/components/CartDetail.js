import React from "react";
import { useParams } from "react-router-dom";

const CartDetail = () => {
  const param = useParams();
  console.log(param);
  return <div>CartDetail</div>;
};

export default CartDetail;
