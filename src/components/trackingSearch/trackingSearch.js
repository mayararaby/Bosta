import React from "react"
import './trackingSearch.css'
import { HeaderSearch } from "../../assetes/headerSearch"
export const TrackingSearch = () => {
  return (
    <>
      <div className="mainTrackingContainer">
        <div className="trackingHorizontalMargin">
          تتبع شحنتك
        </div>
        <div className="inputContainer">
          <input className="trackingSearchInput trackingHorizontalMargin" type="text" placeholder="رقم التتبع" />
          <HeaderSearch />
        </div>
      </div>
    </>
  )
}