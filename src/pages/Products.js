import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Items from "../components/Items/Items";


function Products() {
  const api="https://dummyjson.com/products";
  return (
    <div>
      <NavBar />
      <Items api={api}/>
      <Footer />
    </div>
  );
}

export default Products;
