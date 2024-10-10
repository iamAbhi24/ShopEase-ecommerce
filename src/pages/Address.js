import React, { useContext } from 'react'
import HorizontalLinearStepper from '../components/Stepper/Stepper'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ActivePropsContext from "../Providers/StepperActivePropsProvider";


function Address() {
    const navigate=useNavigate();
    const {activeStep,handleNext}=useContext(ActivePropsContext);

  return (
    <div>
      <HorizontalLinearStepper activeStep={activeStep}/>
      <h1>Welcome to address</h1>
      <Button variant="contained" onClick={()=>{handleNext();navigate('/shopease/checkout/payment')}}>Contained</Button>  
    </div>
  )
}

export default Address
