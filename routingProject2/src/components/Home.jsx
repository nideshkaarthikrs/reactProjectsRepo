import { useNavigate } from 'react-router-dom'

export const Home = () => {

  let navigate = useNavigate()
  
  function handleOrderPlacement(event) {
    navigate('order-summary');
  }

  return (
    <div>
        <h2>Home Page</h2>
        <button className='btn btn-success' onClick={handleOrderPlacement} >Place Order</button>
    </div>
  )
}
