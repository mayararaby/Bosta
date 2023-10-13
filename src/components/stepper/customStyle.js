import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { steps, stepsIcons, StatusColorsCode ,rejectionInterfaces} from '../../constants/index';

export const ColorlibConnector = styled(StepConnector)(({ theme ,activeStepperIndex,lastAction }) => {
  const {state} = lastAction
  
  return {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: rejectionInterfaces.includes(state)?StatusColorsCode[state]:StatusColorsCode[steps[activeStepperIndex]]
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: rejectionInterfaces.includes(state)?StatusColorsCode[state]:StatusColorsCode[steps[activeStepperIndex]]
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#dbd8d8',
      borderRadius: 1,
    },
  }
});

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => {
  const {lastAction,activeStepperIndex}= ownerState
  const {state} = lastAction
  return {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: rejectionInterfaces.includes(state)?StatusColorsCode[state]:StatusColorsCode[steps[activeStepperIndex]]
    }),
    ...(ownerState.completed && {
      backgroundColor: rejectionInterfaces.includes(state)?StatusColorsCode[state]:StatusColorsCode[steps[activeStepperIndex]],
    }),
  }
});


export const ColorlibStepIcon = (props,activeStepperIndex, lastAction) => {
  const { active, completed, className } = props;
  const iconsObject =stepsIcons[activeStepperIndex]

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active,activeStepperIndex ,lastAction }} className={className}>
      {iconsObject[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};