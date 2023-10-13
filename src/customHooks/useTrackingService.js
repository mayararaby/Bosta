import { useEffect, useState } from "react"
import axios from 'axios';
import { trackingServiceUrl } from "../constants";
import { setPackageInfo } from "../redux/actions";
import { useDispatch } from "react-redux";
export const useTrackingService = (initTrackingNumber) => {
  const [trackingNumber, setTrackingNumberSearch] = useState(initTrackingNumber)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (trackingNumber) getPackageInfo()
  }, [trackingNumber])

  const getPackageInfo = () => {
    axios.get(`${trackingServiceUrl}${trackingNumber}`)
      .then(response => dispatch(setPackageInfo(response.data)))
      .catch(error => console.log(error));
  }
  return {
    setTrackingNumberSearch
  }
}