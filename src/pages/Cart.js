import React, { useContext, useEffect, useState } from "react";
import HorizontalLinearStepper from "../components/Stepper/Stepper";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ActivePropsContext from "../Providers/StepperActivePropsProvider";

function Cart() {
  const [cartItems, setCartItems] = useState([]); // to store the items that is getting fetched from localstorage
  const localStorageItems = JSON.parse(localStorage.getItem("products")) || []; // Fetching Item from local storage
  //This useEffect will set the cartItems every time fetching from local stoarge when this component mounts
  useEffect(() => {
    setCartItems(localStorageItems);
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const { activeStep, handleNext } = useContext(ActivePropsContext); // This is required for stepper
  return (
    <div>
      <HorizontalLinearStepper activeStep={activeStep} />
      <div className="sm:w-3/5 w-full border-slate-200 border-t-[1px] border-r-[1px] mt-8 ">
        <div className="sm:w-9/12 w-full">
          {cartItems.map((element) => {
            return <CartDetails item={element} key={element.id} />;
          })}
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          handleNext();
          navigate("/shopease/checkout/address");
        }}
      >
        Contained
      </Button>
    </div>
  );
}

export default Cart;

export function CartDetails({ item }) {
  return (
    <div>
      <div className="card w-full sm:w-3/4 my-2 pl-2 pt-2 pb-6 border border-slate-200 relative  ">
        <CloseIcon
          className="absolute top-1 right-1 cursor-pointer hover:bg-slate-200"
          color="action"
        />
        <div className="w-1/4 h-4/5 border border-black relative">
          <input
            type="checkbox"
            name="checkOutItem"
            id="checkOutItem"
            className="absolute top-1 left-1"
          />
          <img src={item.images[0]} alt="img" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
