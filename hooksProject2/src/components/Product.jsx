import React from "react";

const Product = (props) => {
  return (
    <div>
        <hr />
      <p>{props.pId}</p>
      <p>{props.pName}</p>
      <p>{props.pPrice}</p>
      <hr />
    </div>
  );
};

export default Product;
