import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Item from '../components/Item/Item'
import UseFetch from '../Hooks/UseFetch'

function Products() {
  const [data, error, loading]=UseFetch("https://dummyjson.com/products");
     
  return (
    <div>
      <NavBar/>
      <Item/>
      
    </div>
  )
}

export default Products

