import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["BAG", "ADDRESS", "PAYMENT"];

export default function HorizontalLinearStepper({activeStep}) {
 

  return (
    <Box className="w-full sm:w-2/6 mx-auto mt-4">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
        //   const stepProps = {};
        //   const labelProps = {};
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
     {/* : ( */}
        {/* <React.Fragment> */}
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}> */} 
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button> */}
            {/* <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button> */}
          {/* </Box> */}
        {/* </React.Fragment> */}
      {/* ) */}
    </Box>
  );
}
