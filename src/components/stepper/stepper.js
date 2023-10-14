import React, { useEffect, useState } from 'react';
import { steps, packageStatus } from '../../constants/index';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ColorlibStepIcon, ColorlibConnector } from './customStyle';

export default function StepperComponent({ TransitEvents, t }) {
  const [activeStepperIndex, setActiveStepperIndex] = useState(1);
  const [lastAction, setLastAction] = useState("");

  useEffect(() => {
    // Recursive function to find the step index in const steps from TransitEvents based on the last action
    const findIndexRecursive = (events, currentIndex) => {
      if (currentIndex < 0) return -1;

      const currentEvent = events[currentIndex];
      const stepIndex = steps.findIndex((step) => step === currentEvent.state);
      if (stepIndex !== -1) {
        setActiveStepperIndex(stepIndex);
        return stepIndex;
      }
      return findIndexRecursive(events, currentIndex - 1);
    };
    const lastIndex = TransitEvents.length - 1;
    setLastAction(TransitEvents[lastIndex])
    findIndexRecursive(TransitEvents, lastIndex);


  }, [TransitEvents]);

  return (
    <>
      <Box className="stepsContainer">
        <Stepper activeStep={activeStepperIndex} alternativeLabel connector={<ColorlibConnector lastAction={lastAction} activeStepperIndex={activeStepperIndex} />
        }>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                
                StepIconComponent={(props) => (ColorlibStepIcon(props, activeStepperIndex, lastAction))}
                activeStepperIndex={activeStepperIndex}
              >
                <span className='stepperLabel'>

                {t(packageStatus[label])}
                </span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}