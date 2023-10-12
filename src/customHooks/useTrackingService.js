import { useEffect, useState } from "react"
import axios from 'axios';
import { trackingServiceUrl } from "../constants";

export const useTrackingService = (initTrackingNumber)=>{
  const [trackingNumber , setTrackingNumberSearch] = useState(initTrackingNumber)

  useEffect(()=>{
    console.log({trackingNumber})
    if(trackingNumber) getPackageInfo()
  },[ trackingNumber ])

  const getPackageInfo = ()=>{
    axios.get(`${trackingServiceUrl}${trackingNumber}`)
  .then(response => {
    console.log({data:response.data});
  })
  .catch(error => {
    console.log(error);
  });
  } 
  return {
    setTrackingNumberSearch
  }
}