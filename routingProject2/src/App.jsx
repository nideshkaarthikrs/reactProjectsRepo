import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import OrderSummary from "./components/OrderSummary";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:uid" element={<UserDetails />} />

        {/* Nested routing */}
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} /> {/* By default this will be displayed when we click on products in navbar */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        {/* Routing for page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
