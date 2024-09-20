import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./Itemdetails.css";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";function Itemdetails() {
  // Fetching id of individual item
  let { id } = useParams();
  // Getting data from a custom hook useFetch under Hooks folder
  const [items, error, loading] = UseFetch("https://dummyjson.com/products");

  // It will display when error occurs while fetching data
  if (error) return <div>Error: {error}</div>;

  // It will display a loading spinner or message while data is being fetched
  if (loading) return <div>Loading...</div>;

  // If items are successfully fetched, find the items to get the specific product
  const products = items.products.find((item) => {
    return item.id === parseInt(id);
  });

  return (
    <div>
      <NavBar />
      <Details item={products} />
      <Footer />
    </div>
  );
}

export default Itemdetails;

export function Details({ item }) {
  //state to track whether the item is in the wishlist
  const [isWishlist,setIsWishlist] = useState(false);
  
  // state to manage the visibility of add and remove wishlist snackbar
  const[wishlistsnackbarOpen,setWishListSnackbarOpen]=useState(false);
  const[removedsnackbarOpen,setRemovedSnackbarOpen]=useState(false);

  //handle wishlist toggle
  const handleWishlist=()=>{
     if(isWishlist){
      setIsWishlist(false);
      setRemovedSnackbarOpen(true);
     }
     else{
      setIsWishlist(true);
      setWishListSnackbarOpen(true);
     }
  }
  
  // close hanlers for both snackbar
  const handleWishlistSnackbarOpenClose=()=>{
    setWishListSnackbarOpen(false);
  }
  
  const handleRemovedsnackbarOpenClose=()=>{
    setRemovedSnackbarOpen(false);
  }

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-10 sm:py-24 mx-auto sticky" >
          <div
            class="lg:w-4/5 mx-auto flex flex-wrap relative"
            onDoubleClick={handleWishlist}
          >
            <button class="sm:hidden absolute inline-flex right-2 top-24 rounded-full w-14 h-14 bg-gray-200 p-0 border-0  items-center justify-center text-gray-500 ml-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-700 hover:text-indigo-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>

            <button
              className={`sm:hidden absolute inline-flex right-2 top-6 rounded-full w-14 h-14 bg-gray-200 p-0 border-0  items-center justify-center text-gray-500 ml-4 transition-transform-colors duration-100 ease-in-out delay-100 ${
                isWishlist
                  ? "bg-red-600 transform scale-110"
                  : " text-gray-500"
              } }`}
              onClick={handleWishlist}
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
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
              src={item.images}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-10 lg:mt-0 select-none">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {item.brand}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {item.title}
              </h1>
              <p class="leading-relaxed my-2">{item.description}</p>
              <div class="sm:flex sm:justify-between sm:my-20 ">
                <span class="title-font font-bold text-3xl sm:text-2xl text-gray-900">
                  ₹{Math.floor(item.price * 85)}
                </span>
                <div className="mobile-fixed-bottom sm:py-4 sm:flex sm:my-6">
                  <button class="flex mobile-fixed-button text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 sm:rounded">
                    ADD TO CART
                  </button>
                  <button class="flex mobile-fixed-button sm:ml-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 sm:rounded">
                    BUY NOW
                  </button>
                  <button
                    class={`mobile-wish-list-button-hide rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 transition-transform-colors duration-100 ease-in-out delay-100 ${
                      isWishlist
                        ? "bg-red-600 transform scale-110"
                        : " text-gray-500"
                    } `}
                    onClick={handleWishlist}
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
                  autoHideDuration={3000}
                  open={wishlistsnackbarOpen}
                  onClose={handleWishlistSnackbarOpenClose}
                 >
                  <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    Added to wishlist
                  </Alert>
                </Snackbar>
                {/* snackbar for removing from wishlist */}
                 <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  autoHideDuration={3000}
                  open={removedsnackbarOpen}
                  onClose={handleRemovedsnackbarOpenClose}
                 >
                  <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    Removed from wishlist
                  </Alert>
                </Snackbar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
