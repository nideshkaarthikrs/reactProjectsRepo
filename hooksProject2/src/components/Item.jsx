import React from "react";

function Item(props) {
  return (
    <div>
      <hr />
      <p>{props.id}</p>
      <p>{props.name}</p>
      <hr />
    </div>
  );
}

export default Item;
