import React, { useState } from "react"
import './trackingSearch.css'
import HeaderSearch from "../../assetes/headerSearch"
import withLocalize from '../../hoc/withLocalize'
import { useSelector } from 'react-redux';
import { useTrackingService } from "../../customHooks/useTrackingService";
import withDispatch from "../../hoc/withDispatch";

const TrackingSearch = ({ t, dispatch , setShowComponent }) => {
  const [trackingNumber, setTrackingNumber] = useState("")

  const { setTrackingNumberSearch } = useTrackingService({ initTrackingNumber: trackingNumber, dispatch,setShowComponent });
  const handelTrackingNumber = (e) => (setTrackingNumber(e.target.value.trim()))
  const selectedLanguage = useSelector(state => state.local)
  
  //When user press enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') setTrackingNumberSearch(trackingNumber);
  };

  return (
    <>
      <div className={`${selectedLanguage === 'ar' ? 'mainTrackingContainerRight' : 'mainTrackingContainerLeft'} mainTrackingContainer`}>
        <div className="trackingHorizontalMargin">
          {t('trackingNo')}
        </div>
        <div className="inputContainer">
          <input onKeyPress={handleKeyPress} onChange={handelTrackingNumber} value={trackingNumber} className={`${selectedLanguage === 'ar' ? 'trackingSearchInputRight' : 'trackingSearchInputLeft'} trackingHorizontalMargin trackingSearchInput`} type="text" placeholder={t('trackingNo')} />
          <HeaderSearch setShowComponent={setShowComponent} t={t} selectedLanguage={selectedLanguage} trackingNumber={trackingNumber} />
        </div>
      </div>
    </>
  )
}
export default withLocalize(withDispatch(TrackingSearch))