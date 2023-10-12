import React from 'react'
import Logo from '../../assetes/bostaLogo.png'
import './header.css'
import { LeftArrow } from '../../assetes/headerArrows'
export const Header = () => {
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
          <label className='trackingSection'>
            <span className='redTextColor tracking-text'>
              تتبع شحنتك</span>
            <LeftArrow />
          </label>
          <label>تسجيل الدخول</label>
          <label className='redTextColor'>ENG</label>
        </div>

      </div>
      <div className='line'></div>
    </>
  )
}
