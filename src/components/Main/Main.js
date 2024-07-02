import React from "react";
import welcomeimg from "../../assets/welcome-img/welcomeimg.jpg";
import groceroyimg from "../../assets/product-category-img/groceries.jpg";
import mensimg from "../../assets/product-category-img/men's fashion.jpg";
import mobileaccimg from "../../assets/product-category-img/mobile-accessories.jpg";
import smartphoneimg from "../../assets/product-category-img/smartphones.jpg";
import sportaccimg from "../../assets/product-category-img/sports-accessories.jpg";
import womensimg from "../../assets/product-category-img/Women's Fashion.jpg";
import furnitureimg from "../../assets/feature-service-img/furniture.jpg";
import homedecorationimg from "../../assets/feature-service-img/home-decoration.jpg";
import kitchenaccimg from "../../assets/feature-service-img/kitchen-accessories.jpg";
import { NavLink } from "react-router-dom";


function Main() {
  return (
    <div>
      <section className="welcome-section flex justify-center mt-10 mb-4 mx-2">
        <div className="welcome-content w-60 sm:w-96">
          <h6 className="text-xs text-slate-500">Welcome to</h6>
          <h1>ShopEase</h1>
          <p className="text-[0.6rem] mr-3 sm:text-sm">
            Welcome to ShopEase, your ultimate destination for all things
            shopping! Explore our wide range of products tailored to meet all
            your needs. Shop with ease and enjoy exclusive offers only available
            here.
          </p>
          <button className="bg-blue-500 text-sm p-1 border rounded cursor-pointer my-2 hover:bg-blue-300">
            <NavLink to="/products">Shop Now!</NavLink>
          </button>
        </div>

        <img
          src={welcomeimg}
          alt="welcome-img"
          className="w-28 h-36 sm:w-72 sm:h-60"
        />
      </section>
      <section className="product-category grid grid-cols-2 gap-4  bg-gray-100 p-8  sm:grid-cols-3 lg:grid-cols-6 cursor-pointer sm:gap-2 mx-4 sm:mt-32">
        <div className="flex flex-col items-center border p-2 border-black sm:w-40 ">
          <img
            src={womensimg}
            alt="womens-fashion-img"
            className="w-24 h-24 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
          />
          <h3 className="text-sm font-bold mt-2">Women's Fashion</h3>
        </div>
        <div className="flex flex-col items-center border p-2 border-black sm:w-40 ">
          <img
            src={mensimg}
            alt="mens-fashion-img"
            className="w-24 h-24 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
          />
          <h3 className="text-sm font-bold mt-2">Men's Fashion</h3>
        </div>
        <div className="flex flex-col items-center border p-2 border-black sm:w-40 ">
          <img
            src={mobileaccimg}
            alt="Mobile-accessories-img"
            className="w-24 h-24 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
          />
          <h3 className="text-sm font-bold mt-2">Mobile accessories</h3>
        </div>
        <div className="flex flex-col items-center border p-2 border-black sm:w-40 ">
          <img
            src={sportaccimg}
            alt="Sports-accessories-img"
            className="w-24 h-24 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
          />
          <h3 className="text-sm font-bold mt-2">Sports accessories</h3>
        </div>
        <div className="flex flex-col items-center border p-2 border-black sm:w-40 ">
          <img
            src={smartphoneimg}
            alt="smartphone-img"
            className="w-24 h-24 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
          />
          <h3 className="text-sm font-bold mt-2">Smartphone</h3>
        </div>
        <div className="flex flex-col items-center border p-2 border-black sm:w-40">
          <img
            src={groceroyimg}
            alt="Groceroy-img"
            className="w-24 h-24 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
          />
          <h3 className="text-sm font-bold mt-2">Groceroy</h3>
        </div>
      </section>

      <section className="feature-service sm:mt-32 ">
        <h2 className="font-bold text-sm sm:text-lg lg:text-xl mb-4">
          Feature Service
        </h2>
        <div className="feature-products grid grid-cols-3 bg-gray-100 p-4 mx-4 content-center mb-6  ">
          <div className="flex flex-col items-center border p-2 border-black sm:w-40 cursor-pointer sm:ml-20">
            <img
              src={furnitureimg}
              alt="furniture-img"
              className="w-20 h-20 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
            />
            <h3 className="text-sm font-bold mt-2">Furniture</h3>
          </div>
          <div className="flex flex-col items-center border p-2 border-black sm:w-40 cursor-pointer sm:ml-20">
            <img
              src={homedecorationimg}
              alt="homedecoration-img"
              className="w-20 h-20 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
            />
            <h3 className="text-sm font-bold mt-2">Home Decoration</h3>
          </div>
          <div className="flex flex-col items-center border p-2 border-black sm:w-40 cursor-pointer sm:ml-20">
            <img
              src={kitchenaccimg}
              alt="kitchenaccessories-img"
              className="w-20 h-20 object-cover transform transition-transform duration-300 hover:scale-105 sm:w-40 sm:h-40"
            />
            <h3 className="text-sm font-bold mt-2">Kitchen accessories</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
