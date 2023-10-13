import React, { useState } from "react"
import './trackingSearch.css'
import  HeaderSearch  from "../../assetes/headerSearch"
import withLocalize from '../../hoc/withLocalize'
const TrackingSearch = ({t}) => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const handelTrackingNumber = (e) => (setTrackingNumber(e.target.value.trim()))

  return (
    <>
      <div className="mainTrackingContainer">
        <div className="trackingHorizontalMargin">
         {t('trackingNo')}
        </div>
        <div className="inputContainer">
          <input onChange={handelTrackingNumber} value={trackingNumber} className="trackingSearchInput trackingHorizontalMargin" type="text" placeholder={t('trackingNo')} />
          <HeaderSearch trackingNumber={trackingNumber} />
        </div>
      </div>
    </>
  )
}
export default withLocalize(TrackingSearch)