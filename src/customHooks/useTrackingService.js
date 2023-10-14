import { useEffect, useState } from "react";
import axios from 'axios';
import { trackingServiceUrl } from "../constants";
import { setPackageInfo , setLoading} from "../redux/actions";

export const useTrackingService = ({ initTrackingNumber, dispatch }) => {
  const [trackingNumber, setTrackingNumberSearch] = useState(initTrackingNumber);
  const [trackingResult, setTrackingResult] = useState(true);

  useEffect(() => {
    if (trackingNumber) getPackageInfo();
  }, [trackingNumber]);

  const getPackageInfo = () => {
    setTrackingResult(true);
    dispatch(setLoading(true));

    axios.get(`${trackingServiceUrl}${trackingNumber}`)
      .then(response => {
        dispatch(setPackageInfo(response.data));
        dispatch(setLoading(false));
      })
      .catch(error => {
        console.log(error);
        setTrackingResult(false);
        dispatch(setLoading(false));

      });
  };

  return {
    setTrackingNumberSearch,
    trackingResult
  };
};