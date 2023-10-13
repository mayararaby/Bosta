import React, { useEffect, useState } from 'react';
import { steps, stepsIcons, packageStatus, StatusColorsCode } from '../../constants/index';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIcon } from '@mui/material';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { ColorlibStepIcon, ColorlibConnector } from './customStyle';

export default function StepperComponent({ TransitEvents, t }) {
  const [activeStepperIndex, setActiveStepperIndex] = useState(1);

  useEffect(() => {
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
    findIndexRecursive(TransitEvents, lastIndex);
    console.log({ activeStepperIndex });
  }, [TransitEvents]);

  return (
    <>
      <Box className="stepsContainer">
        <Stepper activeStep={activeStepperIndex} alternativeLabel connector={<ColorlibConnector activeStepperIndex={activeStepperIndex} />
        }>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props)=>(ColorlibStepIcon(props,activeStepperIndex))}
                activeStepperIndex={activeStepperIndex} 
              >
                {t(packageStatus[label])}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}