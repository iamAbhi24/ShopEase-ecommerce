import React, { useContext } from 'react'
import HorizontalLinearStepper from '../components/Stepper/Stepper'
import ActivePropsContext from '../Providers/StepperActivePropsProvider';

function Payment() {
  const {activeStep,}=useContext(ActivePropsContext);
  return (
    <div>
      <HorizontalLinearStepper activeStep={activeStep}/>
      <h1>Welcome to Payment</h1>
     {/* {console.log("hi")}  */}
    </div>
  )
}
export default Payment;
