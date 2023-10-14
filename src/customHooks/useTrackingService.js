import { useEffect, useState } from "react";
import axios from 'axios';
import { trackingServiceUrl } from "../constants";
import { setPackageInfo, setLoading, setTrackingResult } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export const useTrackingService = ({ initTrackingNumber, dispatch,setShowComponent }) => {
  const [trackingNumber, setTrackingNumberSearch] = useState(initTrackingNumber);
  const navigate = useNavigate();


  useEffect(() => {
    if (trackingNumber) getPackageInfo();
  }, [trackingNumber]);

  const getPackageInfo = () => {
    dispatch(setTrackingResult(true))
    dispatch(setLoading(true));
    axios.get(`${trackingServiceUrl}${trackingNumber}`)
      .then(response => {
        dispatch(setPackageInfo(response.data));
        dispatch(setLoading(false));
        navigate('/');
        setShowComponent(false)
      })
      .catch(error => {
        console.log(error);
        dispatch(setTrackingResult(false));
        dispatch(setLoading(false));
        setShowComponent(false)

      });
  };

  return {
    setTrackingNumberSearch,
  };
};