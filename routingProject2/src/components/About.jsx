import { useNavigate } from "react-router-dom";

export const About = () => {
  let navigate = useNavigate()
  
  function handleOrderPlacement(event) {
    navigate('/order-summary');
  }
  return (
    <div>
      <h2>About us page</h2>
      <button className="btn btn-success" onClick={handleOrderPlacement}>
        Place Order
      </button>
    </div>
  );
};
