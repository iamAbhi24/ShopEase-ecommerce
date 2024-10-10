import React, { useContext } from "react";
import HorizontalLinearStepper from "../components/Stepper/Stepper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ActivePropsContext from "../Providers/StepperActivePropsProvider";

function Cart() {
    // const [activeStep, setActiveStep] = React.useState(0); 
    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
   const navigate=useNavigate();
   const {activeStep,handleNext}=useContext(ActivePropsContext);
  return (
    <div>
      <HorizontalLinearStepper activeStep={activeStep}/>
      <h1>Welcome to cart</h1>
      <Button variant="contained" onClick={()=>{handleNext();navigate('/shopease/checkout/address')}}>Contained</Button>
    </div>
  )
}

export default Cart
