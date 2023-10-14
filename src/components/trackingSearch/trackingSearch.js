import React, { useEffect, useState } from "react"
import './trackingSearch.css'
import HeaderSearch from "../../assetes/headerSearch"
import withLocalize from '../../hoc/withLocalize'
import { useSelector } from 'react-redux';
import { useTrackingService } from "../../customHooks/useTrackingService";
import withDispatch from "../../hoc/withDispatch";
import { SnackbarCustom } from "../snackbar/snackbar";

const TrackingSearch = ({ t, dispatch }) => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [open, setOpen] = useState(false);

  const { setTrackingNumberSearch, trackingResult } = useTrackingService({ initTrackingNumber: trackingNumber, dispatch });
  const handelTrackingNumber = (e) => (setTrackingNumber(e.target.value.trim()))
  const selectedLanguage = useSelector(state => state.local)
  
  useEffect(() => {
    setOpen(!trackingResult);
  }, [trackingResult]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTrackingNumberSearch(trackingNumber);
    }
  };

  return (
    <>
      {!trackingResult && (
        <SnackbarCustom statue='error' message={t('wrongTrackNo')} open={open} setOpen={setOpen} />
      )}
      <div className={`${selectedLanguage === 'ar' ? 'mainTrackingContainerRight' : 'mainTrackingContainerLeft'} mainTrackingContainer`}>
        <div className="trackingHorizontalMargin">
          {t('trackingNo')}
        </div>
        <div className="inputContainer">
          <input onKeyPress={handleKeyPress} onChange={handelTrackingNumber} value={trackingNumber} className={`${selectedLanguage === 'ar' ? 'trackingSearchInputRight' : 'trackingSearchInputLeft'} trackingHorizontalMargin trackingSearchInput`} type="text" placeholder={t('trackingNo')} />
          <HeaderSearch t={t} selectedLanguage={selectedLanguage} trackingNumber={trackingNumber} />
        </div>
      </div>
    </>
  )
}
export default withLocalize(withDispatch(TrackingSearch))