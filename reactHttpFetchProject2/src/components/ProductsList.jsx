import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import "./ProductsList.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [product, setProduct] = useState({
    id: "",
    title: "",
    category: "",
    price: 0,
    description: "",
    inStock: "",
    poster: "https://picsum.photos/200",
  });

  async function getAllProducts() {
    try {
      let response = await fetch("http://localhost:3000/Products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setErrMsg(error.toString());
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [products]); // here we are giving products as dependency because we want the visible screen to get updated whenever a product gets added

  // we've kept the name attribute of the form elements same as the keys of the data in the product object for a reason... i.e. we need not write separate event handler functions for each form field... as shown below. But note that we are using square brackets for the key [event.target.value]
  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value, // everything except id gets handled here
    });
  }

  function handleSaveButtonClick() {

    // generating a random id
    const idValue = Math.floor(Math.random() * 1000);

    const newProduct = { ...product, id: idValue };
    // we are not using setProduct to set the id directly because , react takes some time to update the state, but due to the asynchronous nature of fetch() it gets executed before the state gets updated and eventually the product won't have any id
    // that's why we are storing the required product in a variable and updating it direcly in the post mapping

    // since we want to use send the product data using POST method we use fetch() here , with the second argument
    fetch("http://localhost:3000/Products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    }) // if the promise is resolved then we need to add the product to the products
      .then((response) => response.json())
      .then((data) => {
        alert("Product Added!");
        setProducts([...products, data]); // add new product to state
         // resetting the form
        setProduct({
          id: "",
          title: "",
          category: "",
          price: 0,
          description: "",
          inStock: "",
          poster: "https://picsum.photos/200",
        });
      })
      .catch((err) => setErrMsg(err.toString()));
  }

  return errMsg ? (
    <h2 className="text-center text-danger">{errMsg}</h2>
  ) : (
    <div className="text-center mx-auto">
      <h1
        className=" m-4 p-3 border border-4 border-info rounded rounded-4 "
        style={{ display: "inline-block" }}
      >
        Products List
      </h1>
      <section className="mx-auto text-center">
        {products.map((product) => {
          return <Card key={product.id} productDetails={product} />;
        })}
      </section>
      <section className="addForm">
        <form className="container mt-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              step="0.01"
              min="0"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={product.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <select
              name="inStock"
              id="inStock"
              value={product.inStock}
              onChange={handleChange}
            >
              <option value="true">No</option>
              <option value="false">Yes</option>
            </select>
          </div>

          <button className="btn btn-primary" onClick={handleSaveButtonClick}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProductsList;
