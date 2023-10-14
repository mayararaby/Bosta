import React, { useState } from "react"
import './trackingSearch.css'
import HeaderSearch from "../../assetes/headerSearch"
import withLocalize from '../../hoc/withLocalize'
import { useSelector } from 'react-redux';

const TrackingSearch = ({ t }) => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const handelTrackingNumber = (e) => (setTrackingNumber(e.target.value.trim()))
  const selectedLanguage = useSelector(state => state.local)

  return (
    <>
      <div className="mainTrackingContainer">
        <div className="trackingHorizontalMargin">
          {t('trackingNo')}
        </div>
        <div className="inputContainer">
          <input onChange={handelTrackingNumber} value={trackingNumber} className={`${selectedLanguage==='ar'?'trackingSearchInputRight':'trackingSearchInputLeft'} trackingHorizontalMargin trackingSearchInput`} type="text" placeholder={t('trackingNo')} />
          <HeaderSearch t={t} selectedLanguage={selectedLanguage} trackingNumber={trackingNumber} />
        </div>
      </div>
    </>
  )
}
export default withLocalize(TrackingSearch)