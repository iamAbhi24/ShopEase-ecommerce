import React, { useState } from "react";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WishlistContext from "../../Providers/WishlistProvider";
import { Alert, Snackbar } from "@mui/material";

function Item({ item, itemId }) {
  // navigate has been crated  to navigate to Itemdetails page
  const navigate = useNavigate();
  const handleNavigate = (itemId) => {
    navigate(`/products/${itemId}`);
  };

  // this href will refer h2 element
  const href = useRef(null);

  //  this function will change the color of text of h2 element on hover to the Item
  const hoverIn = () => {
    href.current.style.color = "#0000FF";
  };

  //  this function will change the color of text of h2 element on mouse leave from the Item
  const hoverOut = () => {
    href.current.style.color = "#111827";
  };

  const { wishlist, dispatch } = useContext(WishlistContext);

  // state to manage the visibility of add and remove wishlist snackbar
  const [wishlistsnackbarOpen, setWishListSnackbarOpen] = useState(false);
  const [removedsnackbarOpen, setRemovedSnackbarOpen] = useState(false);

  const isWishlist = wishlist.includes(itemId);

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", itemId });
      setRemovedSnackbarOpen(true);
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", itemId });
      setWishListSnackbarOpen(true);
    }
  };
  // close hanlers for both snackbar
  const handleWishlistSnackbarOpenClose = () => {
    setWishListSnackbarOpen(false);
  };

  const handleRemovedsnackbarOpenClose = () => {
    setRemovedSnackbarOpen(false);
  };

  return (
    <div
      className="md:py-4 w-full cursor-pointer mt-4 mb-4 border relative "
      onMouseOver={hoverIn}
      onMouseLeave={hoverOut}
      onClick={() => {
        handleNavigate(itemId);
      }}
    >
      <div className="relative h-48  rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-contain object-center w-full h-full block transform transition-transform duration-300 hover:scale-105 "
          src={item.images[0]}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-black-600 text-xs tracking-widest title-font mb-1">
          {item.category.toUpperCase()}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium" ref={href}>
          {item.title}
        </h2>
        <p className="mt-1 font-bold">{item.price}$</p>
      </div>
      <button
        className={`absolute top-2 right-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 transition-transform-colors duration-100 ease-in-out delay-100 ${
          isWishlist ? "bg-red-600 transform scale-110" : " text-gray-500"
        }`}
        onClick={(e) => {
          handleWishlist(e);
        }}
      >
        <svg
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
      </button>
      {/* snackar for adding adding to wishlist */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        open={wishlistsnackbarOpen}
        onClose={handleWishlistSnackbarOpenClose}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor: "#DC143C",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Added to wishlist
        </Alert>
      </Snackbar>
      {/* snackbar for removing from wishlist */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        open={removedsnackbarOpen}
        onClose={handleRemovedsnackbarOpenClose}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor: "#424242",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Removed from wishlist
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Item;
