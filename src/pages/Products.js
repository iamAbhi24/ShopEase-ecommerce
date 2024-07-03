import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Item from "../components/Item/Item";
import UseFetch from "../Hooks/UseFetch";

function Products() {
  // eslint-disable-next-line
  const [data, error, loading] = UseFetch("https://dummyjson.com/products");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NavBar />
      {data.products.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Products;
