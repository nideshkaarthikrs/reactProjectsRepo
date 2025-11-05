import React from "react";

const Card = (props) => {
    let  { id, title, category,price, description, inStock, poster } = props.productDetails
  return (
    <div className="card mx-auto my-5 rounded-4 shadow text-center" style={{ maxWidth: "350px" }}>
      {/* Product Image */}
      <img
        src={poster}
        className="card-img-top rounded-top-4"
        alt={`${title} Poster`}
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite loop if placeholder also fails
          e.target.src = `https://placehold.co/350x200/cccccc/333333?text=Product+Image`;
        }}
      />
      <div className="card-body p-4">
        {/* Product Category */}
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        {/* Product Title */}
        <h5 className="card-title fs-4 fw-bold mb-3">{title}</h5>
        {/* Product Description */}
        <p className="card-text text-secondary mb-4">{description}</p>
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Product Price */}
          <span className="fs-3 fw-bold text-success">${price}</span>
          {/* In Stock Status */}
          <span
            className={`badge ${
              inStock ? "bg-success" : "bg-danger"
            } rounded-pill px-3 py-2`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        {/* Add to Cart Button */}
        <div className="d-grid">
          <button
            className="btn btn-primary btn-lg rounded-3 shadow-sm"
            disabled={!inStock}
          >
            {inStock ? "Add to Cart" : "Notify Me"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
