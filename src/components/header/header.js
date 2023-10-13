import React, { useState } from 'react'
import Logo from '../../assetes/bostaLogo.png'
import './header.css'
import { LeftArrow } from '../../assetes/headerArrows'
import TrackingSearch from '../trackingSearch/trackingSearch'
import LanguageMenu from '../languageMenu/languageMenu'
import withLocalize from '../../hoc/withLocalize'
const Header = ({t}) => {
  const [showComponent, setShowComponent] = useState(false)
  const showTrackingComponent = () => setShowComponent(!showComponent)


  return (
    <>

      <div className='headerContainer'>


        <div className='logo'>
          <img className='imgLogo' src={Logo} alt='logo' />
        </div>


        <div className='middleSection headerTxtSection'>
          <label>
            {t('home')}
          </label>
          <label>
            {t('prices')}
          </label>
          <label>
            {t('contactUs')}
          </label>
        </div>

        <div className='lastSection headerTxtSection'>
          <label className={`trackingSection ${showComponent&&'borderShadow'}`}>
            <span className='redTextColor tracking-text' onClick={showTrackingComponent} >
              {t('trackShipment')}
            </span>
            <LeftArrow />
            {
              showComponent && <TrackingSearch />
            }
          </label>
          <label>{t('login')}</label>
          <LanguageMenu />
        </div>

      </div>
      <div className='line'></div>
    </>
  )
}

export default withLocalize(Header)