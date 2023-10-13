import React, { useState } from 'react'
import Logo from '../../assetes/bostaLogo.png'
import './header.css'
import { LeftArrow } from '../../assetes/headerArrows'
import { TrackingSearch } from '../trackingSearch/trackingSearch'
// import { useSelector } from 'react-redux'

export const Header = () => {
  const [showComponent, setShowComponent] = useState(false)
  const showTrackingComponent = () => setShowComponent(!showComponent)
  // const packageInfo = useSelector(state => state.packageInfo)


  return (
    <>

      <div className='headerContainer'>


        <div className='logo'>
          <img className='imgLogo' src={Logo} alt='logo' />
        </div>


        <div className='middleSection headerTxtSection'>
          <label>
            الرئيسية
          </label>
          <label>
            الأسعار
          </label>
          <label>
            كلم المبيعات
          </label>
        </div>

        <div className='lastSection headerTxtSection'>
          <label className={`trackingSection ${showComponent&&'borderShadow'}`}>
            <span className='redTextColor tracking-text' onClick={showTrackingComponent} >
              تتبع شحنتك
            </span>
            <LeftArrow />
            {
              showComponent && <TrackingSearch />
            }
          </label>
          <label>تسجيل الدخول</label>
          <label className='redTextColor'>ENG</label>
        </div>

      </div>
      <div className='line'></div>
    </>
  )
}
