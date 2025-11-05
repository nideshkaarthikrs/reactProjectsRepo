import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  let navigate = useNavigate();

  function handleGoToHome(event) {
    navigate("/");
  }

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <>
      <h1>Order Confirmed!!!</h1>
      <br />
      <button className="btn btn-info" onClick={handleGoToHome}>
        Go to home
      </button>
      <button className="btn btn-warning" onClick={handleBackButton}>
        Go Back to the previous page
      </button>
      <button
        className="btn btn-danger"
        onClick={() => navigate(-1, { replace: true })}
      >
        Go back (replace:true)
      </button>
    </>
  );
};

export default OrderSummary;
