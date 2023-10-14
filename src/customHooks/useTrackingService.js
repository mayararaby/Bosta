import { useEffect, useState } from "react";
import axios from 'axios';
import { trackingServiceUrl } from "../constants";
import { setPackageInfo, setLoading, setTrackingResult } from "../redux/actions";
import { useNavigate } from "react-router-dom";
//Custom hook to handle calling tracking service
export const useTrackingService = ({ initTrackingNumber, dispatch, setShowComponent }) => {
  const [trackingNumber, setTrackingNumberSearch] = useState(initTrackingNumber);
  const navigate = useNavigate();

  useEffect(() => {
    if (trackingNumber) {
      // If trackingNumber is present, fetch package information
      getPackageInfo();
    }
  }, [trackingNumber]);

  const getPackageInfo = () => {
    dispatch(setTrackingResult(true));
    dispatch(setLoading(true));
    
    // Make GET request to the tracking service API
    axios.get(`${trackingServiceUrl}${trackingNumber}`)
      .then(response => {
        // Dispatch action to store package information
        dispatch(setPackageInfo(response.data));
        dispatch(setLoading(false));
        
        // Navigate to home route and hide the tracking component
        navigate('/');
        setShowComponent(false);
      })
      .catch(error => {
        // Handle error by logging and updating tracking result
        console.log(error);
        dispatch(setTrackingResult(false));
        dispatch(setLoading(false));
        
        // Hide the tracking component
        setShowComponent(false);
      });
  };

  return {
    setTrackingNumberSearch,
  };
};