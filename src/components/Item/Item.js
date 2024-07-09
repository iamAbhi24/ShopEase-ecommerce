import React from "react";
import { useRef } from "react";

function Item({ item }) {
  // this href will refer h2 element 
   const href=useRef(null);
  
  //  this function will change the color of text of h2 element on hover to the Item
   const hoverIn=()=>{
    href.current.style.color="#0000FF";
   }

   //  this function will change the color of text of h2 element on mouse leave from the Item
  const hoverOut=()=>{
    href.current.style.color="#111827";
  }

  return (
        <div className="md:py-4 w-full cursor-pointer mt-4 mb-4 border " onMouseOver={hoverIn} onMouseLeave={hoverOut} >
          <a className="block relative h-48  rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform transition-transform duration-300 hover:scale-105 "
              src={item.images[0]}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-black-600 text-xs tracking-widest title-font mb-1">
              {item.category.toUpperCase()}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium" ref={href}>
              {item.title}
            </h2>
            <p className="mt-1 font-bold">{item.price}$</p>
          </div>
        </div>
    
  );
}

export default Item;
