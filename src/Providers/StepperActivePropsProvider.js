import { createContext, useState } from "react";  


 const ActivePropsContext=createContext();    

 export const StepperActivePropsProvider=({children})=> {
    const [activeStep, setActiveStep] = useState(0); 
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
   return (
     <ActivePropsContext.Provider value={{activeStep,handleNext}}>
         {children}
     </ActivePropsContext.Provider>
   )
 }
 
 
 
export default ActivePropsContext;       