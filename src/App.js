import React, { useState, useEffect } from "react";
import { getProductsApi }from "./api";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchProduct, setProductInput] = useState("");
  const [cardResults, setCardResults] = useState([]);

  useEffect(() => {
    if(!products.length) {
        getProductsApi()
          .then(res => setProducts(res.data));
    }
  });

  useEffect(() => {
    // if theres any filter set, use it
    if(searchInput || searchProduct) {
      const newCardResults = products
        .filter(product => (searchProduct === product.type || product?.name?.toLowerCase().includes(searchInput?.toLowerCase())))
        .map((product, idx) => <Card cardResults={product} key={idx}/>);
        setCardResults(newCardResults)
    } else {
      // if there is no filter, use all the products
      setCardResults(
        [...products.map((product, idx) => <Card cardResults={product} key={idx}/>)
      ])
    }
  }, [searchInput, searchProduct, products]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text">Interview Header</h1>
        </div>
      </div>
      <div className="container">
        <form>
          <label>
            Search:
            <input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
        </form>
      </div>
      <label>Choose a product type:</label>
      <select onChange={(e) => setProductInput(e.target.value)}>
        <option value=""></option>
        <option value="RETAIL">Retail</option>
        <option value="CASH">Cash</option>
      </select>
      <div className="container">
        <h1>Results: </h1>
        <div>{cardResults}</div>
      </div>
      <div style={{ marginTop: 30 }} className="footer">
        <div className="container">
          <h1>Interview Footer </h1>
        </div>
        <p>Built with love</p>
      </div>
    </>
  );
}

export default App;
