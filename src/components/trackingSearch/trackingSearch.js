import React, { useState } from "react"
import './trackingSearch.css'
import  HeaderSearch  from "../../assetes/headerSearch"

export const TrackingSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const handelTrackingNumber = (e) => (setTrackingNumber(e.target.value.trim()))

  return (
    <>
      <div className="mainTrackingContainer">
        <div className="trackingHorizontalMargin">
          تتبع شحنتك
        </div>
        <div className="inputContainer">
          <input onChange={handelTrackingNumber} value={trackingNumber} className="trackingSearchInput trackingHorizontalMargin" type="text" placeholder="رقم التتبع" />
          <HeaderSearch trackingNumber={trackingNumber} />
        </div>
      </div>
    </>
  )
}