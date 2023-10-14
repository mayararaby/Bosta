import React, { useState } from 'react'
import LogoRight from '../../assetes/bostaLogo.png'
import './header.css'
import LogoLeft from '../../assetes/enlogo.png'
import { LeftArrow, RightArrow } from '../../assetes/headerArrows'
import TrackingSearch from '../trackingSearch/trackingSearch'
import LanguageMenu from '../languageMenu/languageMenu'
import withLocalize from '../../hoc/withLocalize'
import { useSelector } from 'react-redux'
const Header = ({ t }) => {
  const [showComponent, setShowComponent] = useState(false)
  const showTrackingComponent = () => setShowComponent(!showComponent)
  const selectedLanguage = useSelector(state => state.local)


  return (
    <>

      <div className='headerContainer' style={{ direction: `${selectedLanguage === 'en' ? 'ltr' : 'rtl'}` }}>


        <div className='logo'>
          {selectedLanguage === 'ar' && <img className='imgLogo' src={LogoRight} alt='logo' />}
          {selectedLanguage === 'en' && <img className='imgLogo' src={LogoLeft} alt='logo' />}

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
          <label className={`trackingSection ${showComponent && 'borderShadow'}`}>
            <span className='redTextColor tracking-text' onClick={showTrackingComponent} >
              {t('trackShipment')}
            </span>
            {selectedLanguage === 'ar' && <LeftArrow />}
            {selectedLanguage === 'en' && <RightArrow />}

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