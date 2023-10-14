import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const SnackbarCustom=(props)=> {

  const handleClose = () => {
    props.setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert sx={{fontFamily: 'Cairo'}} onClose={handleClose} severity={props.statue}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}