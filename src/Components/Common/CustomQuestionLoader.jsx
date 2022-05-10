import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import "./CustomQuestionLoader.scss";
import MultipleChoice from "../Questions/MultipleChoice";
import SliderQuestion from "../Questions/SliderQuestion";

function CustomQuestionLoader({
    data
}) {
    const [activeStep, setActiveStep] = React.useState(0);


    useEffect(()=>{
        loadDynamicComponent(activeStep);
    }, [])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const loadDynamicComponent = (activeStep) => {
        switch(activeStep){
            case 0:
                return <MultipleChoice />
            case 1:
                return <SliderQuestion />
        }
    }
    return (
        <Container maxWidth="lg" className="question-loader-container">
            <div className="question-loader-data">                
                {
                    loadDynamicComponent(activeStep)
                }
            </div>
            <div className="question-loader-footer">
                {/* <Button variant="contained" size="medium">
                  Previous
              </Button>
              <Button variant="contained" size="medium">
                  Next
              </Button> */}
                <MobileStepper
                    variant="progress"
                    steps={6}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                    nextButton={
                        <Button size="medium" onClick={handleNext} disabled={activeStep === 5}>
                            Next
                        </Button>
                    }
                    backButton={
                        <Button size="medium" onClick={handleBack} disabled={activeStep === 0}>
                            Back
                        </Button>
                    }
                />
            </div>
        </Container>
    );
}

export default CustomQuestionLoader;
