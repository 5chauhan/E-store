import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <section>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Products</h1>
        <Products />
      </section>
    </div>
  );
};

export default Home;
