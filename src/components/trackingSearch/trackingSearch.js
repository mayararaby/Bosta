import React, { useState } from "react"
import './trackingSearch.css'
import { HeaderSearch } from "../../assetes/headerSearch"
import i18n from "../../config/i18n"
import { useTranslation } from 'react-i18next';

export const TrackingSearch = () => {
  const { t } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState("")
  const handelTrackingNumber = (e) => (setTrackingNumber(e.target.value.trim()))

  // const test = () => {
  //   i18n.changeLanguage('en'); // Change the language to English
  //   i18n.changeLanguage('ar'); // Change the language to Arabic
  // }

  return (
    <>
      <div className="mainTrackingContainer">
        <div className="trackingHorizontalMargin">
          تتبع شحنتك
        </div>
        {/* <button onClick={test}>
          {
            t('test')
          }
        </button> */}
        <div className="inputContainer">
          <input onChange={handelTrackingNumber} value={trackingNumber} className="trackingSearchInput trackingHorizontalMargin" type="text" placeholder="رقم التتبع" />
          <HeaderSearch trackingNumber={trackingNumber} />
        </div>
      </div>
    </>
  )
}